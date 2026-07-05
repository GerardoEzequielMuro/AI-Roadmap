import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { FASES } from './data/roadmap'
import { faseDone, flat, fmtH, matchesFilter, nodoActual, totals, type Done, type FilterKey } from './lib/utils'
import { useStore } from './store'
import { AnimatedNumber } from './components/AnimatedNumber'
import { HeroArt } from './components/HeroArt'
import { RoadMapNav } from './components/RoadMapNav'
import { Fase } from './components/Fase'
import { Confetti } from './components/Confetti'

type Theme = 'light' | 'dark'
const THEME_KEY = 'roadmap-ia-theme'

const FILTERS: { k: FilterKey; label: string }[] = [
  { k: 'all', label: 'Todos' },
  { k: 'pend', label: 'Pendientes' },
  { k: 'PROYECTO', label: 'Proyectos' },
  { k: 'TEORÍA', label: 'Teoría' },
  { k: 'CHECKPOINT', label: 'Checkpoints' },
]

function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const v = localStorage.getItem(THEME_KEY)
      if (v === 'light' || v === 'dark') return v
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch { /* noop */ }
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))]
}

export default function App() {
  const { done, setDone, reset, collapsed, setCollapsed, setOpen, replaceAll, snapshot } = useStore()
  const [theme, toggleTheme] = useTheme()
  const [filter, setFilter] = useState<FilterKey>('all')
  const [focus, setFocus] = useState(false)
  const [burst, setBurst] = useState<{ id: number; big: boolean } | null>(null)
  const [toast, setToast] = useState<{ msg: string; key: number } | null>(null)
  const burstId = useRef(0)
  const fileRef = useRef<HTMLInputElement>(null)

  const { scrollY } = useScroll()
  const artY = useTransform(scrollY, [0, 500], [0, -40])

  const t = totals(done)
  const aca = nodoActual(done)
  const pct = t.ptsTot ? Math.round((t.pts / t.ptsTot) * 100) : 0
  const allDone = t.badges === FASES.length
  const anyVisible = FASES.some((f) =>
    f.nodos.some((n) => (focus ? n.id === aca : matchesFilter(n, filter, done))),
  )

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(null), 1900)
    return () => clearTimeout(id)
  }, [toast])

  // El FAB "Tu paso" aparece solo cuando tu paso actual NO está en pantalla.
  const [acaInView, setAcaInView] = useState(false)
  useEffect(() => {
    if (!aca) { setAcaInView(false); return }
    const el = document.getElementById(aca)
    if (!el) { setAcaInView(false); return }
    const obs = new IntersectionObserver(([e]) => setAcaInView(e.isIntersecting), { threshold: 0.35 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [aca, collapsed, filter, focus])

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

  function goToCurrent() {
    if (!aca) return
    setFocus(false)
    setFilter('all')
    const fase = FASES.find((f) => f.nodos.some((n) => n.id === aca))
    if (fase && collapsed[fase.id]) setCollapsed(fase.id, false)
    setOpen(aca, true)
    requestAnimationFrame(() =>
      setTimeout(
        () => document.getElementById(aca)?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
        80,
      ),
    )
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(snapshot(), null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'roadmap-ia-progreso.json'
    a.click()
    URL.revokeObjectURL(url)
    setToast({ msg: 'Progreso exportado ✓', key: Date.now() })
  }

  function importData(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        replaceAll(JSON.parse(String(reader.result)))
        setToast({ msg: 'Progreso importado ✓', key: Date.now() })
      } catch {
        setToast({ msg: 'Archivo inválido', key: Date.now() })
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <div className="topbar">
        <div className="wrap tb">
          <span className="brand">
            <span className="brand-mark">⛰️</span> Roadmap IA
          </span>
          <div className="tb-right">
            <span className="tb-tag">De los gradientes a los transformers</span>
            <button
              className="theme-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>

      <div className="wrap">
        <header>
          <div className="hero-row">
            <motion.div
              className="hero-txt"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <span className="eyebrow">
                <span className="dot" /> Ruta de aprendizaje · 6 fases + capstone
              </span>
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
              style={{ y: artY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.1 }}
            >
              <div className="art-core">
                <HeroArt />
              </div>
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
            <div className="time-line">
              <span className="tl-pct">{pct}% completado</span>
              <span className="tl-time">
                ⏱ {fmtH(t.min)} de {fmtH(t.minTot)}
                {t.minTot - t.min > 0 && <b> · faltan {fmtH(t.minTot - t.min)}</b>}
              </span>
            </div>
            <div className="leyenda">
              Cada paso da <b>puntos</b> al completarlo (como Trailhead). Completá todos los pasos
              núcleo de una fase y ganás su <b>insignia</b>. Las electivas 🧶🚀 no cuentan para el
              total. Todo el material es gratis.
            </div>
          </div>
        </header>

        <RoadMapNav done={done} aca={aca} />

        <div className="controls">
          <div className="filters" role="tablist" aria-label="Filtrar pasos">
            {FILTERS.map((ff) => (
              <button
                key={ff.k}
                role="tab"
                aria-selected={filter === ff.k}
                className={`chip${filter === ff.k && !focus ? ' on' : ''}`}
                onClick={() => setFilter(ff.k)}
                disabled={focus}
              >
                {ff.label}
              </button>
            ))}
          </div>
          <button
            className={`chip focus-chip${focus ? ' on' : ''}`}
            onClick={() => setFocus((v) => !v)}
            aria-pressed={focus}
          >
            {focus ? '◱ Salir de enfoque' : '◱ Modo enfoque'}
          </button>
        </div>

        <AnimatePresence>
          {allDone && (
            <motion.div
              className="done-all"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            >
              <span className="done-all-emoji">🎉</span>
              <div>
                <b>¡Completaste el roadmap!</b>
                <span>Las 6 insignias, de los gradientes a los transformers. En serio.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main id="contenido">
          {FASES.map((f) => (
            <Fase
              key={f.id}
              f={f}
              done={done}
              aca={aca}
              isDone={faseDone(f, done)}
              onToggle={handleToggle}
              filter={filter}
              focus={focus}
            />
          ))}
          {!anyVisible && (
            <div className="empty-state">
              {focus
                ? '¡No hay paso actual! Completaste todo. 🎉'
                : filter === 'pend'
                  ? '¡No quedan pendientes con este filtro! 🎉'
                  : 'No hay pasos con este filtro.'}
            </div>
          )}
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
          <div className="footer-actions">
            <button id="reset" onClick={handleReset}>
              reiniciar progreso
            </button>
            <button className="mini-btn" onClick={exportData}>⬇ Exportar progreso</button>
            <button className="mini-btn" onClick={() => fileRef.current?.click()}>⬆ Importar</button>
            <input ref={fileRef} type="file" accept="application/json" hidden onChange={importData} />
          </div>
        </footer>
      </div>

      <AnimatePresence>
        {aca && !acaInView && (
          <motion.button
            className="fab"
            onClick={goToCurrent}
            aria-label="Ir a tu paso actual"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <span className="fab-ic">▶</span> Tu paso
          </motion.button>
        )}
      </AnimatePresence>

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
