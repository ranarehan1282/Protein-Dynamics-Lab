# Design system reference

This is the single place that documents every colour, size, and position used
on the site. It exists for two reasons: so changes stay consistent as the site
grows, and because this site is meant to eventually become a template other
labs can reuse — this file is what makes that possible later, without having
to reverse-engineer the CSS first.

Nothing here needs to change today. It's a reference, not a task list.

## Colours

All defined once in `style.css` under `:root`, used everywhere via `var(--name)`.

| Name | Hex | Used for |
|---|---|---|
| `--paper` | `#F1F5F8` | Page background |
| `--ink` | `#12222D` | Body text, headings |
| `--slate` | `#53646F` | Muted text (dates, captions, metadata) |
| `--cobalt` | `#2350D8` | Primary brand colour — links, buttons, logo |
| `--mint` | `#1F9A8F` | Secondary accent (teal) |
| `--line` | `#CBD6DD` | Borders, dividers |
| `--white` | `#fff` | Cards, header background |

**Icon/area accent palette** (used in `icons.js`, not CSS variables, since each
icon picks its own colour): cobalt `#2350D8`, teal `#1F9A8F`, green `#3F8F4A`,
amber `#E08A2E`, purple `#7B5EC7`. Five colours exist in the palette; not every
page uses all five at once.

**Student avatar palette** (`team.js`, `PALETTE` array): five soft tint/ink
pairs, auto-assigned per person by hashing their name, so the same person
always gets the same colour. Defined once, not per-person.

## Typography

| Role | Font | Notes |
|---|---|---|
| Headings (h1–h3) | Newsreader (serif) | Weight 600, loaded from Google Fonts |
| Body text | Inter (sans) | Weight 400–600, loaded from Google Fonts |

Both are declared once in the `<link>` tag in every page's `<head>` and in
`style.css`'s `font-family` rules — not repeated per-element.

## Images and photo boxes

| What | Aspect ratio | Minimum size | Position |
|---|---|---|---|
| Student / alumni photo | 1:1 (square) | 400×400px | Top of card, full width |
| PI (Dr. Khalid) photo | 1:1 (square) | 400×400px | Right of bio text, desktop; stacks on top, mobile (below 680px) |
| Publication image (optional) | Shows square (1:1) on the Publications list page, landscape (16:9) on the home page's "Recent publications" cards — same file, cropped differently per context | 400×400px or larger | Right column on Publications; top of card on home |
| Research area image (optional) | 16:9 (landscape) | ~400×225px or larger | Top of card, full width |
| Social preview (`og-image.png`) | 1200×630px | exact | Not shown on-site; used by link previews (LinkedIn, etc.) |

All photo/image boxes crop automatically (`object-fit: cover`), so a photo
slightly off the exact ratio still displays correctly — these are targets for
best results, not hard requirements.

**Fallback when no photo is given:** a solid-colour box with the person's
initials (students) or a generated topic icon (publications, research areas).
Nothing ever shows broken or missing — there is always a fallback.

## Cards and boxes

| Element | Border radius | Padding | Border |
|---|---|---|---|
| `.box` (PI card, funding box) | 10px | 28px | 1px solid `--line` |
| `.blk` (research area / recent-pub cards) | 10px | 24px (0 if it has an image, see below) | 1px solid `--line`, 4px coloured top border |
| `.mcard` (student/alumni cards) | 10px | 0 outer / 16–20px inner | 1px solid `--line` |
| `.fig` (icon/image box inside a card) | 9px (top corners only) | — | — |

**Why some cards have zero outer padding:** when a card has a photo or icon
at the top (`.blk--media`, `.mcard`), the padding moves to an inner wrapper
div so the image can run edge-to-edge while the text below still has margin.
This is the one layout detail to preserve carefully if copying the pattern.

## Grid layouts

| Section | Columns | Minimum card width | Gap |
|---|---|---|---|
| Research areas / recent publications | auto-fill | 300px | 20px |
| Team members | auto-fill | 230px | 20px |
| Methods technique groups | auto-fit | 220px | 24px |

All grids reflow automatically down to a single column on narrow screens —
no separate mobile layout needed for these.

## Breakpoints

| Width | What changes |
|---|---|
| 820px | Header nav wraps to two lines instead of hiding links |
| 720px | Publication list hides the image column |
| 680px | PI card stacks (photo above text instead of beside it) |
| 640px | (reserved, currently unused — kept for future fine-tuning) |

## Logomark

A short protein backbone (cobalt) meeting a small ligand hexagon (amber),
`viewBox="0 0 32 32"`. Used as both the header mark and the favicon — the
exact same SVG, just sized differently (28px in the header, 32px for the
favicon source). See `HOW-TO-UPDATE.md` for where to find and edit it.

## For a future template

If this site is ever turned into a reusable template, the parts that would
need to become "fill in your own" variables are:
- The colour palette above (7 CSS variables)
- The two Google Fonts
- The lab name, logomark, and favicon
- The 4 research areas and their icon/colour assignments
- The data files (`pubs.js`, `team.js`) — these are already separate from
  layout, which is most of what makes templating possible

## Updates from the QA pass
- Icon/initial colours: amber is now #BF6D1C and teal #1A8A80 wherever they are used
  as small graphics or initials on tinted backgrounds (3:1 contrast). The brand
  amber (#E08A2E) is kept for the logo, favicon and hero ligand.
- Keyboard focus ring: 3px solid cobalt (white on the dark footer), offset 3px.
- Touch targets: 44px minimum height at 820px and below.
- Extra breakpoint: 480px (the PI contact list becomes one column).
- Justified text (.prose) applies from 700px up only.
- Utility classes: .sr-only (screen-reader-only text), .skip (skip link),
  .todo-only (shown only in editing mode), [hidden] always wins.
