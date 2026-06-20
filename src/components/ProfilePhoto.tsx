import { useState } from 'react'
import { contactProfile } from '@/data/contact'

const PLACEHOLDER = '/images/profile.svg'

export function ProfilePhoto() {
  const [src, setSrc] = useState(contactProfile.imageSrc)

  return (
    <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-sm bg-dnbkr-muted shadow-sm ring-1 ring-dnbkr-border/80">
      <div className="aspect-square w-full">
        <img
          src={src}
          alt={contactProfile.imageAlt}
          className="h-full w-full object-cover object-center"
          onError={() => setSrc(PLACEHOLDER)}
        />
      </div>
    </div>
  )
}
