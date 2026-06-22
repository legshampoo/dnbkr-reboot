import type { AppProject } from '../types'

export const iaoToday: AppProject = {
  slug: 'iao-today',
  category: 'apps',
  title: 'IAO Today',
  subtitle:
    'Event discovery in Siargao, Philippines for locals and tourists',
  thumb: '/images/apps/iao-today/iao-thumb.jpg',
  hero: '/images/apps/iao-today/iao-hero.jpg',
  order: 2,
  links: [{ label: 'iao.today', href: 'https://iao.today' }],
  overview:
    'IAO Today is a local discovery platform for Siargao that aggregates events and experiences from across the island—without relying on manual curation at scale. Automated pipelines scrape social feeds, extract event details with LLM-assisted OCR and classification, and publish a searchable daily calendar. Each morning at 8am, subscribers receive a WhatsApp digest of what is happening today.',
  meta: {
    role: 'Founder, Product & Engineering',
    year: '2026',
    stack:
      'TypeScript, Next.js, React, Node.js, Apify, OpenRouter, WhatsApp API',
  },
  problem:
    'Local event information is fragmented across social feeds, venue sites, and community boards. Residents and visitors struggle to discover what is happening nearby without checking many sources. IAO Today serves as a one-stop aggregate for everything happening in Siargao—surfacing an updated daily list of events and sending it straight to subscribers on WhatsApp so they never miss what is on.',
  solution: {
    body: 'An automated discovery pipeline finds and structures events from messy social media input—no manual entry required to scale. Instagram and other feeds are scraped on a schedule, LLM workflows extract and classify event details from images and captions, and structured listings land in Postgres for the public site. A daily digest goes out at 8am via WhatsApp; visitors can also submit events through a web form when something is missing.',
    diagram: {
      intro:
        'UptimeRobot triggers a scheduled scrape each day. Apify pulls Instagram and social feeds; LangGraph orchestrates OCR, classification, and structuring before listings hit the site and the morning WhatsApp digest.',
      steps: [
        {
          phase: 'INGEST',
          label: 'Scheduled social scrape',
          note: 'UptimeRobot → Apify → Instagram & feeds',
          body: 'UptimeRobot hits the API on a schedule to kick off ingestion. Apify scrapes Instagram and other social sources where most Siargao events are posted—often as images with minimal structured metadata.',
        },
        {
          phase: 'INGEST',
          label: 'Manual submissions',
          note: 'Web form for community input',
          body: 'A public web form lets organizers and visitors submit events directly when something is not caught by the automated pipeline—keeping coverage complete without making manual entry the default path.',
        },
        {
          phase: 'PLAN',
          label: 'OCR & text extraction',
          note: 'LLM reads images and captions',
          body: 'OpenRouter-backed models run image OCR and parse accompanying caption text, turning flyer screenshots and story posts into machine-readable content.',
        },
        {
          phase: 'PLAN',
          label: 'Event classification',
          note: 'Is it an event? Is it upcoming?',
          body: 'LangGraph workflows apply logic to decide whether a post describes a real event, filter out noise and promos, and determine if the date is still upcoming—not yesterday’s flyer reposted today.',
        },
        {
          phase: 'PRODUCE',
          label: 'Structure & normalize',
          note: 'Unstructured posts → event records',
          body: 'Extracted fields—title, venue, date, time, description—are normalized into a consistent schema so listings are searchable and comparable even when the source format varies wildly.',
        },
        {
          phase: 'PRODUCE',
          label: 'Persist to database',
          note: 'Postgres as source of truth',
          body: 'Structured events are saved to Postgres with deduplication and status flags. The database is the single source of truth for both the public site and the digest job.',
        },
        {
          phase: 'DELIVER',
          label: 'Public event calendar',
          note: 'Searchable, browsable site',
          body: 'The Next.js site lists today’s and upcoming events—browseable by date and category so visitors can explore beyond what lands in their inbox.',
        },
        {
          phase: 'DELIVER',
          label: 'Daily WhatsApp digest',
          note: '8am send via WhatsApp API',
          body: 'Each morning at 8am, the day’s event lineup is compiled and pushed to subscribers through the WhatsApp API—a zero-friction channel most visitors already check every day.',
        },
      ],
    },
  },
  technicalChallenges: [
    {
      title: 'Sourcing events in a chaotic landscape',
      body: 'Siargao events live across Instagram stories, venue pages, and informal reposts—with inconsistent formats, image-only flyers, and no shared schema. Apify handles feed collection; the harder problem is turning that raw, messy input into reliable event candidates without a human reading every post.',
    },
    {
      title: 'Scaling without manual curation',
      body: 'A discovery product that depends on staff entering listings does not scale for a small island market. The pipeline is designed so automation does the heavy lifting: OCR, LLM classification, and deduplication replace repetitive review, with manual submission as a supplement—not the primary ingestion path.',
    },
    {
      title: 'Reliable daily delivery',
      body: 'Subscribers expect the digest at 8am whether or not the scrape ran cleanly overnight. Scheduling (UptimeRobot), idempotent ingestion jobs, and WhatsApp API delivery need to work together so a partial failure does not silently skip a day’s send.',
    },
    {
      title: 'Extracting structure from unstructured posts',
      body: 'Event dates are often embedded in graphics, abbreviated, or implied (“this Saturday”). LangGraph orchestrates multi-step reasoning—read the image, parse the caption, cross-check dates—so structured records emerge from sources that were never meant to be databases.',
    },
  ],
  architecture: {
    body: 'TypeScript end to end: a Next.js/React frontend, Node.js API, and PostgreSQL for event data. UptimeRobot triggers scheduled scrape runs; Apify collects Instagram and social feeds. LangGraph (via OpenRouter) orchestrates OCR, classification, and normalization pipelines. The WhatsApp API delivers the morning digest; the public site reads from the same Postgres store.',
    diagram: {
      nodes: [
        { id: 'client', label: 'Next.js / React', row: 0, col: 0 },
        { id: 'api', label: 'Node API', row: 0, col: 1 },
        { id: 'db', label: 'Postgres', row: 0, col: 2 },
        { id: 'apify', label: 'Apify', row: 1, col: 0 },
        { id: 'llm', label: 'OpenRouter / LangGraph', row: 1, col: 1 },
        { id: 'whatsapp', label: 'WhatsApp API', row: 1, col: 2 },
        { id: 'uptime', label: 'UptimeRobot', row: 2, col: 1 },
      ],
      caption:
        'UptimeRobot triggers scrape → Apify pulls Instagram → LLM structures events → 8am digest via WhatsApp',
      ariaLabel:
        'Architecture: Next.js React, Node API, Postgres, Apify, OpenRouter LangGraph, WhatsApp API, UptimeRobot',
    },
  },
  lessonsLearned:
    'The product only works if discovery runs without someone manually typing every flyer. Shipping meant designing for messy inputs—image OCR, noisy captions, and ambiguous dates—and accepting that automation plus a light manual submission path beats pure curation at this scale. WhatsApp as the delivery channel lowered the bar for daily engagement: people do not need another app to open, just a message they already read every morning.',
}
