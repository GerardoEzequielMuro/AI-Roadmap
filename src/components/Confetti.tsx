import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const COLORS = ['#0176d3', '#2e844a', '#9050e9', '#fe9339', '#e5567e', '#ffd23f']

type Piece = { key: string; left: number; color: string; dur: number; delay: number; round: boolean }

export function Confetti({ burst }: { burst: { id: number; big: boolean } | null }) {
  const [pieces, setPieces] = useState<Piece[]>([])

  useEffect(() => {
    if (!burst) return
    const n = burst.big ? 70 : 24
    const fresh: Piece[] = Array.from({ length: n }, (_, i) => ({
      key: `${burst.id}-${i}`,
      left: Math.random() * 100,
      color: COLORS[i % COLORS.length],
      dur: 1 + Math.random() * 1.3,
      delay: Math.random() * 0.3,
      round: Math.random() > 0.5,
    }))
    setPieces((p) => [...p, ...fresh])
    const t = setTimeout(
      () => setPieces((p) => p.filter((x) => !x.key.startsWith(`${burst.id}-`))),
      2800,
    )
    return () => clearTimeout(t)
  }, [burst])

  return (
    <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 70, overflow: 'hidden' }}>
      {pieces.map((p) => (
        <motion.div
          key={p.key}
          style={{
            position: 'absolute',
            top: -20,
            left: `${p.left}vw`,
            width: 10,
            height: 10,
            background: p.color,
            borderRadius: p.round ? '50%' : 0,
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{ y: '105vh', opacity: 0, rotate: 720 }}
          transition={{ duration: p.dur, delay: p.delay, ease: 'linear' }}
        />
      ))}
    </div>
  )
}
