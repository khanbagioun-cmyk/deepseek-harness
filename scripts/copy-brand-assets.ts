/** Copy canonical brand SVGs into the two runtime asset roots that serve them. */
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const BRAND = fileURLToPath(new URL('../assets/brand/', import.meta.url))
const WEB = fileURLToPath(new URL('../apps/web/public/brand/', import.meta.url))
const DESKTOP = fileURLToPath(new URL('../apps/desktop/renderer/assets/brand/', import.meta.url))

await Promise.all([mkdir(WEB, { recursive: true }), mkdir(DESKTOP, { recursive: true })])
const mono = (await readFile(`${BRAND}codez-symbol-mono.svg`, 'utf8')).replace('width="1024" height="1024"', 'width="32" height="32"')
const favicon = (fill: string): string => mono.replace('role="img" aria-label="CodeZ"', `role="img" aria-label="CodeZ" fill="${fill}"`)
await Promise.all([
  copyFile(`${BRAND}codez-wordmark.svg`, `${WEB}codez-wordmark.svg`),
  copyFile(`${BRAND}codez-wordmark-color.svg`, `${WEB}codez-wordmark-color.svg`),
  copyFile(`${BRAND}codez-symbol.svg`, `${WEB}codez-symbol.svg`),
  copyFile(`${BRAND}codez-symbol-mono.svg`, `${WEB}codez-symbol-mono.svg`),
  copyFile(`${BRAND}codez-wordmark-light.svg`, `${DESKTOP}codez-wordmark-light.svg`),
  writeFile(`${WEB}favicon.svg`, favicon('#000')),
  writeFile(`${WEB}favicon-dark.svg`, favicon('#fff')),
])
console.info('brand assets: copied runtime SVGs')
