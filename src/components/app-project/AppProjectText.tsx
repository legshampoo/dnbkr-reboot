type AppProjectTextProps = {
  text: string
  className?: string
}

/** Renders a single prose block; optional blank-line breaks become separate paragraphs. */
export function AppProjectText({
  text,
  className = 'dnbkr-lead text-neutral-600',
}: AppProjectTextProps) {
  const parts = text.split('\n\n').filter(Boolean)

  if (parts.length <= 1) {
    return <p className={className}>{text}</p>
  }

  return (
    <div className="space-y-4">
      {parts.map((part, i) => (
        <p key={i} className={className}>
          {part}
        </p>
      ))}
    </div>
  )
}
