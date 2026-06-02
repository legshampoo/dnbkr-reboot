import type { AppProjectDiagramStep } from '../types'

const PHASE_STYLE: Record<
  string,
  { fill: string; stroke: string }
> = {
  INGEST: { fill: '#eff6ff', stroke: '#0080ff' },
  PLAN: { fill: '#fafafa', stroke: '#a3a3a3' },
  PRODUCE: { fill: '#fffbeb', stroke: '#d97706' },
  DELIVER: { fill: '#f0fdf4', stroke: '#16a34a' },
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function stepNode(id: string, label: string, note: string): string {
  const title = escapeHtml(label)
  const sub = escapeHtml(note)
  return `${id}["<div style='text-align:center;padding:8px 12px;line-height:1.4;min-width:220px'><div style='font-size:14px;font-weight:500;color:#171717'>${title}</div><div style='font-size:12px;font-weight:300;color:#737373;margin-top:6px'>${sub}</div></div>"]`
}

function phaseToKey(phase: string): string {
  return phase.toLowerCase().replace(/[^a-z0-9]/g, '_')
}

/** Single center column: s0 → s1 → s2 → … (top to bottom). Phase = color only. */
export function buildPipelineMermaid(steps: AppProjectDiagramStep[]): string {
  if (steps.length === 0) return 'flowchart TD\n  empty["No steps"]'

  const lines: string[] = ['flowchart TD']
  const classDefs = new Map<string, string>()

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i]
    lines.push(`  ${stepNode(`s${i}`, step.label, step.note)}`)

    const key = phaseToKey(step.phase)
    const style = PHASE_STYLE[step.phase] ?? PHASE_STYLE.PLAN
    const className = `${key}Step`
    if (!classDefs.has(className)) {
      classDefs.set(
        className,
        `  classDef ${className} fill:${style.fill},stroke:${style.stroke},color:#171717,stroke-width:2px`,
      )
    }
    lines.push(`  class s${i} ${className}`)
  }

  if (steps.length > 1) {
    const chain = steps.map((_, i) => `s${i}`).join(' --> ')
    lines.push(`  ${chain}`)
  }

  return [...lines, '', ...classDefs.values()].join('\n')
}
