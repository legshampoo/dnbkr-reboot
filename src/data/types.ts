export type ProjectCategory = 'work' | 'art'

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
  links?: ProjectLink[]
  order: number
  sections: ProjectSection[]
}
