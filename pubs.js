// =====================================================================
//  PUBLICATIONS  (edit this file to add or change papers)
// =====================================================================
//
//  HOW TO ADD A PAPER
//  1. Copy any block from PUBS below and paste it at the TOP of the list
//     (newest first).
//  2. Fill in year, title, authors, journal.
//  3. Choose tags ONLY from the TAGS list just below (spelling must match).
//  4. doi:   "10.1016/j.xxx"  makes the "Find paper" link a DOI link.
//     image: "images/papers/name.jpg"  replaces the auto-generated icon.
//     Leave doi or image as "" if you don't have them.
//  5. Not published yet? Add   status: "Submitted"   (or "Under review").
//     A badge replaces the DOI / Find paper link. Put the target journal in
//     journal:, e.g. "Submitted to Nature Communications". When it is
//     accepted, delete the status line and add the doi.
//
//  HOW TO ADD / REMOVE / RENAME A TAG
//  - Add the new name to TAGS (one line), then use it in any paper.
//  - Remove a tag: delete it from TAGS and from every paper that uses it.
//    In editing mode (config.js showTodo:true) a red box lists any paper
//    that uses a tag that is not in TAGS, so typos are easy to catch.
//  - The filter buttons on the Publications page are built automatically
//    from the tags that papers actually use.
//
// =====================================================================

const TAGS = [
  "Cancer",
  "Cardiovascular",
  "Immunoinformatics",
  "Neuroinformatics",
  "Infectious disease",
  "Drug discovery",
  "Structural biology",
  "Tools",
  "Other",
];

// =====================================================================
//  GOOGLE SCHOLAR NUMBERS (shown on Publications and, smaller, on home)
// =====================================================================
//  Copy them from the table on your Scholar profile. Google does not let
//  websites read them automatically, so update by hand once or twice a
//  year and change "updated" to that month.
//    show: false   hides the bar everywhere
//    home: false   hides it on the home page only
const SCHOLAR = {
  show: true,
  home: true,

  // "All" column
  citations: 444,
  hIndex: 11,
  i10: 12,

  // "Since 20xx" column
  since: 2021,
  citationsSince: 378,
  hIndexSince: 10,
  i10Since: 10,

  updated: "Oct 2026", // the month you copied the numbers
  // Better: your profile link, https://scholar.google.com/citations?user=YOUR_ID
  url: "https://scholar.google.com/scholar?q=author%3A%22Rana+Rehan+Khalid%22",
};

// =====================================================================
//  PAPERS, newest first
// =====================================================================
const PUBS = [
  // ---- SUBMITTED / UNDER REVIEW (remove the // to activate this example) ----

  {
    year: 2026,
    title: "Elucidating TNF-α Trimer Dynamics: A Comparative Molecular Dynamics Study of Antibody and Receptor Decoy Inhibition Mechanisms",
    authors: "Koser, Alvi, Tariq,  Khalid",
    journal: "MOlecular informatics",
    tags: [ "Immunoinformatics", "Drug discovery"],
    status: "Submitted",
    doi: "",
    image: "",
  },
  {
    year: 2026,
    title: "Atomistic Insights into Catecholamine-Dependent Gαs and Gαi Coupling Reveal Distinct Mechanisms of β1-Adrenergic Receptor Signaling",
    authors: "Rehman, Selim,  Khalid",
    journal: "Computational Biology and Chemistry",
    tags: [ "Immunoinformatics", "Glycosylation"],
    status: "Submitted",
    doi: "",
    image: "",
  },
  {
    year: 2026,
    title: "Context-Dependent Modulation of SARS-CoV-2 Spike Receptor-Binding Domain Stability by Glycosylation: Implications for Host Binding and Immune Escape",
    authors: "Zainab, Alvi,  Khalid",
    journal: "Computational Biology and Chemistry",
    tags: [ "Immunoinformatics", "Glycosylation"],
    status: "Submitted",
    doi: "",
    image: "",
  },

  {
    year: 2026,
    title:
      "Integrating deep learning model for precision design of MERS antibodies with augmented affinity against SARS-CoV-2",
    authors: "Irshad, Ur-Rehman, Koser, Alvi, Usman, Khalid",
    journal: "Journal of Biomolecular Structure and Dynamics",
    tags: ["Immunoinformatics", "Drug discovery"],
    doi: "10.1080/07391102.2026.2741688",
    image: "",
  },
  {
    year: 2026,
    title:
      "Molecular insights into PARP1 activation: structural dynamics of DNA, NAD+, and zinc-mediated allosteric regulation",
    authors: "Munir, Naseer, Koser, Khalid",
    journal: "J Biomol Struct Dyn 44(11)",
    tags: ["Cancer"],
    doi: "",
    image: "",
  },
  {
    year: 2025,
    title:
      "Deep learning-guided rational engineering of synergistic PD-1 and LAG-3 blockade for enhanced tumor immunomodulation",
    authors: "Mazhar, Koser, Khalid",
    journal: "J Comput Aided Mol Des 39(2)",
    tags: ["Cancer", "Immunoinformatics"],
    doi: "",
    image: "",
  },
  {
    year: 2025,
    title:
      "Multi-cohort cerebrospinal fluid proteomics identifies robust molecular signatures across the Alzheimer disease continuum",
    authors: "Ali, Timsina, Western, et al., Khalid, et al.",
    journal: "Neuron 113(9)",
    tags: ["Neuroinformatics"],
    doi: "",
    image: "",
  },
  {
    year: 2024,
    title:
      "Identification of selective inhibitors for phosphodiesterase 5A using e-pharmacophore modelling and large-scale virtual screening",
    authors: "Maryam, Siddiqi, Vedithi, Ece, Khalid",
    journal: "J Biomol Struct Dyn 42(15)",
    tags: ["Cardiovascular", "Drug discovery"],
    doi: "",
    image: "",
  },
  {
    year: 2024,
    title:
      "Leveraging shape screening and molecular dynamics simulations to optimize PARP1-specific chemo/radio-potentiators for antitumor drug design",
    authors: "Khizer, Maryam, Ansari, Ahmad, Khalid",
    journal: "Arch Biochem Biophys 756",
    tags: ["Cancer", "Drug discovery"],
    doi: "",
    image: "",
  },

  {
    year: 2023,
    title:
      "A three-dimensional active biochar for sintering in steel industry and remove methylene blue by synergistic activation of H3PO4 and ZnCl2",
    authors: "Zhang, Shen, Ahmad, Zhou, Khalid, Ibrahim, Bokhari",
    journal: "Fuel 336",
    tags: ["Other"],
    doi: "",
    image: "",
  },
  {
    year: 2023,
    title:
      "Multi-cohort cerebrospinal fluid proteomics identifies robust molecular signatures for asymptomatic and symptomatic Alzheimer's disease",
    authors: "Ali, Timsina, Wang, Do, Western, Sung, Cruchaga",
    journal: "Alzheimer's & Dementia 19, e077212",
    tags: ["Neuroinformatics"],
    doi: "",
    image: "",
  },
  {
    year: 2022,
    title:
      "A recursive molecular docking coupled with energy-based pose-rescoring and MD simulations to identify hsGC betaH-NOX allosteric modulators",
    authors: "Khalid, Maryam, Cinaroglu, Siddiqi, Sezerman",
    journal: "J Biomol Struct Dyn 40(13)",
    tags: ["Cardiovascular", "Drug discovery"],
    doi: "",
    image: "",
  },
  {
    year: 2021,
    title:
      "E-pharmacophore based virtual screening for identification of dual specific PDE5A and PDE3A inhibitors as potential leads against cardiovascular diseases",
    authors: "Maryam, Khalid, Siddiqi, Ece",
    journal: "J Biomol Struct Dyn 39(7)",
    tags: ["Cardiovascular", "Drug discovery"],
    doi: "",
    image: "",
  },
  {
    year: 2020,
    title:
      "Exploring the structural basis of conformational heterogeneity and autoinhibition of human cGMP-specific protein kinase I-alpha through computational modelling and molecular dynamics",
    authors: "Maryam, Khalid, Vedithi, Ece, Cinaroglu, Siddiqi, et al.",
    journal: "",
    tags: ["Cardiovascular", "Structural biology"],
    doi: "",
    image: "",
  },
  {
    year: 2020,
    title:
      "Probing the structural dynamics of the catalytic domain of human soluble guanylate cyclase",
    authors: "Khalid, Maryam, Sezerman, Mylonas, Siddiqi, et al.",
    journal: "Sci Rep 10(1)",
    tags: ["Cardiovascular", "Structural biology"],
    doi: "",
    image: "",
  },
  {
    year: 2019,
    title:
      "Computational screening of medicinal plant phytochemicals to discover potent pan-serotype inhibitors against dengue virus",
    authors: "Tahir ul Qamar, Maryam, Muneer, Xing, Ashfaq, Khan, et al.",
    journal: "Sci Rep 9(1)",
    tags: ["Infectious disease", "Drug discovery"],
    doi: "",
    image: "",
  },
  {
    year: 2019,
    title:
      "Cryo-EM density map fitting driven in-silico structure of human soluble guanylate cyclase reveals functional aspects of inter-domain cross talk upon NO binding",
    authors: "Khalid, Maryam, Fadouloglou, Siddiqi, Zhang",
    journal: "J Mol Graph Model 90",
    tags: ["Cardiovascular", "Structural biology"],
    doi: "",
    image: "",
  },
  {
    year: 2019,
    title:
      "Dynamic characterization of the human heme nitric oxide/oxygen (HNOX) domain under the influence of diatomic gaseous ligands",
    authors: "Khalid, Siddiqi, Mylonas, Maryam, Kokkinidis",
    journal: "Int J Mol Sci 20(3)",
    tags: ["Cardiovascular", "Structural biology"],
    doi: "",
    image: "",
  },
  {
    year: 2019,
    title:
      "The molecular organization of human cGMP specific phosphodiesterase 6 (PDE6): structural implications of somatic mutations in cancer and retinitis pigmentosa",
    authors: "Maryam, Vedithi, Khalid, Alsulami, Torres, Siddiqi, et al.",
    journal: "",
    tags: ["Cancer", "Structural biology"],
    doi: "",
    image: "",
  },
  {
    year: 2018,
    title:
      "Comparative studies of the dynamics effects of BAY60-2770 and BAY58-2667 binding with human and bacterial H-NOX domains",
    authors: "Khalid, ul Qamar, Maryam, Ashique, Anwar, Geesi, et al.",
    journal: "Molecules 23",
    tags: ["Cardiovascular", "Structural biology"],
    doi: "",
    image: "",
  },
  {
    year: 2018,
    title:
      "A computational structural analysis of functional attributes of hypodermin A and B proteins: a way forward for vaccine development",
    authors: "Arif, Siddiqi, Ahmed, Afzal, Umer, Maryam, Khalid, et al.",
    journal: "Pak J Pharm Sci 31(6)",
    tags: ["Immunoinformatics"],
    doi: "",
    image: "",
  },
  {
    year: 2018,
    title:
      "Decreased serum PON1 arylesterase activity in familial hypercholesterolemia patients with a mutated LDLR gene",
    authors: "Idrees, Siddiqi, Ajmal, Akram, Khalid, Hussain, Qamar, et al.",
    journal: "Genet Mol Biol 41(3)",
    tags: ["Cardiovascular"],
    doi: "",
    image: "",
  },
  {
    year: 2018,
    title:
      "Design, synthesis, characterization and computational docking studies of novel sulfonamide derivatives",
    authors: "Saleem, Maryam, Bokhari, Ashiq, Rauf, Khalid, et al.",
    journal: "EXCLI J 17",
    tags: ["Drug discovery"],
    doi: "",
    image: "",
  },
  {
    year: 2017,
    title:
      "Statistical analysis of risk factors affecting the prognosis of biliary atresia in infants",
    authors: "Maryam, Aslam, Saif, Aslam, Tusleem, Qamar, Abdullah, et al.",
    journal: "Matrix Sci Pharma 1(2)",
    tags: ["Other"],
    doi: "",
    image: "",
  },
  {
    year: 2013,
    title:
      "Functional annotation of the cda1 gene from Bacillus thuringiensis through homology modeling and molecular docking",
    authors: "Ali, Mehmood, Hussain, Sehar, Khalid, Iqbal",
    journal: "Pak J Life Soc Sci 11(3)",
    tags: ["Structural biology"],
    doi: "",
    image: "",
  },
  {
    year: 2012,
    title:
      "Image processing based diagnosis of thyroid abnormalities: thyroid computed tomographic scans detector",
    authors: "Khalid, Haque, Ali",
    journal: "LAP Lambert Academic Publishing (book)",
    tags: ["Other"],
    doi: "",
    image: "",
  },
  {
    year: 2012,
    title: "Development of Bioinfo-Portal tool for the analysis of genomic and proteomic data",
    authors: "Khalid, Hussain, Ali, Ahmad, Haque, Qamar",
    journal: "David Publishing 6, 485-488",
    tags: ["Tools"],
    doi: "",
    image: "",
  },
  {
    year: 2011,
    title: "Development of a tool for the analysis of plant stress proteins",
    authors: "Ali, Khalid, Nawaz, Qamar",
    journal: "Int J Bioautomation 15(4)",
    tags: ["Tools"],
    doi: "",
    image: "",
  },
];

// =====================================================================
//  CODE BELOW RENDERS THE LISTS. You normally never need to edit it.
// =====================================================================

// Catch typos in tags (shows in editing mode only)
PUBS.forEach(function (p) {
  p.tags.forEach(function (t) {
    if (TAGS.indexOf(t) < 0 && window.SITE && window.SITE.warn) {
      window.SITE.warn(
        'Unknown tag "<b>' +
          t +
          '</b>" in paper "' +
          p.title.slice(0, 40) +
          '...". Add it to TAGS in pubs.js or fix the spelling.',
      );
    }
  });
});

// Style for the "Submitted" / "Under review" badge
(function () {
  const st = document.createElement("style");
  st.textContent =
    ".status-badge{display:inline-block;font-size:12px;font-weight:600;padding:2px 8px;border:1px solid var(--cobalt);color:var(--cobalt);border-radius:999px;white-space:nowrap}";
  document.head.appendChild(st);
})();

// ---- Publications list (only runs on publications.html) ----
const list = document.getElementById("list");
const q = document.getElementById("q");
const cnt = document.getElementById("n");
const chips = document.getElementById("chips");
const urlTag = new URLSearchParams(location.search).get("tag");
let tag = urlTag && PUBS.some((p) => p.tags.includes(urlTag)) ? urlTag : "All";

function paperLink(p) {
  if (p.status) {
    return '<span class="status-badge">' + p.status + "</span>";
  }
  if (p.doi) {
    return '<a href="https://doi.org/' + p.doi + '">DOI</a>';
  }
  return (
    '<a href="https://scholar.google.com/scholar?q=' +
    encodeURIComponent(p.title) +
    '">Find paper</a>'
  );
}

function paperRow(p) {
  const tagHtml = p.tags.map((x) => '<span class="tag">' + x + "</span>").join("");
  return (
    "<li>" +
    '<div class="pnum"><span class="y">' +
    p.year +
    "</span>" +
    paperLink(p) +
    "</div>" +
    "<div><b>" +
    p.title +
    "</b><br>" +
    "<i>" +
    p.authors.replace(/\.$/, "") +
    (p.journal ? ". " + p.journal : "") +
    "</i><br>" +
    '<span class="pl">' +
    tagHtml +
    "</span></div>" +
    iconFor(p.tags, p.image) +
    "</li>"
  );
}

function show() {
  const text = q.value.toLowerCase().trim();
  const found = PUBS.filter(
    (p) =>
      (tag === "All" || p.tags.includes(tag)) &&
      [p.year, p.title, p.authors, p.journal, p.tags.join(" "), p.status || ""]
        .join(" ")
        .toLowerCase()
        .includes(text),
  );
  cnt.textContent = found.length + " of " + PUBS.length + " papers shown";
  list.innerHTML = found.length
    ? found.map(paperRow).join("")
    : "<li><div></div><div>No papers match. Try a shorter search or choose All.</div></li>";
}

if (list && q) {
  if (chips) {
    // buttons are built from the tags papers actually use, in TAGS order
    const used = TAGS.filter((t) => PUBS.some((p) => p.tags.includes(t)));
    chips.innerHTML = ["All"]
      .concat(used)
      .map(
        (x) =>
          '<button type="button" class="chip" aria-pressed="' +
          (x === tag) +
          '">' +
          x +
          "</button>",
      )
      .join("");
    chips.addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      tag = b.textContent;
      [...chips.children].forEach((c) => c.setAttribute("aria-pressed", c === b));
      show();
    });
  }
  q.addEventListener("input", show);
  show();
}

// ---- Google Scholar bar (reads SCHOLAR above) ----
function scholarBar(S, compact) {
  if (!S || S.show === false) return "";
  const edit = !!(window.SITE && window.SITE.showTodo);
  const num = (v) => (v || v === 0 ? String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-");
  let note = "";
  if (edit) {
    if (!S.updated) {
      note = ' <span class="field-todo">add the month you copied these numbers (updated)</span>';
    } else {
      const d = Date.parse("1 " + S.updated);
      if (!isNaN(d) && (Date.now() - d) / 2629800000 > 12) {
        note = ' <span class="field-todo">these numbers are over a year old: refresh them</span>';
      }
    }
  }
  const link = S.url ? '<a href="' + S.url + '">View on Google Scholar &rarr;</a>' : "";

  if (compact) {
    return (
      '<div class="scholar-compact" role="group" aria-label="Google Scholar metrics">' +
      "<span><b>" +
      num(S.citations) +
      "</b> citations</span>" +
      "<span><b>" +
      num(S.hIndex) +
      "</b> h-index</span>" +
      "<span><b>" +
      num(S.i10) +
      "</b> i10-index</span>" +
      link +
      note +
      "</div>"
    );
  }

  const tile = (label, all, since) =>
    '<div class="stat"><dt>' +
    label +
    '</dt><dd class="n">' +
    num(all) +
    "</dd>" +
    (S.since && (since || since === 0)
      ? '<dd class="since">' + num(since) + " since " + S.since + "</dd>"
      : "") +
    "</div>";
  return (
    '<section class="scholar-bar" aria-label="Google Scholar metrics"><dl class="stats">' +
    tile("Citations", S.citations, S.citationsSince) +
    tile("h-index", S.hIndex, S.hIndexSince) +
    tile("i10-index", S.i10, S.i10Since) +
    '</dl><p class="scholar-meta"><span>Source: Google Scholar' +
    (S.updated ? ", updated " + S.updated : "") +
    "</span>" +
    link +
    note +
    "</p></section>"
  );
}

(function () {
  if (SCHOLAR.show === false) return;

  // Styles live here so this one file is enough (no style.css edit needed)
  const st = document.createElement("style");
  st.textContent = [
    ".scholar-bar{margin:0 0 28px}",
    ".scholar-bar dl.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:0}",
    ".scholar-bar .stat{background:var(--white);border:1px solid var(--line);border-top:4px solid var(--cobalt);border-radius:10px;padding:16px 18px}",
    ".scholar-bar dt{font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--slate)}",
    '.scholar-bar dd.n{font:600 34px/1.1 "Newsreader",Georgia,serif;color:var(--ink);margin:6px 0 2px}',
    ".scholar-bar dd.since{font-size:14px;color:var(--slate)}",
    ".scholar-meta{display:flex;flex-wrap:wrap;gap:6px 18px;justify-content:space-between;margin:10px 2px 0;font-size:14px;color:var(--slate)}",
    ".scholar-meta a,.scholar-compact a{font-weight:600}",
    ".scholar-compact{display:flex;flex-wrap:wrap;gap:8px 24px;align-items:baseline;margin:0 0 28px;padding:14px 18px;background:var(--white);border:1px solid var(--line);border-radius:10px;font-size:15px;color:var(--slate)}",
    '.scholar-compact b{font:600 22px "Newsreader",Georgia,serif;color:var(--ink);margin-right:4px}',
    ".field-todo{color:var(--slate);font-style:italic;font-size:13px}",
    "@media(max-width:480px){.scholar-bar dl.stats{grid-template-columns:1fr}}",
  ].join("\n");
  document.head.appendChild(st);

  // Placeholders are created automatically if the HTML does not have them
  let a = document.getElementById("scholar-stats");
  let b = document.getElementById("scholar-stats-home");
  if (!a && q) {
    a = document.createElement("div");
    a.id = "scholar-stats";
    q.parentNode.insertBefore(a, q);
  }
  const recent = document.getElementById("recent");
  if (!b && recent && SCHOLAR.home !== false) {
    b = document.createElement("div");
    b.id = "scholar-stats-home";
    recent.parentNode.insertBefore(b, recent);
  }
  if (a) a.innerHTML = scholarBar(SCHOLAR, false);
  if (b && SCHOLAR.home !== false) b.innerHTML = scholarBar(SCHOLAR, true);
})();