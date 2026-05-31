/** Edit copy and profile image path here. */
export const contactProfile = {
  name: 'Dan Baker',
  role: 'Creative technologist · FDE',
  /** Replace with your headshot at public/images/profile.jpg (falls back to profile.svg). */
  imageSrc: '/images/profile.jpg',
  imageAlt: 'Dan Baker',
  availability:
    'Building AI-powered products, agentic systems, and interactive experiences.',
  bio: `Dan is an engineer and creative technologist focused on AI-powered products, real-time systems, and interactive experiences. He works closely with teams to turn ambiguous ideas into shipped software, blending technical execution with product thinking and rapid iteration.

Based in Southeast Asia and working globally, his background spans creative technology, immersive media, and live experiences—from large-scale installations and generative systems to full-stack applications, automation, and AI-driven tools.

He is available for select opportunities, collaborations, and forward-deployed engineering roles. If you're building something ambitious and need someone who can move from concept to deployment, get in touch.
`,
}

export const contactForm = {
  recipientEmail: 'daniel.c.baker@gmail.com',
}

/** Update hrefs here if any profile URLs change. */
export type SocialLink = {
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dan-baker-ai/',
  },
  {
    label: 'Instagram @dans.party',
    href: 'https://www.instagram.com/dans.party/',
  },
  {
    label: 'Instagram @mantra.verse',
    href: 'https://www.instagram.com/mantra.verse/',
  },
  {
    label: 'YouTube @danbaker.podcast',
    href: 'https://www.youtube.com/@danbaker.podcast',
  },
  {
    label: 'SoundCloud @dans.party',
    href: 'https://soundcloud.com/dans-party',
  },
]
