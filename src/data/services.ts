/** Services page copy — edit here to update /services. */

export const servicesHero = {
  headline: 'Ideas → Systems → Products',
  subhead:
    'I help founders and businesses identify high-impact opportunities for AI, automation, and custom software—and turn them into production systems.',
  tags: ['AI', 'Automation', 'Internal Tools', 'Product Development'],
  primaryCta: 'Book Discovery Call',
  secondaryCta: 'View Projects',
}

export type ServiceIconType = 'audit' | 'product' | 'automation' | 'partner'

export type ServiceOffering = {
  icon: ServiceIconType
  title: string
  description: string
  bullets: string[]
}

export const servicesHowIHelp = {
  title: 'How I Help',
  offerings: [
    {
      icon: 'audit',
      title: 'AI Opportunity Audit',
      description:
        'A structured review of your business, workflows, and systems to find high-impact AI and automation opportunities.',
      bullets: [
        'Automation opportunities',
        'AI use cases with ROI',
        'Workflow bottlenecks',
        'Technical roadmap',
      ],
    },
    {
      icon: 'product',
      title: 'AI Product Development',
      description:
        'From concept to production — agent workflows, SaaS products, internal tools, and voice AI experiences.',
      bullets: [
        'MVP development',
        'Founder prototypes',
        'Product validation',
        'New feature builds',
      ],
    },
    {
      icon: 'automation',
      title: 'Automation & Internal Tools',
      description:
        'Custom systems that eliminate manual processes and connect the tools your team already uses.',
      bullets: [
        'CRM automation',
        'Content workflows',
        'Reporting systems',
        'Support workflows',
      ],
    },
    {
      icon: 'partner',
      title: 'Fractional Technical Partner',
      description:
        'Ongoing product and engineering leadership without hiring a full-time technical cofounder.',
      bullets: [
        'Product strategy',
        'Technical architecture',
        'Vendor selection',
        'Team guidance',
      ],
    },
  ] satisfies ServiceOffering[],
}

export type WorkStepIcon = 'discovery' | 'roadmap' | 'build' | 'launch'

export type WorkStep = {
  icon: WorkStepIcon
  title: string
  description: string
}

export const servicesProcess = {
  title: 'How We Work Together',
  steps: [
    {
      icon: 'discovery',
      title: 'Discovery',
      description:
        'Identify the highest-leverage opportunities and determine whether AI is actually the right solution.',
    },
    {
      icon: 'roadmap',
      title: 'Roadmap',
      description:
        'Map technical requirements, prioritize work, and define a clear path from idea to implementation.',
    },
    {
      icon: 'build',
      title: 'Build & Prototype',
      description:
        'Move quickly into working software — validate early with real prototypes, not slide decks.',
    },
    {
      icon: 'launch',
      title: 'Launch & Scale',
      description:
        'Ship production systems, iterate based on feedback, and scale what works.',
    },
  ] satisfies WorkStep[],
}

export type ServiceProject = {
  title: string
  tagline: string
  description: string
  thumb: string
  href?: string
  cta?: string
}

export const servicesProjects: ServiceProject[] = [
  {
    title: 'Editless Studio',
    tagline: 'AI Video Production Platform',
    description:
      'Transforms a business website into a scripted, storyboarded, and rendered marketing video.',
    thumb: '/images/apps/editless/thumb.jpg',
    href: '/products/editless-studio',
    cta: 'View Case Study',
  },
  {
    title: 'IAO Today',
    tagline: 'Local Discovery Platform',
    description:
      'Helps residents and travelers discover events, activities, and experiences in their area.',
    thumb: '/images/apps/iao-today/iao-thumb.jpg',
    href: '/products/iao-today',
    cta: 'View Project',
  },
  {
    title: 'Voice AI Systems',
    tagline: 'Conversational AI',
    description:
      'Customer-facing systems integrating speech, language models, and business workflow automation.',
    thumb: '/images/apps/voice-ai/thumb.svg',
  },
]

export const servicesWhyWork = {
  title: 'Builder. Problem Solver. Not a Middleman.',
  bullets: [
    'Direct engagement — no layers of account managers',
    'Product thinking and hands-on engineering',
    'Pragmatic about AI — only when it creates real value',
    'Ship fast, validate early, avoid unnecessary complexity',
  ],
}

export type Outcome = {
  icon: 'mvp' | 'automate' | 'prototype' | 'validate' | 'tools' | 'ship'
  label: string
}

export const servicesOutcomes = {
  title: 'Outcomes, Not Just Code.',
  items: [
    { icon: 'mvp', label: 'Launch an MVP' },
    { icon: 'automate', label: 'Automate Manual Work' },
    { icon: 'prototype', label: 'Prototype New Ideas' },
    { icon: 'validate', label: 'Validate AI Use Cases' },
    { icon: 'tools', label: 'Build Internal Tools' },
    { icon: 'ship', label: 'Ship Production Systems' },
  ] satisfies Outcome[],
}

export const servicesCta = {
  headline: "Tell me what you're building.",
  subhead:
    "Let's explore what's possible and figure out the best path forward.",
  button: 'Book a Discovery Call',
}
