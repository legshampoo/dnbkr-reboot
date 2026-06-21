import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { contactProfile } from '@/data/contact'
import { BOOKING_URL } from '@/data/home'
import {
  servicesCta,
  servicesHero,
  servicesHowIHelp,
  servicesOutcomes,
  servicesProcess,
  servicesProjects,
  servicesWhyWork,
  type Outcome,
  type ServiceIconType,
  type ServiceOffering,
  type WorkStepIcon,
} from '@/data/services'
import { SITE_NAME } from '@/data/site'

function ServiceIcon({ icon }: { icon: ServiceIconType }) {
  const className = 'h-7 w-7 stroke-neutral-900'
  switch (icon) {
    case 'audit':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
        </svg>
      )
    case 'product':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" strokeLinejoin="round" />
          <path d="M12 4v16M4 8l8 4 8-4" strokeLinejoin="round" />
        </svg>
      )
    case 'automation':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M4.9 19.1l2.1-2.1M16.9 7.1l2.1-2.1" strokeLinecap="round" />
        </svg>
      )
    case 'partner':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <path d="M4 20c0-2.2 1.8-4 4-4M20 20c0-2.2-1.8-4-4-4" strokeLinecap="round" />
        </svg>
      )
  }
}

function StepIcon({ icon }: { icon: WorkStepIcon }) {
  const className = 'h-5 w-5 stroke-neutral-900'
  switch (icon) {
    case 'discovery':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
        </svg>
      )
    case 'roadmap':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" strokeLinejoin="round" />
          <path d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinejoin="round" />
          <path d="M9 12h6M9 16h4" strokeLinecap="round" />
        </svg>
      )
    case 'build':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <path d="M8 6l-4 4 4 4M16 6l4 4-4 4M13.5 4.5l-3 15" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'launch':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <path d="M4.5 16.5c11-6 11-6 15-10.5 0 0-4.5 4-10.5 15 0 0 6-11 10.5-15z" strokeLinejoin="round" />
          <path d="M12 15l3 3" strokeLinecap="round" />
        </svg>
      )
  }
}

function OutcomeIcon({ icon }: { icon: Outcome['icon'] }) {
  const className = 'h-5 w-5 stroke-neutral-700'
  switch (icon) {
    case 'mvp':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" strokeLinejoin="round" />
        </svg>
      )
    case 'automate':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4" strokeLinecap="round" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    case 'prototype':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" strokeLinecap="round" />
        </svg>
      )
    case 'validate':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
    case 'tools':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <path d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.1 2.1-3.2-3.2 2.1-2.1z" strokeLinejoin="round" />
        </svg>
      )
    case 'ship':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden>
          <path d="M4.5 16.5c11-6 11-6 15-10.5 0 0-4.5 4-10.5 15 0 0 6-11 10.5-15z" strokeLinejoin="round" />
        </svg>
      )
  }
}

function FlowDiagram() {
  return (
    <svg
      viewBox="0 0 480 320"
      className="mx-auto w-full max-w-md text-neutral-500"
      aria-hidden
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {[
        { x: 40, label: 'Input', sub: 'Data · APIs · Users' },
        { x: 140, label: 'AI System', sub: 'Models · Agents', highlight: true },
        { x: 260, label: 'Data Layer', sub: 'Storage · Pipelines' },
        { x: 360, label: 'Output', sub: 'Products · Workflows' },
      ].map((node, i, arr) => (
        <g key={node.label}>
          <rect
            x={node.x}
            y="120"
            width="80"
            height="56"
            rx="4"
            fill={node.highlight ? '#0080ff22' : '#ffffff08'}
            stroke={node.highlight ? '#0080ff' : '#ffffff33'}
            strokeWidth={node.highlight ? 2 : 1}
            filter={node.highlight ? 'url(#glow)' : undefined}
          />
          <text
            x={node.x + 40}
            y="148"
            textAnchor="middle"
            fill={node.highlight ? '#66b3ff' : '#e5e5e5'}
            fontSize="11"
            fontFamily="Inter, system-ui, sans-serif"
          >
            {node.label}
          </text>
          <text
            x={node.x + 40}
            y="164"
            textAnchor="middle"
            fill="#737373"
            fontSize="8"
            fontFamily="Inter, system-ui, sans-serif"
          >
            {node.sub}
          </text>
          {i < arr.length - 1 ? (
            <path
              d={`M${node.x + 80} 148 H${node.x + 100}`}
              stroke="#ffffff44"
              strokeWidth="1"
              markerEnd="url(#arrow)"
            />
          ) : null}
        </g>
      ))}
      <path d="M120 148 H140 M220 148 H260 M340 148 H360" stroke="#ffffff44" strokeWidth="1" />
      <text x="240" y="80" textAnchor="middle" fill="#525252" fontSize="10" fontFamily="Inter, system-ui, sans-serif" letterSpacing="0.15em">
        WORKFLOW
      </text>
      <path d="M240 88 v24" stroke="#ffffff33" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="240" cy="108" r="3" fill="#0080ff" opacity="0.6" />
    </svg>
  )
}

function HeroSection() {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-8 py-16 md:grid-cols-2 md:py-24 xl:px-12">
        <div>
          <h1 className="text-[2.25rem] leading-[1.1] font-normal tracking-[-0.02em] md:text-[2.75rem]">
            {servicesHero.headline}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed font-light text-neutral-400 md:text-lg">
            {servicesHero.subhead}
          </p>
          <p className="mt-6 text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase">
            {servicesHero.tags.join(' • ')}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="dnbkr-btn-white"
            >
              {servicesHero.primaryCta}
              <span aria-hidden className="ml-1.5">→</span>
            </a>
            <Link
              to="/products"
              className="text-sm font-light tracking-[0.08em] text-neutral-400 uppercase transition-colors hover:text-white"
            >
              {servicesHero.secondaryCta} →
            </Link>
          </div>
        </div>
        <div className="rounded-sm border border-white/10 bg-white/5 p-6 md:p-8">
          <FlowDiagram />
        </div>
      </div>
    </section>
  )
}

function HelpCard({ offering }: { offering: ServiceOffering }) {
  return (
    <article className="flex h-full flex-col rounded-sm border border-neutral-200 bg-neutral-50 p-6">
      <ServiceIcon icon={offering.icon} />
      <h3 className="mt-5 text-lg font-medium text-neutral-900">{offering.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed font-light text-neutral-500">
        {offering.description}
      </p>
      <ul className="mt-5 space-y-2 border-t border-neutral-200 pt-5">
        {offering.bullets.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm font-light text-neutral-600"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-xs font-light tracking-[0.1em] text-neutral-900 uppercase transition-colors hover:text-dnbkr-accent"
      >
        Learn More →
      </a>
    </article>
  )
}

function HowIHelpSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-8 py-20 xl:px-12">
        <h2 className="text-2xl font-normal tracking-[-0.01em] text-neutral-900 md:text-3xl">
          {servicesHowIHelp.title}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesHowIHelp.offerings.map((offering) => (
            <HelpCard key={offering.title} offering={offering} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-8 py-20 xl:px-12">
        <h2 className="text-2xl font-normal tracking-[-0.01em] text-neutral-900 md:text-3xl">
          {servicesProcess.title}
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-4">
          {servicesProcess.steps.map((step, index) => (
            <li key={step.title} className="relative">
              {index < servicesProcess.steps.length - 1 ? (
                <span
                  className="absolute top-5 left-[calc(50%+1.5rem)] hidden h-px w-[calc(100%-3rem)] bg-neutral-300 md:block"
                  aria-hidden
                />
              ) : null}
              <div className="flex flex-col items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white">
                  <StepIcon icon={step.icon} />
                </div>
                <h3 className="mt-4 text-base font-medium text-neutral-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed font-light text-neutral-500">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function SystemsSection() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-8 py-20 xl:px-12">
        <h2 className="text-2xl font-normal tracking-[-0.01em] text-neutral-900 md:text-3xl">
          Systems I&apos;ve Built
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {servicesProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-sm bg-neutral-900"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.thumb}
                  alt=""
                  className="h-full w-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                  {project.tagline}
                </p>
                <h3 className="mt-2 text-lg font-medium text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed font-light text-neutral-400">
                  {project.description}
                </p>
                {project.href && project.cta ? (
                  <Link
                    to={project.href}
                    className="mt-5 inline-block text-xs font-light tracking-[0.08em] text-white uppercase transition-colors hover:text-dnbkr-accent"
                  >
                    {project.cta} →
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-8 py-20 lg:grid-cols-2 xl:px-12">
        <div>
          <h2 className="text-2xl font-normal tracking-[-0.01em] text-neutral-900 md:text-3xl">
            {servicesWhyWork.title}
          </h2>
          <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_minmax(160px,220px)]">
            <ul className="space-y-4">
              {servicesWhyWork.bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base font-light leading-relaxed text-neutral-600"
                >
                  <span className="mt-1.5 text-dnbkr-accent" aria-hidden>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <img
              src={contactProfile.imageSrc}
              alt={contactProfile.imageAlt}
              className="aspect-square w-full rounded-sm object-cover object-top"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-normal tracking-[-0.01em] text-neutral-900 md:text-3xl">
            {servicesOutcomes.title}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {servicesOutcomes.items.map((outcome) => (
              <li
                key={outcome.label}
                className="flex items-center gap-3 rounded-sm border border-neutral-200 bg-white px-5 py-4"
              >
                <OutcomeIcon icon={outcome.icon} />
                <span className="text-sm font-light text-neutral-700">{outcome.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 px-8 py-20 xl:px-12">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0080ff33] to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="max-w-xl text-2xl leading-snug font-normal tracking-[-0.01em] text-white md:text-3xl">
            {servicesCta.headline}
          </h2>
          <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-neutral-400">
            {servicesCta.subhead}
          </p>
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="dnbkr-btn-white shrink-0"
        >
          {servicesCta.button}
          <span aria-hidden className="ml-1.5">→</span>
        </a>
      </div>
    </section>
  )
}

export function ServicesPage() {
  useEffect(() => {
    document.title = `Services — ${SITE_NAME}`
    return () => {
      document.title = SITE_NAME
    }
  }, [])

  return (
    <div className="bg-white">
      <HeroSection />
      <HowIHelpSection />
      <ProcessSection />
      <SystemsSection />
      <WhySection />
      <CtaSection />
    </div>
  )
}
