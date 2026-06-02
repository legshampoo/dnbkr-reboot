import { useEffect, useId, useRef, useState } from 'react'
import mermaid from 'mermaid'

let mermaidReady = false

function ensureMermaidInit() {
  if (mermaidReady) return
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'sandbox',
    theme: 'base',
    themeVariables: {
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      fontSize: '14px',
      primaryColor: '#ffffff',
      primaryTextColor: '#171717',
      primaryBorderColor: '#d4d4d4',
      secondaryColor: '#fafafa',
      tertiaryColor: '#f5f5f5',
      lineColor: '#0080ff',
      arrowheadColor: '#0080ff',
      edgeLabelBackground: '#fafafa',
    },
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'basis',
      padding: 18,
      nodeSpacing: 40,
      rankSpacing: 48,
      diagramPadding: 16,
    },
  })
  mermaidReady = true
}

function centerRenderedSvg(container: HTMLElement) {
  const svg = container.querySelector('svg')
  if (!(svg instanceof SVGSVGElement)) return

  svg.style.display = 'block'
  svg.style.margin = '0 auto'
  svg.style.maxWidth = '100%'
  svg.style.height = 'auto'

  try {
    const bbox = svg.getBBox()
    if (bbox.width > 0 && bbox.height > 0) {
      const pad = 12
      const x = bbox.x - pad
      const y = bbox.y - pad
      const w = bbox.width + pad * 2
      const h = bbox.height + pad * 2
      svg.setAttribute('viewBox', `${x} ${y} ${w} ${h}`)
      svg.removeAttribute('width')
      svg.removeAttribute('height')
    }
  } catch {
    // getBBox can fail before layout; centering via margin still applies
  }
}

function enhanceSvg(svg: string): string {
  const styleBlock = `
<style>
  svg {
    font-family: Inter, ui-sans-serif, system-ui, sans-serif !important;
  }
  .edgePath path {
    stroke-width: 1.75px;
    stroke: #0080ff;
  }
  .arrowheadPath {
    fill: #0080ff;
    stroke: #0080ff;
  }
  .node rect,
  .node polygon,
  .node circle {
    filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.06));
  }
  .node .label,
  .nodeLabel {
    font-family: Inter, ui-sans-serif, system-ui, sans-serif !important;
  }
</style>`
  return svg.replace('</svg>', `${styleBlock}</svg>`)
}

type MermaidDiagramProps = {
  chart: string
  className?: string
}

export function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const reactId = useId()
  const renderId = `mermaid-${reactId.replace(/:/g, '')}`
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let cancelled = false

    const run = async () => {
      ensureMermaidInit()
      setError(null)
      try {
        const { svg } = await mermaid.render(renderId, chart.trim())
        if (cancelled) return
        el.innerHTML = enhanceSvg(svg)
        requestAnimationFrame(() => {
          if (!cancelled) centerRenderedSvg(el)
        })
      } catch (err) {
        if (cancelled) return
        console.error('[MermaidDiagram]', err)
        setError('Diagram could not be rendered.')
        el.innerHTML = ''
      }
    }

    void run()

    return () => {
      cancelled = true
    }
  }, [chart, renderId])

  if (error) {
    return (
      <p className="text-center text-sm font-light text-neutral-500">{error}</p>
    )
  }

  return (
    <div
      className={`flex w-full justify-center overflow-visible ${className}`.trim()}
    >
      <div
        ref={containerRef}
        className="mermaid-chart inline-block max-w-full"
        role="img"
        aria-label="Pipeline flow diagram"
      />
    </div>
  )
}
