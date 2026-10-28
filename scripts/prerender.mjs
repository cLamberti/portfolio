// Runs after `vite build` + the SSR build (see package.json "build").
// Renders the page in Node and injects it into dist/index.html so crawlers that don't run JS
// get the real content. Also stamps the site URL into the head tags, robots.txt and sitemap.xml.
import { readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// The one place the public URL lives. Override with SITE_URL when the site gets its own domain.
const SITE_URL = (process.env.SITE_URL ?? 'https://portfolio-christopher-lamberti.vercel.app').replace(/\/+$/, '')

const root = resolve(import.meta.dirname, '..')
const dist = join(root, 'dist')
const { render } = await import(pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href)

const stamp = (file, transform = (s) => s) => {
  const path = join(dist, file)
  const out = transform(readFileSync(path, 'utf8')).replaceAll('__SITE_URL__', SITE_URL)
  writeFileSync(path, out)
  return out
}

const html = stamp('index.html', (s) => {
  if (!s.includes('<div id="root"></div>')) throw new Error('prerender: <div id="root"></div> not found in dist/index.html')
  return s.replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`)
})
stamp('robots.txt')
stamp('sitemap.xml')

console.log(`prerendered / (${(html.length / 1024).toFixed(1)} KB) for ${SITE_URL}`)
