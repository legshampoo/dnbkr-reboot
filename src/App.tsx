import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { AboutPage } from '@/pages/AboutPage'
import { AppsPage } from '@/pages/AppsPage'
import { ArtPage } from '@/pages/ArtPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { AppProjectPage } from '@/pages/AppProjectPage'
import { ProjectPage } from '@/pages/ProjectPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { WorkPage } from '@/pages/WorkPage'

function RedirectWithSlug({ to }: { to: string }) {
  const { slug } = useParams()
  return <Navigate to={slug ? `${to}/${slug}` : to} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="experiences" element={<WorkPage />} />
          <Route
            path="experiences/:slug"
            element={<ProjectPage category="work" />}
          />
          <Route path="products" element={<AppsPage />} />
          <Route path="products/:slug" element={<AppProjectPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="art" element={<ArtPage />} />
          <Route path="art/:slug" element={<ProjectPage category="art" />} />
          <Route path="work" element={<Navigate to="/experiences" replace />} />
          <Route path="work/:slug" element={<RedirectWithSlug to="/experiences" />} />
          <Route path="apps" element={<Navigate to="/products" replace />} />
          <Route path="apps/:slug" element={<RedirectWithSlug to="/products" />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
