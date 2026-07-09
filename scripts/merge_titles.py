import pandas as pd
import sys
import os

def merge_csv_files(file_paths, output_file='merged_titles.csv'):
    if not file_paths:
        print("No input files provided.")
        return

    dataframes = []
    for file_path in file_paths:
        if os.path.exists(file_path):
            df = pd.read_csv(file_path, sep=';', usecols=['id', 'description'], dtype={'id': str, 'description': str})
            dataframes.append(df)
        else:
            print(f"Warning: File {file_path} not found.")

    if not dataframes:
        return

    first_df = dataframes[0]
    second_df = dataframes[1]
    merged_df = second_df[~second_df['id'].isin(first_df['id'])]

    # Save to CSV
    merged_df.to_csv(output_file, index=False)
    print(f"Successfully merged {len(file_paths)} files into {output_file}")

if __name__ == "__main__":
    # Usage: python merge_titles.py file1.csv file2.csv ...
    merge_csv_files(sys.argv[1:])