import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

const KEY = 'roadmap-ia-v1'

type Bool = Record<string, boolean>

export interface Persisted {
  done: Bool
  checks: Bool // sub-tareas, key `${nodeId}:${i}`
  seen: Bool // recursos vistos, key `${nodeId}:r${i}`
  notes: Record<string, string> // notas por nodo, key nodeId
  collapsed: Bool // fases colapsadas, key faseId
  open: Bool // nodos abiertos, key nodeId
}

const EMPTY: Persisted = { done: {}, checks: {}, seen: {}, notes: {}, collapsed: {}, open: {} }

interface Api extends Persisted {
  setDone: (d: Bool) => void
  toggleCheck: (k: string) => void
  toggleSeen: (k: string) => void
  setNote: (id: string, v: string) => void
  toggleCollapsed: (id: string) => void
  toggleOpen: (id: string) => void
  setOpen: (id: string, v: boolean) => void
  setCollapsed: (id: string, v: boolean) => void
  replaceAll: (p: Partial<Persisted>) => void
  reset: () => void
  snapshot: () => Persisted
}

const Ctx = createContext<Api | null>(null)

export function useStore(): Api {
  const c = useContext(Ctx)
  if (!c) throw new Error('useStore fuera del StoreProvider')
  return c
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [s, setS] = useState<Persisted>(() => {
    try {
      const v = localStorage.getItem(KEY)
      if (v) return { ...EMPTY, ...(JSON.parse(v) as Partial<Persisted>) }
    } catch { /* noop */ }
    return EMPTY
  })

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ ...s, ts: Date.now() }))
    } catch { /* almacenamiento no disponible */ }
  }, [s])

  const api: Api = {
    ...s,
    setDone: (done) => setS((p) => ({ ...p, done })),
    toggleCheck: (k) => setS((p) => ({ ...p, checks: { ...p.checks, [k]: !p.checks[k] } })),
    toggleSeen: (k) => setS((p) => ({ ...p, seen: { ...p.seen, [k]: !p.seen[k] } })),
    setNote: (id, v) => setS((p) => ({ ...p, notes: { ...p.notes, [id]: v } })),
    toggleCollapsed: (id) => setS((p) => ({ ...p, collapsed: { ...p.collapsed, [id]: !p.collapsed[id] } })),
    toggleOpen: (id) => setS((p) => ({ ...p, open: { ...p.open, [id]: !p.open[id] } })),
    setOpen: (id, v) => setS((p) => ({ ...p, open: { ...p.open, [id]: v } })),
    setCollapsed: (id, v) => setS((p) => ({ ...p, collapsed: { ...p.collapsed, [id]: v } })),
    replaceAll: (partial) => setS({ ...EMPTY, ...partial }),
    reset: () => setS(EMPTY),
    snapshot: () => s,
  }

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}
