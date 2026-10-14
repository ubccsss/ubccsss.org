# CSSS design-ideas prototype

A throwaway React prototype for reviewing three design ideas **before** any of them
get ported into the Hugo site. It is deliberately standalone: nothing in here is
imported by Hugo, and Netlify's build (`hugo --minify`) ignores this folder.

## Run it

```bash
cd prototype
npm install
npm run dev      # http://localhost:5199
```

`npm run build` produces `dist/` if you want a static bundle.

> **Note:** Vite binds to IPv6 `localhost`. Use `http://localhost:5199`, not
> `http://127.0.0.1:5199` — the latter refuses the connection on this machine.

## The three ideas

| # | Idea | Borrowed from | Where it'd go on ubccsss.org |
|---|------|---------------|------------------------------|
| 1 | **Spec-sheet masthead + numbered index.** Oversized initials at the outer edges, monospace metadata strip between them, then one numbered row per item with a dotted leader and a right-aligned value. Rows invert to navy and expand on click. | [harry-atkins.com](https://harryjatkins.com/) | `/services/courses/` (Course Reviews) — and the same masthead on `/about/` |
| 2 | **Announcement ticker.** A slow marquee band carrying rotating notices, using the CSSS cube motif as the separator glyph. | seen on ~6 of the 30 sites surveyed, incl. [springsummer.dk](https://springsummer.dk/) and [press.stripe.com](https://press.stripe.com/) | Site-wide, under the header or above the footer — it's the only surface that can surface something *imminent* from all 293 events |
| 3 | **Live term strip.** A pinned mono bar showing the current term and week, a countdown to the next event, and a live Vancouver clock. | [springsummer.dk](https://springsummer.dk/) (clock + city in the nav), [harry-atkins.com](https://harryjatkins.com/) (live viewport/OS metadata) | Site-wide header |

The surveys and full technique notes live in the PR description.

## Real vs placeholder data

- **Real.** All 70 courses in `src/data/courses.json` are extracted from
  `content/services/courses/*.md` — codes, titles and descriptions are what's actually
  on the site. Regenerate with the extractor described below.
- **Placeholder.** `src/data/term.json` holds the term dates and the "next event".
  The repo's event calendar (`content/events/`) has no future entries — the newest is
  June 2025 — so there was nothing real to compute a countdown from. **These values
  must be replaced with real UBC term dates and a live events source before porting.**
- `src/data/announcements.json` lists real, evergreen CSSS things (TCF, CSSRC, The
  Cube, elections, volunteer, course-review contributions) rather than invented
  deadlines.

## If one of these graduates to the real site

Roughly, per idea:

1. **Numbered index** — a Go template partial over `.Pages` in the courses section,
   plus the `.row` / `.leader` CSS. The `01…70` numbering is just the index.
2. **Ticker** — a partial reading from a small `data/announcements.yaml`; pure CSS
   animation, no JS. Respect `prefers-reduced-motion` (already handled here).
3. **Term strip** — needs a real data source. Options: a `data/term.yaml` an officer
   updates each term, or computed from a term-dates file. The HTML decoration is
   trivial; the data plumbing is the actual work.

All three use only the 5 brand colours and the two brand fonts (metadata falls back
to a system monospace stack so no third webfont is loaded).
