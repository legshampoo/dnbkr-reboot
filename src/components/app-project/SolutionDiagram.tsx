import { buildPipelineMermaid } from '@/data/apps/buildPipelineMermaid'
import type { AppProjectSolutionDiagram } from '@/data/types'
import { AppProjectText } from '@/components/app-project/AppProjectText'
import { MermaidDiagram } from '@/components/app-project/MermaidDiagram'

type SolutionDiagramProps = {
  diagram: AppProjectSolutionDiagram
}

export function SolutionDiagram({ diagram }: SolutionDiagramProps) {
  const chart =
    diagram.mermaid?.trim() ?? buildPipelineMermaid(diagram.steps)

  return (
    <div className="space-y-10">
      {diagram.intro ? (
        <AppProjectText text={diagram.intro} />
      ) : null}

      <div className="flex justify-center overflow-visible rounded-sm border border-neutral-200/80 bg-gradient-to-b from-neutral-50 to-white px-4 py-10 shadow-sm sm:px-10">
        <MermaidDiagram chart={chart} />
      </div>

      <div>
        <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-neutral-400">
          Step-by-step
        </h3>
        <ol className="space-y-6 border-t border-neutral-200/80 pt-8">
          {diagram.steps.map((step, index) => (
            <li
              key={`${step.phase}-${step.label}`}
              className="grid gap-2 sm:grid-cols-[7rem_11rem_1fr] sm:gap-5"
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest text-dnbkr-accent">
                {step.phase}
              </span>
              <div className="flex items-baseline gap-3 sm:flex-col sm:items-start sm:gap-1">
                <span className="text-xs font-medium tabular-nums text-neutral-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium tracking-wide text-neutral-800">
                  {step.label}
                </span>
              </div>
              <p className="dnbkr-lead text-neutral-600 sm:col-start-3">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
