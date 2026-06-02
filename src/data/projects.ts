import { appProjectToProject, appsProjects } from './appsProjects'
import { artProjects } from './artProjects'
import { workProjects } from './workProjects'

export type {
  AppProject,
  AppProjectChallenge,
  AppProjectDiagramStep,
  AppProjectMeta,
  AppProjectSolutionDiagram,
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
