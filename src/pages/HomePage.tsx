import { ProjectGrid } from '@/components/ProjectGrid'
import { getProjectsByCategory } from '@/data/projects'

/** Home shows experiences grid (legacy site default). */
export function HomePage() {
  return <ProjectGrid projects={getProjectsByCategory('work')} />
}
