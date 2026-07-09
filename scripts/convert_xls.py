import os
import re
import pandas as pd
import numpy as np

PLAN_NAMES = {
    "01": "Bundespräsident und Bundespräsidialamt",
    "02": "Deutscher Bundestag",
    "03": "Bundesrat",
    "04": "Bundeskanzlerin und Bundeskanzleramt",
    "05": "Auswärtiges Amt",
    "06": "Bundesministerium des Innern",
    "07": "Bundesministerium der Justiz",
    "08": "Bundesministerium der Finanzen",
    "09": "Bundesministerium für Wirtschaft und Technologie",
    "10": "Bundesministerium für Ernährung, Landwirtschaft und Verbraucherschutz",
    "11": "Bundesministerium für Arbeit und Soziales",
    "12": "Bundesministerium für Verkehr, Bau und Stadtentwicklung",
    "14": "Bundesministerium der Verteidigung",
    "15": "Bundesministerium für Gesundheit",
    "16": "Bundesministerium für Umwelt, Naturschutz und Reaktorsicherheit",
    "17": "Bundesministerium für Familie, Senioren, Frauen und Jugend",
    "19": "Bundesverfassungsgericht",
    "20": "Bundesrechnungshof",
    "23": "Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung",
    "30": "Bundesministerium für Bildung und Forschung",
    "32": "Bundesschuld",
    "60": "Allgemeine Finanzverwaltung",
}

CATEGORIES = [
    "Verwaltungseinnahmen",
    "Übrige Einnahmen",
    "Personalausgaben",
    "Sächliche Verwaltungsausgaben",
    "Zuweisungen und Zuschüsse (ohne Investitionen)",
    "Ausgaben für Investitionen",
    "Besondere Finanzierungsausgaben",
    "Militärische Beschaffungen, Anlagen usw.",
    "Schuldendienst"
]

def clean_str(val):
    if pd.isna(val):
        return ""
    val_str = str(val).strip()
    if val_str.endswith(".0"):
        val_str = val_str[:-2]
    return val_str

def parse_xls_file(xls_path, year):
    print(f"Parsing XLS: {xls_path} for year {year}")
    xl = pd.ExcelFile(xls_path)
    
    records = []
    
    for sheet_name in xl.sheet_names:
        if not sheet_name.startswith("Einzelplan"):
            continue
            
        m_epl = re.search(r'\d+', sheet_name)
        if not m_epl:
            continue
        epl_id = m_epl.group(0).zfill(2)
        epl_name = PLAN_NAMES.get(epl_id, "")
        
        # Read the sheet
        df = xl.parse(sheet_name, header=None)
        
        current_kapitel = None
        current_kapitel_text = None
        current_ea = None
        current_art = None
        current_titelgruppe = None
        current_tgr_text = None
        
        for idx, row in df.iterrows():
            # Skip if row is empty
            if row.isna().all():
                continue
                
            c0 = clean_str(row.iloc[0])
            c1 = clean_str(row.iloc[1])
            c2 = clean_str(row.iloc[2])
            c3 = clean_str(row.iloc[3])
            c4 = row.iloc[4]
            c5 = clean_str(row.iloc[5])
            
            # Check for chapter
            if c0.startswith("Kap."):
                m_kap = re.search(r'\d{4}', c0)
                if m_kap:
                    current_kapitel = m_kap.group(0)
                    current_kapitel_text = c3
                    current_titelgruppe = None
                    current_tgr_text = None
                    current_ea = None
                    current_art = None
                continue
                
            # Check for title group
            if c0.startswith("Tgr."):
                m_tgr = re.search(r'\d+', c0)
                if m_tgr:
                    current_titelgruppe = m_tgr.group(0).zfill(2)
                    current_tgr_text = c3
                continue
                
            # Check for E/A or Category in c3
            if c3 == "Einnahmen":
                current_ea = "E"
                current_art = ""
                continue
            elif c3 == "Ausgaben":
                current_ea = "A"
                current_art = ""
                continue
            elif c3 in CATEGORIES:
                current_art = c3
                continue
                
            # Check for title (a 4-digit or 5-digit number in c0)
            if re.match(r'^\d{4,5}$', c0):
                titel_id = c0
                flex_val = "ja" if c1 == "F" else "nein"
                funktion_id = c2.zfill(3) if c2 else ""
                titel_text = c3
                seite_val = c5
                
                # Soll value
                if pd.isna(c4):
                    soll_val = 0
                else:
                    try:
                        soll_val = int(round(float(c4)))
                    except ValueError:
                        soll_val = 0
                
                records.append({
                    'einzelplan': epl_id,
                    'einzelplan-text': epl_name,
                    'einnahmen-ausgaben': current_ea if current_ea else "",
                    'einnahmen-ausgaben-art': current_art if current_art else "",
                    'kapitel': current_kapitel if current_kapitel else "",
                    'kapitel-text': current_kapitel_text if current_kapitel_text else "",
                    'titel': titel_id,
                    'funktion': funktion_id,
                    'titel-text': titel_text,
                    'flex': flex_val,
                    'seite': seite_val,
                    'soll': soll_val,
                    'titelgruppe': current_titelgruppe if current_titelgruppe else "",
                    'tgr-text': current_tgr_text if current_tgr_text else ""
                })
                
    # Create DataFrame
    out_df = pd.DataFrame(records)
    # Ensure correct column order
    cols = ['einzelplan', 'einzelplan-text', 'einnahmen-ausgaben', 'einnahmen-ausgaben-art', 
            'kapitel', 'kapitel-text', 'titel', 'funktion', 'titel-text', 'flex', 'seite', 'soll', 
            'titelgruppe', 'tgr-text']
    out_df = out_df[cols]
    return out_df

def main():
    os.makedirs("input/soll/csv", exist_ok=True)
    
    # 2012
    df_2012 = parse_xls_file("input/soll/xls/Datentabellen_2012.xls", 2012)
    df_2012.to_csv("input/soll/csv/HH_2012.csv", sep=";", index=False, encoding="utf-8")
    print(f"Saved HH_2012.csv, shape: {df_2012.shape}")
    
    # 2013
    df_2013 = parse_xls_file("input/soll/xls/Datentabellen_2013.xls", 2013)
    df_2013.to_csv("input/soll/csv/HH_2013.csv", sep=";", index=False, encoding="utf-8")
    print(f"Saved HH_2013.csv, shape: {df_2013.shape}")

if __name__ == "__main__":
    main()
