# Roadmap IA

Mi ruta personal de aprendizaje de IA, **de los gradientes a los transformers**, como app web interactiva estilo Trailhead: marcás pasos, ganás puntos e insignias, con animaciones y material gratuito por cada paso.

**6 fases + capstone**, con cursos, videos (ES + EN), papers, libros y docs verificados. Los videos de YouTube se reproducen embebidos. El progreso se guarda solo en el navegador.

## Stack

- **Vite + React 18 + TypeScript**
- **Framer Motion** para las animaciones (scroll-reveal, contadores, barra de progreso, expand/collapse, confetti)
- CSS propio (sin framework), self-contained
- Deploy en **Vercel**

## Correr en local

```bash
npm install
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción → dist/
npm run preview  # previsualizar el build
```

## Estructura

```
src/
  data/roadmap.ts        # todo el contenido del roadmap (fases, nodos, recursos)
  hooks/useProgress.ts   # progreso persistido en localStorage
  lib/utils.ts           # totales, "estás acá", parsing de YouTube
  components/            # HeroArt, Fase, Nodo, Recursos, YouTubeEmbed, Confetti, AnimatedNumber
  App.tsx                # composición + celebración/toast
  index.css              # estilos (paleta Trailhead)
```

## Cómo funciona

- **Puntos** por cada paso núcleo completado. Completás todos los pasos núcleo de una fase → **insignia**.
- Los **checkpoints ⭐** se validan explicándole el concepto a Claude sin notas.
- El progreso se guarda en `localStorage` (por navegador y equipo; no sincroniza entre dispositivos).
- La página no se indexa en buscadores (`noindex`).

## Deploy en Vercel

Vercel detecta Vite automáticamente. Conectá el repo en [vercel.com](https://vercel.com) → New Project → importá `AI-Roadmap`. Build command `npm run build`, output `dist` (autodetectado). Cada push a `main` redeploya solo.

---

*Uso personal. Todo el material enlazado es gratuito.*
