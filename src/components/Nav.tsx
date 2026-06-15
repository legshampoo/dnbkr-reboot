import { useEffect, useId, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/experiences', label: 'Experiences' },
  { to: '/products', label: 'Products' },
  { to: '/art', label: 'Art' },
  { to: '/contact', label: 'Contact' },
] as const

const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'relative px-5 py-2 text-[0.8125rem] font-light tracking-[0.12em] uppercase motion-safe-transition',
    isActive
      ? 'text-white after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-white/90'
      : 'text-neutral-400 hover:text-white',
  ].join(' ')

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block px-1 py-3 text-sm font-light tracking-[0.12em] uppercase motion-safe-transition',
    isActive ? 'text-white' : 'text-neutral-400 hover:text-white',
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-dnbkr-black/92 backdrop-blur-md">
      <nav className="dnbkr-nav-height mx-auto flex max-w-[1800px] items-center justify-between gap-4 px-5 md:px-10">
        <NavLink
          to="/"
          className="shrink-0 whitespace-nowrap text-[1.05rem] font-light tracking-[0.14em] text-white no-underline motion-safe-transition hover:text-neutral-200 md:text-[1.35rem] md:tracking-[0.28em]"
        >
          Dan Baker
        </NavLink>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} className={desktopLinkClass}>
              {label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="flex shrink-0 items-center justify-center p-2 text-white md:hidden"
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
          className="border-t border-white/10 bg-dnbkr-black px-5 py-2 md:hidden"
        >
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </header>
  )
}
