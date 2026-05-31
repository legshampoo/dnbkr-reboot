import { ProjectGrid } from '@/components/ProjectGrid'
import { getProjectsByCategory } from '@/data/projects'

/** Home shows client work grid (legacy site default). */
export function HomePage() {
  return <ProjectGrid projects={getProjectsByCategory('work')} />
}
