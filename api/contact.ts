import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'daniel.c.baker@gmail.com'
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? 'Dan Baker <onboarding@resend.dev>'

type ContactBody = {
  name?: string
  email?: string
  subject?: string
  message?: string
  website?: string
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(503).json({
      error: 'Contact form is not configured. Add RESEND_API_KEY in Vercel environment variables.',
    })
  }

  const body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as ContactBody

  if (body.website) {
    return res.status(200).json({ ok: true })
  }

  const name = body.name?.trim()
  const email = body.email?.trim()
  const subject = body.subject?.trim() || 'Portfolio inquiry'
  const message = body.message?.trim()

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  if (message.length > 8000) {
    return res.status(400).json({ error: 'Message is too long.' })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `Dan Baker — ${subject}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      '',
      message,
    ].join('\n'),
  })

  if (error) {
    console.error('Resend error:', error)
    return res.status(502).json({ error: 'Unable to send message. Please try again later.' })
  }

  return res.status(200).json({ ok: true })
}
