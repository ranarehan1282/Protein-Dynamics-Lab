# Updating the lab website

| To do this | Edit this file |
|---|---|
| Add or move a student (join, graduate) | team.js |
| Add a paper | pubs.js |
| Add a PhD personal page | copy phd-profile-template.html, then put its name in "page" in team.js |
| Add a tutorial | copy tutorial-template.html, then link it from tutorials.html |
| Change projects, openings or funding | projects.html, join.html |

Graduation: in team.js set status:"alumni", add end year, thesis and now.
Get written consent before publishing a student's name or photo.
Placeholders to replace: Google Scholar URL, sample students, team names on Projects, openings.

## Added in this version
- pubs.js: each paper has topic tags and a DOI slot (last item). Add the DOI, for example "10.1016/j.xxx", and the Find paper link becomes a DOI link.
- Link previews (LinkedIn): in every page, replace YOURUSERNAME.github.io/REPO with your real site address. Replace og-image.png with your own 1200x630 picture if you like.
- Footer links (Scholar, LinkedIn, GitHub): replace the # in each page footer.
- Contact form: instructions are in a comment in join.html (needs a free Formspree account).
- Home page Scholar numbers: update once a year.
- Tools and data: add real links when the GitHub repository and datasets exist.
- Analytics: optional; GoatCounter is a free, privacy-friendly option.

## Publish on GitHub Pages
1. Create a public repository. 2. Upload everything inside this folder (index.html must be at the top level).
3. Settings > Pages > Deploy from a branch > main / (root). 4. Wait a minute, then open the address GitHub shows.
5. Then replace YOURUSERNAME.github.io/REPO in each page's head (link previews), and swap the Google Scholar search links for your profile link.
Hero animation: protein-data.js holds the GRK2 backbone (C-alpha atoms only) and elastic-network modes. Remove it, and the animation, if you do not want to show the structure publicly.

## Team page (updated)
- Current students (team.js top section): 4 PhD + 8 MS generic placeholders. Replace name and project as real students join.
- Alumni: 14 real graduates are listed with their thesis titles, split into PhD and MS.
  Each alumnus needs two things filled in when you have them: start/end year (replaces
  "graduate" with "MS, 2022 to 2024") and "Now: add current position" (their job, further
  study, or next step). Search team.js for "null" and "add current position" to find every spot.
- Tayyaba was excluded per instruction. If this was a mistake, add her back the same way as the others.

## Typography
Headings use Newsreader (a serif) and body text uses Inter (a sans), both loaded from
Google Fonts in each page's head. All sizing lives in style.css. To change the look later,
edit the two font-family values there rather than in individual pages.

## Photos and LinkedIn
- Photos: add a consented photo to the images/ folder, then set photo:"images/filename.jpg"
  for that person in team.js. Leave photo:"" to keep the initials circle.
- LinkedIn: every person in team.js now has a links:{linkedin:""} field. Paste their
  profile URL between the quotes and a "LinkedIn" link appears on their card automatically.
  The same object can also hold scholar and orcid for PhD students.

## Research areas (updated)
Home page and the Research/Projects page now both show the same five broad areas:
Protein dynamics, Cell signalling, Drug discovery, Immunology and immunotherapy, and
Biologics design. The pesticide/agrochemical topic was removed as requested. To adjust
the wording, edit the AREAS-style blocks directly in index.html and projects.html
(there is no separate data file for these, since there are only five and they rarely change).

## This update
- Team cards: now photo-led (large rectangular photo/placeholder, name, role in small
  caps, one muted detail line), matching a reference academic lab site. Recommended
  photo: square (1:1), 400x400px or larger.
- Publications: restyled to a numbered list (newest paper = highest number, stays
  fixed regardless of search/filter), with a bigger image column on the right.
- Research areas (projects.html): each card now has a "Related papers" button that
  expands a short list of matching publications, pulled live from pubs.js, plus a
  link to Publications pre-filtered to that topic. The area-to-tag mapping is the
  AREA_TAGS object near the end of projects.html -- edit it if you want an area to
  pull in different paper tags.
- Deep-linking: publications.html?tag=PARP1 (or any tag) opens with that filter
  already applied. Used by the Related papers links above, but works as a plain
  link anywhere too.
- Justified text: applied only to the wider single-column paragraphs (About on
  home, Dr. Khalid's bio, the Join us intro) via a .prose class, not to narrow
  card text, where it would create ugly gaps.

## Research areas (finalised)
The 5 areas are now organised by disease, not by method, decided after reviewing
every real project, paper and thesis in the lab:
- Cardiovascular disease (sGC, H-NOX, PKG, PDEs, beta-adrenergic receptors, GRK2/GRK5)
- Cancer therapeutics (PARP1, PD-1/LAG-3)
- Infectious disease (dengue, MERS, SARS-CoV-2)
- Inflammatory and autoimmune disease (TNF-alpha biologics, RA biomarkers)
- Neurodegeneration (Alzheimer's)
Techniques (MD, NMR chemical shift prediction, ML/DL, ligand- and structure-based
design, RNA-seq/microRNA analysis, etc.) live separately in the Methods section
on the Research areas page, grouped into 4 categories, since a technique isn't a
disease area on its own.
To change which papers show under "Related papers" for an area, edit AREA_TAGS
near the end of projects.html -- it maps area names to the tags used in pubs.js.
Publications numbering was removed per feedback; the year + DOI/Find paper link
remain in the left column.

## PI photo and student fields (this update)
- Dr. Khalid's card is now a CV-style layout: text on the left, photo on the right
  (stacks photo-on-top on mobile). To add his real photo, see the comment right
  above his avatar div in team.html.
- Student cards show "Now: add current position" (alumni only) and
  "LinkedIn: add profile link" again whenever those fields are empty, as a visible
  reminder of where to fill them in -- not just a silently hidden field.
- tools.html: Code and Datasets are now one "Code and data" section, since each
  project will get a single GitHub repo covering both.

## Logomark (brand icon / favicon)
The lab's logomark -- a short protein backbone (cobalt) meeting a small ligand
hexagon (amber) -- appears in the header next to the lab name on every page, and
as the browser tab favicon. It deliberately matches the "Protein dynamics" icon
already used on the Research areas page, so the logo and the icon system share
one visual language rather than being two unrelated designs.
To change it: the same two SVG snippets (one for the header, one URL-encoded for
the favicon <link>) are repeated identically at the top of every HTML file --
search for viewBox="0 0 32 32" to find both spots per page.

## Using real images instead of icons (publications and research areas)
Both places that show the generated topic icons can now show a real image instead,
the same way team photos work: leave the image field empty to keep the icon, or
fill it in to replace it. Tested end-to-end before shipping this.

- **Publications:** each entry in pubs.js can take an optional 7th item, the image
  path, e.g.:
  [2026, "Title", "Authors", "Journal", ["PARP1"], "10.xxxx/doi", "images/papers/parp1-2026.jpg"]
  Leave it off entirely (6 items, as now) to keep the icon.
- **Research areas:** on index.html and projects.html, each area's card has
  <div class="jsfig" data-tag="..." data-image=""></div> -- put an image path
  between the quotes (e.g. data-image="images/areas/cardiovascular.jpg") to swap
  that one card's icon for a real image. Leave it empty to keep the icon.

Recommended image size: 400x400px or larger (a square-ish photo works best,
since it gets cropped automatically — square on the Publications list, wide
on home page cards and research areas). See DESIGN-SYSTEM.md for the exact
ratios used in every box on the site. Put images in a new images/papers/ or
images/areas/ subfolder to keep things tidy.

## Research areas, finalised again (4 areas, method-led)
After more discussion, the areas changed from 5 disease-led areas to 4
method-led areas, each naming disease/target examples inside its description
rather than as the headline. Reasoning: the lab's real identity is one
computational toolkit applied across many one-off disease collaborations,
not five deep disease programmes -- organising by method is more honest and
scales better (a new disease next year is just a new example sentence, not a
new area). The 4 areas:
- Protein modelling and dynamics (MD, NMR chemical shift, IDPs)
- Molecular docking and drug design
- Biologics and immunotherapy design
- Disease biomarkers and neuroimmunology
The Methods section further down the same page was realigned to the same 4
groups, and now includes "Intrinsically disordered proteins (IDPs)" and
"Binding energy calculation" as explicit technique chips.
See DESIGN-SYSTEM.md for the full colour/typography/image reference, written
with an eye toward turning this site into a reusable template later.

## This update
- Fixed duplicate titles on research area cards: the small pill now shows a short
  label (Structural biology, Drug discovery, Immunotherapy, Neuroimmunology)
  separate from the full card heading, instead of repeating the same text twice.
- Added "cancer" explicitly to the Drug discovery and design area (PARP1 context).
- Moved IDPs (intrinsically disordered proteins) from Protein modelling and
  dynamics to Disease biomarkers and neuroimmunology, since IDPs are most
  relevant there (tau, alpha-synuclein, amyloid-beta are all IDPs).
- Added new technique chips: AI-based protein modelling, Protein inverse design,
  Pharmacophore modelling, Virtual screening, Compound library generation, QSAR
  modelling.
- Research area cards are now a fixed 2x2 grid (class "blocks-2col" in style.css),
  not the auto-fill 3+1 layout -- this only affects the 4 area cards, not other
  .blocks grids (tutorials, recent publications, etc).
- Real people added/updated in team.js: Syeda Fatima Mehboob (new, replacing an
  MS placeholder), and LinkedIn + full surnames for Azka Munawar, Hunza Usman,
  and Shanza Mazhar. Areesha Irshad's alumni card now shows her current position
  (PhD, Vrije Universiteit Amsterdam). Shanza's personal Gmail address was
  deliberately left off the public site -- only her LinkedIn was added.
- Added a time-sensitive IRSIP fellowship notice to the Join us openings box,
  flagged with an HTML comment reminding you to remove it after 30 Oct 2026.

## This update
- pubs.js: reformatted to one paper per line (was all 25 crammed onto a single
  line). Same data, same fields, just readable now -- open it in any text
  editor and each paper is its own row.
- team.js: replaced with your real data. 4 current PhD students, 6 current MS
  students (not 8 -- only 6 real names were given; add more lines the same way
  if more join), 13 MS alumni, 0 PhD alumni. Mudasir Alvi appears twice on
  purpose -- once as a current PhD student, once as an MS alumnus -- since he
  did his MS here and continued to a PhD in the same lab. Blank lines added
  between every person for readability.
- Fixed dull/washed-out text on team cards: thesis, project and "Now" lines
  (when filled in) are now solid dark text, not grey italic. Grey italic is
  now reserved only for genuine placeholders ("add current position", "add
  profile link") so it's visually obvious which fields still need attention
  versus which are done.

## Interns table (new)
BS research interns are shown as a plain table on the Team page (not cards,
since they stay for a short defined period and don't need a photo/thesis-style
profile). It also works as a public, dateable record an intern can link to
from their own CV or LinkedIn as proof of the internship.

To add one: open team.js, find the INTERNS array near the top (separate from
TEAM), and add a row:
 {name:"Real Name",program:"BS Bioinformatics, Quaid-i-Azam University",duration:"Jun-Aug 2026 (8 weeks)",project:"What they worked on",links:{linkedin:"https://..."}}
Leave links.linkedin:"" if they don't have one yet -- the table shows
"add link" until filled in. Deep link to this section directly with
team.html#interns, handy for an intern to put in their own CV.

Two example rows are in there now as placeholders -- replace or delete them
once you have real interns to list.

## LAUNCH CHECKLIST (do these before publishing)
1. Open config.js and change  showTodo: true  to  showTodo: false.
   This hides every grey reminder ("add LinkedIn", "add current position",
   "add grant names"...), the sample intern rows, and the red warning box.
   Preview it first by adding ?public to any address, e.g. team.html?public
2. After you know your live address, search all .html files for
   YOURUSERNAME.github.io/REPO and replace it with your real address. This makes
   the picture appear when the site is shared on LinkedIn. (Optionally add an
   og:url line too; there is a reminder comment in each page's head.)
3. Delete the IRSIP note on join.html after 30 Oct 2026 (marked with a comment).
4. Replace or delete the two sample rows in INTERNS (team.js) once real interns exist.
5. Upload the CONTENTS of this folder to GitHub (index.html must be at the top level).

## Editing mode vs public mode (new)
config.js has one switch, showTodo.
- true  (editing): reminders for empty fields are visible, and a red box at the
  bottom-left warns you about mistakes: a typo in team.js/pubs.js (it names the
  file and line), a wrong photo or image path, a LinkedIn link missing https://,
  a bad degree/status value, or a person listed twice.
- false (public): all of that is hidden from visitors.

## Safer photo and image paths (new)
If a photo or image path is wrong, the site no longer shows a broken-image icon.
It falls back to the initials (people) or the topic icon (papers/areas), and in
editing mode the red box tells you which path to fix.

## Accessibility and phone fixes (new)
- Keyboard users get a "Skip to main content" link (first Tab stop) and a clear
  blue focus ring everywhere.
- Every button/link is at least 44px tall on phones; the header no longer sticks
  on phones (more screen for reading).
- No sideways scrolling at any width down to 320px.
- Justified text now only applies on screens wider than 700px.
- Amber and teal initials/icons were deepened slightly (to #BF6D1C and #1A8A80)
  so they meet contrast guidelines; the logo and hero colours are unchanged.
- Template pages (tutorial-template, phd-profile-template) are marked noindex so
  search engines skip them. A friendly 404.html is included.
- The hero animation now pauses by itself when scrolled out of view.
- Fixed: Najaf's card no longer says "SINCE null"; the pause button now really
  hides for visitors who have reduced-motion turned on.


## Publications format and tags (updated)
pubs.js now lists each paper as a small block, one field per line:
  { year, title, authors, journal, tags: ["Cancer"], doi: "", image: "" }
The full list of allowed tags is the TAGS list at the top of pubs.js
(Cancer, Cardiovascular, Immunoinformatics, Neuroinformatics, Infectious
disease, Drug discovery, Structural biology, Tools, Other).
- Add a tag: add one line to TAGS, then use it in a paper.
- Remove a tag: delete it from TAGS and from the papers that use it.
- The filter buttons and the Research-area "Related papers" lists follow the tags.
  Area-to-tag mapping: AREA_TAGS near the end of projects.html.


## Real MD movie in the hero (optional)
Put a short, silent clip in the images folder named hero-md.mp4 (and optionally hero-md.webm).
If the file is there the site plays it (muted, looping) instead of the drawn animation, and the
pause button controls it. If the file is missing nothing breaks: the drawn animation stays.
Make the clip with a background colour of #F1F5F8 (the page colour) so it blends in. Keep it
under about 3 MB. Example (ffmpeg, 8 s clip starting at 20 s, 720 px high, no audio):
  ffmpeg -ss 20 -t 8 -i movie.mp4 -an -vf "scale=-2:720,fps=24" -c:v libx264 -crf 28 -pix_fmt yuv420p -movflags +faststart images/hero-md.mp4
  ffmpeg -ss 20 -t 8 -i movie.mp4 -an -vf "scale=-2:720,fps=24" -c:v libvpx-vp9 -crf 36 -b:v 0 images/hero-md.webm
