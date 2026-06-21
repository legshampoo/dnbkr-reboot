import type { AppProject } from '../types'

export const aumChanting: AppProject = {
  slug: 'aum-chanting',
  category: 'apps',
  title: 'AUM Chanting',
  subtitle: 'A living global chanting circle, open 24 hours a day',
  thumb: '/images/apps/aumchanting/thumb.jpg',
  hero: '/images/apps/aumchanting/hero.jpg',
  order: 3,
  links: [{ label: 'aumchanting.com', href: 'https://aumchanting.com' }],
  overview:
    'AUM Chanting is a real-time social audio platform that connects people around the world through a continuous 24/7 AUM chanting circle. Users join at any time to listen quietly, chant with their microphone, or simply be present alongside others—no schedules, no experience required, and no social feed. The product combines low-latency WebRTC audio, live multi-user rooms, and cross-platform deployment to create a persistent shared meditation space where voices from different countries and traditions resonate together.',
  meta: {
    role: 'Founder, Product, Engineering',
    year: '2026',
    stack:
      'TypeScript, Next.js, React, Node.js, WebRTC, LiveKit, Capacitor, PostgreSQL, AWS',
  },
  problem:
    'Shared meditation and chanting practices often depend on fixed schedules, physical gatherings, or fragmented online experiences. People who want to join a collective practice may miss sessions, face timezone barriers, or get distracted by conventional social platforms built for feeds rather than presence.',
  solution: {
    body: 'A always-on live audio room where participants connect from web, iOS, or Android, enter a shared circle instantly, and contribute voice or listen in silence. Guided community sessions are listed for those who want structure; the core experience remains a simple, distraction-free space that runs continuously.',
    diagram: {
      intro:
        'Participants connect through clients that share one codebase, join a persistent LiveKit room, and exchange real-time audio with global presence tracking.',
      steps: [
        {
          phase: 'INGEST',
          label: 'Join from any device',
          note: 'Web, iOS, or Android',
          body: 'Open the web app or download the iOS or Android app and enter the live circle without scheduling—one tap to listen or chant.',
        },
        {
          phase: 'PLAN',
          label: 'WebRTC session',
          note: 'LiveKit media layer',
          body: 'Clients establish low-latency WebRTC connections through LiveKit, with room state and participant presence managed in real time.',
        },
        {
          phase: 'PRODUCE',
          label: 'Shared audio room',
          note: 'Multi-user voice mix',
          body: 'Microphone permissions, audio routing, and participant management enable many voices in one continuous global circle.',
        },
        {
          phase: 'DELIVER',
          label: '24/7 circle',
          note: 'Persistent live room',
          body: 'Backend services on AWS keep the room architecture running around the clock so the circle never stops.',
        },
      ],
    },
  },
  technicalChallenges: [
    {
      title: 'Low-latency global audio',
      body: 'Real-time voice requires WebRTC infrastructure tuned for acceptable latency across regions. LiveKit provides the media layer; the application handles join flows, reconnect logic, and graceful degradation when network conditions vary.',
    },
    {
      title: 'Room and presence management',
      body: 'A continuous 24/7 room needs durable session state, participant tracking, and clear UX for who is in the circle—without the complexity of a full social network.',
    },
    {
      title: 'Cross-platform mobile deployment',
      body: 'Capacitor wraps the shared React/Next.js codebase for iOS and Android, while native microphone permissions and audio routing require platform-specific handling for a reliable chanting experience.',
    },
    {
      title: 'Always-on architecture',
      body: 'Unlike scheduled events, the circle runs continuously. Infrastructure on AWS supports persistent room services, PostgreSQL-backed application state, and deployments that keep web and mobile clients in sync.',
    },
  ],
  architecture: {
    body: 'The stack is TypeScript end to end: a Next.js/React frontend, Node.js backend services, PostgreSQL for application data, and LiveKit for WebRTC media. Capacitor ships the same UI to iOS and Android. AWS hosts production infrastructure; the design prioritizes a minimal, distraction-free client focused on live audio rather than feeds or profiles.',
    diagram: {
      nodes: [
        { id: 'client', label: 'Next.js / React', row: 0, col: 0 },
        { id: 'api', label: 'Node API', row: 0, col: 1 },
        { id: 'db', label: 'Postgres', row: 0, col: 2 },
        { id: 'livekit', label: 'LiveKit', row: 1, col: 1 },
        { id: 'capacitor', label: 'Capacitor', row: 1, col: 2 },
      ],
      caption: 'Web and Capacitor clients → LiveKit WebRTC ↔ Node API & Postgres',
      ariaLabel:
        'Architecture: Next.js React, Node API, Postgres, LiveKit, Capacitor',
    },
  },
  demo: {
    caption:
      'A simple, continuous interface—join the circle, listen, or chant. One sound. One breath. One global circle.',
  },
  lessonsLearned:
    'The project demonstrates how modern web realtime stack—WebRTC, LiveKit, and cross-platform mobile from a shared codebase—can support a globally accessible live audio product. The hardest problems were not UI polish but reliable low-latency audio, mobile permissions, and designing an architecture that stays live 24/7 without unnecessary complexity.',
}
