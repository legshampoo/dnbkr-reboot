/** Landing page copy and links — edit here to update the home page. */

export const BOOKING_URL = 'https://cal.com/dan-baker/intro-chat'

export const homeHero = {
  name: 'Dan Baker',
  role: 'AI Product Engineer',
  tagline:
    'I help founders and businesses design, build, and launch AI-powered products, agents, and internal tools.',
  subline: 'From idea to production.',
}

export const homeWhatIDo = {
  title: 'What I Do',
  intro:
    'I work directly with founders, startups, and businesses to turn ideas into working software.',
  body: "Whether it's an AI agent, internal workflow, customer-facing application, voice AI system, or full product MVP, I help teams move from concept to production quickly.",
  services: [
    'AI Products & Agents',
    'Full-Stack Web Applications',
    'Internal Tools & Automation',
    'Voice AI Systems',
    'Product Prototyping & MVPs',
    'Technical Strategy & Architecture',
  ],
}

export type HomeProject = {
  title: string
  description: string
  tags: string
  cta?: { label: string; href: string; external?: boolean }
}

export const homeProjects: HomeProject[] = [
  {
    title: 'Editless Studio',
    description:
      'An AI-powered video production platform that transforms a business website into a scripted, storyboarded, and rendered marketing video.',
    tags: 'TypeScript • LangGraph • OpenAI • BullMQ • AWS Fargate • FFmpeg',
    cta: { label: 'View Case Study', href: '/products/editless-studio' },
  },
  {
    title: 'IAO Today',
    description:
      'A local discovery platform designed to help residents and visitors discover events, activities, and experiences.',
    tags: 'Product Strategy • Full Stack Development • AI-Assisted Workflows',
    cta: { label: 'View Project', href: '/products/iao-today' },
  },
  {
    title: 'Voice AI Systems',
    description:
      'Customer-facing conversational systems integrating speech recognition, synthesis, workflow automation, and business logic.',
    tags: 'Voice AI • Telephony • LLM Orchestration',
  },
]

export const homeWhyWorkWithMe = {
  title: 'Why Work With Me',
  intro:
    "I've spent over a decade building technology products across startups, experiential technology, automation systems, and AI-powered applications.",
  backgroundIntro: 'My background combines:',
  strengths: [
    'Product Thinking',
    'Design Sensibility',
    'Software Engineering',
    'Client-Facing Delivery',
  ],
  closing:
    'I enjoy solving ambiguous problems and turning ideas into working systems.',
}

export const homePreviousWork = {
  title: 'Previous Work',
  body: 'Before focusing on AI products, I worked as a Creative Technologist and Technical Director in New York, leading the design and deployment of large-scale interactive installations, immersive experiences, and custom technology projects.',
  note: 'Selected clients and collaborators include global brands, agencies, startups, and cultural institutions.',
}

export const homeCta = {
  title: "Let's Build Something",
  body: 'Looking for help with an AI product, internal tool, automation system, or technical prototype?',
  closing: "Let's talk.",
}
