# Roadmap IA

Mi ruta personal de aprendizaje de IA, **de los gradientes a los transformers**. Un solo archivo HTML, sin dependencias, con el camino completo en formato interactivo estilo Trailhead: lo abrís, marcás pasos, ganás puntos e insignias.

**6 fases + capstone**, con material gratuito y verificado por cada paso — cursos, videos (ES + EN), papers, libros y docs. Vos elegís de cada menú. El progreso avanza por *checkpoint*, no por calendario.

---

## Las fases

| # | Fase | Duración | Foco |
|---|------|----------|------|
| 0 | **Setup** | 2–3 días | Entorno mínimo (Python, PyTorch CPU, Jupyter) + primer script a mano |
| 1 | **ML clásico** | 4–6 sem | Loss, gradient descent, validación, árboles/boosting, lead scoring |
| 2 | **Redes desde cero** | 3–4 sem | Backprop, micrograd, MNIST en NumPy puro → PyTorch |
| 3 | **Lenguaje y transformers** | 4–6 sem | makemore, tokenización, attention, tu propio nanoGPT |
| 4 | **LLMs aplicados** | 3–5 sem | Fine-tuning/LoRA, embeddings, RAG, evals |
| ★ | **Capstone** | 3–4 sem | CRM Intelligence: scoring + LLM + evals + deploy + writeup |

Las electivas (🧶 visión, 🚀 agentes) no cuentan para el total: son menú, no tarea.

---

## Cómo funciona

- **Puntos** por cada paso núcleo completado (como Trailhead).
- Completás todos los pasos núcleo de una fase → ganás su **insignia**.
- Los **checkpoints ⭐** se validan explicándole el concepto a Claude sin notas y sobreviviendo a las repreguntas. *"Terminé el video" no es un checkpoint.*
- El indicador **▶ ESTÁS ACÁ** marca el primer proyecto o checkpoint pendiente.

## Uso

Es un HTML autónomo. Para verlo:

- **Local**: abrí `index.html` con doble clic.
- **GitHub Pages**: Settings → Pages → Branch `main` → carpeta raíz (`/`).

El **progreso se guarda solo**, en el mismo navegador y equipo. Sobrevive a recargas y a cerrar la pestaña; es privado (nadie más lo ve). Usa `localStorage`, o `window.storage` si corre adentro de un Artifact de Claude. El botón *reiniciar progreso* del pie borra todo.

> Ojo: al ser almacenamiento local del navegador, el progreso **no** se sincroniza entre dispositivos ni entre navegadores distintos, y se pierde si borrás los datos del sitio.

## Stack

HTML + CSS + JS vanilla. Cero build, cero dependencias, cero red. Toda la data del roadmap vive en el array `FASES` dentro de `index.html`.

---

*Uso personal. Todo el material enlazado es gratuito.*
