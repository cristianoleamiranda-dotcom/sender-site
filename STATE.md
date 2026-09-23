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
