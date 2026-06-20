import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  BOOKING_URL,
  homeCta,
  homeHero,
  homePreviousWork,
  homeProjects,
  homeWhatIDo,
  homeWhyWorkWithMe,
} from '@/data/home'
import { SITE_NAME } from '@/data/site'

function HeroSection() {
  return (
    <section className="bg-dnbkr-black text-white">
      <div className="mx-auto max-w-5xl px-8 py-24 md:py-32 xl:px-12">
        <p className="text-xs font-light tracking-[0.28em] text-neutral-400 uppercase">
          {homeHero.name}
        </p>
        <h1 className="mt-6 text-[2.75rem] leading-[1.1] font-light tracking-[0.06em] text-white md:text-[3.5rem]">
          {homeHero.role}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed font-light text-neutral-300 md:text-xl">
          {homeHero.tagline}
        </p>
        <p className="mt-3 text-base font-light tracking-wide text-neutral-500">
          {homeHero.subline}
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="dnbkr-btn-primary"
          >
            Book a Call
          </a>
          <Link to="/products" className="dnbkr-btn-secondary">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhatIDoSection() {
  return (
    <section className="bg-dnbkr-bg">
      <div className="mx-auto max-w-5xl px-8 py-20 md:py-28 xl:px-12">
        <h2 className="dnbkr-display text-neutral-900">{homeWhatIDo.title}</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed font-light text-neutral-600">
          {homeWhatIDo.intro}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed font-light text-neutral-600">
          {homeWhatIDo.body}
        </p>

        <div className="mt-14">
          <h3 className="text-sm font-light tracking-[0.2em] text-neutral-400 uppercase">
            Services
          </h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {homeWhatIDo.services.map((service) => (
              <li
                key={service}
                className="border border-dnbkr-border/80 bg-dnbkr-surface px-5 py-4 text-sm font-light tracking-wide text-neutral-800"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="bg-dnbkr-muted">
      <div className="mx-auto max-w-5xl px-8 py-20 md:py-28 xl:px-12">
        <h2 className="dnbkr-display text-neutral-900">Selected Projects</h2>
        <div className="mt-14 space-y-8">
          {homeProjects.map((project) => (
            <article
              key={project.title}
              className="border border-dnbkr-border/80 bg-dnbkr-surface p-8 md:p-10"
            >
              <h3 className="text-xl font-light tracking-wide text-neutral-900">
                {project.title}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed font-light text-neutral-600">
                {project.description}
              </p>
              <p className="mt-4 text-sm font-light tracking-wide text-neutral-400">
                {project.tags}
              </p>
              {project.cta ? (
                <div className="mt-8">
                  {project.cta.external ? (
                    <a
                      href={project.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dnbkr-link text-sm tracking-wide uppercase"
                    >
                      {project.cta.label} →
                    </a>
                  ) : (
                    <Link
                      to={project.cta.href}
                      className="dnbkr-link text-sm tracking-wide uppercase"
                    >
                      {project.cta.label} →
                    </Link>
                  )}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyWorkWithMeSection() {
  return (
    <section className="bg-dnbkr-bg">
      <div className="mx-auto max-w-5xl px-8 py-20 md:py-28 xl:px-12">
        <h2 className="dnbkr-display text-neutral-900">
          {homeWhyWorkWithMe.title}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed font-light text-neutral-600">
          {homeWhyWorkWithMe.intro}
        </p>
        <p className="mt-8 text-sm font-light tracking-[0.12em] text-neutral-500 uppercase">
          {homeWhyWorkWithMe.backgroundIntro}
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {homeWhyWorkWithMe.strengths.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm font-light tracking-wide text-neutral-800"
            >
              <span
                className="h-1 w-1 shrink-0 rounded-full bg-dnbkr-accent"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-base leading-relaxed font-light text-neutral-600">
          {homeWhyWorkWithMe.closing}
        </p>
      </div>
    </section>
  )
}

function PreviousWorkSection() {
  return (
    <section className="bg-dnbkr-muted">
      <div className="mx-auto max-w-5xl px-8 py-20 md:py-28 xl:px-12">
        <h2 className="dnbkr-display text-neutral-900">
          {homePreviousWork.title}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed font-light text-neutral-600">
          {homePreviousWork.body}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed font-light text-neutral-600">
          {homePreviousWork.note}
        </p>
        <div className="mt-10">
          <Link
            to="/experiences"
            className="dnbkr-btn-secondary-light inline-flex"
          >
            View Experiences
          </Link>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="bg-dnbkr-black text-white">
      <div className="mx-auto max-w-5xl px-8 py-20 md:py-28 xl:px-12">
        <h2 className="dnbkr-display text-white">{homeCta.title}</h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed font-light text-neutral-300">
          {homeCta.body}
        </p>
        <p className="mt-2 text-base font-light text-neutral-400">
          {homeCta.closing}
        </p>
        <div className="mt-10">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="dnbkr-btn-primary"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  useEffect(() => {
    document.title = `${SITE_NAME} — AI Product Engineer`
    return () => {
      document.title = SITE_NAME
    }
  }, [])

  return (
    <div>
      <HeroSection />
      <WhatIDoSection />
      <ProjectsSection />
      <WhyWorkWithMeSection />
      <PreviousWorkSection />
      <CtaSection />
    </div>
  )
}
