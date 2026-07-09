import pandas as pd

def convert_titles(df: pd.DataFrame, year: int) -> pd.DataFrame | None:
    try:
        df['id'] = create_id(df, year)
        df['description'] = df['titel-text']

        return df[['id', 'description']]

    except Exception as e:
        print(f"Fehler: {e}")


def create_id(df: pd.DataFrame, year: int):
        if year == 2023:
            return df['einzelplan'].str.zfill(2) + df['kapitel'].str.zfill(2) + df['titel']
        else:
            return df['kapitel'].str.zfill(4) + df['titel'] 