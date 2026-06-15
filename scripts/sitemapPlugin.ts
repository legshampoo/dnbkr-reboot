import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Plugin } from 'vite'
import { generateRobotsTxt, generateSitemapXml } from '../src/data/site'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))

function writeSitemapFiles() {
  const publicDir = path.join(root, 'public')
  writeFileSync(path.join(publicDir, 'robots.txt'), generateRobotsTxt())
  writeFileSync(path.join(publicDir, 'sitemap.xml'), generateSitemapXml())
}

export function sitemapPlugin(): Plugin {
  return {
    name: 'site-sitemap',
    configureServer() {
      writeSitemapFiles()
    },
    buildStart() {
      writeSitemapFiles()
    },
  }
}
