import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppProjectSection } from '@/components/app-project/AppProjectSection'
import { AppProjectText } from '@/components/app-project/AppProjectText'
import { ArchitectureDiagram } from '@/components/app-project/ArchitectureDiagram'
import { SolutionDiagram } from '@/components/app-project/SolutionDiagram'
import { VideoEmbed } from '@/components/VideoEmbed'
import { getAppProject } from '@/data/appsProjects'
import { categoryMeta } from '@/data/projects'
import { SITE_NAME } from '@/data/site'

export function AppProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getAppProject(slug) : undefined
  const { path: listPath, label: listLabel } = categoryMeta.apps

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — ${SITE_NAME}`
    }
    return () => {
      document.title = SITE_NAME
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

  const hasVideo = Boolean(project.demo.vimeoId || project.demo.youtubeId)

  return (
    <article>
      {project.hero ? (
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
        {project.links?.length ? (
          <div className="mt-4 flex flex-col items-center gap-2">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="dnbkr-link text-base font-light italic tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <AppProjectSection id="overview" title="Overview">
        <AppProjectText text={project.overview} />
        <dl className="mt-10 grid gap-6 border-t border-neutral-200/80 pt-10 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              Role
            </dt>
            <dd className="mt-2 text-sm font-light text-neutral-700">
              {project.meta.role}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              Year
            </dt>
            <dd className="mt-2 text-sm font-light text-neutral-700">
              {project.meta.year}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              Stack
            </dt>
            <dd className="mt-2 text-sm font-light leading-relaxed text-neutral-700">
              {project.meta.stack}
            </dd>
          </div>
        </dl>
        {project.links?.length ? (
          <div className="mt-10 flex flex-col items-start gap-3 border-t border-neutral-200/80 pt-10">
            {project.links.map((link) => (
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
      </AppProjectSection>

      <AppProjectSection id="problem" title="The Problem">
        <AppProjectText text={project.problem} />
      </AppProjectSection>

      <AppProjectSection id="solution" title="The Solution" wide>
        <div className="mx-auto max-w-3xl">
          <SolutionDiagram diagram={project.solution.diagram} />
          <div className="mt-10 border-t border-neutral-200/80 pt-10">
            <AppProjectText text={project.solution.body} />
          </div>
        </div>
        {project.solution.screenshot ? (
          <figure className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-sm bg-neutral-100">
            <img
              src={project.solution.screenshot}
              alt={project.solution.screenshotAlt ?? ''}
              className="mx-auto block h-auto w-full object-contain"
            />
          </figure>
        ) : null}
      </AppProjectSection>

      <AppProjectSection id="technical-challenges" title="Technical Challenges">
        <ul className="space-y-12">
          {project.technicalChallenges.map((challenge) => (
            <li key={challenge.title}>
              <h3 className="mb-4 text-lg font-light tracking-wide text-neutral-800">
                {challenge.title}
              </h3>
              <AppProjectText text={challenge.body} />
            </li>
          ))}
        </ul>
      </AppProjectSection>

      <AppProjectSection id="architecture" title="Architecture" wide>
        <div className="mx-auto max-w-3xl">
          <ArchitectureDiagram
            nodes={project.architecture.diagram?.nodes}
            caption={project.architecture.diagram?.caption}
            ariaLabel={project.architecture.diagram?.ariaLabel}
          />
          <div className="mt-10">
            <AppProjectText text={project.architecture.body} />
          </div>
        </div>
      </AppProjectSection>

      <AppProjectSection id="demo" title="Demo" wide>
        {hasVideo ? (
          <VideoEmbed
            vimeoId={project.demo.vimeoId}
            youtubeId={project.demo.youtubeId}
            title={project.title}
            className="mx-auto max-w-3xl shadow-md"
          />
        ) : project.demo.screenshot ? (
          <figure className="mx-auto max-w-4xl overflow-hidden rounded-sm bg-neutral-100">
            <img
              src={project.demo.screenshot}
              alt=""
              className="mx-auto block h-auto w-full object-contain"
            />
          </figure>
        ) : null}
        {project.demo.caption ? (
          <p className="dnbkr-lead mx-auto mt-8 max-w-xl text-center text-neutral-500">
            {project.demo.caption}
          </p>
        ) : null}
        {project.demo.gallery?.length ? (
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3">
            {project.demo.gallery.map((src, i) => (
              <figure
                key={i}
                className="aspect-[4/3] overflow-hidden rounded-sm bg-neutral-100"
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </figure>
            ))}
          </div>
        ) : null}
      </AppProjectSection>

      <AppProjectSection id="lessons" title="Lessons Learned">
        <AppProjectText text={project.lessonsLearned} />
      </AppProjectSection>

      <footer className="border-t border-neutral-200/80 py-20 text-center">
        <Link to={listPath} className="dnbkr-back-link">
          ← {listLabel}
        </Link>
      </footer>
    </article>
  )
}
