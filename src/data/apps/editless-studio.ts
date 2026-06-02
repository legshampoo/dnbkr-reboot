import type { AppProject } from '../types'

export const editlessStudio: AppProject = {
  slug: 'editless-studio',
  category: 'apps',
  title: 'Editless Studio',
  subtitle: 'AI video production from a URL',
  thumb: '/images/apps/editless/thumb.jpg',
  hero: '/images/apps/editless/hero.jpg',
  order: 1,
  links: [
    { label: 'editless.studio', href: 'https://editless.studio' },
  ],
  overview:
    'Editless Studio is an AI-powered video production platform that transforms a business website into a fully scripted, storyboarded, and rendered short-form marketing video. The system combines web scraping, LLM orchestration, generative media workflows, and distributed rendering infrastructure to automate a process that traditionally requires copywriting, storyboarding, editing, and motion design.',
  meta: {
    role: 'Founder / Engineer',
    year: '2025',
    stack:
      'TypeScript, React, Node.js, LangGraph, BullMQ, AWS Fargate, FFmpeg, OpenAI',
  },
  problem:
    'Small businesses struggle to create high-quality UGC and social video content. Producing even a simple 15-second video typically requires copywriting, storyboarding, editing, and motion design—skills and time most teams do not have.',
  solution: {
    body: 'A founder enters a website URL; the platform extracts brand and product context, generates a script and visual plan, produces segment-level media, assembles the timeline on dedicated workers, and delivers an export-ready MP4—without a traditional edit bay.',
    diagram: {
      intro:
        'Each stage writes durable artifacts to the database. The UI shows progress per step so a failure can be retried without restarting the whole job.',
      steps: [
        {
          phase: 'INGEST',
          label: 'Website URL',
          note: 'Marketing site becomes the source of truth',
          body: 'The user submits a marketing site. That URL is the single source of truth for brand voice, offers, and product facts for the rest of the pipeline.',
        },
        {
          phase: 'INGEST',
          label: 'Content extraction',
          note: 'Scrape & parse into structured job context',
          body: 'Scraping and parsing turn pages into structured context—headlines, body copy, and visual references—stored as the first job artifact.',
        },
        {
          phase: 'PLAN',
          label: 'Script generation',
          note: 'LLM drafts timed short-form voiceover',
          body: 'An LLM drafts a timed voiceover script sized for short-form video, grounded in the extracted copy rather than generic filler.',
        },
        {
          phase: 'PLAN',
          label: 'Storyboard generation',
          note: 'Shots, pacing, and prompts before render spend',
          body: 'Shots, pacing, and visual prompts are planned before render spend. The user can review or re-run this step independently.',
        },
        {
          phase: 'PRODUCE',
          label: 'Asset generation',
          note: 'Per-shot media via APIs → object storage',
          body: 'Per-shot images or clips are generated via model APIs. Outputs land in object storage and are linked to the job record.',
        },
        {
          phase: 'PRODUCE',
          label: 'Video assembly',
          note: 'Fargate + FFmpeg concat, transitions, mux',
          body: 'A Fargate worker pulls segment manifests, runs FFmpeg (concat, transitions, audio mux), and uploads the stitched timeline.',
        },
        {
          phase: 'DELIVER',
          label: 'Export MP4',
          note: 'Downloadable output + per-step job status',
          body: 'The finished MP4 is available for download. Job status in Postgres reflects success or the last failed stage for targeted retry.',
        },
      ],
    },
    screenshot: '/images/apps/editless/screenshot.jpg',
    screenshotAlt: 'Editless Studio workflow UI',
  },
  technicalChallenges: [
    {
      title: 'Workflow orchestration',
      body: 'Prompt chains are not enough when each step depends on prior artifacts (scraped copy, shot list, rendered clips) and can fail independently. LangGraph models the UGC pipeline as an explicit state machine: nodes own discrete responsibilities, edges encode dependencies, and orchestration logs make it possible to see which stage failed without replaying the entire run. Fresh thread IDs per job avoid stale checkpoint resume—a practical lesson when experimenting with graph persistence in production.',
    },
    {
      title: 'Distributed rendering',
      body: 'Concatenation, cross-fades, and re-encode paths are CPU-heavy and unpredictable in duration. BullMQ backs job dispatch, retries, and visibility; AWS Fargate runs ephemeral workers so the API stays responsive while renders scale out. Workers pull manifests from object storage, run FFmpeg locally in the task, upload finished assets, and callback via webhook so the UI can track long-running jobs without holding HTTP connections open.',
    },
    {
      title: 'Media processing',
      body: 'FFmpeg is the assembly layer: segment concat (demuxer-first, re-encode fallback), transition filters between clips, padding, and final mux. The worker resolves binaries per environment (container vs. ffmpeg-static) because codec support differs between dev laptops and Fargate images.',
    },
    {
      title: 'Reliability',
      body: 'Queue jobs use BullMQ retry semantics; a backup poller reconciles DB rows that never received a queue entry after a partial write. Generation failures surface per-step status in Postgres so users can retry from the last good artifact instead of restarting from scratch. When an LLM or media provider times out, the workflow records the error on the job and leaves prior steps intact—recovery is surgical, not all-or-nothing.',
    },
  ],
  architecture: {
    body: 'The control plane is a TypeScript API on App Runner with Postgres for job state. Redis and BullMQ coordinate workers. Heavy work runs in Fargate tasks with S3 for inputs and outputs; the React SPA drives step-by-step review and re-run. OpenAI powers scripting and moderation subgraphs; LangGraph compiles those flows into repeatable, observable pipelines.',
  },
  demo: {
    caption:
      '',
    screenshot: '/images/apps/editless/demo.svg',
  },
  lessonsLearned:
    "The hardest challenge wasn't generation quality—it was orchestrating multiple asynchronous AI and media systems while maintaining predictable output quality and recovery from failure states. Shipping meant designing for partial failure: every step leaves durable artifacts, and the UI treats a job as a timeline of retriable stages—not a single opaque 'generate' button.",
}
