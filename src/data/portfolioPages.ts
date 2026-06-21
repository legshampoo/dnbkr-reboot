import type { PortfolioFilter, ProjectCategory } from './types'

export type PortfolioPageConfig = {
  eyebrow: string
  title: string
  description: string
}

export const portfolioPageConfig: Record<ProjectCategory, PortfolioPageConfig> = {
  work: {
    eyebrow: 'Experiences',
    title: 'Building immersive experiences and digital products.',
    description:
      'A selection of projects across interactive installations, digital experiences, software products, and creative technology.',
  },
  apps: {
    eyebrow: 'Products',
    title: 'AI-powered products built for real businesses.',
    description:
      'Software products, platforms, and tools — from AI agents and automation to full-stack applications.',
  },
  art: {
    eyebrow: 'Art',
    title: 'Exploring material, technology, and form.',
    description:
      'Independent art projects spanning resin sculpture, kinetic installation, projection, and data-driven work.',
  },
}

/** Work-project filter overrides — keyed by slug. */
export const workFilterTags: Record<string, PortfolioFilter> = {
  woom: 'installation',
  panorama: 'installation',
  terrell: 'experience',
  takeover: 'experience',
  eastforest: 'experience',
  toy: 'installation',
  lacoste: 'installation',
  redbull: 'experience',
  'creatives-rising': 'digital',
  teleporter: 'experience',
}

export const portfolioFilterLabels: Record<PortfolioFilter, string> = {
  installation: 'Installation',
  digital: 'Digital',
  product: 'Product',
  experience: 'Experience',
  art: 'Art',
}

export const PORTFOLIO_PAGE_SIZE = 9
export const PORTFOLIO_LOAD_MORE = 6
