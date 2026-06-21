import { Link } from 'react-router-dom'
import { socialLinks } from '@/data/contact'
import { SITE_NAME } from '@/data/site'

const footerLinkClass =
  'text-sm font-light text-neutral-600 transition-colors duration-200 hover:text-neutral-900'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-8 py-8 xl:px-12">
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-6"
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
          <Link to="/contact" className={footerLinkClass}>
            Contact
          </Link>
        </nav>
        <p className="text-sm font-light text-neutral-500">
          © {year} {SITE_NAME}
        </p>
      </div>
    </footer>
  )
}
