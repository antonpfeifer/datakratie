import argparse
import os
from dotenv import load_dotenv
import pandas as pd
from supabase import Client, create_client

def sortUpdates(update: tuple[int, int]):
     return len(str(abs(update[0])))

def safe(val):
    if pd.isna(val):
        return None
    return val

def composePath(id: str) -> list[str]:
    id_str = str(id)
    if len(id_str) <= 2:
        return [id_str.zfill(2)]
    elif len(id_str) == 3:
        return [id_str[0].zfill(2), id_str[1:3]]
    elif len(id_str) == 4:
        return [id_str[:2], id_str[2:4]]
    elif len(id_str) == 6:
        return [id_str[:2], id_str[2:4], id_str[4:6]]
    elif len(id_str) == 8:
        return [id_str[:2], id_str[2:4], id_str[4:6], id_str[6:8]]
    else:
        raise ValueError(f"Invalid id length for id: {id}")

def main():
    load_dotenv()
    url: str | None = os.getenv("SUPABASE_URL")
    key: str | None = os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv("SUPABASE_KEY")
    if url is None or key is None:
        raise ValueError("SUPABASE_URL and either SUPABASE_SERVICE_ROLE_KEY or SUPABASE_KEY must be defined")
    supabase = create_client(url, key)
    parser = argparse.ArgumentParser(description='Convert budget file')
    parser.add_argument('--input', required=True, help='Path to input file')
    args = parser.parse_args()
    input_file = args.input

    # Auto-detect delimiter (works for both ';' and ',')
    df = pd.read_csv(input_file, sep=None, engine='python')
    df.columns = [str(c).strip() for c in df.columns]
    df = df.rename(columns={'Name Zahl': 'name', 'ID': 'id', 'IDs aus Bundeshaushalt': 'ids', 'Infotext Zahl': 'description', 'Kommentar': 'comment', 'Parent': 'parent'})

    required_columns = {'name', 'id', 'ids', 'description', 'comment', 'parent'}
    missing_columns = required_columns - set(df.columns)
    if missing_columns:
        raise ValueError(f"Missing required columns: {sorted(missing_columns)}. Found columns: {list(df.columns)}")

    print(df.head())

    update_plan: dict[int, int] = {}
    for _, row in df.iterrows():
        path: str = "00." + ".".join(composePath(row["id"]))
        supabase.table("items").upsert({"id": int(row["id"]), "label": safe(row["name"]), "description": safe(row["description"]), "comment": safe(row["comment"]), "parent": int(row["parent"]) if pd.notna(row["parent"]) else None, "path": path}).execute()
        ids_string = str(row['ids']) if pd.notna(row['ids']) else ''
        ids = [int(x.strip()) for x in ids_string.split(',') if x.strip().isdigit()]

        for id in ids:
             update_plan[id] = row["id"]

    update_list: list[tuple[int, int]] = list(update_plan.items())

    update_list.sort(key=sortUpdates)

    print(update_list)

    # for update in update_list:
    #         id: int = update[0]
    #         item: int = update[1]

    #         id_len: int = len(str(abs(id)))

    #         if id_len == 2 or id_len == 1: #is plan
    #             print(f'updating all titles with plan {id} with item {item}')
    #             supabase.table("titles").update({"item": item}).eq("plan", id).execute()
    #         elif id_len == 4 or id_len == 3: #is chapter
    #              print(f'updating all titles with chapter {id} with item {item}')
    #              supabase.table("titles").update({"item": item}).eq("chapter", id).execute()
    #         elif id_len == 9 or id_len == 8: #is title
    #             print(f'updating title {id} with item {item}')
    #             supabase.table("titles").update({"item": item}).eq("id", id).execute()
    #         else:
    #              print(f"{id} id is invalid. Skipping.")

if __name__ == "__main__":
    main()