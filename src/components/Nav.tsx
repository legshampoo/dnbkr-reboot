import { useEffect, useId, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { BOOKING_URL } from '@/data/home'

export const navItems = [
  { to: '/experiences', label: 'Experiences' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/art', label: 'Art' },
  { to: '/contact', label: 'Contact' },
] as const

const darkLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'relative px-4 py-2 text-[0.75rem] font-light tracking-[0.12em] uppercase motion-safe-transition',
    isActive
      ? 'text-white after:absolute after:inset-x-2 after:-bottom-0.5 after:h-px after:bg-white/90'
      : 'text-neutral-400 hover:text-white',
  ].join(' ')

const lightLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'relative px-4 py-2 text-[0.75rem] font-light tracking-[0.12em] uppercase motion-safe-transition',
    isActive
      ? 'text-neutral-900 after:absolute after:inset-x-2 after:-bottom-0.5 after:h-px after:bg-neutral-900'
      : 'text-neutral-500 hover:text-neutral-900',
  ].join(' ')

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      {open ? (
        <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
      ) : (
        <>
          <path strokeLinecap="round" d="M4 7h16" />
          <path strokeLinecap="round" d="M4 12h16" />
          <path strokeLinecap="round" d="M4 17h16" />
        </>
      )}
    </svg>
  )
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const location = useLocation()
  const lightNavPaths = [
    '/',
    '/experiences',
    '/products',
    '/art',
    '/about',
  ]
  const isLightNav = lightNavPaths.includes(location.pathname)
  const linkClass = isLightNav ? lightLinkClass : darkLinkClass

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={
        isLightNav
          ? 'fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md'
          : 'fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-dnbkr-black/92 backdrop-blur-md'
      }
    >
      <nav className="dnbkr-nav-height mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <NavLink
          to="/"
          className={
            isLightNav
              ? 'shrink-0 text-sm font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline motion-safe-transition hover:text-neutral-600 md:text-base'
              : 'shrink-0 whitespace-nowrap text-[1.05rem] font-light tracking-[0.14em] text-white no-underline motion-safe-transition hover:text-neutral-200 md:text-[1.35rem] md:tracking-[0.28em]'
          }
        >
          Dan Baker
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={
              isLightNav
                ? 'ml-3 inline-flex items-center rounded-sm bg-neutral-900 px-4 py-2 text-[0.75rem] font-light tracking-[0.1em] text-white uppercase transition-colors hover:bg-neutral-800'
                : 'ml-3 inline-flex items-center rounded-sm border border-white/20 px-4 py-2 text-[0.75rem] font-light tracking-[0.1em] text-white uppercase transition-colors hover:bg-white/10'
            }
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          className={
            isLightNav
              ? 'flex shrink-0 items-center justify-center p-2 text-neutral-900 lg:hidden'
              : 'flex shrink-0 items-center justify-center p-2 text-white lg:hidden'
          }
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </nav>

      {menuOpen ? (
        <div
          id={menuId}
          className={
            isLightNav
              ? 'border-t border-neutral-200 bg-white px-5 py-2 lg:hidden'
              : 'border-t border-white/10 bg-dnbkr-black px-5 py-2 lg:hidden'
          }
        >
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={
                isLightNav
                  ? 'block px-1 py-3 text-sm font-light tracking-[0.12em] text-neutral-600 uppercase motion-safe-transition hover:text-neutral-900'
                  : 'block px-1 py-3 text-sm font-light tracking-[0.12em] uppercase motion-safe-transition text-neutral-400 hover:text-white'
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block px-1 py-3 text-sm font-light tracking-[0.12em] text-neutral-900 uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk
          </a>
        </div>
      ) : null}
    </header>
  )
}
