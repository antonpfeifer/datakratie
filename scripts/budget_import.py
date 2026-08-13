import pandas as pd
import titles_convert
import values_convert
import argparse
import re
from pathlib import Path
from supabase import create_client, Client
from dotenv import load_dotenv
import os

supabase: Client


def _sanitize_for_json(df: pd.DataFrame) -> list[dict]:
    cleaned = df.copy()
    # Force object dtype first, otherwise float columns convert None back to NaN.
    cleaned = cleaned.astype(object)
    cleaned = cleaned.replace([float("inf"), float("-inf")], None)
    cleaned = cleaned.where(pd.notna(cleaned), None)
    return cleaned.to_dict(orient="records")

def insert_df(df: pd.DataFrame, table: str):
    data = _sanitize_for_json(df)
    global supabase
    return (
        supabase.table(table)
        .insert(data)
        .execute()
    )

def upsert_df(df: pd.DataFrame, table: str):
    data = _sanitize_for_json(df)
    global supabase
    return (
        supabase.table(table)
        .upsert(data)
        .execute()
    )

def get_revenue_key(year: int):
    if year <= 2022:
        return "einnahmen"
    else:
        return "einahmen"

def get_revenue_text_key(year: int):
    trailing_key: str
    if year <= 2022:
        trailing_key = "art"
    else:
        trailing_key = "text"
    return f'{get_revenue_key(year)}-ausgaben-{trailing_key}'

def get_should_key(year: int):
    if year <= 2022:
        return "soll"
    else:
        return "soll "

def main():

    load_dotenv()
    url: str | None = os.getenv("SUPABASE_URL")
    key: str | None = os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv("SUPABASE_KEY")

    if url is None or key is None:
        raise ValueError("SUPABASE_URL and either SUPABASE_SERVICE_ROLE_KEY or SUPABASE_KEY must be defined")

    global supabase
    supabase = create_client(url, key)

    parser = argparse.ArgumentParser(description='Convert budget file')
    parser.add_argument('--input', help='Path to input file')
    args = parser.parse_args()
    input_file = args.input
    
    m = re.search(r'20\d{2}', Path(input_file).name)
    if not m:
        raise ValueError(f"Could not find year in filename: {input_file}")
    year = int(m.group(0))

    df = pd.read_csv(input_file, sep=';', usecols=range(14), dtype={'einzelplan': str, 'einzelplan-text': str, f'{get_revenue_key(year)}-ausgaben': str, f'{get_revenue_key(year)}-ausgaben-text': str, 'kapitel': str, 'kapitel-text': str, 'titel': str, 'funktion': str, 'titel-text': str, 'flex': str, 'soll ': str, 'titelgruppe': str, 'tgr-text': str})

    df_titles = titles_convert.convert_titles(df, year)
    if df_titles is None:
        raise ValueError("could not convert titles of budget")

    print(df_titles.head())

    try:
        upsert_df(df_titles, "titles")
    except Exception as exc:
        if "row-level security policy" in str(exc).lower():
            raise PermissionError(
                "Could not upload to 'titles' due to RLS. Use SUPABASE_SERVICE_ROLE_KEY for this import or add an INSERT/UPSERT policy for your role."
            ) from exc
        raise

    df_values = values_convert.convert_values(df, year)
    if df_values is None:
        raise ValueError("could not convert values of budget")
    
    print(df_values.head())
    
    try:
        insert_df(df_values, "values")
    except Exception as exc:
        if "row-level security policy" in str(exc).lower():
            raise PermissionError(
                "Could not insert into 'values' due to RLS. Use SUPABASE_SERVICE_ROLE_KEY for this import or add an INSERT policy for your role."
            ) from exc
        raise
    
    
    

if __name__ == '__main__':
    main()

