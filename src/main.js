import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Smooth scroll (Lenis + GSAP) ---------- */
if (!reduce) {
  const lenis = new Lenis({ lerp: 0.09 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  // anchors con lenis
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -10 }); }
    });
  });
}

/* ---------- Nav scrolled state ---------- */
const nav = document.getElementById('nav');
ScrollTrigger.create({
  start: 40,
  onUpdate: (self) => nav.classList.toggle('scrolled', self.scroll() > 40),
});

/* ---------- Hero intro ---------- */
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTl
  .from('.nav', { y: -60, opacity: 0, duration: 0.8 })
  .from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.7 }, '-=0.4')
  .from('.hero-title .line > span', { y: '115%', duration: 1, stagger: 0.12 }, '-=0.5')
  .from('.hero-sub', { y: 22, opacity: 0, duration: 0.8 }, '-=0.55')
  .from('.hero-cta > *', { y: 22, opacity: 0, stagger: 0.1, duration: 0.7 }, '-=0.45')
  .from('.hero-stats .stat', { y: 26, opacity: 0, stagger: 0.08, duration: 0.7 }, '-=0.35')
  .from('.scroll-hint', { opacity: 0, duration: 0.8 }, '-=0.2');

/* ---------- Hero parallax ---------- */
if (!reduce) {
  gsap.to('.hero-bg img', {
    yPercent: 16, scale: 1.08, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
  });
}

/* ---------- Reveals genéricos ---------- */
document.querySelectorAll('.reveal').forEach((el) => {
  gsap.from(el, {
    y: 46, opacity: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 86%', once: true },
  });
});
document.querySelectorAll('[data-stagger]').forEach((group) => {
  gsap.from(group.children, {
    y: 46, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
    scrollTrigger: { trigger: group, start: 'top 84%', once: true },
  });
});

/* ---------- Contadores ---------- */
document.querySelectorAll('[data-count]').forEach((el) => {
  const end = parseFloat(el.dataset.count);
  const obj = { v: 0 };
  gsap.to(obj, {
    v: end, ease: 'power1.out', duration: 2,
    scrollTrigger: { trigger: el, start: 'top 92%', once: true },
    onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('es-CL'); },
  });
});

/* =========================================================
   SIGNATURE MOVE — Navegador del espectro radioeléctrico
   ========================================================= */
const bands = [
  { name: 'NAVTEX', min: 490e3, max: 518e3 },
  { name: 'AM',     min: 510e3, max: 1700e3 },
  { name: 'HF',     min: 2e6,   max: 30e6 },
  { name: 'FM',     min: 88e6,  max: 108e6 },
];

const freqEl = document.getElementById('freq');
const unitEl = document.getElementById('unit');
const bandNameEl = document.getElementById('band-name');
const needleEl = document.getElementById('needle');
const segEls = document.querySelectorAll('.seg');
const panelEls = document.querySelectorAll('.panel');

function fmtFreq(f) {
  if (f >= 1e6) {
    const v = f / 1e6;
    return [v.toLocaleString('es-CL', { minimumFractionDigits: 1, maximumFractionDigits: v < 10 ? 2 : 1 }), 'MHz'];
  }
  const v = f / 1e3;
  return [v.toLocaleString('es-CL', { minimumFractionDigits: 1, maximumFractionDigits: 1 }), 'kHz'];
}

const specState = { band: 0, ratio: 0 };

function updateSpectrum(p) {
  p = Math.min(0.99999, Math.max(0, p));
  const bi = Math.min(bands.length - 1, Math.floor(p * bands.length));
  const local = p * bands.length - bi;
  const b = bands[bi];
  // escala logarítmica dentro de la banda (como un dial real)
  const f = Math.exp(Math.log(b.min) + local * (Math.log(b.max) - Math.log(b.min)));
  const [val, unit] = fmtFreq(f);
  freqEl.textContent = val;
  unitEl.textContent = unit;
  bandNameEl.textContent = b.name;

  needleEl.style.left = (p * 100).toFixed(3) + '%';

  if (specState.band !== bi) {
    specState.band = bi;
    segEls.forEach((s, i) => s.classList.toggle('active', i === bi));
    panelEls.forEach((s, i) => s.classList.toggle('active', i === bi));
  }
  specState.ratio = local;
}

const espectroST = ScrollTrigger.create({
  trigger: '#espectro',
  start: 'top top',
  end: '+=320%',
  pin: '.espectro-pin',
  scrub: 0.35,
  anticipatePin: 1,
  invalidateOnRefresh: true,
  onUpdate: (self) => updateSpectrum(self.progress),
});
updateSpectrum(0);

/* ---------- Osciloscopio (canvas) ---------- */
const scope = document.getElementById('scope');
const sctx = scope.getContext('2d');
let phase = 0;

function resizeScope() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const rect = scope.getBoundingClientRect();
  scope.width = rect.width * dpr;
  scope.height = rect.height * dpr;
  sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resizeScope();
window.addEventListener('resize', resizeScope);

function drawScope() {
  const w = scope.getBoundingClientRect().width;
  const h = scope.getBoundingClientRect().height;
  sctx.clearRect(0, 0, w, h);

  const band = specState.band;
  const cycles = 2.5 + band * 3.5 + specState.ratio * 3; // más ciclos en bandas altas
  const amp = h * 0.3 * (1 - band * 0.08);

  // línea base
  sctx.strokeStyle = 'rgba(255,255,255,0.06)';
  sctx.lineWidth = 1;
  sctx.beginPath(); sctx.moveTo(0, h / 2); sctx.lineTo(w, h / 2); sctx.stroke();

  // onda
  const grad = sctx.createLinearGradient(0, 0, w, 0);
  grad.addColorStop(0, 'rgba(255,180,84,0.15)');
  grad.addColorStop(0.5, '#ffb454');
  grad.addColorStop(1, 'rgba(56,189,248,0.6)');
  sctx.strokeStyle = grad;
  sctx.lineWidth = 2;
  sctx.shadowColor = 'rgba(255,180,84,0.55)';
  sctx.shadowBlur = 12;
  sctx.beginPath();
  for (let x = 0; x <= w; x += 3) {
    const t = x / w;
    const y = h / 2 + Math.sin(t * Math.PI * 2 * cycles + phase) * amp * Math.sin(t * Math.PI) ** 0.4;
    x === 0 ? sctx.moveTo(x, y) : sctx.lineTo(x, y);
  }
  sctx.stroke();
  sctx.shadowBlur = 0;

  phase += reduce ? 0 : 0.06;
  requestAnimationFrame(drawScope);
}
drawScope();

/* ---------- Propagación Santiago → Rapa Nui ---------- */
const linkPath = document.getElementById('link-path');
const kmEl = document.getElementById('km');
const islandPulse = document.getElementById('island-pulse');

if (linkPath) {
  const len = linkPath.getTotalLength();
  gsap.set(linkPath, { strokeDasharray: len, strokeDashoffset: len });
  gsap.to(linkPath, {
    strokeDashoffset: 0, ease: 'none',
    scrollTrigger: {
      trigger: '#proyectos', start: 'top 62%', end: 'bottom 78%', scrub: 0.4,
      onUpdate: (self) => {
        kmEl.textContent = Math.round(3759 * self.progress).toLocaleString('es-CL');
        gsap.set(islandPulse, { opacity: self.progress > 0.92 ? (self.progress - 0.92) / 0.08 : 0 });
      },
    },
  });
}
