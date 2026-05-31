import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="dnbkr-main-offset">
        <Outlet />
      </main>
    </div>
  )
}
