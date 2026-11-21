# CodeZ brand assets

English | [中文](README.zh.md)

Canonical vector sources. Run `pnpm run render:brand` after changing them; the
command copies runtime SVGs and regenerates every raster icon and tray bitmap.
Do not edit the generated copies.

## Files

- `codez-symbol.svg` — primary app mark, 1024 square, gradient tile, white `Z` and cyan cursor.
- `codez-symbol-mono.svg` — transparent `currentColor` symbol for tray and mono contexts.
- `codez-wordmark.svg` — solid wordmark used as a `currentColor` mask.
- `codez-wordmark-light.svg` — off-white wordmark for dark surfaces.
- `codez-wordmark-color.svg` — light wordmark with a gradient `Z` for hero use.
- `codez-wordmark-dark.svg` — ink wordmark for light surfaces.
- `codez-tray.svg` — monochrome tray glyph.

## Usage

- App icon, favicon, tray and compact UI use the **symbol**. Never put the wordmark in an app icon.
- Welcome and about surfaces use the **wordmark**. The product UI uses the mask variant so it follows the theme.
- Minimum sizes: symbol 16 px, wordmark 72 px wide.
- Clear space around the symbol and wordmark: half the `Z` cap height.
- Do not stretch, recolor the white glyph, rotate, or add a second glow.
- The maskable icon keeps the mark inside the guaranteed safe circle; the tile provides the bleed.
