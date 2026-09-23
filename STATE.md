# STATE.md — Estado de elementos del sitio
Leyenda: ✅ FINAL (material real del usuario o marca) · ▸ PROVISORIO (completado con
assets disponibles, marcado también visualmente en el sitio, reemplazable por video final).

## Videos
| Slot | Contenido | Estado |
|---|---|---|
| `tx-hero.mp4` | Turntable 360° Veo (usuario) | ✅ FINAL |
| `cine.mp4` | Product film Minimax exploded→macro→reassembly (usuario) | ✅ FINAL |
| `cta-loop.mp4` | Veo rack→macro→unidad flotante (usuario) | ✅ FINAL |
| `prop-rapanui.mp4` | Animatic flight-map SCL→Rapa Nui generado con PIL/ffmpeg (gratícula, arco progresivo, contador km) | ▸ PROVISORIO — reemplazar por prompt v3 del kit |
| `cap-am.mp4` | Ken Burns loop de cap-transmission.jpg | ▸ PROVISORIO |
| `cap-fm.mp4` | Ken Burns loop de cap-broadcast.jpg | ▸ PROVISORIO |
| `cap-torre.mp4` | Ken Burns loop de cap-antennas.jpg | ▸ PROVISORIO |
| `cap-rf.mp4` | Ken Burns loop de cap-rf.jpg | ▸ PROVISORIO |

## Imágenes
| Asset | Origen | Estado |
|---|---|---|
| 11 fotos de marca + logo | Usuario (sender.cl) | ✅ FINAL |
| `cine-poster.jpg`, `render-navtex-1u.jpg`, `render-torre-night.jpg` | Renders de estudio del usuario | ✅ FINAL |
| `favicon.svg` | Monograma de ondas en paleta de marca | ✅ FINAL |

## Marcas visibles en el sitio
- Chip `▸ PROVISORIO` en: 4 fichas de capacidades (esquina del media) + sec-head de Propagación HF.
- Leyenda en footer explicando la marca (ES/EN).
- Al reemplazar un slot con video final: quitar el chip correspondiente y esta fila pasa a ✅.

## Completado sin marca (infra, no contenido)
- SEO/OG: description, og:title/description/image/url, twitter:card, theme-color, favicon.
- Slots auto-detectados por HEAD fetch; los provisorios viven en los mismos nombres de slot.

## v12 — performance + SEO técnico + a11y (2026-09-23)
- Imágenes reales recomprimidas q4 max-1600px: 3.3 MB → 2.1 MB (−36%); logo 2048→512px (142→11 KB).
- robots.txt + sitemap.xml (hreflang es/en) + canonical + og:locale/es_CL + alternate en_US.
- JSON-LD Organization (dirección, tel, email, sameAs sender.cl).
- Skip-link ES/EN, :focus-visible cian, aria-pressed en switch ES/EN (burger ya tenía aria-expanded).

## v16 — cierre de brechas Usability/Creativity (2026-09-23)
- Pausa automática de todo <video> fuera del viewport (IntersectionObserver); reanuda solo loops.
- Focus-trap + aria-hidden dinámico + foco inicial en menú overlay (Esc ya existía).
- Momento memorable: onda de marca que se dibuja (stroke-dashoffset) sincronizada al contador del preloader.
- 404.html de marca ("Señal perdida en esta frecuencia").
- Refuerzo cascade: productos 1 columna en <=900px con !important (confirmado por field recording).
- i18n paridad verificada: 192 claves ES = 192 EN, sin faltantes.

## v17 — dirección B fusionada a main (decisión del usuario 2026-09-23)
- Film como backbone global scrubbed por scroll de todo el documento + HUD lateral de capítulos.
- Botones 100% transparentes (glass hover cian).
- Sheets graphite-glass y windows limpios: el film se aprecia entre y bajo el contenido.
- Film-breaths (46vh de película sola con línea mono) entre bloques clave.
- Dossier técnico overlay (15 familias) fuera del flujo de scroll: menú = selector de capítulos.
- Tilt 3D de sheets al entrar (rotateX 3.2° scrubbed).
- Arquitectura: UNA página (el film es el viaje); menú anclas = capítulos; densidad = overlays.

## v18 — 2026-09-23 — minimal transparente + criterios Awwwards/3D/inmersivo
- Tarjetas SIN relleno ni blur propio: `.cap-card`, `.receipt`, `.slide`, `.point`, `.cta-band` transparentes con borde hairline.
- Agrupacion: `.cap-right` = 1 panel con divisores internos; `.receipts` = 1 panel de 3 columnas (apilado en movil); `hero-stats` = fila hairline; `.prod-specs` = filas hairline 2 col.
- Aire: `.sheet-glass` margin 10vh + blur 12px (menos vidrio pesado, mas pelicula).
- Efectos nuevos: line-mask reveal en `.section-sub`/`.prod-lead`; parallax depth en `.film-breath` y sheets (scale .985→1); tilt 3D del titular hero con pointer.

## v19 — 2026-09-23 — contraste movil + tipografia + grado filmico
- FIX raiz: ids legacy (#capacidades/#proyectos/#nosotros) pintaban fondo blanco y ganaban por especificidad sobre .sheet-glass/.window → ahora transparentes (capturas moviles del usuario).
- Nav .scrolled = glass oscuro (antes blanco); logo/links claros.
- Tipografia moderna CARGADA via Google Fonts: Space Grotesk (display) + Manrope (body) + IBM Plex Mono (labels); antes declaradas pero sin <link> → caia a system-ui.
- Film: scrub con interpolacion rAF (lerp .14) = suave sin saltos; Ken Burns scale 1.1→1 scrub global; grado saturate/contrast/brightness; grain SVG animado (overlay 5%).
- HUD: scramble-decode del nombre de seccion al cambiar capitulo.
- Movil: hero-stats 2x2 hairline, sheets padding reducido, #prop-map fondo oscuro + textos claros, .prop-km cyan mono sin overlap, duotone grade en media provisorio.

## v20 — 2026-09-23 — calidad de film + fuentes self-hosted + monitores REC
- Causa raiz "tipografia no moderna": head original cargaba Inter/Fraunces via Google; body era Inter. Ahora TODO self-hosted: Space Grotesk 500/600/700, Manrope 400-700, IBM Plex Mono 400/500, Fraunces 400-600+ital (14 woff2 en /assets/fonts) — sin dependencia de CDN.
- cine.mp4 remasterizado: origen 640x960@711kb/s → hqdn3d + lanczos 1080x1620 + unsharp + x264 CRF18 (3.5MB). Original en /home/user/backup-videos/cine-original.mp4.
- Grado de color por capitulo: #film-layer[data-ch] varia filter del film (4 looks).
- Media provisorio envuelto en .mon-frame (scanlines + vignette + tag REC parpadeante) = look intencional de monitor.
- Lab sincronizado con v19+v20 (ambas URLs muestran el mismo diseno corregido).

## v21 — 2026-09-23 — perf movil + cirugia de layout (feedback capturas 17:52/17:53)
- Lag: en touch se desactivan backdrop-filter de hojas/dossier, grain animado, #cglow/#cursor y el loop Three.js (bg3d COARSE guard); scrub del film con throttle (delta > .0022) y cine.mp4 re-codificado con keyframes densos (-g 8) para seeks baratos = scrub continuo.
- Espacios sin contenido: .prod movil sin min-height 210vh (media 16/10 estatica + copy debajo); #espectro movil sin pin (height auto, .espectro-pin static); film-breath 24vh en touch.
- Dimensiones: .shot-stage full-bleed movil (100vw x 92svh, sin radio); .prod-media aspect 16/10 sin sticky; type-ring (circulo blanco) oculto en touch; pull/dropcap ajustados; about-grid gap 26px.

## v22 — 2026-09-23 — modo "sitio de escritorio" en movil (capturas 18:00)
- Diagnostico: capturas 18:00 muestran nav con links desktop + layout 2 col en 415px → usuario navega con "Sitio de escritorio" de Chrome (viewport ~830-1350 CSS) → los media max-900 y pointer:coarse no aplicaban.
- Fix: breakpoint max-1100px replica layout movil (cap-grid/about-grid/prod 1 col, prod-media 16/10, shot-stage full-bleed, pull) + low-power (sin backdrop-filter/grain/cursor/3D, breath 24vh, type-ring off) tambien por ancho.
- bg3d COARSE = (pointer: coarse), (max-width: 1100px).

## v23 — 2026-09-23 — web: hero alineado, hojas fantasma, caps editoriales + CI de auditoria
- Hero desktop: centrado vertical (justify-content center) + veil aligerado (.22/.05/.42) → sin bloque solido inferior, copy alineada con el film.
- Sheets desktop >=1101: fondo gradiente fantasma (.46→.26→.46) + blur 10 + border .08 (menos slab, mas film).
- Cap-cards desktop: fila editorial (media 4/3 duotono grayscale a la izquierda + texto), SIN tag REC/scanlines/shot-hud en web; color al hover.
- CI nuevo: .github/workflows/audit.yml = Lighthouse CI (2 runs + upload temporary-public-storage) + html-validate + budget bundle <700KB en cada push.
- Kit: SKILL.md (skill de departamento) + benchmark Awwwards 2026 en scorecard.

## v23.1 — 2026-09-23 — bg3d diferido + auditoria continua operativa
- three.js sale del main bundle: import('./bg3d.js') en idle y solo puntero fino → main JS 708.869 B → 178.81 kB (gzip 66.35).
- audit.yml verde (run 04fd4b7): html-validate ok, budget ok, LHCI 2 runs upload temporary-public-storage; a11y pasa (error-level), perf en warn (headless CI con video scrub).
- Reportes LHCI temporales del run: 1790200028471-3165 / 1790200029090-60447 (.report.html).

## v24 — 2026-09-23 — assets REALES del usuario integrados
- 10 fotos finales sobreescriben slots: cap-transmission/broadcast/antennas/rf (cap-cards), cap-critical (exhibit+band thumb), about (nosotros), hero/hero-wide (hero+poster film), proj-am/proj-stl (slides proyectos).
- brand-og.jpg (logo SENDER sobre mar tormentoso) = og:image/social.
- effect.mp4 (GoPro 11 Mini turntable 60fps, provisto por usuario) = capitulo 2 del backbone: cine.mp4 = desarme remasterizado + 7s GoPro concat (12.9s, crf23, -g8).
- cap-*.mp4 regenerados Ken Burns desde las fotos reales (0.8-1.4MB c/u).
- Badges ▸PROVISORIO retirados de las 4 cap-cards (contenido real); mon-frame REC ahora solo en media provisorio (prod/prop).
- Provisionales restantes: prod-* (4 stacks) y prop-rapanui.
