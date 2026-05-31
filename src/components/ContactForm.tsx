import { useState, type FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const data = new FormData(form)

    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      subject: data.get('subject'),
      message: data.get('message'),
      website: data.get('website'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = (await response.json()) as { error?: string; ok?: boolean }

      if (!response.ok) {
        throw new Error(result.error ?? 'Something went wrong.')
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send. Please try again.',
      )
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="absolute -left-[9999px]" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs tracking-wide text-neutral-500 uppercase">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm font-light outline-none transition-colors focus:border-dnbkr-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs tracking-wide text-neutral-500 uppercase">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm font-light outline-none transition-colors focus:border-dnbkr-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-xs tracking-wide text-neutral-500 uppercase">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Project, collaboration, or introduction"
          className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm font-light outline-none transition-colors placeholder:text-neutral-400 focus:border-dnbkr-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs tracking-wide text-neutral-500 uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="A bit of context about your project or team helps."
          className="w-full resize-y border border-neutral-200 bg-white px-4 py-3 text-sm font-light outline-none transition-colors placeholder:text-neutral-400 focus:border-dnbkr-accent"
        />
      </div>

      {status === 'error' ? (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      ) : null}

      {status === 'success' ? (
        <p className="text-sm text-neutral-600" role="status">
          Message sent — thank you. I will reply when I can.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full border border-dnbkr-black bg-dnbkr-black px-6 py-3.5 text-sm font-light tracking-wide text-white uppercase transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
