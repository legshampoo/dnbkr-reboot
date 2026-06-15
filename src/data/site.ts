import { categoryMeta, projectPath, projects } from './projects'

export const SITE_URL = 'https://danbaker.studio'
export const SITE_NAME = 'Dan Baker'
export const SITE_DOMAIN = 'danbaker.studio'

export function getSitemapPaths(): string[] {
  const listings = [
    '/',
    categoryMeta.work.path,
    categoryMeta.apps.path,
    categoryMeta.art.path,
    '/contact',
  ]
  const detail = projects.map((p) => projectPath(p))
  return [...new Set([...listings, ...detail])]
}

export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
}

export function generateSitemapXml(lastmod = new Date().toISOString().slice(0, 10)): string {
  const urls = getSitemapPaths()
    .map(
      (pathname) => `  <url>
    <loc>${SITE_URL}${pathname}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}
