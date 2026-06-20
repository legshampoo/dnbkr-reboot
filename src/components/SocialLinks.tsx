import type { SocialLink } from '@/data/contact'

type SocialLinksProps = {
  links: SocialLink[]
  tone?: 'default' | 'dark'
}

const linkClass = {
  default:
    'text-sm font-light tracking-wide text-dnbkr-accent underline-offset-4 transition-colors duration-200 hover:text-neutral-700 hover:underline',
  dark: 'text-sm font-light tracking-wide text-neutral-400 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline',
}

export function SocialLinks({ links, tone = 'default' }: SocialLinksProps) {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass[tone]}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
