#!/usr/bin/env python3
"""Fetch table 61111-0001 from DESTATIS GENESIS API and load into a pandas DataFrame.

Usage:
  export GENESIS_USERNAME="your_username"
  export GENESIS_PASSWORD="your_password"
  python genesis_61111_0001_to_dataframe.py

Optional:
  export GENESIS_AREA="all"              # default: all
  export GENESIS_FORMAT="json"           # default: json
  export GENESIS_STARTYEAR="2008"        # optional
  export GENESIS_ENDYEAR="2025"          # optional
"""

from __future__ import annotations

import os
import sys
from typing import Any

import pandas as pd
import requests

BASE_URL = "https://www-genesis.destatis.de/genesisWS/rest/2020"
TABLE_ID = "61111-0001"


def _require_env(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise RuntimeError(f"Missing environment variable: {name}")
    return value


def _extract_rows(payload: dict[str, Any]) -> list[dict[str, Any]]:
    """Extract data rows from GENESIS API JSON response.

    The API schema may vary slightly; this function handles common variants.
    """
    # Common pattern for GENESIS data/table output
    if isinstance(payload.get("Object"), dict):
        obj = payload["Object"]
        if isinstance(obj.get("Content"), list):
            return [row for row in obj["Content"] if isinstance(row, dict)]

    # Fallbacks for different response shapes
    for key in ("Content", "data", "Data", "rows", "Rows"):
        rows = payload.get(key)
        if isinstance(rows, list):
            return [row for row in rows if isinstance(row, dict)]

    return []


def fetch_table_61111_0001() -> pd.DataFrame:
    username = _require_env("GENESIS_USERNAME")
    password = _require_env("GENESIS_PASSWORD")

    params = {
        "username": username,
        "password": password,
        "name": TABLE_ID,
        "area": os.getenv("GENESIS_AREA", "all"),
        "format": os.getenv("GENESIS_FORMAT", "json"),
    }

    startyear = os.getenv("GENESIS_STARTYEAR")
    endyear = os.getenv("GENESIS_ENDYEAR")
    if startyear:
        params["startyear"] = startyear
    if endyear:
        params["endyear"] = endyear

    response = requests.get(f"{BASE_URL}/data/table", params=params, timeout=60)
    response.raise_for_status()

    if params["format"].lower() != "json":
        raise ValueError("This script expects JSON response. Set GENESIS_FORMAT=json.")

    payload = response.json()

    # API errors are often returned with Status/Code fields
    if isinstance(payload, dict):
        status = str(payload.get("Status", "")).lower()
        code = str(payload.get("Code", "")).lower()
        if status == "fehler" or code.startswith("fehler"):
            raise RuntimeError(f"GENESIS API error: {payload}")

    rows = _extract_rows(payload)
    if not rows:
        raise RuntimeError(
            "No tabular rows found in API response. "
            "Check credentials/permissions and table availability."
        )

    df = pd.DataFrame(rows)
    return df


def main() -> None:
    try:
        df = fetch_table_61111_0001()
    except Exception as exc:  # noqa: BLE001
        print(f"Error: {exc}", file=sys.stderr)
        sys.exit(1)

    print("DataFrame loaded successfully.")
    print(f"Rows: {len(df)} | Columns: {len(df.columns)}")
    print(df.head(10).to_string(index=False))


if __name__ == "__main__":
    main()
