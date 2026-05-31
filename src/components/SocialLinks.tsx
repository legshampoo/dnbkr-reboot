import type { SocialLink } from '@/data/contact'

type SocialLinksProps = {
  links: SocialLink[]
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light tracking-wide text-dnbkr-accent underline-offset-4 transition-colors duration-200 hover:text-neutral-700 hover:underline"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
