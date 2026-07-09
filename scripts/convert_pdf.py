import os
import re
import sys
import glob
import pdfplumber
import pandas as pd

def parse_pdf(pdf_path):
    print(f"Parsing PDF: {pdf_path}")
    einzelplan_name = ""
    einzelplan_id = ""
    
    with pdfplumber.open(pdf_path) as pdf:
        if len(pdf.pages) == 0:
            return pd.DataFrame()
            
        # 1. Extract Einzelplan ID and Name from the first page
        first_page = pdf.pages[0]
        first_page_text = first_page.extract_text()
        if first_page_text:
            lines = [l.strip() for l in first_page_text.split("\n") if l.strip()]
            for idx, line in enumerate(lines):
                if re.match(r'^Einzelplan\s+(\d+)', line, re.IGNORECASE):
                    einzelplan_id = re.search(r'\d+', line).group(0).zfill(2)
                    for k in range(idx + 1, len(lines)):
                        cand = lines[k].strip()
                        if cand and not re.search(r'\b(200\d|201\d|Seite|Inhalt|Haushaltsplan)\b', cand, re.IGNORECASE):
                            einzelplan_name = cand
                            break
                    break
        
        # If not found on page 0, fallback to filename
        if not einzelplan_id:
            basename = os.path.basename(pdf_path)
            m_epl = re.search(r'\d+', basename)
            if m_epl:
                einzelplan_id = m_epl.group(0).zfill(2)
            else:
                einzelplan_id = "01" # safety fallback
                
        # 2. Scan first 4 pages for Table of Contents (Kapitel Map)
        kapitel_map = {}
        for page_idx in range(min(4, len(pdf.pages))):
            page_text = pdf.pages[page_idx].extract_text()
            if not page_text:
                continue
            for line in page_text.split("\n"):
                line = line.strip()
                # Match 4-digit ID + spaces + name + dots + page
                m = re.match(r'^(\d{4})\s*(.+?)\.+\s*\d+$', line)
                if m:
                    kapitel_map[m.group(1)] = m.group(2).strip()
                    
        print(f"  Plan: {einzelplan_id} ({einzelplan_name}), extracted {len(kapitel_map)} chapters from TOC")
        
        # State machine variables
        current_kapitel = None
        current_kapitel_text = None
        current_ea = None
        current_art = None
        current_titelgruppe = None
        current_tgr_text = None
        
        active_title = None
        in_ignored_section = False
        
        all_titles = []
        
        def save_active_title():
            nonlocal active_title
            if active_title is not None:
                desc = active_title['titel-text'].strip()
                desc = re.sub(r'\s+', ' ', desc)
                active_title['titel-text'] = desc
                all_titles.append(active_title)
                active_title = None

        # Parse every page
        for page_idx in range(len(pdf.pages)):
            page = pdf.pages[page_idx]
            text = page.extract_text()
            if not text:
                continue
            
            # Check if this is a budget page
            lines = [l.strip() for l in text.split("\n") if l.strip()]
            has_table_header = any("Titel" in l for l in lines[:5]) and any("Soll" in l for l in lines[:5])
            if not has_table_header:
                save_active_title()
                # We can still look for chapter headings on non-budget pages if we want,
                # but typically chapters start on budget pages. We keep in_ignored_section = True
                in_ignored_section = True
                continue
                
            # Extract page number from header
            page_num = page_idx + 1
            if lines:
                m_pg = re.match(r'^-\s*(\d+)\s*-$', lines[0])
                if m_pg:
                    page_num = int(m_pg.group(1))
                    
            # Parse page words using X coordinate columns
            words = page.extract_words()
            lines_dict = {}
            for w in words:
                found = False
                for top in lines_dict:
                    if abs(w['top'] - top) < 2.0:
                        lines_dict[top].append(w)
                        found = True
                        break
                if not found:
                    lines_dict[w['top']] = [w]
                    
            sorted_tops = sorted(lines_dict.keys())
            
            for top in sorted_tops:
                line_words = sorted(lines_dict[top], key=lambda w: w['x0'])
                
                col1_words = [w for w in line_words if w['x0'] < 85.0]
                col2_words = [w for w in line_words if 85.0 <= w['x0'] < 400.0]
                col3_words = [w for w in line_words if 400.0 <= w['x0'] < 450.0]
                
                col1 = " ".join([w['text'] for w in col1_words]).strip()
                col2 = " ".join([w['text'] for w in col2_words]).strip()
                col3 = " ".join([w['text'] for w in col3_words]).strip()
                
                if not col1 and not col2 and not col3:
                    continue
                    
                # A. Check for chapter ID in col1 or header (4-digit number starting with einzelplan_id)
                m_chap = re.match(r'^(' + einzelplan_id + r'\d{2})$', col1)
                if m_chap and col2:
                    save_active_title()
                    current_kapitel = m_chap.group(1)
                    current_kapitel_text = kapitel_map.get(current_kapitel, col2)
                    current_titelgruppe = None
                    current_tgr_text = None
                    current_ea = None
                    current_art = None
                    in_ignored_section = False
                    continue
                
                # B. Check for header page line where chapter is like "Bundespräsident 0101" or "0101 Bundespräsident"
                m_hdr_chap = re.search(r'\b(' + einzelplan_id + r'\d{2})\b', col1 + " " + col2)
                if m_hdr_chap and (top < 60.0): # Page headers are at the very top (usually < 60pt)
                    chap_id = m_hdr_chap.group(1)
                    if chap_id != current_kapitel:
                        save_active_title()
                        current_kapitel = chap_id
                        current_kapitel_text = kapitel_map.get(current_kapitel, "")
                        if not current_kapitel_text:
                            # Try to extract description from the header line
                            header_text = (col1 + " " + col2).replace(chap_id, "").replace("-", "").strip()
                            # remove page numbers
                            header_text = re.sub(r'^\d+\s*|\s*\d+$', '', header_text).strip()
                            current_kapitel_text = header_text
                        current_titelgruppe = None
                        current_tgr_text = None
                        current_ea = None
                        current_art = None
                        in_ignored_section = False
                    continue
                    
                # C. Check for E/A or Category in col2
                if col2 == "Einnahmen":
                    save_active_title()
                    current_ea = "E"
                    current_art = ""
                    in_ignored_section = False
                    continue
                elif col2 == "Ausgaben":
                    save_active_title()
                    current_ea = "A"
                    current_art = ""
                    in_ignored_section = False
                    continue
                elif col2 in ["Haushaltsvermerk", "Haushaltsvermerke", "Erläuterungen"]:
                    save_active_title()
                    in_ignored_section = True
                    continue
                elif col2 in ["Übrige Einnahmen", "Verwaltungseinnahmen", "Personalausgaben", 
                              "Sächliche Verwaltungsausgaben", "Zuweisungen und Zuschüsse (ohne Investitionen)", 
                              "Ausgaben für Investitionen", "Besondere Finanzierungsausgaben", 
                              "Militärische Beschaffungen, Anlagen usw.", "Schuldendienst", "Zuweisungen und Zuschussse"]:
                    save_active_title()
                    current_art = col2
                    in_ignored_section = False
                    continue
                    
                # D. Check for Title Group in col1/col2
                m_tgr = re.match(r'^(?:Tgr\.|Titelgruppe)\s+(\d+)', col1 or col2, re.IGNORECASE)
                if m_tgr:
                    save_active_title()
                    group_id = m_tgr.group(1).zfill(2)
                    full_text = col1 + " " + col2
                    group_desc = re.sub(r'^(?:Tgr\.|Titelgruppe)\s+\d+\s*', '', full_text, flags=re.IGNORECASE)
                    group_desc = re.sub(r'\s*\(\s*\d+[\s\d]*\)', '', group_desc).strip()
                    current_titelgruppe = group_id
                    current_tgr_text = group_desc
                    in_ignored_section = False
                    continue
                    
                # E. Check for title row
                m_title = re.match(r'^(F\s+)?(?:(\d{3})\s+(\d{2})|(\d{4}))$', col1)
                if m_title:
                    save_active_title()
                    in_ignored_section = False
                    
                    flex_val = "ja" if m_title.group(1) else "nein"
                    if m_title.group(2):
                        title_id = m_title.group(2) + m_title.group(3)
                    else:
                        title_id = m_title.group(4)
                        
                    soll_str = col3.replace(" ", "").replace(".", "").replace(",", "").strip()
                    if not soll_str or soll_str == "-":
                        soll_val = 0
                    else:
                        try:
                            soll_val = int(soll_str)
                        except ValueError:
                            soll_val = 0
                            
                    active_title = {
                        'einzelplan': einzelplan_id,
                        'einzelplan-text': einzelplan_name,
                        'einnahmen-ausgaben': current_ea if current_ea else "",
                        'einnahmen-ausgaben-art': current_art if current_art else "",
                        'kapitel': current_kapitel if current_kapitel else "",
                        'kapitel-text': current_kapitel_text if current_kapitel_text else "",
                        'titel': title_id,
                        'funktion': "",
                        'titel-text': col2,
                        'flex': flex_val,
                        'seite': page_num,
                        'soll': soll_val,
                        'titelgruppe': current_titelgruppe if current_titelgruppe else "",
                        'tgr-text': current_tgr_text if current_tgr_text else ""
                    }
                    continue
                    
                # F. Check for function ID line
                m_fun = re.match(r'^-\s*(\d+)$', col1)
                if m_fun:
                    if active_title is not None:
                        active_title['funktion'] = m_fun.group(1).zfill(3)
                        if col2:
                            if active_title['titel-text'].endswith("-"):
                                active_title['titel-text'] = active_title['titel-text'][:-1] + col2
                            else:
                                active_title['titel-text'] = active_title['titel-text'] + " " + col2
                    continue
                    
                # G. Continuation of description
                if active_title is not None and not in_ignored_section:
                    if col2:
                        if active_title['titel-text'].endswith("-"):
                            active_title['titel-text'] = active_title['titel-text'][:-1] + col2
                        else:
                            active_title['titel-text'] = active_title['titel-text'] + " " + col2
                            
        save_active_title()
        
    return pd.DataFrame(all_titles)

def main():
    os.makedirs("input/soll/csv", exist_ok=True)

    if len(sys.argv) > 1:
        years = [int(y) for y in sys.argv[1:]]
    else:
        years = list(range(2005, 2012))

    for year in years:
        print(f"\n================== Processing Year {year} ==================")
        pdf_dir = f"input/soll/pdf/{year}"
        if not os.path.exists(pdf_dir):
            print(f"Directory {pdf_dir} does not exist. Skipping.")
            continue
            
        pdf_files = sorted(glob.glob(f"{pdf_dir}/epl*.pdf") + glob.glob(f"{pdf_dir}/*/epl*.pdf"))
        
        year_dfs = []
        for pdf_file in pdf_files:
            try:
                df = parse_pdf(pdf_file)
                if not df.empty:
                    year_dfs.append(df)
            except Exception as e:
                print(f"Error parsing {pdf_file}: {e}")
                
        if year_dfs:
            combined_df = pd.concat(year_dfs, ignore_index=True)
            # Order columns
            cols = ['einzelplan', 'einzelplan-text', 'einnahmen-ausgaben', 'einnahmen-ausgaben-art', 
                    'kapitel', 'kapitel-text', 'titel', 'funktion', 'titel-text', 'flex', 'seite', 'soll', 
                    'titelgruppe', 'tgr-text']
            combined_df = combined_df[cols]
            
            # Format and handle NaN values: empty strings for all object columns, and keep numeric as integers
            for col in combined_df.columns:
                if col != 'soll':
                    combined_df[col] = combined_df[col].fillna("").astype(str)
                else:
                    combined_df[col] = combined_df[col].fillna(0).astype(int)
            
            out_path = f"input/soll/csv/HH_{year}.csv"
            combined_df.to_csv(out_path, sep=";", index=False, encoding="utf-8")
            print(f"Successfully generated {out_path}, shape: {combined_df.shape}")
        else:
            print(f"No data parsed for year {year}")

if __name__ == "__main__":
    main()
