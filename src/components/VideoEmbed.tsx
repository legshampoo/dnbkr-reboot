type VideoEmbedProps = {
  vimeoId?: string
  youtubeId?: string
  title?: string
  className?: string
}

export function VideoEmbed({
  vimeoId,
  youtubeId,
  title,
  className = '',
}: VideoEmbedProps) {
  const wrapperClass = `aspect-video w-full overflow-hidden bg-black ${className}`.trim()

  if (vimeoId) {
    return (
      <div className={wrapperClass}>
        <iframe
          title={title ?? 'Vimeo video'}
          src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&color=ffffff`}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (youtubeId) {
    return (
      <div className={wrapperClass}>
        <iframe
          title={title ?? 'YouTube video'}
          src={`https://www.youtube.com/embed/${youtubeId}?modestbranding=1&rel=0`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return null
}
