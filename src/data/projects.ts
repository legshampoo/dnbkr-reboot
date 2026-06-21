import { appProjectToProject, appsProjects } from './appsProjects'
import { artProjects } from './artProjects'
import {
  portfolioFilterLabels,
  workFilterTags,
} from './portfolioPages'
import { workProjects } from './workProjects'
import type { PortfolioFilter, Project } from './types'

export type {
  AppProject,
  AppProjectChallenge,
  AppProjectDiagramStep,
  AppProjectMeta,
  AppProjectSolutionDiagram,
  PortfolioFilter,
  Project,
  ProjectCategory,
  ProjectLink,
  ProjectSection,
  SectionLayout,
} from './types'

export { appsProjects, getAppProject } from './appsProjects'

export const projects = [
  ...workProjects,
  ...artProjects,
  ...appsProjects.map(appProjectToProject),
]

export const categoryMeta: Record<
  import('./types').ProjectCategory,
  { path: string; label: string }
> = {
  work: { path: '/experiences', label: 'Experiences' },
  apps: { path: '/products', label: 'Products' },
  art: { path: '/art', label: 'Art' },
}

export function getProjectFilterTag(project: Project): PortfolioFilter {
  if (project.filterTag) return project.filterTag
  if (project.category === 'apps') return 'product'
  if (project.category === 'art') return 'art'
  return workFilterTags[project.slug] ?? 'experience'
}

export function getProjectFilterLabel(project: Project): string {
  return portfolioFilterLabels[getProjectFilterTag(project)]
}

export function cardDescription(summary: string, maxLength = 120): string {
  const text = summary.split('\n')[0]?.trim() ?? summary
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength - 1).trim()}…`
}

export function getProjectsByCategory(
  category: import('./types').ProjectCategory,
) {
  return projects
    .filter((p) => p.category === category)
    .sort((a, b) => a.order - b.order)
}

export function getProject(
  category: import('./types').ProjectCategory,
  slug: string,
) {
  return projects.find((p) => p.category === category && p.slug === slug)
}

export function projectPath(project: import('./types').Project): string {
  return `${categoryMeta[project.category].path}/${project.slug}`
}
