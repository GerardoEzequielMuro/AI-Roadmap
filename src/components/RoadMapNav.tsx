import { motion } from 'framer-motion'
import { FASES } from '../data/roadmap'
import { faseCore, faseDone, type Done } from '../lib/utils'

const R = 19
const CIRC = 2 * Math.PI * R

export function RoadMapNav({ done, aca }: { done: Done; aca: string | null }) {
  const acaPhase = FASES.find((f) => f.nodos.some((n) => n.id === aca))?.id

  return (
    <motion.nav
      className="rmap"
      aria-label="Mapa del roadmap"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
    >
      <div className="rmap-track">
        {FASES.map((f) => {
          const core = faseCore(f)
          const cd = core.filter((n) => done[n.id]).length
          const pct = core.length ? cd / core.length : 0
          const isDone = faseDone(f, done)
          const cur = f.id === acaPhase
          return (
            <a
              key={f.id}
              href={`#${f.id}`}
              className={`rmap-node${isDone ? ' done' : ''}${cur ? ' cur' : ''}`}
              style={{ ['--fc' as string]: f.color }}
              title={`${f.num} · ${f.tit}`}
            >
              <span className="rmap-badge">
                <svg className="rmap-ring" viewBox="0 0 44 44" aria-hidden>
                  <circle className="rr-bg" cx="22" cy="22" r={R} />
                  <motion.circle
                    className="rr-fg"
                    cx="22"
                    cy="22"
                    r={R}
                    strokeDasharray={CIRC}
                    initial={false}
                    animate={{ strokeDashoffset: CIRC * (1 - (isDone ? 1 : pct)) }}
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  />
                </svg>
                <span className="rmap-ins">{isDone ? '✓' : f.insignia}</span>
              </span>
              <span className="rmap-lbl">
                <b>{f.num}</b>
                {f.tit}
              </span>
            </a>
          )
        })}
      </div>
    </motion.nav>
  )
}
