import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'relative px-5 py-2 text-[0.8125rem] font-light tracking-[0.12em] uppercase motion-safe-transition',
    isActive
      ? 'text-white after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-white/90'
      : 'text-neutral-400 hover:text-white',
  ].join(' ')

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-dnbkr-black/92 backdrop-blur-md">
      <nav className="dnbkr-nav-height mx-auto flex max-w-[1800px] items-center justify-between px-10">
        <NavLink
          to="/"
          className="dnbkr-display text-[1.35rem] tracking-[0.28em] text-white no-underline motion-safe-transition hover:text-neutral-200"
        >
          DNBKR
        </NavLink>
        <div className="flex items-center gap-2">
          <NavLink to="/work" className={linkClass}>
            Client work
          </NavLink>
          <NavLink to="/art" className={linkClass}>
            Art
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
