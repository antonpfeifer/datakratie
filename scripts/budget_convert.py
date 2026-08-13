import os
from dotenv import load_dotenv
import pandas as pd
from supabase import create_client
import titles_convert
import values_convert
import argparse
import re
from pathlib import Path

def main():
    global supabase
    load_dotenv()
    url: str | None = os.getenv("SUPABASE_URL")
    key: str | None = os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv("SUPABASE_KEY")
    if url is None or key is None:
        raise ValueError("SUPABASE_URL and either SUPABASE_SERVICE_ROLE_KEY or SUPABASE_KEY must be defined")
    supabase = create_client(url, key)
    parser = argparse.ArgumentParser(description='Convert budget file')
    parser.add_argument('--input', help='Path to input file')
    args = parser.parse_args()
    input_file = args.input
    
    m = re.search(r'20\d{2}', Path(input_file).name)
    if not m:
        raise ValueError(f"Could not find year in filename: {input_file}")
    year = int(m.group(0))

    df = pd.read_csv(input_file, sep=';', usecols=range(14), dtype={'einzelplan': str, 'einzelplan-text': str, 'einahmen-ausgaben': str, 'einahmen-ausgaben-text': str, 'kapitel': str, 'kapitel-text': str, 'titel': str, 'funktion': str, 'titel-text': str, 'flex': str, 'soll ': str, 'titelgruppe': str, 'tgr-text': str})

    df_titles = titles_convert.convert_titles(df, year)

    if df_titles is None:
        raise ValueError("titles could not be converted")

    df_titles.to_csv(f'output/{year}_titles.csv', index=False, sep=';', encoding='utf-8')


    df_values = values_convert.convert_values(df, year)

    if df_values is None:
        raise ValueError("values could not be converted")
    
    df_values.to_csv(f'output/{year}_values.csv', index=False, sep=';', encoding='utf-8')

if __name__ == '__main__':
    main()