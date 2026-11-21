/** Render the desktop application and tray icons from the canonical CodeZ symbol. */
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { TRAY_ICON_SIZES, packIco, renderTrayIconEntries } from './render-tray-icon.ts'

const RESOURCES = fileURLToPath(new URL('../resources/', import.meta.url))
const BRAND = fileURLToPath(new URL('../../../assets/brand/', import.meta.url))
const WINDOW_EDGE = 1104

/** @param source - 1024-unit symbol document. @returns the same document on a 1104 canvas with an icon shadow. */
function windowIcon(source: string): string {
  const inner = source.trim().replace(/^<svg[^>]*>/u, '').replace(/<\/svg>$/u, '')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WINDOW_EDGE}" height="${WINDOW_EDGE}" viewBox="0 0 ${WINDOW_EDGE} ${WINDOW_EDGE}">
  <defs>
    <filter id="icon-shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#0B0520" flood-opacity="0.35"/>
    </filter>
  </defs>
  <g filter="url(#icon-shadow)" transform="translate(40 32)">${inner}</g>
</svg>
`
}

/** @param document - SVG document. @param size - square edge. @returns PNG bytes. */
async function png(document: string, size: number): Promise<Buffer> {
  return sharp(Buffer.from(document), { density: 72 * size / 1024 }).resize(size, size).png().toBuffer()
}

const symbol = await readFile(resolve(BRAND, 'codez-symbol.svg'), 'utf8')
const traySource = await readFile(resolve(BRAND, 'codez-tray.svg'), 'utf8')
const shadowed = windowIcon(symbol)
await Promise.all([
  writeFile(resolve(RESOURCES, 'icon.svg'), shadowed),
  writeFile(resolve(RESOURCES, 'icon-macos.svg'), symbol),
  writeFile(resolve(RESOURCES, 'icon-windows.svg'), symbol),
  writeFile(resolve(RESOURCES, 'icon.png'), await png(shadowed, WINDOW_EDGE)),
  writeFile(resolve(RESOURCES, 'icon-macos.png'), await png(symbol, 1024)),
  writeFile(resolve(RESOURCES, 'icon-windows.png'), await png(symbol, 1024)),
])
const entries = await renderTrayIconEntries(Buffer.from(traySource))
await writeFile(resolve(RESOURCES, 'tray-windows.ico'), packIco(entries))
console.info(`brand icons: wrote desktop icons and tray bitmaps ${TRAY_ICON_SIZES.join(', ')}`)
