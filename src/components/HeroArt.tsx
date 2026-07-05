import { motion } from 'framer-motion'

// Ilustración Trailhead: montaña con bandera, sol, nubes, camino punteado, arbolitos.
export function HeroArt() {
  return (
    <svg viewBox="0 0 280 210" role="img" aria-label="Camino de montaña con una bandera en la cima">
      <motion.g
        style={{ originX: '228px', originY: '44px' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
      >
        <circle cx="228" cy="44" r="19" fill="#ffce3a" />
        <circle cx="228" cy="44" r="19" fill="none" stroke="#ffb75d" strokeWidth="3" opacity=".5" />
      </motion.g>

      <motion.g
        fill="#ffffff"
        opacity=".92"
        animate={{ x: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      >
        <ellipse cx="58" cy="48" rx="26" ry="11" />
        <ellipse cx="74" cy="42" rx="16" ry="9" />
      </motion.g>

      <ellipse cx="140" cy="196" rx="152" ry="13" fill="#e6f2e9" />
      <path d="M-5 188 L70 92 L150 188 Z" fill="#cbe0f2" />
      <path d="M135 188 L206 100 L286 188 Z" fill="#b9d4ec" />
      <path d="M40 190 L138 58 L236 190 Z" fill="#5a97d6" />
      <path d="M138 58 L112 92 L124 86 L138 96 L152 86 L164 92 Z" fill="#f4f9ff" />

      <motion.path
        d="M92 190 Q112 152 128 140 Q150 128 132 98 Q124 82 138 66"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 8"
        opacity=".9"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
      />

      <line x1="138" y1="58" x2="138" y2="30" stroke="#16325c" strokeWidth="2.5" strokeLinecap="round" />
      <motion.path
        d="M138 32 L138 46 L160 39 Z"
        fill="#e5567e"
        style={{ originX: '138px', originY: '39px' }}
        animate={{ skewX: [0, -8, 0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />

      <g fill="#2e844a">
        <path d="M50 190 L59 168 L68 190 Z" />
        <path d="M53 179 L59 161 L65 179 Z" />
        <path d="M212 190 L221 170 L230 190 Z" />
      </g>

      <motion.g
        fill="#ffd23f"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
      >
        <circle cx="176" cy="72" r="2.5" />
        <circle cx="96" cy="96" r="2" />
        <circle cx="200" cy="132" r="2.5" />
      </motion.g>
    </svg>
  )
}
