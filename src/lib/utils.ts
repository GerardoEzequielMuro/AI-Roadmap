import { FASES, type Fase } from '../data/roadmap'

export type Done = Record<string, boolean>

export const flat = () => FASES.flatMap((f) => f.nodos)
export const coreNodes = () => flat().filter((n) => !n.opt)
export const faseCore = (f: Fase) => f.nodos.filter((n) => !n.opt)
export const faseDone = (f: Fase, done: Done) => {
  const c = faseCore(f)
  return c.length > 0 && c.every((n) => done[n.id])
}

export function totals(done: Done) {
  let pts = 0, ptsTot = 0, steps = 0, stepsTot = 0, recs = 0
  coreNodes().forEach((n) => {
    ptsTot += n.pts
    stepsTot++
    if (done[n.id]) { pts += n.pts; steps++ }
  })
  flat().forEach((n) => { if (n.r) recs += n.r.length })
  const badges = FASES.filter((f) => faseDone(f, done)).length
  return { pts, ptsTot, steps, stepsTot, recs, badges }
}

// "Estás acá" = primer proyecto/checkpoint sin completar; si no, el próximo pendiente.
export function nodoActual(done: Done): string | null {
  const trabajo = coreNodes().find(
    (n) => !done[n.id] && (n.tipo === 'PROYECTO' || n.tipo === 'CHECKPOINT'),
  )
  if (trabajo) return trabajo.id
  const otro = coreNodes().find((n) => !done[n.id])
  return otro ? otro.id : null
}

export const fmtMin = (m: number) =>
  m >= 60 ? (m % 60 ? `${Math.floor(m / 60)}h ${m % 60}m` : `${Math.floor(m / 60)}h`) : `${m}m`

export type YT = { type: 'video' | 'playlist'; id: string } | null
export function ytId(url: string): YT {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtu.be')) return { type: 'video', id: u.pathname.slice(1) }
    if (u.hostname.includes('youtube.com')) {
      if (u.pathname === '/watch' && u.searchParams.get('v'))
        return { type: 'video', id: u.searchParams.get('v')! }
      const list = u.searchParams.get('list')
      if (u.pathname.startsWith('/playlist') && list) return { type: 'playlist', id: list }
    }
  } catch { /* noop */ }
  return null
}
