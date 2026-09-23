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
