import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectSections } from '@/components/ProjectSections'
import type { ProjectCategory } from '@/data/projects'
import { categoryMeta, getProject } from '@/data/projects'

type ProjectPageParams = {
  slug: string
}

function SummaryBlock({
  summary,
  links,
}: {
  summary: string
  links?: { label: string; href: string }[]
}) {
  if (!summary && !links?.length) return null

  return (
    <div className="mx-auto max-w-2xl border-b border-neutral-200/80 px-8 pb-16 pt-2 text-center xl:max-w-3xl xl:px-12">
      {summary.split('\n\n').map((paragraph, i) => (
        <p
          key={i}
          className="dnbkr-lead mb-7 whitespace-pre-line text-neutral-600 last:mb-0"
        >
          {paragraph}
        </p>
      ))}
      {links?.length ? (
        <div className="mt-10 flex flex-col items-center gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="dnbkr-link text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function ProjectPage({ category }: { category: ProjectCategory }) {
  const { slug } = useParams() as ProjectPageParams
  const project = getProject(category, slug)
  const { path: listPath, label: listLabel } = categoryMeta[category]

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — DNBKR`
    }
    return () => {
      document.title = 'DNBKR'
    }
  }, [project])

  if (!project) {
    return (
      <div className="px-12 py-32 text-center">
        <p className="text-neutral-500">Project not found.</p>
        <Link to={listPath} className="dnbkr-back-link mt-6">
          ← Back to {listLabel}
        </Link>
      </div>
    )
  }

  const showHero = Boolean(project.hero)

  return (
    <article>
      {showHero ? (
        <div className="mx-auto w-full max-w-6xl px-8 pt-10 xl:px-12">
          <figure className="overflow-hidden rounded-sm bg-neutral-100">
            <img
              src={project.hero}
              alt=""
              className="mx-auto block h-auto w-full max-h-[min(50vh,440px)] object-contain"
            />
          </figure>
        </div>
      ) : null}

      <header className="mx-auto max-w-3xl px-8 py-16 text-center xl:px-12">
        <h1 className="dnbkr-display text-neutral-900">{project.title}</h1>
        {project.subtitle ? (
          <p className="mt-4 text-base font-light italic tracking-wide text-neutral-500">
            {project.subtitle}
          </p>
        ) : null}
      </header>

      <SummaryBlock summary={project.summary} links={project.links} />

      {project.sections.length > 0 ? (
        <ProjectSections sections={project.sections} />
      ) : null}

      <footer className="border-t border-neutral-200/80 py-20 text-center">
        <Link to={listPath} className="dnbkr-back-link">
          ← {listLabel}
        </Link>
      </footer>
    </article>
  )
}
