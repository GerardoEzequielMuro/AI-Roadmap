import { useState } from 'react'
import { motion } from 'framer-motion'
import type { YT } from '../lib/utils'

export function YouTubeEmbed({ yt }: { yt: NonNullable<YT> }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    const src =
      yt.type === 'playlist'
        ? `https://www.youtube-nocookie.com/embed/videoseries?list=${yt.id}&autoplay=1`
        : `https://www.youtube-nocookie.com/embed/${yt.id}?autoplay=1`
    return (
      <div className="ytwrap">
        <motion.iframe
          className="yt-frame"
          src={src}
          loading="lazy"
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
          allowFullScreen
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </div>
    )
  }

  if (yt.type === 'playlist') {
    return (
      <div className="ytwrap">
        <button className="yt-lite yt-pl" onClick={() => setPlaying(true)} aria-label="Reproducir playlist acá">
          <span className="yt-play" />
          <span className="yt-pltext">Reproducir playlist acá</span>
        </button>
      </div>
    )
  }

  return (
    <div className="ytwrap">
      <button
        className="yt-lite"
        onClick={() => setPlaying(true)}
        aria-label="Reproducir video acá"
        style={{ backgroundImage: `url('https://i.ytimg.com/vi/${yt.id}/hqdefault.jpg')` }}
      >
        <span className="yt-play" />
      </button>
    </div>
  )
}
