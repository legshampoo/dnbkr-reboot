import { Link } from 'react-router-dom'
import { socialLinks } from '@/data/contact'
import { SITE_DOMAIN, SITE_NAME } from '@/data/site'
import { navItems } from './Nav'

const footerLinkClass =
  'text-xs font-light tracking-[0.06em] text-neutral-400 uppercase transition-colors duration-200 hover:text-white'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dnbkr-black text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-4 px-8 py-6 xl:px-12">
        <div>
          <Link
            to="/"
            className="text-sm font-light tracking-[0.12em] text-white no-underline transition-colors duration-200 hover:text-neutral-200"
          >
            {SITE_NAME}
          </Link>
          <p className="mt-1 text-xs font-light text-neutral-500">
            AI Product Engineer
          </p>
          <p className="mt-4 text-[0.6875rem] font-light tracking-wide text-neutral-600">
            © {year} {SITE_NAME}. {SITE_DOMAIN}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 sm:gap-x-16">
          <nav
            aria-label="Site"
            className="flex flex-col items-end gap-1.5 text-right"
          >
            {navItems.map(({ to, label }) => (
              <Link key={to} to={to} className={footerLinkClass}>
                {label}
              </Link>
            ))}
          </nav>
          <nav
            aria-label="Social"
            className="flex flex-col items-end gap-1.5 text-right"
          >
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={footerLinkClass}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
