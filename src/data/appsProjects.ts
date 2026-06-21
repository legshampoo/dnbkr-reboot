import { aumChanting } from './apps/aum-chanting'
import { editlessStudio } from './apps/editless-studio'
import { iaoToday } from './apps/iao-today'
import type { AppProject, Project } from './types'

export const appsProjects: AppProject[] = [editlessStudio, iaoToday, aumChanting]

export function appProjectToProject(app: AppProject): Project {
  return {
    slug: app.slug,
    category: 'apps',
    title: app.title,
    subtitle: app.subtitle,
    thumb: app.thumb,
    hero: app.hero,
    summary: app.overview,
    links: app.links,
    order: app.order,
    sections: [],
  }
}

export function getAppProject(slug: string): AppProject | undefined {
  return appsProjects.find((p) => p.slug === slug)
}
