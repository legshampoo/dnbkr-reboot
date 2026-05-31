import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { projectPath } from '@/data/projects'

type ProjectGridProps = {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-2">
      {projects.map((project) => (
        <Link
          key={project.slug}
          to={projectPath(project)}
          className="group relative aspect-[10/8] overflow-hidden bg-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-dnbkr-accent"
        >
          <img
            src={project.thumb}
            alt=""
            className="absolute inset-0 h-full w-full object-cover motion-safe-transition group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/0 motion-safe-transition group-hover:bg-black/70 group-focus-visible:bg-black/70" />
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <div className="text-center opacity-0 motion-safe-transition group-hover:opacity-100 group-focus-visible:opacity-100">
              <p className="text-xl font-light tracking-wide text-white">
                {project.title}
              </p>
              {project.subtitle ? (
                <p className="mt-2 text-sm font-light italic text-neutral-300">
                  {project.subtitle}
                </p>
              ) : null}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
