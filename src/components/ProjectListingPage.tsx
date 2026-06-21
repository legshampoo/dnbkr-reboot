import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  PORTFOLIO_LOAD_MORE,
  PORTFOLIO_PAGE_SIZE,
  portfolioPageConfig,
} from '@/data/portfolioPages'
import {
  cardDescription,
  getProjectFilterLabel,
  getProjectsByCategory,
  projectPath,
  type Project,
  type ProjectCategory,
} from '@/data/projects'
import { SITE_NAME } from '@/data/site'

type ProjectListingPageProps = {
  category: ProjectCategory
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={projectPath(project)}
      className="group relative flex aspect-[10/8] flex-col justify-end overflow-hidden rounded-sm bg-neutral-200 outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
    >
      <img
        src={project.thumb}
        alt=""
        className="absolute inset-0 h-full w-full object-cover motion-safe-transition group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 motion-safe-transition group-hover:from-black/90" />
      <div className="relative p-5 pr-12 md:p-6">
        <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-neutral-300 uppercase">
          {getProjectFilterLabel(project)}
        </p>
        <h3 className="mt-2 text-lg leading-snug font-medium text-white md:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed font-light text-neutral-300">
          {cardDescription(project.summary)}
        </p>
        <span
          className="absolute right-5 bottom-5 text-lg text-white/80 motion-safe-transition group-hover:translate-x-0.5 group-hover:text-white md:right-6 md:bottom-6"
          aria-hidden
        >
          →
        </span>
      </div>
    </Link>
  )
}

export function ProjectListingPage({ category }: ProjectListingPageProps) {
  const config = portfolioPageConfig[category]
  const projects = useMemo(
    () => getProjectsByCategory(category),
    [category],
  )
  const [visibleCount, setVisibleCount] = useState(PORTFOLIO_PAGE_SIZE)

  const visibleProjects = projects.slice(0, visibleCount)
  const hasMore = visibleCount < projects.length

  useEffect(() => {
    document.title = `${config.eyebrow} — ${SITE_NAME}`
    return () => {
      document.title = SITE_NAME
    }
  }, [config.eyebrow])

  useEffect(() => {
    setVisibleCount(PORTFOLIO_PAGE_SIZE)
  }, [category])

  return (
    <div className="bg-white">
      <header className="mx-auto max-w-6xl px-8 pt-12 pb-10 md:pt-16 md:pb-12 xl:px-12">
        <p className="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase">
          {config.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-[2rem] leading-[1.12] font-normal tracking-[-0.02em] text-neutral-900 md:text-[2.75rem]">
          {config.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed font-light text-neutral-500">
          {config.description}
        </p>
      </header>

      <div className="mx-auto max-w-6xl px-8 pb-20 xl:px-12">
        {visibleProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-sm font-light text-neutral-500">
            No projects yet.
          </p>
        )}

        {hasMore ? (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) => count + PORTFOLIO_LOAD_MORE)
              }
              className="rounded-sm border border-neutral-300 px-8 py-3 text-xs font-light tracking-[0.12em] text-neutral-700 uppercase transition-colors hover:border-neutral-900 hover:text-neutral-900"
            >
              Load More Projects
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
