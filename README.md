# DNBKR Portfolio

Modern rebuild of [dnbkr.com](https://dnbkr.com) — Vite, React, TypeScript, Tailwind, deployed on Vercel.

Legacy reference site lives in `../update.dnbkr.com` (not used at runtime).

## Setup

```bash
npm install
```

Static assets live in `public/images/` (~72MB). They are copied from the legacy site for deploy; to refresh from `update.dnbkr.com`:

```bash
rsync -a ../update.dnbkr.com/public/img/ public/images/
```

## Scripts

| Command        | Description        |
| -------------- | ------------------ |
| `npm run dev`  | Dev server         |
| `npm run build`| Production build   |
| `npm run preview` | Preview build   |

## Routes

| Path | Page |
|------|------|
| `/` | Client work grid (home) |
| `/work` | Client work grid |
| `/work/:slug` | Project detail |
| `/art` | Art grid |
| `/art/:slug` | Project detail |
| `/contact` | Contact |

## Content

All project copy, images, sections, and embed IDs live in `src/data/projects.ts` (merged from `workProjects.ts` and `artProjects.ts`). Import only from `@/data/projects` in app code.

## Contact form

The contact page posts to `/api/contact` (Vercel serverless + [Resend](https://resend.com)).

1. Create a free Resend account and an API key.
2. In Vercel → **Settings → Environment Variables**, add:
   - `RESEND_API_KEY` — from Resend dashboard
   - `CONTACT_TO_EMAIL` — `daniel.c.baker@gmail.com` (optional; this is the default)
3. Redeploy. Submissions arrive in that inbox; **Reply** uses the sender’s email.

Local testing: `npx vercel dev` (plain `npm run dev` does not run API routes).

Copy and profile photo: edit `src/data/contact.ts`. Add a headshot at `public/images/profile.jpg` (SVG placeholder used until then).

## Deploy (Vercel)

1. Import this `dnbkr` folder as a new Vercel project.
2. Framework preset: **Vite**.
3. Add `dnbkr.com` in Domains when ready.
4. `vercel.json` handles SPA routing and leaves `/api/*` to serverless functions.
