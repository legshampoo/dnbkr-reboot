import { artProjects } from './artProjects'
import { workProjects } from './workProjects'

export type {
  Project,
  ProjectCategory,
  ProjectLink,
  ProjectSection,
  SectionLayout,
} from './types'

export const projects = [...workProjects, ...artProjects]

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
  const base = project.category === 'work' ? '/work' : '/art'
  return `${base}/${project.slug}`
}
