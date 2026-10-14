# QA report

Method: an automated browser test suite (52 checks) plus a structural audit of all
pages at 320, 375, 640, 768, 1024, 1280 and 1440px wide, using the accessibility,
viewport and keyboard checklists. Colour contrast was calculated for every
text/background pair. Final result: **52 of 52 checks pass.**

## Found and fixed
| Problem | Severity | Fix |
|---|---|---|
| No skip link for keyboard users (all pages) | Medium | Added "Skip to main content" |
| Page scrolled sideways at 320px (5 pages) | Medium | Grids no longer force a minimum width; long emails wrap |
| 16-27 undersized tap targets per page on phones | Medium | 44px minimum, header not sticky on phones |
| Keyboard focus ring too faint (teal, 2.97:1) | Medium | Cobalt ring (6:1), white on dark footer |
| Amber/teal initials and icons below 3:1 contrast | Low | Slightly deeper amber and teal |
| Heading levels skipped (Research areas, Tutorials) | Low | Correct h1 > h2 > h3 order |
| "SINCE null" on one student card | Medium | Hidden when the start year is empty |
| Pause button stayed visible with reduced-motion on | Low | [hidden] now always wins |
| Justified text left big gaps on narrow screens | Low | Justify only above 700px |
| Wrong og:url on every page would break link previews | Medium | Removed; launch checklist explains how to add it |
| Template pages could be found by search engines | Low | noindex added |
| A wrong photo/image path showed a broken-image icon | Medium | Falls back to initials/icon + editor warning |
| A typo in a data file left a silently blank page | High (for editors) | Red warning box naming file and line |
| Animation kept running while off-screen | Low | Pauses when not visible |
| Placeholder reminders would appear on the live site | High | One switch (showTodo) hides them |
| No 404 page | Low | Added |

## Verified working
Search, filters and deep links on Publications; Related papers (mouse and
keyboard); 2x2 / 1-column research grid; methods list; team counts; interns
table; editing vs public mode; reduced-motion; animation pause; skip link; focus
ring; all internal links and anchors; no script errors on any page.

## Still needs you (cannot be done from here)
- Real photos and the missing LinkedIn links / current positions / graduation years.
- Your live address, for the social-preview image (launch checklist, step 2).
- Confirm the external links open the right pages (NCB profile, Scholar search, HEC IRSIP).
- Confirm the collaborator institutions and add funding details, or leave them out.
- Check that Mudasir Alvi appearing twice (PhD student and MS alumnus) is intended.
- Text colours meet WCAG AA; a final check on a real phone is still worthwhile.
