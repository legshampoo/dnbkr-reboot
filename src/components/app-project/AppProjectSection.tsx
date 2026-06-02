import type { ReactNode } from 'react'

const SHELL = 'mx-auto w-full max-w-3xl px-8 xl:px-12'

type AppProjectSectionProps = {
  id?: string
  title: string
  children: ReactNode
  wide?: boolean
}

export function AppProjectSection({
  id,
  title,
  children,
  wide = false,
}: AppProjectSectionProps) {
  return (
    <section
      id={id}
      className={`${wide ? 'mx-auto w-full max-w-6xl px-8 xl:px-12' : SHELL} border-t border-neutral-200/80 py-14 first:border-t-0`}
    >
      <h2 className="dnbkr-section-title mb-8">{title}</h2>
      {children}
    </section>
  )
}
