type ArchitectureNode = {
  id: string
  label: string
  row: number
  col: number
}

type ArchitectureDiagramProps = {
  nodes?: ArchitectureNode[]
  caption?: string
  ariaLabel?: string
}

const EDITLESS_NODES: ArchitectureNode[] = [
  { id: 'spa', label: 'React SPA', row: 0, col: 0 },
  { id: 'api', label: 'Node API', row: 0, col: 1 },
  { id: 'db', label: 'Postgres', row: 0, col: 2 },
  { id: 'redis', label: 'Redis / BullMQ', row: 1, col: 1 },
  { id: 's3', label: 'S3', row: 1, col: 2 },
  { id: 'fargate', label: 'Fargate workers', row: 2, col: 1 },
  { id: 'llm', label: 'OpenAI / LangGraph', row: 2, col: 0 },
]

const EDITLESS_CAPTION = 'API dispatches render jobs → BullMQ → Fargate (FFmpeg) ↔ S3'
const EDITLESS_ARIA =
  'Architecture: React SPA, Node API, Postgres, Redis BullMQ, S3, Fargate workers, OpenAI LangGraph'

export function ArchitectureDiagram({
  nodes = EDITLESS_NODES,
  caption = EDITLESS_CAPTION,
  ariaLabel = EDITLESS_ARIA,
}: ArchitectureDiagramProps) {
  return (
    <div
      className="rounded-sm border border-neutral-200/80 bg-neutral-50 p-6 sm:p-8"
      role="img"
      aria-label={ariaLabel}
    >
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {nodes.map((node) => (
          <div
            key={node.id}
            style={{
              gridRow: node.row + 1,
              gridColumn: node.col + 1,
            }}
            className="flex items-center justify-center rounded-sm border border-neutral-300/90 bg-white px-3 py-4 text-center text-xs font-light tracking-wide text-neutral-800 shadow-sm sm:text-sm"
          >
            {node.label}
          </div>
        ))}
      </div>
      {caption ? (
        <p className="mt-6 text-center text-xs font-light text-neutral-500">
          {caption}
        </p>
      ) : null}
    </div>
  )
}
