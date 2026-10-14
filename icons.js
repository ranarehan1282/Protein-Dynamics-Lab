// Original topic icons (drawn for this site, not copied from any paper) used as
// small "graphical abstract" thumbnails on Publications, Projects and the home page.
const ICONS = {
  PARP1: [
    "#2350D8",
    '<path d="M35 15c0 30 50 30 50 60s-50 30-50 60" fill="none" stroke="currentColor" stroke-width="5"/><path d="M85 15c0 30-50 30-50 60s50 30 50 60" fill="none" stroke="currentColor" stroke-width="5" opacity=".45"/><line x1="41" y1="34" x2="79" y2="34" stroke="currentColor" stroke-width="4"/><line x1="35" y1="60" x2="85" y2="60" stroke="currentColor" stroke-width="4"/><line x1="41" y1="86" x2="79" y2="86" stroke="currentColor" stroke-width="4"/>',
  ],
  Immunotherapy: [
    "#1A8A80",
    '<path d="M60 15v35M60 50 30 100M60 50l30 50" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><rect x="46" y="8" width="28" height="14" rx="4" fill="currentColor"/>',
  ],
  "Alzheimer\'s": [
    "#7B5EC7",
    '<path d="M60 20c-22 0-32 18-28 34-8 6-8 20 2 24-2 12 10 22 22 18 4 8 20 8 24 0 12 4 24-6 22-18 10-4 10-18 2-24 4-16-6-34-22-34z" fill="none" stroke="currentColor" stroke-width="5"/><path d="M50 40q6 6 0 12M68 40q-6 6 0 12M50 66q6 6 0 12" fill="none" stroke="currentColor" stroke-width="4"/>',
  ],
  Phosphodiesterases: [
    "#BF6D1C",
    '<polygon points="60,15 100,37 100,83 60,105 20,83 20,37" fill="none" stroke="currentColor" stroke-width="5"/><path d="M40 60h15l8-16 10 32 8-16h9" fill="none" stroke="currentColor" stroke-width="4"/>',
  ],
  "sGC and H-NOX": [
    "#2350D8",
    '<circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="60" cy="60" r="8" fill="currentColor"/><path d="M60 22v10M60 88v10M22 60h10M88 60h10" stroke="currentColor" stroke-width="4"/>',
  ],
  "Drug discovery": [
    "#1A8A80",
    '<circle cx="46" cy="46" r="24" fill="none" stroke="currentColor" stroke-width="6"/><line x1="64" y1="64" x2="94" y2="94" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><circle cx="46" cy="46" r="7" fill="currentColor"/>',
  ],
  Kinases: [
    "#7B5EC7",
    '<path d="M20 75q20-40 40 0t40 0" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="90" cy="35" r="10" fill="none" stroke="currentColor" stroke-width="4"/><text x="90" y="40" font-size="11" text-anchor="middle" fill="currentColor" font-family="sans-serif">P</text>',
  ],
  "Food security": [
    "#3F8F4A",
    '<path d="M60 100V45c0-25 20-30 35-28-2 22-14 33-35 35" fill="none" stroke="currentColor" stroke-width="5"/><path d="M60 55c0-20-16-28-35-27 1 20 12 30 35 30" fill="none" stroke="currentColor" stroke-width="5"/>',
  ],
  "Protein dynamics": [
    "#2350D8",
    '<path d="M14 70q14-46 29-10t29-10t29-10" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="29" cy="52" r="5" fill="currentColor"/><circle cx="58" cy="42" r="5" fill="currentColor"/><circle cx="87" cy="52" r="5" fill="currentColor"/>',
  ],
  Signalling: [
    "#1A8A80",
    '<circle cx="60" cy="60" r="28" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="60" cy="60" r="7" fill="currentColor"/><path d="M60 24v10M60 86v10M24 60h10M86 60h10" stroke="currentColor" stroke-width="4"/>',
  ],
  Immunology: [
    "#7B5EC7",
    '<path d="M60 15v35M60 50 30 100M60 50l30 50" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><rect x="46" y="8" width="28" height="14" rx="4" fill="currentColor"/>',
  ],
  "Biologics design": [
    "#3F8F4A",
    '<polygon points="60,20 85,35 85,65 60,80 35,65 35,35" fill="none" stroke="currentColor" stroke-width="5"/><polygon points="95,75 109,83 109,97 95,105 81,97 81,83" fill="none" stroke="currentColor" stroke-width="4" opacity=".65"/><line x1="78" y1="68" x2="90" y2="78" stroke="currentColor" stroke-width="4"/>',
  ],
  "Protein modelling and dynamics": [
    "#2350D8",
    '<path d="M14 70q14-46 29-10t29-10t29-10" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="29" cy="52" r="5" fill="currentColor"/><circle cx="58" cy="42" r="5" fill="currentColor"/><circle cx="87" cy="52" r="5" fill="currentColor"/>',
  ],
  "Drug discovery and design": [
    "#1A8A80",
    '<circle cx="46" cy="46" r="24" fill="none" stroke="currentColor" stroke-width="6"/><line x1="64" y1="64" x2="94" y2="94" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><circle cx="46" cy="46" r="7" fill="currentColor"/>',
  ],
  "Biologics and immunoinformatics design": [
    "#3F8F4A",
    '<polygon points="60,20 85,35 85,65 60,80 35,65 35,35" fill="none" stroke="currentColor" stroke-width="5"/><polygon points="95,75 109,83 109,97 95,105 81,97 81,83" fill="none" stroke="currentColor" stroke-width="4" opacity=".65"/><line x1="78" y1="68" x2="90" y2="78" stroke="currentColor" stroke-width="4"/>',
  ],
  "Disease biomarkers and neuroimmunology": [
    "#BF6D1C",
    '<path d="M60 20c-22 0-32 18-28 34-8 6-8 20 2 24-2 12 10 22 22 18 4 8 20 8 24 0 12 4 24-6 22-18 10-4 10-18 2-24 4-16-6-34-22-34z" fill="none" stroke="currentColor" stroke-width="5"/><path d="M50 40q6 6 0 12M68 40q-6 6 0 12M50 66q6 6 0 12" fill="none" stroke="currentColor" stroke-width="4"/>',
  ],
  "Cardiovascular disease": [
    "#2350D8",
    '<path d="M20 65 H45 L52 45 L62 85 L72 55 L80 65 H100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
  ],
  "Cancer therapeutics": [
    "#BF6D1C",
    '<path d="M35 15c0 30 50 30 50 60s-50 30-50 60" fill="none" stroke="currentColor" stroke-width="5"/><path d="M85 15c0 30-50 30-50 60s50 30 50 60" fill="none" stroke="currentColor" stroke-width="5" opacity=".45"/><line x1="41" y1="34" x2="79" y2="34" stroke="currentColor" stroke-width="4"/><line x1="35" y1="60" x2="85" y2="60" stroke="currentColor" stroke-width="4"/><line x1="41" y1="86" x2="79" y2="86" stroke="currentColor" stroke-width="4"/>',
  ],
  "Infectious disease": [
    "#1A8A80",
    '<circle cx="60" cy="60" r="22" fill="none" stroke="currentColor" stroke-width="5"/><line x1="60" y1="18" x2="60" y2="30" stroke="currentColor" stroke-width="4"/><line x1="60" y1="90" x2="60" y2="102" stroke="currentColor" stroke-width="4"/><line x1="18" y1="60" x2="30" y2="60" stroke="currentColor" stroke-width="4"/><line x1="90" y1="60" x2="102" y2="60" stroke="currentColor" stroke-width="4"/><line x1="31" y1="31" x2="39" y2="39" stroke="currentColor" stroke-width="4"/><line x1="81" y1="81" x2="89" y2="89" stroke="currentColor" stroke-width="4"/><line x1="89" y1="31" x2="81" y2="39" stroke="currentColor" stroke-width="4"/><line x1="39" y1="81" x2="31" y2="89" stroke="currentColor" stroke-width="4"/>',
  ],
  "Inflammatory and autoimmune disease": [
    "#7B5EC7",
    '<path d="M60 15v35M60 50 30 100M60 50l30 50" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><rect x="46" y="8" width="28" height="14" rx="4" fill="currentColor"/>',
  ],
  Neurodegeneration: [
    "#3F8F4A",
    '<path d="M60 20c-22 0-32 18-28 34-8 6-8 20 2 24-2 12 10 22 22 18 4 8 20 8 24 0 12 4 24-6 22-18 10-4 10-18 2-24 4-16-6-34-22-34z" fill="none" stroke="currentColor" stroke-width="5"/><path d="M50 40q6 6 0 12M68 40q-6 6 0 12M50 66q6 6 0 12" fill="none" stroke="currentColor" stroke-width="4"/>',
  ],
  Tools: [
    "#53646F",
    '<path d="M75 30a15 15 0 11-21 21L30 85l-8 8 5 5 8-8 34-24a15 15 0 0021-21z" fill="none" stroke="currentColor" stroke-width="5"/>',
  ],
  Other: [
    "#53646F",
    '<path d="M50 20h20v25l18 45a8 8 0 01-8 12H40a8 8 0 01-8-12l18-45z" fill="none" stroke="currentColor" stroke-width="5"/><path d="M45 70h30" stroke="currentColor" stroke-width="4"/>',
  ],
};
// Short field tags used by pubs.js reuse the icons above
ICONS["Cancer"] = ICONS["Cancer therapeutics"];
ICONS["Cardiovascular"] = ICONS["Cardiovascular disease"];
ICONS["Immunoinformatics"] = ICONS["Immunotherapy"];
ICONS["Neuroinformatics"] = ICONS["Neurodegeneration"];
ICONS["Structural biology"] = ICONS["Protein dynamics"];
// Fallback icons for images that fail to load (typo in a path, missing file)
const FB = {};
let fbN = 0;
function imgFail(img) {
  const w = img.parentNode,
    f = FB[w.dataset.fb];
  if (f) {
    w.style.color = f.color;
    w.innerHTML = f.svg;
  }
  if (window.SITE && window.SITE.warn)
    window.SITE.warn(
      "Image not found: <b>" +
        img.getAttribute("src") +
        "</b> - check the file is in the images folder and the name matches exactly (spelling and capital letters).",
    );
}
function iconFor(tags, image) {
  const k = (tags || []).find((t) => ICONS[t]) || "Other";
  const [c, svg] = ICONS[k];
  const iconSvg =
    '<svg viewBox="0 0 120 120" width="52" height="52" aria-hidden="true">' + svg + "</svg>";
  if (image) {
    const id = ++fbN;
    FB[id] = { color: c, svg: iconSvg };
    return (
      '<div class="fig" data-fb="' +
      id +
      '" style="color:' +
      c +
      '"><img src="' +
      image +
      '" alt="" style="width:100%;height:100%;object-fit:cover" onerror="imgFail(this)"></div>'
    );
  }
  return '<div class="fig" style="color:' + c + '">' + iconSvg + "</div>";
}
