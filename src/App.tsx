import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { AppsPage } from '@/pages/AppsPage'
import { ArtPage } from '@/pages/ArtPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { AppProjectPage } from '@/pages/AppProjectPage'
import { ProjectPage } from '@/pages/ProjectPage'
import { WorkPage } from '@/pages/WorkPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/:slug" element={<ProjectPage category="work" />} />
          <Route path="art" element={<ArtPage />} />
          <Route path="art/:slug" element={<ProjectPage category="art" />} />
          <Route path="apps" element={<AppsPage />} />
          <Route path="apps/:slug" element={<AppProjectPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
