import { AnimatePresence, motion } from 'framer-motion'
import type { Nodo as NodoT } from '../data/roadmap'
import { CLAUDE_MD, NICON } from '../data/roadmap'
import { DETALLE } from '../data/detalle'
import { fmtMin } from '../lib/utils'
import { useStore } from '../store'
import { Recursos } from './Recursos'

export function Nodo({
  n,
  done,
  isAca,
  onToggle,
}: {
  n: NodoT
  done: boolean
  isAca: boolean
  onToggle: (id: string) => void
}) {
  const { checks, toggleCheck, notes, setNote, open: openMap, toggleOpen } = useStore()
  const open = !!openMap[n.id]
  const isCP = n.tipo === 'CHECKPOINT'
  const icon = NICON[n.tipo] || { e: '•', bg: '#f0f3f7', bd: '#e2e7ee' }
  const det = DETALLE[n.id]

  const cls = ['nodo']
  if (isCP) cls.push('cp')
  if (n.opt) cls.push('opt')
  if (done) cls.push('hecho')
  if (isAca) cls.push('activo')

  const subDone = det ? det.sub.filter((_, i) => checks[`${n.id}:${i}`]).length : 0

  return (
    <motion.li
      id={n.id}
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
        aria-label={done ? `Marcar "${n.tit}" como pendiente` : `Completar "${n.tit}"`}
        title={done ? 'Marcar pendiente' : 'Completar'}
      >
        <svg className="knob-check" viewBox="0 0 24 24" aria-hidden>
          <motion.path
            d="M5.5 12.5l4 4 9-9.5"
            initial={false}
            animate={{ pathLength: done ? 1 : 0, opacity: done ? 1 : 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          />
        </svg>
      </motion.button>
      <motion.div className="ncard" whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
        <button className="nhead" onClick={() => toggleOpen(n.id)} aria-expanded={open}>
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
            {det && det.sub.length > 0 && (
              <span className="pill sub-pill">
                {subDone}/{det.sub.length}
              </span>
            )}
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

                {det && (
                  <div className="meta3">
                    <div className="m3 m3-obj">
                      <span className="m3k">🎯 Objetivo</span>
                      <span className="m3v">{det.obj}</span>
                    </div>
                    <div className="m3 m3-ent">
                      <span className="m3k">📦 Entregable</span>
                      <span className="m3v">{det.entregable}</span>
                    </div>
                    <div className="m3 m3-listo">
                      <span className="m3k">✅ Listo cuando</span>
                      <span className="m3v">{det.listo}</span>
                    </div>
                  </div>
                )}

                {det?.concepto && (
                  <div className="callout c-concepto">
                    <div className="callout-h">💡 El concepto, en criollo</div>
                    <p className="callout-b">{det.concepto}</p>
                  </div>
                )}

                {det && det.sub.length > 0 && (
                  <div className="subs">
                    <div className="subs-h">
                      Sub-pasos <span className="subs-count">{subDone}/{det.sub.length}</span>
                    </div>
                    <ul className="sub-list">
                      {det.sub.map((s, i) => {
                        const k = `${n.id}:${i}`
                        const on = !!checks[k]
                        return (
                          <li key={i} className={`sub${on ? ' on' : ''}`}>
                            <button
                              className="sub-check"
                              onClick={() => toggleCheck(k)}
                              aria-pressed={on}
                              aria-label={`${on ? 'Desmarcar' : 'Marcar hecho'}: ${s}`}
                              title={on ? 'Desmarcar' : 'Marcar hecho'}
                            />
                            <span>{s}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}

                {det?.errores && det.errores.length > 0 && (
                  <div className="callout c-errores">
                    <div className="callout-h">⚠️ Errores comunes</div>
                    <ul className="callout-list">
                      {det.errores.map((e, i) => (
                        <li key={i}>{e}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {det?.chequeo && det.chequeo.length > 0 && (
                  <div className="callout c-chequeo">
                    <div className="callout-h">🧠 ¿Lo entendiste? Deberías poder responder</div>
                    <ul className="callout-list">
                      {det.chequeo.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {n.pre && <pre>{CLAUDE_MD}</pre>}

                <Recursos r={n.r} nodeId={n.id} />

                <div className="notas-user">
                  <label className="notas-h" htmlFor={`nota-${n.id}`}>
                    📝 Mis notas
                  </label>
                  <textarea
                    id={`nota-${n.id}`}
                    className="notas-ta"
                    value={notes[n.id] || ''}
                    onChange={(e) => setNote(n.id, e.target.value)}
                    autoComplete="off"
                    placeholder="Anotá dudas, avances, tu próxima acción concreta…"
                  />
                </div>

                {n.nota && <p className="nota">{n.nota}</p>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.li>
  )
}
