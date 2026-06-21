import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Nav } from './Nav'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-dnbkr-bg">
      <ScrollToTop />
      <Nav />
      <main className="dnbkr-main-offset flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
