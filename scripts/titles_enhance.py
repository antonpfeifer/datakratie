import argparse
import json
import os

from dotenv import load_dotenv
from pydantic import Json
from supabase import Client, create_client


def _get_supabase_client() -> Client:
	load_dotenv()
	url: str | None = os.getenv("SUPABASE_URL")
	key: str | None = os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv("SUPABASE_KEY")

	if url is None or key is None:
		raise ValueError(
			"SUPABASE_URL and either SUPABASE_SERVICE_ROLE_KEY or SUPABASE_KEY must be defined"
		)

	return create_client(url, key)


def _fetch_values_page(supabase: Client, start: int, end: int) -> list[Json]:
	response = (
		supabase.table("values")
		.select("title,chapter,plan")
		.range(start, end)
		.execute()
	)
	return [row for row in response.data]


def _build_title_mappings(supabase: Client, batch_size: int) -> dict[int, dict[str, str]]:
	mappings: dict[int, dict[str, str]] = {}
	offset = 0

	while True:
		rows = _fetch_values_page(supabase, offset, offset + batch_size - 1)
		if not rows:
			break

		for row in rows:
			title = row.get("title")
			chapter = row.get("chapter")
			plan = row.get("plan")
			if title is None:
				continue

			# Keep the latest non-null values we see for each title.
			existing = mappings.get(int(title), {})
			if chapter is not None:
				existing["chapter"] = str(chapter)
			if plan is not None:
				existing["plan"] = str(plan)

			if existing:
				mappings[int(title)] = existing

		if len(rows) < batch_size:
			break
		offset += batch_size

	return mappings


def _update_titles(supabase: Client, mappings: dict[int, dict[str, str]]) -> int:
	updated_count = 0

	for title_id, payload in mappings.items():
		if not payload:
			continue

		(
			supabase.table("titles")
			.update(payload)
			.eq("id", title_id)
			.execute()
		)
		print(f'updated {title_id} with {payload}')
		updated_count += 1

	return updated_count


def main() -> None:
	parser = argparse.ArgumentParser(
		description="Copy chapter/plan from values table into titles table"
	)
	parser.add_argument(
		"--batch-size",
		type=int,
		default=1000,
		help="Rows fetched per page from values table",
	)
	args = parser.parse_args()

	if args.batch_size <= 0:
		raise ValueError("--batch-size must be > 0")

	supabase = _get_supabase_client()
	mappings = _build_title_mappings(supabase, args.batch_size)
	updated = _update_titles(supabase, mappings)

	print(f"Updated {updated} rows in titles table.")


if __name__ == "__main__":
	main()
