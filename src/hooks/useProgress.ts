import { useEffect, useState } from 'react'
import type { Done } from '../lib/utils'

const KEY = 'roadmap-ia-v1'

export function useProgress() {
  const [done, setDone] = useState<Done>(() => {
    try {
      const v = localStorage.getItem(KEY)
      return v ? (JSON.parse(v).done as Done) || {} : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ done, ts: Date.now() }))
    } catch { /* almacenamiento no disponible */ }
  }, [done])

  const reset = () => setDone({})

  return { done, setDone, reset }
}
