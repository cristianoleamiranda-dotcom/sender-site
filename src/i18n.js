/* =========================================================
   i18n ES/EN — switch en el nav, persistencia localStorage
   ========================================================= */
import gsap from 'gsap';

const DICT = {
  es: {
    'nav.tray': 'Trayectoria', 'nav.cap': 'Capacidades', 'nav.esp': 'Espectro',
    'nav.proj': 'Proyectos', 'nav.about': 'Nosotros', 'nav.contact': 'Contacto',
    'hero.eyebrow': 'BIS SpA · Broadcasting &amp; Telecomunicaciones · Chile',
    'hero.title': 'La señal no puede fallar.',
    'hero.sub': 'Ingeniería de radiofrecuencia para los lugares más remotos de Chile: transmisores, antenas y torres diseñados bajo estándares internacionales de broadcasting. Más de 20 años operando en defensa, radiodifusión y territorio extremo.',
    'hero.cta1': 'Sintonizar el espectro', 'hero.cta2': 'WhatsApp directo',
    'hero.s1': 'años en broadcasting', 'hero.s2': 'torre Armada de Chile', 'hero.s3': 'enlace HF Rapa Nui', 'hero.s4': 'sistemas NAVTEX',
    'hero.hint': 'Desliza',
    'marquee.txt': 'Transmisores AM · Transmisores FM · Antenas HF 2–30 MHz · NAVTEX 490/518 kHz · Torres contraventadas · Enlaces STL · ATU · Procesadores de audio ·&nbsp;',
    'tray.label': '01 — Trayectoria comprobada',
    'tray.h2': 'Ninguna afirmación sin su respaldo.',
    'tray.sub': 'Tres proyectos reales que definen lo que hacemos: infraestructura crítica, ambientes hostiles y cero margen de error.',
    'tray.a.h': 'Armada de Chile',
    'tray.a.p': 'Ingeniería y desmontaje de torre autosoportada de <strong>60 metros</strong> en Playa Ancha, Valparaíso. Infraestructura de defensa ejecutada con precisión milimétrica.',
    'tray.a.t': 'Valparaíso · Defensa',
    'tray.b.h': 'Isla de Pascua',
    'tray.b.p': 'Comunicaciones <strong>HF de largo alcance</strong> instaladas y operando en Rapa Nui, a 3.759 km del continente. Entorno estratégico, logística extrema.',
    'tray.b.t': 'Rapa Nui · HF largo alcance',
    'tray.c.h': 'Sistema NAVTEX',
    'tray.c.p': 'Transmisión <strong>MF 490/518 kHz</strong> para seguridad marítima y defensa. Sistemas radiantes de alta resistencia ambiental, integrados con transmisores Sender.',
    'tray.c.t': 'Marítimo · NAVTEX',
    'cap.label': '02 — Capacidades',
    'cap.h2': 'Equipos que sostienen el aire de Chile.',
    'cap.sub': 'Fabricación y suministro bajo normas internacionales de broadcasting. Cada equipo, diseñado para operar décadas en territorio extremo.',
    'cap.link': 'Cotizar un equipo <span>→</span>',
    'cap.1.h': 'Transmisión AM / MF',
    'cap.1.p': 'Transmisores estado sólido 1000/2000/5000 W · 490–1700 kHz · Clase D modular redundante · PWM bifásico · Antenas monopolo con torre aterrizada y protección atmosférica',
    'cap.2.h': 'Plantas de broadcasting',
    'cap.2.p': 'Transmisores FM-30 a FM-1000 · Sintetizador digital PLL 88–108 MHz · Protección ROE y temperatura · Potencia continuamente ajustable · Automatización de transmisiones',
    'cap.3.h': 'Antenas &amp; torres',
    'cap.3.p': 'Antena HF profesional 2–30 MHz · 1 kW · Torres contraventadas galvanizadas · Ingeniería, montaje y desmontaje · Enlaces estudio–planta STL',
    'cap.4.h': 'Componentes RF',
    'cap.4.p': 'Unidad de sintonía de antena (ATU) · Coaxial 1/2" Super Flex y LMR-400 · Condensadores de alta potencia · Circuitos integrados RF · Procesadores de audio',
    'esp.label': '03 — Espectro radioeléctrico',
    'esp.h2': 'Tu scroll es la perilla de sintonía.',
    'esp.bandlabel': 'Banda activa',
    'esp.p0.h': 'NAVTEX · 490–518 kHz',
    'esp.p0.p': 'Sistema radiante profesional para comunicaciones marítimas de seguridad. Alta resistencia a condiciones ambientales exigentes e integración completa con transmisores NAVTEX Sender.',
    'esp.p0.prod': '→ Sistema NAVTEX Profesional · Amplificador MF',
    'esp.p1.h': 'AM · 510–1700 kHz',
    'esp.p1.p': 'Transmisores de estado sólido de 1000, 2000 y 5000 W con arquitectura modular redundante, amplificadores clase D de alta eficiencia y modulación PWM bifásica. Antenas monopolo de alta eficiencia.',
    'esp.p1.prod': '→ Transmisores AM estado sólido · Antena monopolo · ATU',
    'esp.p2.h': 'HF · 2–30 MHz',
    'esp.p2.p': 'Antenas HF profesionales de 1 kW para comunicaciones de largo alcance en proyectos de defensa y radiodifusión. Instaladas y operando hasta en Isla de Pascua, a 3.759 km del continente.',
    'esp.p2.prod': '→ Antena HF Profesional 2–30 MHz · 1 kW',
    'esp.p3.h': 'FM · 88–108 MHz',
    'esp.p3.p': 'Transmisores FM-30 a FM-1000 con sintetizador digital de enganche de fase de alta eficiencia, protección de ondas estacionarias y sobretemperatura, y potencia de salida continuamente ajustable.',
    'esp.p3.prod': '→ Transmisores FM · Enlace STL · Procesador de audio',
    'proj.label': '04 — Proyectos en terreno',
    'proj.h2': 'Donde el mapa se acaba,<br />empieza Sender.',
    'proj.1.loc': 'Planta AM · Estado sólido', 'proj.1.h': 'Transmisión AM de nueva generación',
    'proj.1.p': 'Transmisores AM-1000SS / 2000SS / 5000SS: clase D modular redundante, estabilidad ±5 Hz y fuente monofásica 220 V. Operación continua en radiodifusión nacional.',
    'proj.2.loc': 'Santiago · Enlace estudio–planta', 'proj.2.h': 'STL sobre el valle del Maipo',
    'proj.2.p': 'Enlaces estudio–planta para radio AM y FM sobre la cordillera de la costa: audio limpio, latencia cero, operación sin supervisión permanente.',
    'proj.3.loc': 'Rapa Nui · 3.759 km', 'proj.3.h': 'HF de largo alcance en Isla de Pascua',
    'proj.3.p': 'Solución de comunicaciones HF instalada y operando en entorno estratégico: 3.759 km de océano cubiertos por ingeniería chilena.',
    'proj.4.loc': 'Litoral · Seguridad marítima', 'proj.4.h': 'NAVTEX donde el mar manda',
    'proj.4.p': 'Estaciones MF 490/518 kHz con sistemas radiantes de alta resistencia ambiental: la voz de la seguridad marítima en costa chilena.',
    'about.label': '05 — Quiénes somos',
    'about.h2': 'Ingenieros de aire, fabricantes de señal.',
    'about.p1': 'Somos una empresa chilena con más de 20 años de experiencia en telecomunicaciones y radiodifusión, especializada en soluciones de ingeniería, equipamiento RF y sistemas de transmisión.',
    'about.p2': 'Desarrollamos y suministramos tecnología para proyectos nacionales e internacionales, entregando soluciones confiables en equipos AM/FM/HF/NAVTEX, antenas profesionales y sistemas de comunicación diseñados bajo estándares de calidad internacionales.',
    'about.pt1.h': 'Misión',
    'about.pt1.p': 'Tecnología y soluciones en telecomunicaciones adaptadas a cada cliente, con innovación y soporte técnico en radiodifusión.',
    'about.pt2.h': 'Alcance',
    'about.pt2.p': 'Instalaciones en Chile y proyectos internacionales, de la planta urbana al territorio extremo.',
    'con.label': '06 — Contacto',
    'con.h2': 'Tu próximo enlace empieza aquí.',
    'con.sub': 'Radiodifusión, defensa, comunicaciones marítimas o infraestructura crítica: la ingeniería la ponemos nosotros.',
    'con.c1.l': 'WhatsApp / Celular', 'con.c2.l': 'Ventas', 'con.c3.l': 'Taller e ingeniería',
    'con.cta': 'Cotizar proyecto por WhatsApp',
    'foot.1': 'SENDER · BIS SpA — Telecomunicaciones y Broadcasting',
    'foot.2': '© 2026 · Datos del sitio original sender.cl',
    'foot.top': 'Volver arriba ↑',
    'wa.label': 'WhatsApp',
    'doc.title': 'Sender — Ingeniería RF y Broadcasting',
  },
  en: {
    'nav.tray': 'Track record', 'nav.cap': 'Capabilities', 'nav.esp': 'Spectrum',
    'nav.proj': 'Projects', 'nav.about': 'About', 'nav.contact': 'Contact',
    'hero.eyebrow': 'BIS SpA · Broadcasting &amp; Telecommunications · Chile',
    'hero.title': 'The signal cannot fail.',
    'hero.sub': 'Radio-frequency engineering for the most remote places in Chile: transmitters, antennas and towers designed to international broadcasting standards. 20+ years operating in defense, broadcasting and extreme territory.',
    'hero.cta1': 'Tune the spectrum', 'hero.cta2': 'Direct WhatsApp',
    'hero.s1': 'years in broadcasting', 'hero.s2': 'Chilean Navy tower', 'hero.s3': 'HF link Rapa Nui', 'hero.s4': 'NAVTEX systems',
    'hero.hint': 'Scroll',
    'marquee.txt': 'AM Transmitters · FM Transmitters · HF Antennas 2–30 MHz · NAVTEX 490/518 kHz · Guyed Towers · STL Links · ATU · Audio Processors ·&nbsp;',
    'tray.label': '01 — Proven track record',
    'tray.h2': 'No claim without its receipt.',
    'tray.sub': 'Three real projects that define what we do: critical infrastructure, hostile environments and zero margin for error.',
    'tray.a.h': 'Chilean Navy',
    'tray.a.p': 'Engineering and dismantling of a <strong>60-meter</strong> self-supporting tower at Playa Ancha, Valparaíso. Defense infrastructure executed with millimeter precision.',
    'tray.a.t': 'Valparaíso · Defense',
    'tray.b.h': 'Easter Island',
    'tray.b.p': '<strong>Long-range HF communications</strong> installed and operating on Rapa Nui, 3,759 km from the mainland. Strategic environment, extreme logistics.',
    'tray.b.t': 'Rapa Nui · Long-range HF',
    'tray.c.h': 'NAVTEX system',
    'tray.c.p': '<strong>MF 490/518 kHz</strong> transmission for maritime safety and defense. High environmental-resistance radiating systems, integrated with Sender transmitters.',
    'tray.c.t': 'Maritime · NAVTEX',
    'cap.label': '02 — Capabilities',
    'cap.h2': 'Equipment that holds up Chile’s airwaves.',
    'cap.sub': 'Manufacturing and supply under international broadcasting standards. Every unit designed to operate for decades in extreme territory.',
    'cap.link': 'Request a quote <span>→</span>',
    'cap.1.h': 'AM / MF transmission',
    'cap.1.p': 'Solid-state transmitters 1000/2000/5000 W · 490–1700 kHz · Redundant modular class D · Two-phase PWM · Monopole antennas with grounded tower and lightning protection',
    'cap.2.h': 'Broadcasting plants',
    'cap.2.p': 'FM-30 to FM-1000 transmitters · Digital PLL synthesizer 88–108 MHz · VSWR and over-temperature protection · Continuously adjustable power · Broadcast automation',
    'cap.3.h': 'Antennas &amp; towers',
    'cap.3.p': 'Professional HF antenna 2–30 MHz · 1 kW · Galvanized guyed towers · Engineering, assembly and dismantling · Studio–transmitter STL links',
    'cap.4.h': 'RF components',
    'cap.4.p': 'Antenna tuning unit (ATU) · 1/2" Super Flex and LMR-400 coaxial · High-power capacitors · RF integrated circuits · Audio processors',
    'esp.label': '03 — Radio spectrum',
    'esp.h2': 'Your scroll is the tuning knob.',
    'esp.bandlabel': 'Active band',
    'esp.p0.h': 'NAVTEX · 490–518 kHz',
    'esp.p0.p': 'Professional radiating system for maritime safety communications. High resistance to demanding environmental conditions and full integration with Sender NAVTEX transmitters.',
    'esp.p0.prod': '→ Professional NAVTEX System · MF Amplifier',
    'esp.p1.h': 'AM · 510–1700 kHz',
    'esp.p1.p': '1000, 2000 and 5000 W solid-state transmitters with redundant modular architecture, high-efficiency class D amplifiers and two-phase PWM modulation. High-efficiency monopole antennas.',
    'esp.p1.prod': '→ Solid-state AM transmitters · Monopole antenna · ATU',
    'esp.p2.h': 'HF · 2–30 MHz',
    'esp.p2.p': 'Professional 1 kW HF antennas for long-range communications in defense and broadcasting projects. Installed and operating as far as Easter Island, 3,759 km from the continent.',
    'esp.p2.prod': '→ Professional HF Antenna 2–30 MHz · 1 kW',
    'esp.p3.h': 'FM · 88–108 MHz',
    'esp.p3.p': 'FM-30 to FM-1000 transmitters with high-efficiency digital phase-locked synthesizer, VSWR and over-temperature protection, and continuously adjustable output power.',
    'esp.p3.prod': '→ FM transmitters · STL link · Audio processor',
    'proj.label': '04 — Field projects',
    'proj.h2': 'Where the map ends,<br />Sender begins.',
    'proj.1.loc': 'AM plant · Solid state', 'proj.1.h': 'Next-generation AM transmission',
    'proj.1.p': 'AM-1000SS / 2000SS / 5000SS transmitters: redundant modular class D, ±5 Hz stability and 220 V single-phase supply. Continuous operation in national broadcasting.',
    'proj.2.loc': 'Santiago · Studio–transmitter link', 'proj.2.h': 'STL over the Maipo valley',
    'proj.2.p': 'Studio–transmitter links for AM and FM radio over the coastal range: clean audio, zero latency, unattended operation.',
    'proj.3.loc': 'Rapa Nui · 3,759 km', 'proj.3.h': 'Long-range HF on Easter Island',
    'proj.3.p': 'HF communications solution installed and operating in a strategic environment: 3,759 km of ocean covered by Chilean engineering.',
    'proj.4.loc': 'Coast · Maritime safety', 'proj.4.h': 'NAVTEX where the sea rules',
    'proj.4.p': 'MF 490/518 kHz stations with high environmental-resistance radiating systems: the voice of maritime safety on the Chilean coast.',
    'about.label': '05 — About us',
    'about.h2': 'Air engineers, signal makers.',
    'about.p1': 'We are a Chilean company with 20+ years of experience in telecommunications and broadcasting, specialized in engineering solutions, RF equipment and transmission systems.',
    'about.p2': 'We develop and supply technology for national and international projects, delivering reliable solutions in AM/FM/HF/NAVTEX equipment, professional antennas and communication systems designed to international quality standards.',
    'about.pt1.h': 'Mission',
    'about.pt1.p': 'Telecommunications technology and solutions adapted to each client, with innovation and technical support in broadcasting.',
    'about.pt2.h': 'Reach',
    'about.pt2.p': 'Installations across Chile and international projects, from the urban plant to extreme territory.',
    'con.label': '06 — Contact',
    'con.h2': 'Your next link starts here.',
    'con.sub': 'Broadcasting, defense, maritime communications or critical infrastructure: we bring the engineering.',
    'con.c1.l': 'WhatsApp / Mobile', 'con.c2.l': 'Sales', 'con.c3.l': 'Workshop & engineering',
    'con.cta': 'Quote your project on WhatsApp',
    'foot.1': 'SENDER · BIS SpA — Telecommunications & Broadcasting',
    'foot.2': '© 2026 · Data from the original sender.cl site',
    'foot.top': 'Back to top ↑',
    'wa.label': 'WhatsApp',
    'doc.title': 'Sender — RF Engineering & Broadcasting',
  },
};

export function splitWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map((w) => `<span class="w"><span>${w}</span></span>`).join(' ');
}

let current = localStorage.getItem('sender-lang') || 'es';

export function applyLang(lang, animate = false) {
  current = lang;
  localStorage.setItem('sender-lang', lang);
  document.documentElement.lang = lang;
  document.title = DICT[lang]['doc.title'];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (!DICT[lang][key]) return;
    el.innerHTML = DICT[lang][key];
    if (el.classList.contains('scramble')) el.dataset.text = el.textContent;
  });

  document.querySelectorAll('.split-words').forEach(splitWords);

  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.querySelectorAll('span').forEach((s) => s.classList.toggle('on', s.dataset.lang === lang));
  }

  if (animate) {
    document.querySelectorAll('.split-words .w > span').forEach(() => {});
    document.querySelectorAll('.split-words').forEach((el) => {
      gsap.from(el.querySelectorAll('.w > span'), { yPercent: 115, duration: 0.7, stagger: 0.035, ease: 'power4.out' });
    });
  }
}

/* init */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(current, false);
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => applyLang(current === 'es' ? 'en' : 'es', true));
  }
});
if (document.readyState !== 'loading') applyLang(current, false);
