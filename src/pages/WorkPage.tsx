import { ProjectGrid } from '@/components/ProjectGrid'
import { getProjectsByCategory } from '@/data/projects'

export function WorkPage() {
  return <ProjectGrid projects={getProjectsByCategory('work')} />
}
