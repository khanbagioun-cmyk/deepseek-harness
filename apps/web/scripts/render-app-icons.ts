/**
 * Render the install icons and favicons of the Web application from the
 * canonical CodeZ symbol.
 *
 * A browser installs a Web App only with raster 192px and 512px icons, masks
 * home-screen icons, and has no manifest support for iOS, which reads
 * `apple-touch-icon` instead. The maskable variant scales the mark into the
 * safe circle a launcher mask may crop while the tile keeps its own gradient.
 *
 * The committed PNGs are the output; rerun
 * `pnpm --filter @deepseek-ai/dsh-web-frontend run render:app-icons` after the
 * symbol changes.
 * @module render-app-icons
 */

import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { assertNever } from '@deepseek-ai/dsh-util-values'

/** Canonical vector source; a 1024-unit square tile with an `app-mark` group. */
export const TILE_SOURCE = new URL('../../../assets/brand/codez-symbol.svg', import.meta.url).pathname

/** Directory the generated PNGs are committed to. */
export const ICON_OUTPUT_DIRECTORY = fileURLToPath(new URL('../public/', import.meta.url))

/** Tile edge in source units. */
const TILE_EDGE = 1024

/** Tile centre, the fixed point of the maskable scale. */
const TILE_CENTER = TILE_EDGE / 2

/** Density at which the source's own 1:1 scale renders. */
const SOURCE_DENSITY = 72

/** Samples per output pixel along each axis before reduction. */
const RENDER_SCALE = 4

/** Fraction of a maskable icon the mark keeps inside the guaranteed safe circle. */
export const MASKABLE_ARTWORK_SCALE = 0.5

/** Radius a platform mask is guaranteed to show, as a fraction of the icon edge. */
export const MASKABLE_SAFE_RADIUS_RATIO = 0.4

/** Source groups the generator requires and rewrites. */
const TILE_GROUP = '<g id="app-tile">'
const MARK_GROUP = '<g id="app-mark">'

/** One committed icon: the manifest or link member it serves and its edge in pixels. */
export interface AppIconVariant {
  /** File name inside `public/`. */
  readonly file: string
  /** Square edge in pixels. */
  readonly size: number
  /** Which rendering the platform receives. */
  readonly kind: 'tile' | 'maskable'
}

/** Install and favicon icons the Web application ships. */
export const APP_ICON_VARIANTS: readonly AppIconVariant[] = [
  { file: 'favicon-32.png', size: 32, kind: 'tile' },
  { file: 'favicon-64.png', size: 64, kind: 'tile' },
  { file: 'icon-192.png', size: 192, kind: 'tile' },
  { file: 'icon-512.png', size: 512, kind: 'tile' },
  { file: 'icon-maskable-512.png', size: 512, kind: 'maskable' },
  { file: 'apple-touch-icon.png', size: 180, kind: 'tile' },
]

/** @param source - complete symbol document. @returns the document with its required groups checked. */
function checked(source: string): string {
  if (!/^<svg[^>]*>/u.test(source.trim())) throw new Error('app icons: the symbol source has no root element')
  if (!source.includes(TILE_GROUP)) throw new Error('app icons: the symbol source has no app-tile group')
  if (!source.includes(MARK_GROUP)) throw new Error('app icons: the symbol source has no app-mark group')
  return source
}

/**
 * Return the tile document at its own square extent.
 * @param source - complete symbol document.
 * @returns the tile rendering source.
 */
export function tileDocument(source: string): string {
  return checked(source).replace(/^<svg[^>]*>/u, root => `${root}\n  <rect width="${TILE_EDGE}" height="${TILE_EDGE}" fill="#0B0520"/>`)
}

/**
 * Return the tile document with only its mark scaled into the mask safe circle.
 * @param source - complete symbol document.
 * @returns the maskable rendering source.
 */
export function maskableDocument(source: string): string {
  return tileDocument(source).replace(
    MARK_GROUP,
    `${MARK_GROUP.slice(0, -1)} transform="translate(${TILE_CENTER} ${TILE_CENTER}) scale(${MASKABLE_ARTWORK_SCALE}) translate(${-TILE_CENTER} ${-TILE_CENTER})">`,
  )
}

/** @param document - output of {@link tileDocument} or {@link maskableDocument}. @param size - square edge. @returns PNG bytes. */
async function renderPng(document: string, size: number): Promise<Buffer> {
  const { default: sharp } = await import('sharp')
  const renderSize = Math.max(TILE_EDGE, size * RENDER_SCALE)
  const raster = await sharp(Buffer.from(document), { density: SOURCE_DENSITY * renderSize / TILE_EDGE })
    .png()
    .toBuffer()
  return sharp(raster)
    .resize(size, size, { kernel: 'lanczos3' })
    .png()
    .toBuffer()
}

function documentForVariant(source: string, kind: AppIconVariant['kind']): string {
  switch (kind) {
    case 'tile': return tileDocument(source)
    case 'maskable': return maskableDocument(source)
    default: return assertNever(kind)
  }
}

/**
 * Render every icon from the symbol source.
 * @param source - complete symbol document.
 * @returns one PNG per {@link APP_ICON_VARIANTS} entry, in declaration order.
 */
export async function renderAppIcons(source: string): Promise<readonly { variant: AppIconVariant; png: Buffer }[]> {
  return Promise.all(APP_ICON_VARIANTS.map(async variant => ({
    variant,
    png: await renderPng(documentForVariant(source, variant.kind), variant.size),
  })))
}

async function main(): Promise<void> {
  const icons = await renderAppIcons(await readFile(TILE_SOURCE, 'utf8'))
  await Promise.all(icons.map(async ({ variant, png }) => {
    await writeFile(resolve(ICON_OUTPUT_DIRECTORY, variant.file), png)
  }))
  console.info(`app icons: wrote ${icons.map(icon => icon.variant.file).join(', ')} to ${ICON_OUTPUT_DIRECTORY}`)
}

if (process.argv[1] !== undefined && import.meta.filename === resolve(process.argv[1])) await main()
