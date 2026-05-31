import type { ProjectSection } from '@/data/types'
import { VideoEmbed } from './VideoEmbed'

type ProjectSectionsProps = {
  sections: ProjectSection[]
}

const SHELL = 'mx-auto w-full max-w-6xl px-8 xl:px-12'

type SectionGroup =
  | { kind: 'block'; section: ProjectSection; index: number }
  | { kind: 'gallery'; sections: ProjectSection[]; startIndex: number }

function groupSections(sections: ProjectSection[]): SectionGroup[] {
  const groups: SectionGroup[] = []
  let i = 0

  while (i < sections.length) {
    const section = sections[i]

    if (section.layout === 'full-width' && section.image) {
      const run: ProjectSection[] = []
      const startIndex = i
      while (
        i < sections.length &&
        sections[i].layout === 'full-width' &&
        sections[i].image
      ) {
        run.push(sections[i])
        i++
      }
      if (run.length >= 3) {
        groups.push({ kind: 'gallery', sections: run, startIndex })
      } else {
        run.forEach((s, offset) => {
          groups.push({ kind: 'block', section: s, index: startIndex + offset })
        })
      }
      continue
    }

    groups.push({ kind: 'block', section, index: i })
    i++
  }

  return groups
}

function ContainedImage({
  src,
  className = '',
}: {
  src: string
  className?: string
}) {
  return (
    <img
      src={src}
      alt=""
      className={`mx-auto block h-auto w-full max-h-[min(52vh,480px)] object-contain ${className}`.trim()}
    />
  )
}

function MediaOnlyBlock({ section }: { section: ProjectSection }) {
  if (section.vimeoId || section.youtubeId) {
    return (
      <section className={`${SHELL} py-10`}>
        <VideoEmbed
          vimeoId={section.vimeoId}
          youtubeId={section.youtubeId}
          title={section.title}
          className="mx-auto max-w-3xl shadow-md"
        />
      </section>
    )
  }

  if (section.image) {
    return (
      <section className={`${SHELL} py-8`}>
        <figure className="overflow-hidden rounded-sm bg-neutral-100">
          <ContainedImage src={section.image} />
        </figure>
      </section>
    )
  }

  return null
}

function SectionText({ section }: { section: ProjectSection }) {
  if (!section.title && !section.body) return null

  return (
    <div className="flex flex-col justify-center py-10 lg:py-12">
      {section.title ? (
        <h2 className="dnbkr-section-title mb-4">{section.title}</h2>
      ) : null}
      {section.body ? (
        <p className="dnbkr-lead text-neutral-600">{section.body}</p>
      ) : null}
    </div>
  )
}

function SplitSection({
  section,
  mediaFirst,
}: {
  section: ProjectSection
  mediaFirst: boolean
}) {
  const hasText = Boolean(section.title || section.body)

  if (!hasText) {
    return <MediaOnlyBlock section={section} />
  }

  const mediaCell = (
    <div className="flex items-center justify-center overflow-hidden rounded-sm bg-neutral-100 lg:min-h-[280px]">
      {section.vimeoId || section.youtubeId ? (
        <VideoEmbed
          vimeoId={section.vimeoId}
          youtubeId={section.youtubeId}
          title={section.title}
          className="w-full"
        />
      ) : section.image ? (
        <ContainedImage src={section.image} className="max-h-[360px]" />
      ) : null}
    </div>
  )

  return (
    <section className={`${SHELL} py-8`}>
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {mediaFirst ? (
          <>
            {mediaCell}
            <SectionText section={section} />
          </>
        ) : (
          <>
            <SectionText section={section} />
            {mediaCell}
          </>
        )}
      </div>
    </section>
  )
}

function FigureBlock({ section }: { section: ProjectSection }) {
  return (
    <section className={`${SHELL} py-6`}>
      <figure className="overflow-hidden rounded-sm bg-neutral-100">
        <ContainedImage src={section.image!} />
      </figure>
    </section>
  )
}

function GalleryBlock({ sections }: { sections: ProjectSection[] }) {
  return (
    <section className={`${SHELL} py-10`}>
      <div className="grid grid-cols-2 gap-3 xl:gap-4">
        {sections.map((section, i) => (
          <figure
            key={i}
            className="aspect-[4/3] overflow-hidden rounded-sm bg-neutral-100"
          >
            <img
              src={section.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}

function BlockSection({
  section,
  index,
}: {
  section: ProjectSection
  index: number
}) {
  if (section.layout === 'full-width') {
    if (section.image) return <FigureBlock section={section} />
    return <MediaOnlyBlock section={section} />
  }

  if (section.layout === 'video') {
    return (
      <section key={index} className={`${SHELL} py-10`}>
        <VideoEmbed
          vimeoId={section.vimeoId}
          youtubeId={section.youtubeId}
          title={section.title}
          className="mx-auto max-w-3xl shadow-md"
        />
        {section.body ? (
          <p className="dnbkr-lead mx-auto mt-8 max-w-xl text-center text-neutral-600">
            {section.body}
          </p>
        ) : null}
      </section>
    )
  }

  const mediaFirst = section.layout === 'image-left'
  return <SplitSection section={section} mediaFirst={mediaFirst} />
}

export function ProjectSections({ sections }: ProjectSectionsProps) {
  const groups = groupSections(sections)

  return (
    <div className="border-t border-neutral-200/80 pb-8">
      {groups.map((group) => {
        if (group.kind === 'gallery') {
          return (
            <GalleryBlock
              key={`gallery-${group.startIndex}`}
              sections={group.sections}
            />
          )
        }
        return (
          <BlockSection
            key={group.index}
            section={group.section}
            index={group.index}
          />
        )
      })}
    </div>
  )
}
