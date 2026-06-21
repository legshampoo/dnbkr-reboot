import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  aboutBackground,
  aboutCta,
  aboutHowIWork,
  aboutIntro,
  aboutOutside,
  aboutProjects,
  aboutWhyAi,
} from '@/data/about'
import { BOOKING_URL } from '@/data/home'
import { SITE_NAME } from '@/data/site'

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase">
      {children}
    </p>
  )
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-2xl leading-snug font-normal tracking-[-0.01em] text-neutral-900 md:text-3xl">
      {children}
    </h2>
  )
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-6 max-w-3xl space-y-4">
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="text-base leading-relaxed font-light text-neutral-600"
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 max-w-3xl space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-base font-light leading-relaxed text-neutral-600"
        >
          <span
            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

function IntroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-8 py-16 md:py-24 xl:px-12">
        <SectionEyebrow>{aboutIntro.eyebrow}</SectionEyebrow>
        <h1 className="mt-4 max-w-3xl text-[2rem] leading-[1.12] font-normal tracking-[-0.02em] text-neutral-900 md:text-[2.75rem]">
          {aboutIntro.headline}
        </h1>
        <Prose paragraphs={aboutIntro.paragraphs} />
      </div>
    </section>
  )
}

function BackgroundSection() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-8 py-20 xl:px-12">
        <SectionTitle>{aboutBackground.title}</SectionTitle>
        <Prose paragraphs={aboutBackground.paragraphs} />
      </div>
    </section>
  )
}

function WhyAiSection() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-8 py-20 xl:px-12">
        <SectionTitle>{aboutWhyAi.title}</SectionTitle>
        <Prose paragraphs={aboutWhyAi.paragraphs} />
        <p className="mt-8 text-base font-light text-neutral-600">
          My recent work includes:
        </p>
        <BulletList items={aboutWhyAi.recentWork} />
      </div>
    </section>
  )
}

function HowIWorkSection() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-8 py-20 xl:px-12">
        <SectionTitle>{aboutHowIWork.title}</SectionTitle>
        <Prose paragraphs={aboutHowIWork.paragraphs} />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
          {aboutHowIWork.principles.map((principle) => (
            <li
              key={principle}
              className="rounded-sm border border-neutral-200 bg-white px-5 py-4 text-base font-light text-neutral-800"
            >
              {principle}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-8 py-20 xl:px-12">
        <SectionTitle>Selected Projects</SectionTitle>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {aboutProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-sm border border-neutral-200 bg-neutral-50 p-6"
            >
              <h3 className="text-lg font-medium text-neutral-900">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed font-light text-neutral-500">
                {project.description}
              </p>
              {project.href ? (
                <Link
                  to={project.href}
                  className="mt-5 inline-block text-sm font-light text-neutral-900 transition-colors hover:text-dnbkr-accent"
                >
                  View project →
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function OutsideSection() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-8 py-20 xl:px-12">
        <SectionTitle>{aboutOutside.title}</SectionTitle>
        <Prose paragraphs={aboutOutside.paragraphs} />
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="border-t border-neutral-200 bg-white px-8 py-20 xl:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-sm bg-neutral-900 px-8 py-12 md:flex-row md:items-center md:px-12 md:py-14">
        <div>
          <h2 className="text-2xl font-normal tracking-[-0.01em] text-white md:text-3xl">
            {aboutCta.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-neutral-400">
            {aboutCta.body}
          </p>
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="dnbkr-btn-white shrink-0"
        >
          {aboutCta.button}
          <span aria-hidden className="ml-1.5">
            →
          </span>
        </a>
      </div>
    </section>
  )
}

export function AboutPage() {
  useEffect(() => {
    document.title = `About — ${SITE_NAME}`
    return () => {
      document.title = SITE_NAME
    }
  }, [])

  return (
    <div className="bg-white">
      <IntroSection />
      <BackgroundSection />
      <WhyAiSection />
      <HowIWorkSection />
      <ProjectsSection />
      <OutsideSection />
      <CtaSection />
    </div>
  )
}
