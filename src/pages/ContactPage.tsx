import { useEffect } from 'react'
import { ContactForm } from '@/components/ContactForm'
import { ProfilePhoto } from '@/components/ProfilePhoto'
import { SocialLinks } from '@/components/SocialLinks'
import { contactProfile, socialLinks } from '@/data/contact'
import { SITE_NAME } from '@/data/site'

export function ContactPage() {
  useEffect(() => {
    document.title = `Contact — ${SITE_NAME}`
    return () => {
      document.title = SITE_NAME
    }
  }, [])

  return (
    <div className="mx-auto w-full max-w-6xl px-8 py-16 xl:px-12 xl:py-24">
      <header className="mb-16 max-w-2xl">
        <p className="text-xs font-light tracking-[0.2em] text-neutral-400 uppercase">
          Contact
        </p>
        <h1 className="dnbkr-display mt-4 text-neutral-900">Let&apos;s talk</h1>
        <p className="dnbkr-lead mt-5 text-neutral-500">
          {contactProfile.availability}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(260px,320px)_1fr] lg:gap-20">
        <aside className="lg:pt-2">
          <ProfilePhoto />
          <div className="mt-8 text-center lg:text-left">
            <p className="text-lg font-light tracking-wide text-neutral-900">
              {contactProfile.name}
            </p>
            <p className="mt-1 text-sm tracking-wide text-neutral-500">
              {contactProfile.role}
            </p>
          </div>
          <div className="mt-8 text-center lg:text-left">
            <SocialLinks links={socialLinks} />
          </div>
        </aside>

        <section className="border-t border-neutral-200/80 pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
          <p className="mb-12 max-w-2xl whitespace-pre-line text-sm leading-relaxed font-light text-neutral-600">
            {contactProfile.bio}
          </p>
          <h2 className="dnbkr-section-title mb-2">Send a message</h2>
          <p className="mb-8 text-sm font-light text-neutral-500">
            Share a short note about your project, timeline, or team. No pitch
            decks required.
          </p>
          <ContactForm />
        </section>
      </div>
    </div>
  )
}
