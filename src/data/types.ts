export type ProjectCategory = 'work' | 'art' | 'apps'

export type PortfolioFilter =
  | 'installation'
  | 'digital'
  | 'product'
  | 'experience'
  | 'art'

export type SectionLayout =
  | 'image-left'
  | 'image-right'
  | 'full-width'
  | 'video'

export type ProjectSection = {
  layout: SectionLayout
  title?: string
  body?: string
  image?: string
  vimeoId?: string
  youtubeId?: string
}

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  category: ProjectCategory
  title: string
  subtitle?: string
  thumb: string
  hero?: string
  summary: string
  /** Portfolio grid filter tag — inferred from category when omitted. */
  filterTag?: PortfolioFilter
  links?: ProjectLink[]
  order: number
  sections: ProjectSection[]
}

export type AppProjectMeta = {
  role: string
  year: string
  stack: string
}

export type AppProjectChallenge = {
  title: string
  body: string
}

export type AppProjectDiagramStep = {
  /** Phase banner, e.g. INGEST — groups steps without Mermaid subgraphs */
  phase: string
  label: string
  /** Short line inside the diagram node */
  note: string
  /** Longer copy in the numbered list below the chart */
  body: string
}

export type AppProjectSolutionDiagram = {
  intro?: string
  steps: AppProjectDiagramStep[]
  /** Optional override; otherwise built from steps via buildPipelineMermaid */
  mermaid?: string
}

export type AppProject = {
  slug: string
  category: 'apps'
  title: string
  subtitle?: string
  thumb: string
  hero?: string
  order: number
  links?: ProjectLink[]
  overview: string
  meta: AppProjectMeta
  problem: string
  solution: {
    body: string
    diagram: AppProjectSolutionDiagram
    screenshot?: string
    screenshotAlt?: string
  }
  technicalChallenges: AppProjectChallenge[]
  architecture: {
    body: string
    diagram?: {
      nodes: { id: string; label: string; row: number; col: number }[]
      caption?: string
      ariaLabel?: string
    }
  }
  demo?: {
    caption?: string
    screenshot?: string
    vimeoId?: string
    youtubeId?: string
    gallery?: string[]
  }
  lessonsLearned: string
}
