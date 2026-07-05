import type { Recurso } from '../data/roadmap'
import { TIPO_LABEL } from '../data/roadmap'
import { ytId } from '../lib/utils'
import { YouTubeEmbed } from './YouTubeEmbed'

export function Recursos({ r }: { r?: Recurso[] }) {
  if (!r || !r.length) return null
  return (
    <div className="recs">
      <div className="recs-h">Material · elegí lo que te sirva</div>
      {r.map((x, i) => {
        const [t, titulo, meta, url] = x
        const label = TIPO_LABEL[t] || t
        const yt = ytId(url)
        return (
          <div className="rec-item" key={i}>
            <a className="rec" href={url} target="_blank" rel="noopener">
              <span className={`rtype t-${t}`}>{label}</span>
              <span className="rbody">
                <span className="rtit">{titulo}</span>
                {meta ? <span className="rmeta"> — {meta}</span> : null}
              </span>
            </a>
            {yt ? <YouTubeEmbed yt={yt} /> : null}
          </div>
        )
      })}
    </div>
  )
}
