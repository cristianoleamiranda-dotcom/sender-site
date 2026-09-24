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

## v25 — 2026-09-23 — verificabilidad + gates del departamento
- #build-tag fijo abajo-izq ("SENDER · BUILD v25"): prueba objetiva de que el cliente ve el ultimo deploy (protocolo anti-cache WORKFLOW §5).
- Caps editoriales (fila duotono) desde 761px (antes 1101) → visibles tambien en movil modo escritorio.
- Loader con brand-og.jpg (logo sobre mar tormentoso) + overlay .82.
- Kit: CHECKLIST.md (criterios A-F con estados), TRACEABILITY.md (rounds 2-25 con herramientas/repos/commits/evidencia), WORKFLOW.md (repos, herramientas gratis, gates G0-G7, diseno primero).

## v26 / v26.1 — 2026-09-23 — ronda de gates completos (G0-G7), diseno primero
- G2 diseno: KNOB de sintonia (#dial-knob, role=slider, drag pointer + flechas teclado) = interaccion firma: girar el knob scrubea el pin de #espectro y con el reaccionan aguja, bandas, osciloscopio y film; en movil (sin pin) tunea directo.
- Cero placeholders: prop-rapanui.mp4 = Ken Burns de cap-antennas.jpg (771KB); badges inline + leyenda ph-legend eliminados; mon-frame REC retirado de todo media real.
- Preloads criticos: hero-wide.jpg (poster LCP, fetchpriority high) + man-600/sg-700 woff2.
- Dossier-head con brand-og.jpg de fondo; caps editoriales 260-380px en >=761.
- v26.1: backbone 960x1440 crf24 (4.1MB); loader 0.9s+0.55s (LCP hero ~1.5s antes).
- Audit CI verde ambos runs; perf headless 0.56-0.61 = deuda aceptada y documentada (CHECKLIST E).

## v26.2 — 2026-09-23 — fix 404 brand-og
- url('./assets/brand-og.jpg') dentro del CSS bundleado resolvia a /assets/assets/ (404) en loader y dossier-head.
- Fix: <i class="brand-bg"> con background-image inline en HTML (ruta relativa a la pagina) + z-index de contenido.

## v27 — 2026-09-23 — declutter segun feedback visual 19:38
- GoPro FUERA del backbone (el usuario: "no debe estar el video de la gopro; la idea era copiar el despliegue y sincronizarlo con el scroll"): cine.mp4 = solo desarme remasterizado 5.9s/2.7MB; su lenguaje turntable queda replicado como P14 keynote scroll-sync y demo en sender-fx-lab.
- Catalogo declutter: 4 link-arrow "Cotizar este equipo" repetidos eliminados (queda CTA unico en contacto + cap-link); dossier-open agrupado centrado al final; paddings de prod-copy reducidos.
- Sheets >=761 mas legibles sobre frames busy: gradiente .66/.50 + blur 14 (antes .46/.26 + 10).
- BUILD tag v27. Nuevo repo sender-fx-lab (demos P01/P14/P15/P07/P06, Pages propia).

## v28 / v28.1 — 2026-09-23 — CIERRE COMPLETO (web entera segun criterios)
- v28: fotos 1600px q5 (-30% peso total), tx-hero.mp4 fuera del repo (backup local), VPATHS limpio, osciloscopio rAF solo con #espectro visible (IntersectionObserver), content-visibility:auto en #trayectoria/#capacidades/#nosotros/#contacto, BUILD v28. Audit: bundle 179.963 B ok, perf headless 0.59 (deuda documentada con mitigaciones).
- v28.1: stacks de los 4 productos con fotos REALES del cliente (10 refs p-* reemplazadas); p-*.jpg, render-*.jpg, tx-hero-frame.jpg y cine-poster.jpg eliminados del repo. CERO imagenes de ejemplo en produccion.
- Estado final checklist: A-F cumplidos salvo perf headless >=.70 (deuda aceptada con plan) y videos finales prod-* opcionales (los stacks ya usan fotos reales; los slots de video quedan listos para recibirlos).

## v29 — 2026-09-23 — WEB FINAL (pase de coherencia completo)
- Auditoria post-v28 encontro lo que el usuario senalo ("haces algo y dejas de hacer otras"): v28.1 habia reutilizado las mismas fotos entre stacks de productos. Fix: 16 vistas UNICAS stack-{am,fm,nx,tw}-v{1..4}.jpg (recortes 1000-1400px + grados eq de las fotos reales, 682 KB total). Cero repeticion de imagen en toda la web.
- BUILD v29. Deploy fddc92f success; verificado: tag=1, 16 refs unicas, assets 200.

## v30 — 2026-09-24 — REDISEÑO EVIDENTE (feedback: "no se ven cambios")
- Diagnóstico: producción sí tenía v29 (verificado curl) → lo visto era cache del dispositivo; además los cambios v27-v29 eran sutiles.
- Portada full-bleed del Catálogo: 96svh con cap-critical.jpg real, título clamp(42-104px), folio 03/07, gradiente a --bg, cue "SCROLL ▾" animado (P19).
- Velo de capítulo: overlay #0b1220 con folio+título+línea al entrar/salir de cada sección (ScrollTrigger, armado a los 3s, reducido-motion lo apaga) (P13).
- BUILD v30. Deploy f843186 success; verificado html+JS+CSS en prod.

## v31 — 2026-09-24 — REDISEÑO VISIBLE (feedback repetido: "no se ven cambios")
- Evidencia: prod servía v30 fresco (etag/last-modified nuevos) → dispositivo del usuario con cache; aun así, cambios v27-v30 no eran de primer pantallazo.
- v31: nav pill de vidrio flotante; hero-title gradiente de marca clamp hasta 150px; hero-stats tira con hairlines; números de capítulo outline gigantes (data-wm 01-07) en cada sección; prod-stack enmarcado (radius 22 + sombra profunda).
- Incidente: rescue reset perdió el CSS v31 (HTML sí subió) → restaurado y verificado por 4 claves exactas en CSS prod.

## 2026-09-24 — sender-web: REDISEÑO EN REPO NUEVO (pedido del usuario)
- Nuevo repo independiente `sender-web` (Pages propia): https://cristianoleamiranda-dotcom.github.io/sender-web/
- Diseño "Editorial Film": capítulos claros en papel (Capacidades, Nosotros) alternados con capítulos cinematográficos oscuros; nav píldora; números de capítulo outline; portada full-bleed del catálogo; velo de transición; hero con gradiente de marca.
- Estático sin bundler: base.css + styles.css + app.js/i18n.js módulos ES con gsap/ScrollTrigger/Lenis vía CDN. Diccionario ES/EN 198 claves; fotos/videos/fuentes reales.
- Bug cazado antes de anunciar: bare `import gsap` en i18n.js → `window.gsap`.
