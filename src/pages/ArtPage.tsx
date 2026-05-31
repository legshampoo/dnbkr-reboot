import { ProjectGrid } from '@/components/ProjectGrid'
import { getProjectsByCategory } from '@/data/projects'

export function ArtPage() {
  return <ProjectGrid projects={getProjectsByCategory('art')} />
}
