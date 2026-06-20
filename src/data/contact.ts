/** Edit copy and profile image path here. */
export const contactProfile = {
  name: 'Dan Baker',
  role: 'AI Product Engineer',
  /** Replace with your headshot at public/images/profile.jpg (falls back to profile.svg). */
  imageSrc: '/images/profile.jpg',
  imageAlt: 'Dan Baker',
  availability:
    'Designing, building, and launching AI-powered products, agents, and internal tools for founders and teams.',
  bio: `Dan is an AI product engineer who works with founders, startups, and teams to turn ambiguous ideas into shipped software—from AI agents and internal tools to full-stack applications and voice systems.

His background combines product thinking, software engineering, and client-facing delivery across startups, experiential technology, and large-scale interactive installations. Based in Southeast Asia and working globally, he has led the design and deployment of custom technology for global brands, agencies, and cultural institutions.

He is available for contract engagements, forward-deployed roles, and select collaborations. If you're building an AI product, automation system, or technical prototype—or hiring for a product engineering role—get in touch.
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
    label: 'GitHub',
    href: 'https://github.com/legshampoo',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dans.party/',
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@dan-baker',
  },
]
