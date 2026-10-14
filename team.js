// Dr. Khalid's photo: copy the file into the images folder, then type its path here,
// for example "images/rana-khalid.jpg". Leave "" to keep the coloured initials.
const PI_PHOTO = "images/Dr_Rana_rehan.png";

// EDIT THIS FILE to update the Team page.  One person per line, blank line between people.
// status: "current" or "alumni"      degree: "PhD" or "MS"
// photo:  optional, e.g. "images/name.jpg"  (leave "" to show coloured initials)
// project (current students) / thesis (alumni): leave "" until known.
// While config.js has showTodo:true, empty fields show a small grey reminder;
// with showTodo:false (public mode) those reminders disappear.
const TEAM = [
  // ---- current PhD students ----
  {
    name: "Muhammad Najaf Ashraf",
    degree: "PhD",
    status: "current",
    start: 2023,
    end: null,
    project: "",
    photo: "images/Najeef.jpeg",
    page: "",
    links: { linkedin: "https://www.linkedin.com/in/najaf-ashraf-a8671238" },
  },

  {
    name: "Shafaq Shakeel",
    degree: "PhD",
    status: "current",
    start: 2024,
    end: null,
    project: "",
    photo: "images/Shafaq.jpeg",
    page: "",
    links: { linkedin: "https://www.linkedin.com/in/shafaq-shakeel-849813347" },
  },

  {
    name: "Mudasir Alvi",
    degree: "PhD",
    status: "current",
    start: 2026,
    end: null,
    project: "",
    photo: "images/Mudasir.png",
    page: "",
    links: { linkedin: "https://www.linkedin.com/in/mudasir-alvi-b25215258" },
  },

  {
    name: "Areesha Ejaz",
    degree: "PhD",
    status: "current",
    start: 2026,
    end: null,
    project: "",
    photo: "",
    page: "",
    links: { linkedin: "https://www.linkedin.com/in/areesha-ejaz-83971043b" },
  },

  // ---- current MS students ----
  {
    name: "Syeda Fatima Mehboob",
    degree: "MS",
    status: "current",
    start: 2025,
    end: null,
    project: "",
    photo: "",
    links: { linkedin: "https://www.linkedin.com/in/fatima-mehboob-522b0443b" },
  },

  {
    name: "Taskeen Koser",
    degree: "MS",
    status: "current",
    start: 2025,
    end: null,
    project: "",
    photo: "images/Taskeen.jpeg",
    links: { linkedin: "https://www.linkedin.com/in/taskeen-koser-0b7374238" },
  },

  {
    name: "Atta ur Rahman",
    degree: "MS",
    status: "current",
    start: 2025,
    end: null,
    project: "",
    photo: "images/Atta.png",
    links: { linkedin: "https://www.linkedin.com/in/atta-ur-rehman-a709171b9" },
  },

  {
    name: "Saad Khan",
    degree: "MS",
    status: "current",
    start: 2026,
    end: null,
    project: "",
    photo: "images/Saad.jpeg",
    links: { linkedin: "https://www.linkedin.com/in/saad-khan-929b94202" },
  },

  {
    name: "Rumesa Fayyaz",
    degree: "MS",
    status: "current",
    start: 2025,
    end: null,
    project: "",
    photo: "images/Rumesa.jpeg",
    links: { linkedin: "https://www.linkedin.com/in/rumesa-fayyaz-199b02304" },
  },

  {
    name: "Areeba Sultana",
    degree: "MS",
    status: "current",
    start: 2025,
    end: null,
    project: "",
    photo: "",
    links: { linkedin: "https://www.linkedin.com/in/areeba-sultana-136b90374" },
  },

  // ---- alumni: PhD ----
  // (none yet)

  // ---- alumni: MS ----
  {
    name: "Hifza",
    degree: "MS",
    status: "alumni",
    start: null,
    end: null,
    now: "",
    thesis:
      "Leveraging Shape Screening and Molecular Dynamics Simulations to Optimize PARP1-Specific Chemo/Radio-Potentiators for Antitumor Drug Design",
    links: { linkedin: "" },
  },

  {
    name: "Noorulain",
    degree: "MS",
    status: "alumni",
    start: null,
    end: null,
    now: "",
    thesis:
      "Computational Exploration of Interdomain Crosstalk Networks in PARP1: Implications for Therapeutic Strategies in BRCA1-Mutated Cancers",
    links: { linkedin: "" },
  },

  {
    name: "Hunza Usman",
    degree: "MS",
    status: "alumni",
    start: null,
    end: null,
    now: "Senior Officer Sales (Administrative), Homebridge Beaconhouse Regional Office",
    thesis:
      "Leveraging Fold Conserveness: Exhaustive Computational Exploration of Cross-Neutralization Potentials of MERS Antibodies Against SARS-CoV-2",
    photo: "images/Hunza.png.jpeg",
    links: { linkedin: "https://www.linkedin.com/in/hunza-usman-a60540393" },
  },

  {
    name: "Azka Munawar",
    degree: "MS",
    status: "alumni",
    start: null,
    end: null,
    now: "Content Strategist, Amazing Freedom Brands",
    thesis:
      "Computational Insights into Synergistic LAG-3 and PD-1 Inhibition: A Paradigm for Advanced Tumor Immunotherapy",
    photo: "images/Azka.png.jpeg",
    links: { linkedin: "https://www.linkedin.com/in/azka-munawar-1a1244287" },
  },

  {
    name: "Areesha Irshad",
    degree: "MS",
    status: "alumni",
    start: null,
    end: null,
    now: "PhD student, Bioinformatics, Computer Science Department, Vrije Universiteit Amsterdam, Netherlands",
    thesis:
      "Integrating Deep Learning Model for Precision Design of MERS Antibodies with Augmented Affinity Against SARS-CoV-2",
    links: { linkedin: "" },
    photo: "images/Areesha.jpeg",
  },

  {
    name: "Shanza Mazhar",
    degree: "MS",
    status: "alumni",
    start: null,
    end: null,
    now: "Teacher, Defence Grammar School",
    thesis:
      "Deep Learning-Guided Rational Engineering of Synergistic LAG-3 and PD-1 Blockade for Enhanced Tumor Immunomodulation",
    photo: "images/Shanza.png.jpeg",
    links: { linkedin: "https://www.linkedin.com/in/shanza-mazhar-822b8a1b0" },
  },

  {
    name: "Aliza Zainab",
    degree: "MS",
    status: "alumni",
    start: null,
    end: null,
    now: "",
    thesis:
      "Computational Investigation of Glycosylation Impact on SARS-CoV-2 RBD and Its Immune Escape Potential",
    links: { linkedin: "https://www.linkedin.com/in/aliza-zainab-370093198" },
  },

  {
    name: "Saman Shabir",
    degree: "MS",
    status: "alumni",
    start: null,
    end: null,
    now: "",
    thesis:
      "Structural and Functional Insights into G-Quadruplexes in Oncogenes: Mechanisms, Stability, and Therapeutic Potential in Cancer",
    photo: "images/Saman.jpeg",
    links: { linkedin: "https://www.linkedin.com/in/saman-x" },
  },

  {
    name: "Mudasir Alvi",
    degree: "MS",
    status: "alumni",
    start: null,
    end: null,
    now: "",
    thesis:
      "Development of a Hybrid Deep Learning Framework for Predicting Protein Mutation-Induced Structural and Chemical Shift Changes",
    photo: "images/Mudasir.png",
    links: { linkedin: "https://www.linkedin.com/in/mudasir-alvi-b25215258" },
  },

  {
    name: "Momina Farooq",
    degree: "MS",
    status: "alumni",
    start: 2024,
    end: 2026,
    now: "",
    thesis:
      "Computational Design of Next-Generation Peptide Therapeutics for Immune Checkpoint Blockade",
    photo: "images/Momina.jpeg",
    links: { linkedin: "https://www.linkedin.com/in/momina-farooq-a85917278" },
  },

  {
    name: "Laraib Saeed",
    degree: "MS",
    status: "alumni",
    start: 2024,
    end: 2026,
    now: "",
    thesis:
      "Motif-Informed Artificial Intelligence for Efficient Prediction of GPCR-Ligand Interactions",
    photo: "images/Laraib.jpeg",
    links: { linkedin: "https://www.linkedin.com/in/laraib-saeed-216160306" },
  },

  {
    name: "Ayesha Andleeb",
    degree: "MS",
    status: "alumni",
    start: null,
    end: null,
    now: "",
    thesis:
      "Mechanistic Understanding of TNF-alpha Inhibition by Infliximab through Stability, Interaction, and Energy Decomposition Analyses",
    links: { linkedin: "http://www.linkedin.com/in/ayesha-andleeb-16368743b" },
  },

  {
    name: "Nimra Bibi",
    degree: "MS",
    status: "alumni",
    start: 2024,
    end: 2026,
    now: "",
    thesis:
      "Unveiling the Structural Dynamics and Functional Landscape of TNF-alpha under Adalimumab Binding",
    links: { linkedin: "https://www.linkedin.com/in/nimra-aqeel-bb5ba42bb" },
  },
];

// ---- BS research interns (shown as a table, not cards) ----
// duration: free text, e.g. "Jun-Aug 2026 (8 weeks)".  project: what they worked on.
// The two sample rows are marked placeholder:true -- they show only in editing mode
// and vanish in public mode. Delete them once you add real interns (real rows
// don't need the placeholder flag).
const INTERNS = [
  {
    name: "Dayan Sajid",
    program: "BS Bioinformatics, Quaid-i-Azam University",
    duration: "Jun-Aug 2026 ",
    project: "QSAR MOdeling of GRK2 Inhibitors",
    links: { linkedin: "https://www.linkedin.com/in/dayyan-sajid-4032b6335" },
  
  }
  
  
];

// ================= rendering code (no need to edit below this line) =================
const EDIT = !!(window.SITE && window.SITE.showTodo);
const warn = (m) => {
  if (window.SITE && window.SITE.warn) window.SITE.warn(m);
};
const esc = (x) => String(x).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const todo = (t) => (EDIT ? '<p class="field-todo">' + t + "</p>" : "");
const ini = (n) => {
  const w = n.trim().split(/\s+/);
  return (w.length > 1 ? w[0][0] + w[1][0] : n.slice(0, 2)).toUpperCase();
};
// colours: slightly deepened teal/amber so initials stay readable (WCAG 3:1)
const PALETTE = [
  ["#E3ECFB", "#2350D8"],
  ["#E1F1EF", "#1A8A80"],
  ["#FBEEE1", "#BF6D1C"],
  ["#EEE9F9", "#7B5EC7"],
  ["#E7F3E8", "#3F8F4A"],
];
function paletteFor(n) {
  let h = 0;
  for (let i = 0; i < n.length; i++) h = (h * 31 + n.charCodeAt(i)) >>> 0;
  return PALETTE[h % PALETTE.length];
}
function lk(l) {
  return Object.entries(l || {})
    .filter((e) => e[1])
    .map((e) => '<a href="' + esc(e[1]) + '">' + (e[0] === "linkedin" ? "LinkedIn" : e[0]) + "</a>")
    .join(" &middot; ");
}

// if a photo path is wrong, fall back to initials and tell the editor
function photoFail(img) {
  const d = document.createElement("div");
  d.className = "mphoto av";
  d.style.background = img.dataset.bg;
  d.style.color = img.dataset.fg;
  d.textContent = img.dataset.ini;
  img.replaceWith(d);
  warn(
    "Photo not found: <b>" +
      esc(img.getAttribute("src")) +
      "</b> - check the file is in the images folder and the name matches exactly (spelling and capital letters).",
  );
}

function card(p) {
  const roleLine =
    p.status === "alumni"
      ? p.degree + " GRADUATE" + (p.start && p.end ? ", " + p.start + "\u2013" + p.end : "")
      : p.degree + " STUDENT" + (p.start ? ", SINCE " + p.start : "");
  const nm = p.page ? '<a href="' + esc(p.page) + '">' + esc(p.name) + "</a>" : esc(p.name);
  const pal = paletteFor(p.name);
  const photo = p.photo
    ? '<img class="mphoto" src="' +
      esc(p.photo) +
      '" alt="Photo of ' +
      esc(p.name) +
      '" style="object-fit:cover" data-ini="' +
      ini(p.name) +
      '" data-bg="' +
      pal[0] +
      '" data-fg="' +
      pal[1] +
      '" onerror="photoFail(this)">'
    : '<div class="mphoto av" style="background:' +
      pal[0] +
      ";color:" +
      pal[1] +
      '" aria-hidden="true">' +
      ini(p.name) +
      "</div>";
  const proj = p.project && p.project !== "Project topic (edit)" ? p.project : "";
  const sub =
    p.status === "alumni"
      ? p.thesis
        ? '<p class="thesis">' + esc(p.thesis) + "</p>"
        : todo("Thesis: add title")
      : proj
        ? '<p class="thesis">' + esc(proj) + "</p>"
        : todo("Project: add topic");
  const now = p.now
    ? '<p class="thesis">Now: ' + esc(p.now) + "</p>"
    : p.status === "alumni"
      ? todo("Now: add current position")
      : "";
  const links = lk(p.links) ? "<p>" + lk(p.links) + "</p>" : todo("LinkedIn: add profile link");
  return (
    '<div class="mcard">' +
    photo +
    '<div class="mcardc"><h3>' +
    nm +
    '</h3><p class="role">' +
    roleLine +
    "</p>" +
    sub +
    now +
    links +
    "</div></div>"
  );
}

function fill(id, f) {
  const el = document.getElementById(id);
  if (!el) return;
  const r = TEAM.filter(f);
  el.innerHTML = r.length ? r.map(card).join("") : '<p class="lead">No members listed yet.</p>';
}
fill("phd", (p) => p.status === "current" && p.degree === "PhD");
fill("ms", (p) => p.status === "current" && p.degree === "MS");
fill("alumni-phd", (p) => p.status === "alumni" && p.degree === "PhD");
fill("alumni-ms", (p) => p.status === "alumni" && p.degree === "MS");

// ---- interns table ----
function internRow(p) {
  const link =
    p.links && p.links.linkedin
      ? '<a href="' + esc(p.links.linkedin) + '">LinkedIn</a>'
      : EDIT
        ? '<span class="todo">add link</span>'
        : "";
  return (
    "<tr><td><b>" +
    esc(p.name) +
    "</b></td><td>" +
    esc(p.program) +
    "</td><td>" +
    esc(p.duration) +
    "</td><td>" +
    esc(p.project) +
    "</td><td>" +
    link +
    "</td></tr>"
  );
}
const internsBody = document.getElementById("interns-body");
if (internsBody) {
  const rows = INTERNS.filter((p) => EDIT || !p.placeholder);
  internsBody.innerHTML = rows.map(internRow).join("");
  if (!rows.length) {
    const sec = document.getElementById("interns-section");
    if (sec) sec.hidden = true;
  } // nothing to show yet: hide the whole section in public mode
}

// ---- check the data above and report mistakes (editing mode only) ----
(function validate() {
  const seen = {};
  TEAM.forEach((p, i) => {
    const id = "Team entry #" + (i + 1) + (p && p.name ? " (" + p.name + ")" : "");
    if (!p.name) warn(id + ": missing name");
    if (["PhD", "MS"].indexOf(p.degree) < 0)
      warn(id + ': degree must be "PhD" or "MS" (found "' + p.degree + '")');
    if (["current", "alumni"].indexOf(p.status) < 0)
      warn(id + ': status must be "current" or "alumni" (found "' + p.status + '")');
    const li = p.links && p.links.linkedin;
    if (li && !/^https?:\/\//.test(li)) warn(id + ": the LinkedIn link should start with https://");
    const key = p.name + "|" + p.status + "|" + p.degree;
    if (seen[key]) warn(id + ": listed twice with the same status and degree");
    seen[key] = 1;
  });
})();

// ---- Dr. Khalid's photo (set PI_PHOTO at the top of this file) ----
(function () {
  const el = document.querySelector(".pi-photo");
  if (!el || !PI_PHOTO) return;
  const img = document.createElement("img");
  img.className = "pi-photo";
  img.alt = "Photo of Dr. Rana Rehan Khalid";
  img.src = PI_PHOTO;
  img.style.objectFit = "cover";
  img.onerror = function () {
    img.replaceWith(el);
    warn(
      "Photo not found: <b>" +
        esc(PI_PHOTO) +
        "</b> - check the file is in the images folder and the name matches exactly (spelling and capital letters).",
    );
  };
  el.replaceWith(img);
})();
