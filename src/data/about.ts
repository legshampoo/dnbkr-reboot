/** About page copy — edit here to update /about. */

export type AboutProject = {
  title: string
  description: string
  href?: string
}

export const aboutIntro = {
  eyebrow: 'About',
  headline: 'Building Things Has Always Been the Common Thread',
  paragraphs: [
    "I'm Dan Baker, a product engineer and creative technologist focused on AI-powered software, automation, and digital products.",
    "Over the past decade, I've built everything from large-scale interactive installations and experiential marketing activations to AI agents, workflow automation systems, voice interfaces, and full-stack software products.",
    'The technologies have changed, but the work has remained surprisingly consistent:',
    'Understanding complex problems, designing systems, and turning ideas into things that actually work.',
  ],
}

export const aboutBackground = {
  title: 'My Background',
  paragraphs: [
    'I started my career in New York City working as a Creative Technologist and Technical Director, helping agencies, brands, and startups bring ambitious ideas to life.',
    'Projects ranged from immersive installations and projection mapping to custom software, sensors, real-time graphics, RFID systems, LiDAR tracking, interactive experiences, and permanent technology installations.',
    'Many of these projects had tight deadlines, unclear requirements, and zero room for failure during launch.',
    'That environment taught me how to operate under pressure, solve ambiguous problems, and ship working systems quickly.',
  ],
}

export const aboutWhyAi = {
  title: 'Why AI',
  paragraphs: [
    'What excites me about AI is not the models themselves.',
    "It's the opportunity to build entirely new types of products.",
    'Today I focus on creating systems that combine AI models, automation, software engineering, and product design to solve real-world problems.',
  ],
  recentWork: [
    'AI video production systems',
    'Agentic workflows and orchestration',
    'Voice AI applications',
    'Automated content generation pipelines',
    'Internal business tools and automation platforms',
    'Full-stack AI-powered products',
  ],
}

export const aboutHowIWork = {
  title: 'How I Work',
  paragraphs: [
    'I enjoy operating in the space between engineering, design, and product strategy.',
    'Rather than simply implementing requirements, I prefer to work closely with founders, teams, and stakeholders to understand the underlying problem and help shape the solution.',
    'My approach is pragmatic:',
  ],
  principles: [
    'Build quickly.',
    'Validate early.',
    'Focus on outcomes.',
    'Avoid unnecessary complexity.',
  ],
}

export const aboutProjects: AboutProject[] = [
  {
    title: 'Editless Studio',
    description:
      'An AI-powered video production platform that transforms a business website into a scripted, storyboarded, and rendered marketing video.',
    href: '/products/editless-studio',
  },
  {
    title: 'IAO Today',
    description:
      'A local discovery platform helping residents and travelers find events, activities, and experiences.',
    href: '/products/iao-today',
  },
  {
    title: 'Voice AI Systems',
    description:
      'Customer-facing conversational systems integrating speech recognition, language models, business logic, and workflow automation.',
  },
]

export const aboutOutside = {
  title: 'Outside of Work',
  paragraphs: [
    "When I'm not building software, I'm usually podcasting, DJ'ing, singing, working on art projects, or renovating properties in Southeast Asia.",
    'I believe some of the most interesting opportunities happen at the intersection of technology, creativity, and entrepreneurship.',
  ],
}

export const aboutCta = {
  title: "Let's Build Something",
  body: "Whether you're exploring a new product idea, looking to integrate AI into an existing business, or need help bringing a technical concept to life, I'd love to hear about it.",
  button: 'Book a Call',
}
