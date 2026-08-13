import pandas as pd

from budget_import import get_revenue_key, get_revenue_text_key, get_should_key
from titles_convert import create_id


map_descriptions: dict = {
    "Sächliche Verwaltungsausgaben": "exp_admin",
    "Übrige Einnahmen": "rev_other",
    "Verwaltungseinnahmen": "rev_admin",
    "Zuweisungen und Zuschüsse (ohne Investitionen)": "alloc_sub",
    "Besondere Finanzierungsausgaben": "special_invest",
    "Ausgaben für Investitionen": "invest"
}

map_flexible: dict[str, bool | None] = {
    "ja": True,
    "nein": False,
}

def convert_values(df: pd.DataFrame, year: int) -> pd.DataFrame | None:
    try:
        df['title'] = create_id(df, year)
        df['is_expense'] = df[f'{get_revenue_key(year)}-ausgaben'].astype(str).str.strip().eq('A')
        df['expense_revenue_type'] = df[get_revenue_text_key(year)].astype(str).str.strip().map(map_descriptions)
        df['expense_revenue_description'] = df[get_revenue_text_key(year)]
        df['should'] = df[get_should_key(year)]
        df['chapter'] = df['kapitel'].str.zfill(4)
        df['chapter_description'] = df['kapitel-text']
        df['plan'] = df["einzelplan"]
        df['plan_description'] = df['einzelplan-text']
        df['is_flexible'] = df['flex'].astype(str).str.strip().map(map_flexible)
        df['function'] = df['funktion']
        df['group'] = df['titelgruppe']
        df['group_description'] = df['tgr-text']
        df['date'] = f'{year}-01-01'

        return df[['title', 'date', 'is_expense', 'expense_revenue_type', 'expense_revenue_description', 'should', 'is_flexible', 'function', 'group', 'group_description', 'chapter', 'chapter_description', 'plan', 'plan_description']]

    except Exception as e:
        print(f"Fehler: {e}")