import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Nodo as NodoT } from '../data/roadmap'
import { CLAUDE_MD, NICON } from '../data/roadmap'
import { fmtMin } from '../lib/utils'
import { Recursos } from './Recursos'

export function Nodo({
  n,
  done,
  isAca,
  onToggle,
  defaultOpen = false,
}: {
  n: NodoT
  done: boolean
  isAca: boolean
  onToggle: (id: string) => void
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const isCP = n.tipo === 'CHECKPOINT'
  const icon = NICON[n.tipo] || { e: '•', bg: '#f0f3f7', bd: '#e2e7ee' }

  const cls = ['nodo']
  if (isCP) cls.push('cp')
  if (n.opt) cls.push('opt')
  if (done) cls.push('hecho')
  if (isAca) cls.push('activo')

  return (
    <motion.li
      className={cls.join(' ')}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ type: 'spring', stiffness: 130, damping: 18 }}
    >
      <motion.button
        className="knob"
        whileTap={{ scale: 0.8 }}
        onClick={() => onToggle(n.id)}
        aria-pressed={done}
        title={done ? 'Marcar pendiente' : 'Completar'}
      />
      <motion.div className="ncard" whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
        <button className="nhead" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
          {isAca && (
            <span className="aca-row">
              <motion.span
                className="aca"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}
              >
                ▶ ESTÁS ACÁ
              </motion.span>
            </span>
          )}
          <span className="nicon" style={{ background: icon.bg, borderColor: icon.bd }}>
            {icon.e}
          </span>
          <span className="ntit">{n.tit}</span>
          <span className="nmeta">
            {n.pts > 0 && <span className="pill pts">{n.pts} pts</span>}
            <span className="pill">{fmtMin(n.min)}</span>
            <span className="pill type">{n.tipo}</span>
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="detalle"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="detalle">
                <p className="desc">{n.d}</p>
                {n.pre && <pre>{CLAUDE_MD}</pre>}
                <Recursos r={n.r} />
                {n.nota && <p className="nota">{n.nota}</p>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.li>
  )
}
