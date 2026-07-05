import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FASES } from './data/roadmap'
import { faseDone, flat, nodoActual, totals, type Done } from './lib/utils'
import { useProgress } from './hooks/useProgress'
import { AnimatedNumber } from './components/AnimatedNumber'
import { HeroArt } from './components/HeroArt'
import { Fase } from './components/Fase'
import { Confetti } from './components/Confetti'

export default function App() {
  const { done, setDone, reset } = useProgress()
  const [burst, setBurst] = useState<{ id: number; big: boolean } | null>(null)
  const [toast, setToast] = useState<{ msg: string; key: number } | null>(null)
  const burstId = useRef(0)

  const t = totals(done)
  const aca = nodoActual(done)
  const pct = t.ptsTot ? Math.round((t.pts / t.ptsTot) * 100) : 0

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(null), 1900)
    return () => clearTimeout(id)
  }, [toast])

  function celebrate(pts: number, big: boolean) {
    burstId.current += 1
    setBurst({ id: burstId.current, big })
    setToast({
      msg: big ? `🏅 ¡Insignia desbloqueada! +${pts} pts` : `+${pts} pts`,
      key: burstId.current,
    })
  }

  function handleToggle(id: string) {
    const node = flat().find((n) => n.id === id)
    const fase = FASES.find((f) => f.nodos.some((n) => n.id === id))!
    const wasDone = !!done[id]
    const badgeBefore = faseDone(fase, done)
    const nd: Done = { ...done }
    if (wasDone) delete nd[id]
    else nd[id] = true
    setDone(nd)
    if (!wasDone) {
      const got = !badgeBefore && faseDone(fase, nd)
      if (node && node.pts > 0) celebrate(node.pts, got)
      else if (got) celebrate(0, true)
    }
  }

  function handleReset() {
    if (!confirm('¿Reiniciar todo el progreso? No se puede deshacer.')) return
    reset()
    setToast({ msg: 'Progreso reiniciado', key: Date.now() })
  }

  return (
    <>
      <div className="topbar">
        <div className="wrap tb">
          <span className="brand">
            <span className="brand-mark">⛰️</span> Roadmap IA
          </span>
          <span className="tb-tag">De los gradientes a los transformers</span>
        </div>
      </div>

      <div className="wrap">
        <header>
          <div className="hero-row">
            <motion.div
              className="hero-txt"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <h1>
                Tu ruta de aprendizaje <span className="accent">en IA</span>
              </h1>
              <p className="sub">
                6 fases + capstone, con material completo por paso: cursos, videos (ES + EN), papers,
                libros y docs. Vos elegís de cada menú. El progreso avanza por checkpoint, no por
                calendario.
              </p>
            </motion.div>
            <motion.div
              className="hero-art"
              aria-hidden
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.1 }}
            >
              <HeroArt />
            </motion.div>
          </div>

          <div className="statbar">
            <div className="stat">
              <div className="k">Puntos</div>
              <div className="v">
                <AnimatedNumber value={t.pts} format={(n) => n.toLocaleString()} />{' '}
                <small>/ {t.ptsTot.toLocaleString()}</small>
              </div>
            </div>
            <div className="stat">
              <div className="k">Pasos</div>
              <div className="v">
                <AnimatedNumber value={t.steps} /> <small>/ {t.stepsTot}</small>
              </div>
            </div>
            <div className="stat">
              <div className="k">Insignias</div>
              <div className="v">
                <AnimatedNumber value={t.badges} /> <small>/ 6</small>
              </div>
            </div>
            <div className="stat">
              <div className="k">Recursos</div>
              <div className="v">
                <AnimatedNumber value={t.recs} />
              </div>
            </div>
          </div>

          <div className="gwrap">
            <div className="gbar">
              <motion.i
                animate={{ width: `${pct}%` }}
                transition={{ type: 'spring', stiffness: 60, damping: 18 }}
              />
            </div>
            <div className="leyenda">
              Cada paso da <b>puntos</b> al completarlo (como Trailhead). Completá todos los pasos
              núcleo de una fase y ganás su <b>insignia</b>. Las electivas 🧶🚀 no cuentan para el
              total. Todo el material es gratis.
            </div>
          </div>
        </header>

        <main>
          {FASES.map((f) => (
            <Fase key={f.id} f={f} done={done} aca={aca} isDone={faseDone(f, done)} onToggle={handleToggle} />
          ))}
        </main>

        <footer>
          <p>El progreso se guarda solo en tu navegador (sobrevive entre sesiones, lo ves únicamente vos).</p>
          <p>
            Los checkpoints ⭐ se validan explicándole el concepto a Claude sin notas y sobreviviendo
            a las repreguntas. "Terminé el video" no es un checkpoint.
          </p>
          <p>
            Recordá el trato: este sitio lindo es la herramienta, no el estudio. La barra sube con
            P0, no con rediseños. El widget de escritorio se desbloquea en M1.
          </p>
          <button id="reset" onClick={handleReset}>
            reiniciar progreso
          </button>
        </footer>
      </div>

      <Confetti burst={burst} />

      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.key}
            className="toast"
            role="status"
            aria-live="polite"
            initial={{ y: 80, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            exit={{ y: 80, opacity: 0, x: '-50%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
