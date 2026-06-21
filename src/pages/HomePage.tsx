import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { contactProfile } from '@/data/contact'
import {
  BOOKING_URL,
  homeAbout,
  homeCta,
  homeHero,
  homeProjects,
  homeWhatIDo,
  type HomeService,
} from '@/data/home'
import { SITE_NAME } from '@/data/site'

function ServiceIcon({ icon }: { icon: HomeService['icon'] }) {
  const className = 'h-6 w-6 stroke-neutral-900'
  switch (icon) {
    case 'agents':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <rect x="5" y="8" width="14" height="11" rx="2" />
          <circle cx="9.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="14.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
          <path d="M12 4v3" strokeLinecap="round" />
          <path d="M8 4h8" strokeLinecap="round" />
        </svg>
      )
    case 'apps':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <path d="M8 6l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.5 4.5l-3 15" strokeLinecap="round" />
        </svg>
      )
    case 'voice':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <path d="M4 12c0-4 3.5-7 8-7s8 3 8 7" strokeLinecap="round" />
          <path d="M6 12v1.5c0 3 2.7 5.5 6 5.5s6-2.5 6-5.5V12" strokeLinecap="round" />
          <path d="M12 19v2" strokeLinecap="round" />
        </svg>
      )
    case 'tools':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M4.9 19.1l2.1-2.1M16.9 7.1l2.1-2.1" strokeLinecap="round" />
        </svg>
      )
    case 'prototypes':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'strategy':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" strokeLinecap="round" />
        </svg>
      )
  }
}

function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-8 py-16 md:grid-cols-2 md:gap-16 md:py-24 xl:px-12">
        <div>
          <h1 className="text-[2.5rem] leading-[1.08] font-normal tracking-[-0.02em] text-neutral-900 md:text-[3.25rem]">
            {homeHero.headline}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed font-light text-neutral-600 md:text-lg">
            {homeHero.subhead}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="dnbkr-btn-black"
            >
              Book a Call
              <span aria-hidden className="ml-1.5">→</span>
            </a>
            <Link to="/products" className="dnbkr-btn-muted">
              View Projects
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md md:max-w-none">
          <img
            src={contactProfile.imageSrc}
            alt={contactProfile.imageAlt}
            className="aspect-square w-full rounded-sm object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}

function WhatIDoSection() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-8 py-20 xl:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase">
            {homeWhatIDo.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl leading-snug font-normal tracking-[-0.01em] text-neutral-900 md:text-3xl">
            {homeWhatIDo.title}
          </h2>
        </div>
        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {homeWhatIDo.services.map((service) => (
            <li key={service.title}>
              <ServiceIcon icon={service.icon} />
              <h3 className="mt-4 text-base font-medium text-neutral-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed font-light text-neutral-500">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-8 py-20 xl:px-12">
        <p className="text-center text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase">
          Selected Projects
        </p>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {homeProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-sm border border-neutral-200 bg-white"
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={project.thumb}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-neutral-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed font-light text-neutral-500">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm bg-neutral-100 px-2.5 py-1 text-xs font-light text-neutral-600"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.cta ? (
                  <div className="mt-5">
                    <Link
                      to={project.cta.href}
                      className="text-sm font-light text-neutral-900 transition-colors hover:text-dnbkr-accent"
                    >
                      {project.cta.label} →
                    </Link>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-8 py-20 lg:grid-cols-2 xl:px-12">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase">
            {homeAbout.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl leading-snug font-normal tracking-[-0.01em] text-neutral-900 md:text-3xl">
            {homeAbout.headline}
          </h2>
          <p className="mt-6 text-base leading-relaxed font-light text-neutral-600">
            {homeAbout.body}
          </p>
          <Link
            to={homeAbout.cta.href}
            className="mt-6 inline-block text-sm font-light text-neutral-900 transition-colors hover:text-dnbkr-accent"
          >
            {homeAbout.cta.label} →
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-6">
          {homeAbout.stats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-sm border border-neutral-200 bg-white p-6"
            >
              <p className="text-3xl font-normal tracking-tight text-neutral-900">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-light text-neutral-500">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="bg-white px-8 py-20 xl:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-sm bg-neutral-900 px-8 py-12 md:flex-row md:items-center md:px-12 md:py-14">
        <div>
          <h2 className="text-2xl font-normal tracking-[-0.01em] text-white md:text-3xl">
            {homeCta.title}
          </h2>
          <p className="mt-3 max-w-md text-sm font-light text-neutral-400">
            {homeCta.body}
          </p>
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="dnbkr-btn-white shrink-0"
        >
          {homeCta.button}
          <span aria-hidden className="ml-1.5">→</span>
        </a>
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
    <div className="bg-white">
      <HeroSection />
      <WhatIDoSection />
      <ProjectsSection />
      <AboutSection />
      <CtaSection />
    </div>
  )
}
