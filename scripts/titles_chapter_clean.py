import argparse
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


def _fetch_titles_page(supabase: Client, start: int, end: int) -> list[Json]:
	response = (
		supabase.table("titles")
		.select("id,chapter,plan")
		.range(start, end)
		.execute()
	)
	return [row for row in response.data]


def _normalize_number(value: object) -> str:
	return str(value).strip()


def _is_two_digit_chapter(value: object) -> bool:
	chapter = _normalize_number(value)
	return chapter.isdigit() and len(chapter) == 2


def _build_new_chapter(plan: object, chapter: object) -> str | None:
	plan_str = _normalize_number(plan)
	chapter_str = _normalize_number(chapter)

	if not plan_str.isdigit() or not chapter_str.isdigit() or len(chapter_str) != 2:
		return None

	return f"{plan_str}{chapter_str}"


def _clean_chapters(supabase: Client, batch_size: int, dry_run: bool = False) -> tuple[int, int]:
	scanned = 0
	updated = 0
	offset = 0

	while True:
		rows = _fetch_titles_page(supabase, offset, offset + batch_size - 1)
		if not rows:
			break

		for row in rows:
			scanned += 1
			chapter = row.get("chapter")
			plan = row.get("plan")
			title_id = row.get("id")

			if title_id is None or chapter is None or plan is None:
				continue

			if not _is_two_digit_chapter(chapter):
				continue

			new_chapter = _build_new_chapter(plan, chapter)
			if new_chapter is None:
				continue

			print(f"title {title_id}: chapter {chapter} -> {new_chapter}")

			if not dry_run:
				(
					supabase.table("titles")
					.update({"chapter": new_chapter})
					.eq("id", title_id)
					.execute()
				)
			updated += 1

		if len(rows) < batch_size:
			break
		offset += batch_size

	return scanned, updated


def main() -> None:
	parser = argparse.ArgumentParser(
		description="Prepend plan to 2-digit chapters in titles table"
	)
	parser.add_argument(
		"--batch-size",
		type=int,
		default=1000,
		help="Rows fetched per page from titles table",
	)
	parser.add_argument(
		"--dry-run",
		action="store_true",
		help="Only print changes without updating rows",
	)
	args = parser.parse_args()

	if args.batch_size <= 0:
		raise ValueError("--batch-size must be > 0")

	supabase = _get_supabase_client()
	scanned, updated = _clean_chapters(supabase, args.batch_size, args.dry_run)

	if args.dry_run:
		print(f"Dry run finished. Scanned {scanned} rows. Would update {updated} rows.")
	else:
		print(f"Finished. Scanned {scanned} rows. Updated {updated} rows.")


if __name__ == "__main__":
	main()
