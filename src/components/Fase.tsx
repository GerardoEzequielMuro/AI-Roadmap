import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Fase as FaseT } from '../data/roadmap'
import { faseCore, type Done } from '../lib/utils'
import { Nodo } from './Nodo'

export function Fase({
  f,
  done,
  aca,
  isDone,
  onToggle,
}: {
  f: FaseT
  done: Done
  aca: string | null
  isDone: boolean
  onToggle: (id: string) => void
}) {
  const [collapsed, setCollapsed] = useState(false)
  const core = faseCore(f)
  const fh = core.filter((n) => done[n.id]).length
  const fpts = core.reduce((a, n) => a + (done[n.id] ? n.pts : 0), 0)
  const fptsTot = core.reduce((a, n) => a + n.pts, 0)

  return (
    <motion.section
      id={f.id}
      className={`fase${isDone ? ' done' : ''}`}
      style={{ ['--fc' as string]: f.color }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 110, damping: 20 }}
    >
      <button className="fase-head" onClick={() => setCollapsed((c) => !c)} aria-expanded={!collapsed}>
        <motion.span
          className="badge"
          style={{ background: f.color }}
          whileHover={{ scale: 1.07, rotate: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          {!isDone && <span>{f.insignia}</span>}
        </motion.span>
        <span className="fh-txt">
          <span className="fase-num">
            {f.num} · {f.dur}
          </span>
          <span className="fase-tit">{f.tit}</span>
        </span>
        <span className="fh-meta">
          <span className="big">
            {fh}/{core.length}
          </span>{' '}
          pasos
          <br />
          {fpts}/{fptsTot} pts
        </span>
        <motion.span className="chev" animate={{ rotate: collapsed ? -90 : 0 }} transition={{ duration: 0.2 }}>
          ▼
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="fase-body">
              <p className="fase-why">{f.why}</p>
              <ul className="nodos">
                {f.nodos.map((n) => (
                  <Nodo
                    key={n.id}
                    n={n}
                    done={!!done[n.id]}
                    isAca={n.id === aca}
                    onToggle={onToggle}
                    defaultOpen={n.id === 'f0-4'}
                  />
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
