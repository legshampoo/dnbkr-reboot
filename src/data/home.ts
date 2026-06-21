/** Landing page copy and links — edit here to update the home page. */

export const BOOKING_URL = 'https://cal.com/dan-baker/intro-chat'

export const homeHero = {
  headline: 'AI Products. Built for Real Businesses.',
  subhead:
    'I help founders and businesses design, build, and launch AI-powered products, agents, and internal tools that actually get used. From idea to production.',
}

export type HomeService = {
  title: string
  description: string
  icon: 'agents' | 'apps' | 'voice' | 'tools' | 'prototypes' | 'strategy'
}

export const homeWhatIDo = {
  eyebrow: 'What I Do',
  title: 'I build AI-powered products and systems that solve real problems.',
  services: [
    {
      title: 'AI Agents & Workflows',
      description: 'Build autonomous systems that handle real business tasks.',
      icon: 'agents',
    },
    {
      title: 'Web & Mobile Apps',
      description: 'Full-stack product development with modern tools.',
      icon: 'apps',
    },
    {
      title: 'Voice AI Systems',
      description: 'Conversational interfaces powered by LLMs and speech tech.',
      icon: 'voice',
    },
    {
      title: 'Internal Tools',
      description: 'Custom dashboards and automation for your team.',
      icon: 'tools',
    },
    {
      title: 'Rapid Prototypes',
      description: 'From concept to working demo in weeks, not months.',
      icon: 'prototypes',
    },
    {
      title: 'Strategy & Architecture',
      description: 'Technical planning and system design for AI products.',
      icon: 'strategy',
    },
  ] satisfies HomeService[],
}

export type HomeProject = {
  title: string
  description: string
  tags: string[]
  thumb: string
  cta?: { label: string; href: string; external?: boolean }
}

export const homeProjects: HomeProject[] = [
  {
    title: 'Editless Studio',
    description:
      'AI-powered video production platform that transforms a business website into a scripted, storyboarded, and rendered marketing video.',
    tags: ['TypeScript', 'LangChain', 'AWS', 'FFmpeg', 'OpenAI'],
    thumb: '/images/apps/editless/thumb.jpg',
    cta: { label: 'View case study', href: '/products/editless-studio' },
  },
  {
    title: 'IAO Today',
    description:
      'Local discovery platform helping residents and visitors find events, activities, and experiences in their area.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    thumb: '/images/apps/iao-today/iao-thumb.jpg',
    cta: { label: 'View project', href: '/products/iao-today' },
  },
  {
    title: 'AUM Chanting',
    description:
      'A living global chanting circle—join anytime to listen, chant, or meditate alongside others in a continuous 24/7 shared audio space.',
    tags: ['Next.js', 'WebRTC', 'LiveKit', 'Capacitor', 'AWS'],
    thumb: '/images/apps/aumchanting/thumb.jpg',
    cta: { label: 'View project', href: '/products/aum-chanting' },
  },
  {
    title: 'Voice AI Systems',
    description:
      'Customer-facing conversational systems integrating speech recognition, synthesis, workflow automation, and business logic.',
    tags: ['Voice AI', 'Twilio', 'OpenAI', 'Pinecone'],
    thumb: '/images/apps/voice-ai/thumb.svg',
  },
]

export const homeAbout = {
  eyebrow: 'About',
  headline: '10+ years building technology, products, and experiences.',
  body: 'I work at the intersection of product thinking, software engineering, and client delivery — from large-scale interactive installations and immersive experiences to AI agents, internal tools, and full product MVPs.',
  cta: { label: 'Learn more about me', href: '/about' },
  stats: [
    { value: '10+', label: 'Years of Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '100%', label: 'Focus on Results' },
  ],
}

export const homeCta = {
  title: "Have an idea? Let's build it.",
  body: "I'm currently available for new projects and consulting engagements.",
  button: 'Book a Discovery Call',
}
