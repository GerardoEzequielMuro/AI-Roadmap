import { useEffect } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'

export function AnimatedNumber({
  value,
  format = (n) => n.toString(),
}: {
  value: number
  format?: (n: number) => string
}) {
  const mv = useMotionValue(0)
  const text = useTransform(mv, (v) => format(Math.round(v)))

  useEffect(() => {
    const controls = animate(mv, value, { duration: 0.8, ease: [0.4, 1, 0.4, 1] })
    return () => controls.stop()
  }, [value, mv])

  return <motion.span>{text}</motion.span>
}
