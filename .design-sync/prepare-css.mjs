// design-sync support script (see .design-sync/NOTES.md).
//
// Compiles `.design-sync/ds.css` (the site's own stylesheet plus a brand-ramp
// safelist) through the repo's real Vite + Tailwind v4 toolchain, then lands the
// result where `cfg.cssEntry` / `cfg.tokensGlob` point:
//
//   .design-sync/.cache/compiled.css  — the whole stylesheet, @font-face URLs
//                                       rewritten to on-disk relative paths so
//                                       the converter can copy the woff2/woff
//                                       files into the bundle's fonts/
//   .design-sync/.cache/tokens.css    — just the `:root` custom properties, so
//                                       the DS pane gets a real tokens file
//
// This does not touch `dist/` and does not need the site to have been built.
//
//   node .design-sync/prepare-css.mjs

import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(here, '..')
const cacheDir = join(here, '.cache')
const buildDir = join(cacheDir, 'css-build')
const entry = join(here, 'ds.css')

rmSync(buildDir, { recursive: true, force: true })

await build({
  configFile: false,
  root: repoRoot,
  logLevel: 'warn',
  plugins: [tailwindcss()],
  build: {
    outDir: buildDir,
    emptyOutDir: true,
    // Fonts stay as files (not inlined) so the converter can copy them.
    assetsInlineLimit: 0,
    rollupOptions: { input: entry },
  },
})

const assetsDir = join(buildDir, 'assets')
if (!existsSync(assetsDir)) {
  console.error('prepare-css: vite produced no assets/ — did ds.css fail to compile?')
  process.exit(1)
}

const sheets = readdirSync(assetsDir).filter((f) => f.endsWith('.css'))
if (sheets.length !== 1) {
  console.error(`prepare-css: expected exactly one compiled stylesheet, found ${sheets.length}: ${sheets.join(', ')}`)
  process.exit(1)
}

const cssPath = join(assetsDir, sheets[0])
const src = readFileSync(cssPath, 'utf8')

// Vite emits root-absolute asset URLs (`url(/assets/inter-...woff2)`); rewrite
// them relative to compiled.css's own directory so they resolve on disk.
const outFile = join(cacheDir, 'compiled.css')
const prefix = relative(dirname(outFile), assetsDir).replaceAll('\\', '/')
const rewrites = (src.match(/url\(\/assets\//g) ?? []).length
const compiled = src.replaceAll(/url\(\/assets\/([^)]+)\)/g, (_m, file) => `url(${prefix}/${file})`)
writeFileSync(outFile, compiled)

// The `@theme` tokens compile into `:root` inside this same stylesheet — this
// repo has no separate tokens package for the converter's `tokens/` dir, so the
// count is reported here as a sanity check that the safelist did its job.
const tokenCount = (
  (compiled.match(/:root[^{]*\{--[^}]*\}/g) ?? []).join('').match(/--[\w-]+:/g) ?? []
).length

console.error(
  `prepare-css: ${sheets[0]} (${(compiled.length / 1024).toFixed(1)} KB, ${rewrites} asset URLs rewritten, ` +
    `${tokenCount} custom properties) -> ${relative(repoRoot, outFile)}`,
)
