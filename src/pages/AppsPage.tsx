import { ProjectGrid } from '@/components/ProjectGrid'
import { getProjectsByCategory } from '@/data/projects'

export function AppsPage() {
  return <ProjectGrid projects={getProjectsByCategory('apps')} />
}
