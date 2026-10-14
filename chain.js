document.getElementById("yr").textContent = new Date().getFullYear();
(function () {
  const cv = document.getElementById("chain"),
    D = window.GRK2;
  if (!cv || !D) return;
  const cx = cv.getContext("2d");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const LIG = "#E08A2E",
    C1 = [35, 80, 216],
    C2 = [31, 154, 143],
    PAPER = [241, 245, 248];
  let W,
    H,
    S,
    amb = [],
    mx = -999,
    my = -999,
    yaw = 0.6,
    pitch = -0.2,
    tPitch = -0.2,
    tm = 0,
    paused = false;
  const lg = { x: 0, y: 0, vx: 0, vy: 0, a: 0, s: "roam", t: 0, cool: 120 };
  const R = (a, b) => a + Math.random() * (b - a);
  // GRK2 backbone from the uploaded structure; motion = lowest elastic-network modes + small thermal noise
  const N = D.ca.length / 3,
    brk = new Set(D.brk),
    pocket = D.pocket,
    M = D.modes,
    K = M.length;
  const amp = [5.5, 4.5, 3.6, 3, 2.5].slice(0, K),
    om = [0.011, 0.016, 0.021, 0.027, 0.033],
    ph = amp.map(() => R(0, 6.28));
  const pts = [];
  for (let i = 0; i < N; i++)
    pts.push({
      x: D.ca[3 * i],
      y: D.ca[3 * i + 1],
      z: D.ca[3 * i + 2],
      ss: D.ss[i],
      ox: 0,
      oy: 0,
      oz: 0,
    });
  function size() {
    const r = cv.getBoundingClientRect(),
      d = devicePixelRatio || 1;
    W = r.width;
    H = r.height;
    S = Math.min(W, H) / (2.25 * D.r);
    cv.width = W * d;
    cv.height = H * d;
    cx.setTransform(d, 0, 0, d, 0, 0);
    lg.x = W * 0.12;
    lg.y = H * 0.18;
    lg.vx = lg.vy = 0;
    lg.s = "roam";
    lg.cool = 120;
    amb = [];
    for (let i = 0; i < 9; i++)
      amb.push({
        x: R(0, W),
        y: R(0, H),
        vx: R(-0.25, 0.25),
        vy: R(-0.25, 0.25),
        a: R(0, 6),
        va: R(-0.01, 0.01),
        r: R(6, 11),
      });
    step();
    draw();
  }
  function ligand() {
    const T = [pts[pocket].sx, pts[pocket].sy];
    if (lg.s === "roam") {
      const dx = T[0] - lg.x,
        dy = T[1] - lg.y,
        d = Math.hypot(dx, dy) || 1;
      if (lg.cool > 0) lg.cool--;
      else {
        lg.vx += (dx / d) * 0.05;
        lg.vy += (dy / d) * 0.05;
      }
      lg.vx = (lg.vx + R(-0.09, 0.09)) * 0.985;
      lg.vy = (lg.vy + R(-0.09, 0.09)) * 0.985;
      const s = Math.hypot(lg.vx, lg.vy);
      if (s > 2.2) {
        lg.vx *= 2.2 / s;
        lg.vy *= 2.2 / s;
      }
      lg.x += lg.vx;
      lg.y += lg.vy;
      lg.a += 0.02;
      if (lg.x < 12 || lg.x > W - 12) lg.vx *= -1;
      if (lg.y < 12 || lg.y > H - 12) lg.vy *= -1;
      if (d < 30 && lg.cool === 0) {
        lg.s = "bound";
        lg.t = 300;
      }
    } else {
      let ox = T[0] - W / 2,
        oy = T[1] - H / 2,
        l = Math.hypot(ox, oy) || 1;
      ox = (ox / l) * 24;
      oy = (oy / l) * 24;
      lg.x += (T[0] + ox - lg.x) * 0.15;
      lg.y += (T[1] + oy - lg.y) * 0.15;
      lg.a += 0.01;
      if (--lg.t <= 0) {
        lg.s = "roam";
        lg.cool = 320;
        lg.vx = (ox / 24) * 2.4 + R(-0.5, 0.5);
        lg.vy = (oy / 24) * 2.4 + R(-0.5, 0.5);
      }
    }
  }
  function step() {
    tm++;
    const mv = amp.map((a, m) => a * Math.sin(om[m] * tm + ph[m]));
    tPitch = mx > -900 ? -0.2 + (my / H - 0.5) * 0.7 : -0.2;
    pitch += (tPitch - pitch) * 0.05;
    yaw += 0.005 + (mx > -900 ? (mx / W - 0.5) * 0.008 : 0);
    const cy = Math.cos(yaw),
      sy = Math.sin(yaw),
      cp = Math.cos(pitch),
      sp = Math.sin(pitch),
      dd = 3.4 * D.r;
    for (let i = 0; i < N; i++) {
      const p = pts[i];
      p.ox = p.ox * 0.94 + R(-0.1, 0.1);
      p.oy = p.oy * 0.94 + R(-0.1, 0.1);
      p.oz = p.oz * 0.94 + R(-0.1, 0.1);
      let x = p.x + p.ox,
        y = p.y + p.oy,
        z = p.z + p.oz;
      for (let m = 0; m < K; m++) {
        x += mv[m] * M[m][3 * i];
        y += mv[m] * M[m][3 * i + 1];
        z += mv[m] * M[m][3 * i + 2];
      }
      const x1 = x * cy + z * sy,
        z1 = -x * sy + z * cy,
        y2 = y * cp - z1 * sp,
        z2 = y * sp + z1 * cp,
        f = dd / (dd - z2);
      p.sx = W / 2 + x1 * S * f;
      p.sy = H / 2 + y2 * S * f;
      p.sz = z2;
      p.f = f;
    }
    ligand();
    for (const m of amb) {
      m.x += m.vx;
      m.y += m.vy;
      m.a += m.va;
      if (m.x < -20) m.x = W + 20;
      if (m.x > W + 20) m.x = -20;
      if (m.y < -20) m.y = H + 20;
      if (m.y > H + 20) m.y = -20;
    }
  }
  function hex(x, y, r, a) {
    cx.beginPath();
    for (let i = 0; i < 6; i++) {
      const t = a + (i * Math.PI) / 3;
      cx[i ? "lineTo" : "moveTo"](x + Math.cos(t) * r, y + Math.sin(t) * r);
    }
    cx.closePath();
  }
  function shade(t, k, lift) {
    const c = [0, 1, 2].map((i) => {
      let b = C1[i] + (C2[i] - C1[i]) * t;
      b += (255 - b) * lift;
      return Math.round(PAPER[i] + (b - PAPER[i]) * k);
    });
    return "rgb(" + c + ")";
  }
  function draw() {
    cx.clearRect(0, 0, W, H);
    cx.globalAlpha = 0.3;
    cx.strokeStyle = "#2350D8";
    cx.lineWidth = 1.5;
    for (const m of amb) {
      hex(m.x, m.y, m.r, m.a);
      cx.stroke();
    }
    cx.globalAlpha = 1;
    cx.lineCap = "round";
    cx.lineJoin = "round";
    const g = (i) => pts[Math.max(0, Math.min(N - 1, i))],
      segs = [];
    for (let i = 0; i < N - 1; i++) {
      if (brk.has(i)) continue;
      const p0 = g(i - 1),
        p1 = g(i),
        p2 = g(i + 1),
        p3 = g(i + 2),
        ss = p1.ss === p2.ss ? p1.ss : 0;
      let q = [p1.sx, p1.sy, p1.sz, p1.f];
      for (let s = 1; s <= 2; s++) {
        const t = s / 2,
          t2 = t * t,
          t3 = t2 * t;
        const cr = (a, b, c, d) =>
          0.5 *
          (2 * b + (c - a) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (3 * b - a - 3 * c + d) * t3);
        const r = [
          cr(p0.sx, p1.sx, p2.sx, p3.sx),
          cr(p0.sy, p1.sy, p2.sy, p3.sy),
          cr(p0.sz, p1.sz, p2.sz, p3.sz),
          cr(p0.f, p1.f, p2.f, p3.f),
        ];
        segs.push({ a: q, b: r, z: (q[2] + r[2]) / 2, t: (i + (s - 0.5) / 2) / N, ss });
        q = r;
      }
    }
    segs.sort((u, v) => u.z - v.z);
    for (const e of segs) {
      const f = (e.a[3] + e.b[3]) / 2,
        k = 0.4 + 0.6 * Math.max(0, Math.min(1, (e.z + D.r) / (2 * D.r))),
        w = (e.ss === 1 ? 1 : e.ss === 2 ? 0.62 : 0.3) * S * f;
      cx.strokeStyle = shade(e.t, k, 0);
      cx.lineWidth = w;
      cx.beginPath();
      cx.moveTo(e.a[0], e.a[1]);
      cx.lineTo(e.b[0], e.b[1]);
      cx.stroke();
      if (e.ss === 1) {
        cx.strokeStyle = shade(e.t, k, 0.5);
        cx.lineWidth = w * 0.35;
        cx.beginPath();
        cx.moveTo(e.a[0] - w * 0.15, e.a[1] - w * 0.15);
        cx.lineTo(e.b[0] - w * 0.15, e.b[1] - w * 0.15);
        cx.stroke();
      }
    }
    hex(lg.x, lg.y, 13, lg.a);
    cx.fillStyle = "rgba(224,138,46,.18)";
    cx.fill();
    cx.strokeStyle = LIG;
    cx.lineWidth = 2.5;
    cx.stroke();
    const ex = lg.x + Math.cos(lg.a) * 13,
      ey = lg.y + Math.sin(lg.a) * 13,
      fx = lg.x + Math.cos(lg.a) * 24,
      fy = lg.y + Math.sin(lg.a) * 24;
    cx.beginPath();
    cx.moveTo(ex, ey);
    cx.lineTo(fx, fy);
    cx.stroke();
    cx.fillStyle = LIG;
    cx.beginPath();
    cx.arc(fx, fy, 3.6, 0, 7);
    cx.fill();
  }
  let inView = true;
  if ("IntersectionObserver" in window)
    new IntersectionObserver(
      function (e) {
        inView = e[0].isIntersecting;
      },
      { threshold: 0 },
    ).observe(cv);
  function frame() {
    if (!paused && inView) {
      step();
      draw();
    }
    requestAnimationFrame(frame);
  }
  size();
  addEventListener("resize", size);
  cv.__s = () => ({ lg, pts });
  cv.parentElement.addEventListener("pointermove", (e) => {
    const r = cv.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
  });
  cv.parentElement.addEventListener("pointerleave", () => {
    mx = my = -999;
  });
  const pb = document.getElementById("pause");
  if (pb) {
    if (still) pb.hidden = true;
    else
      pb.addEventListener("click", () => {
        paused = !paused;
        pb.innerHTML = paused
          ? '<svg viewBox="0 0 24 24" width="16" height="16"><polygon points="7,4 20,12 7,20" fill="currentColor"/></svg>'
          : '<svg viewBox="0 0 24 24" width="16" height="16"><rect x="6" y="5" width="4" height="14" fill="currentColor"/><rect x="14" y="5" width="4" height="14" fill="currentColor"/></svg>';
        pb.title = pb.ariaLabel = paused ? "Play animation" : "Pause animation";
        pb.setAttribute("aria-pressed", paused);
      });
  }
  if (still) {
    for (let i = 0; i < 40; i++) step();
    draw();
  } else frame();
})();
