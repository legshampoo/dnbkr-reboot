import type { AppProject } from '../types'

/** Placeholder case study — expand when project material is ready. */
export const iaoToday: AppProject = {
  slug: 'iao-today',
  category: 'apps',
  title: 'IAO Today',
  subtitle: 'Local discovery for events and experiences',
  thumb: '/images/apps/iao-today/iao-thumb.jpg',
  hero: '/images/apps/iao-today/iao-hero.jpg',
  order: 2,
  overview:
    'IAO Today is a local discovery platform designed to help residents and visitors find events, activities, and experiences in their area. The product combines curated listings, search, and AI-assisted workflows to surface relevant happenings without overwhelming users.',
  meta: {
    role: 'Product & Engineering',
    year: '2024',
    stack: 'Product Strategy, Full Stack Development, AI-Assisted Workflows',
  },
  problem:
    'Local event information is fragmented across social feeds, venue sites, and community boards. Residents and visitors struggle to discover what is happening nearby without checking many sources.',
  solution: {
    body: 'A unified discovery experience aggregates events and activities into a searchable, browsable platform—with workflows to help curate and classify listings at scale.',
    diagram: {
      intro: 'High-level flow (case study in progress).',
      steps: [
        {
          phase: 'INGEST',
          label: 'Event sources',
          note: 'Venues, feeds, submissions',
          body: 'Collect listings from partner venues, public feeds, and user submissions into a normalized pipeline.',
        },
        {
          phase: 'PLAN',
          label: 'Curation & classification',
          note: 'AI-assisted tagging',
          body: 'Apply rules and AI-assisted workflows to categorize, dedupe, and rank listings for discovery.',
        },
        {
          phase: 'DELIVER',
          label: 'Discovery experience',
          note: 'Search, browse, save',
          body: 'Present a focused UI for finding events and activities by location, date, and interest.',
        },
      ],
    },
  },
  technicalChallenges: [
    {
      title: 'Case study in progress',
      body: 'Detailed technical write-up, architecture diagrams, and demo assets will be added as the project documentation is finalized.',
    },
  ],
  architecture: {
    body: 'Full architecture notes coming soon. The platform spans a web client, API layer, and data pipelines for ingestion and curation.',
  },
  demo: {
    caption: 'Screenshots and demo video will be added to this case study.',
  },
  lessonsLearned:
    'Case study in progress — lessons learned and product outcomes will be documented here.',
}
