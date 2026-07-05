import type { Recurso } from '../data/roadmap'
import { TIPO_LABEL } from '../data/roadmap'
import { ytId } from '../lib/utils'
import { useStore } from '../store'
import { YouTubeEmbed } from './YouTubeEmbed'

export function Recursos({ r, nodeId }: { r?: Recurso[]; nodeId: string }) {
  const { seen, toggleSeen } = useStore()
  if (!r || !r.length) return null
  const vistos = r.filter((_, i) => seen[`${nodeId}:r${i}`]).length

  return (
    <div className="recs">
      <div className="recs-h">
        Material · elegí lo que te sirva
        {vistos > 0 && <span className="recs-count"> · {vistos}/{r.length} vistos</span>}
      </div>
      {r.map((x, i) => {
        const [t, titulo, meta, url] = x
        const label = TIPO_LABEL[t] || t
        const yt = ytId(url)
        const key = `${nodeId}:r${i}`
        const on = !!seen[key]
        return (
          <div className={`rec-item${on ? ' seen' : ''}`} key={i}>
            <div className="rec-line">
              <button
                className={`rseen${on ? ' on' : ''}`}
                onClick={() => toggleSeen(key)}
                aria-pressed={on}
                title={on ? 'Marcar como no visto' : 'Marcar como visto'}
              />
              <a className="rec" href={url} target="_blank" rel="noopener">
                <span className={`rtype t-${t}`}>{label}</span>
                <span className="rbody">
                  <span className="rtit">{titulo}</span>
                  {meta ? <span className="rmeta"> — {meta}</span> : null}
                </span>
              </a>
            </div>
            {yt ? <YouTubeEmbed yt={yt} /> : null}
          </div>
        )
      })}
    </div>
  )
}
