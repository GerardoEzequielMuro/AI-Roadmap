// ============================================================
//  ROADMAP IA — DATA (Gerar)
//  r = [TIPO, título, meta, url]
// ============================================================

export type Recurso = [string, string, string, string]

export interface Nodo {
  id: string
  tipo: string
  pts: number
  min: number
  tit: string
  d: string
  pre?: boolean
  nota?: string
  opt?: boolean
  r?: Recurso[]
}

export interface Fase {
  id: string
  num: string
  tit: string
  dur: string
  pts: number
  insignia: string
  color: string
  why: string
  nodos: Nodo[]
}

export const CLAUDE_MD = `# Modo tutor — reglas no negociables

- NUNCA escribas código de solución en este repo. Ni funciones,
  ni boilerplate, ni "solo esta línea". Cero.
- Ayudás en tres niveles, en orden, y pasás al siguiente solo si lo pido:
  1. Concepto (explicación sin código)
  2. Pseudocódigo o plan en pasos
  3. Referencia a docs o ejemplo análogo (nunca la solución)
- Si pego código mío: primero preguntame qué espero que haga y dónde
  creo que está el bug. Después señalá la ZONA del problema, no el fix.
- Antes de cambiar de tema, tomame examen: 2-3 preguntas y pedime
  que te explique el concepto de vuelta.
- Si te pido "hacelo rápido y ya", recordame esta regla y negate.`

export const FASES: Fase[] = [
  {
    id: 'f0', num: 'FASE 0', tit: 'Setup', dur: '2–3 días', pts: 1200,
    insignia: '⚙', color: '#0d9dda',
    why: 'Infraestructura mínima y nada más. Si esta fase te toma más de tres días, caíste en la trampa que ya conocés: construir el sistema de estudio perfecto en vez de estudiar.',
    nodos: [
      { id: 'f0-1', tipo: 'SETUP', pts: 200, min: 30, tit: 'Repo ai-learning + CLAUDE.md modo tutor',
        d: 'Antes de cualquier recurso, el andamiaje. Un repo con carpeta por proyecto y un journal.md donde cada sesión termina escribiendo la próxima acción concreta. El CLAUDE.md de abajo es lo que convierte a Claude en tutor en vez de autor: sin esta regla, Claude te escribe el código y no aprendés nada. Por qué importa: tu cuello de botella declarado es Python flojo, y eso solo se arregla escribiendo vos, no mirando.',
        pre: true,
        r: [
          ['DOC', 'Git — guía de inicio', 'cómo iniciar un repo, gratis', 'https://git-scm.com/book/es/v2'],
          ['VIDEO', 'Git y GitHub desde cero (HolaMundo, ES)', '~1h, si el repo te trae dudas', 'https://www.youtube.com/watch?v=3GymExBkKjE'],
        ] },
      { id: 'f0-2', tipo: 'SETUP', pts: 200, min: 45, tit: 'Entorno: Python + PyTorch (CPU) + scikit-learn + Jupyter',
        d: 'uv para manejar el entorno (más rápido y limpio que pip/conda). Instalá PyTorch en su versión CPU: alcanza de sobra hasta la Fase 3 y no pelees con ROCm en la RX 6600, es frágil y te come días. Jupyter para explorar interactivamente.',
        r: [
          ['DOC', 'uv — documentación oficial', 'el gestor de entornos moderno', 'https://docs.astral.sh/uv/'],
          ['DOC', 'PyTorch — Get Started (elegí CPU)', 'selector oficial de instalación', 'https://pytorch.org/get-started/locally/'],
          ['DOC', 'Project Jupyter', 'notebooks', 'https://jupyter.org'],
          ['VIDEO', 'Jupyter Notebook tutorial (Corey Schafer, EN)', '~30 min, el estándar', 'https://www.youtube.com/watch?v=HW29067qVWk'],
        ] },
      { id: 'f0-3', tipo: 'SETUP', pts: 100, min: 20, tit: 'Cuentas: Google Colab + Kaggle',
        d: 'GPU gratis para cuando llegues a la Fase 3 y entrenes modelos. Kaggle da ~30 horas semanales de GPU; Colab suma T4 gratis. Además Kaggle tiene datasets y cursos que vas a usar ya en la Fase 1.',
        r: [
          ['PRÁCTICA', 'Google Colab', 'GPU gratis en el browser', 'https://colab.research.google.com'],
          ['PRÁCTICA', 'Kaggle', 'GPU + datasets + cursos', 'https://www.kaggle.com'],
        ] },
      { id: 'f0-4', tipo: 'PROYECTO', pts: 500, min: 90, tit: 'P0 — Script CSV 100% a mano',
        d: 'El primer proyecto y el más importante para tu situación: ~100 líneas SIN Claude en pantalla. Leer un CSV de leads, contar, promediar, agrupar por categoría, imprimir un mini-reporte. Feo está perfecto. Cuando termine, recién ahí Claude lo revisa y te muestra la versión idiomática, que retipeás. Por qué a mano: leíste meses de código que te escribió Claude (vocabulario pasivo enorme), falta pasarlo a activo, y eso solo pasa tecleando.',
        nota: 'En paralelo, 15–20 min diarios de sintaxis hasta que deje de doler. Es el músculo que P2 y todo ML necesitan.',
        r: [
          ['CURSO', 'Kaggle Learn: Python', '~5h, ejercicios en el browser, gratis', 'https://www.kaggle.com/learn/python'],
          ['CURSO', 'Kaggle Learn: Pandas', '~4h, hacelo antes de P2', 'https://www.kaggle.com/learn/pandas'],
          ['DOC', 'Tutorial oficial de Python (ES)', 'caps 3–5 cubren todo P0', 'https://docs.python.org/es/3/tutorial/'],
          ['VIDEO', 'Curso de Python desde cero (Píldoras Informáticas, ES)', 'playlist larga, referencia por tema', 'https://www.youtube.com/playlist?list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS'],
          ['VIDEO', 'Python Full Course (freeCodeCamp, EN)', '~4h de un tirón si preferís', 'https://www.youtube.com/watch?v=rfscVS0vtbw'],
          ['LECTURA', 'Estructuras de datos en Python (DataCamp, ES)', 'tutorial gratis, apoyo directo para P0', 'https://www.datacamp.com/es/tutorial/data-structures-python'],
        ] },
      { id: 'f0-5', tipo: 'TEORÍA', pts: 200, min: 240, tit: 'Matemática de sillón: intuición visual',
        d: 'Intuición visual pura antes de tocar fórmulas. Va en ratos muertos (tablet, celu) y no gasta el piso semanal. El resto de la matemática se aprende adentro de los proyectos, cuando cada pieza haga falta. Por qué visual primero: entender qué ES una matriz o una derivada geométricamente hace que después el código tenga sentido en vez de ser magia.',
        r: [
          ['VIDEO', '3Blue1Brown — Essence of Linear Algebra (EN, subs ES)', 'serie completa, ~3h, la referencia', 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'],
          ['VIDEO', '3Blue1Brown — Essence of Calculus (EN, subs ES)', 'primeros 4–5 videos, ~1h', 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr'],
          ['VIDEO', 'DotCSV — ¿Qué es el Machine Learning? Mapa conceptual (ES)', '10 min, para ubicarte en el territorio', 'https://www.youtube.com/watch?v=KytW151dpqU'],
          ['LECTURA', 'Demystifying Math for Deep Learning (DataCamp, ES)', '~15 min, vectores/matrices/gradiente con NumPy', 'https://www.datacamp.com/es/tutorial/demystifying-mathematics-concepts-deep-learning'],
        ] },
    ],
  },
  {
    id: 'f1', num: 'FASE 1', tit: 'ML clásico', dur: '4–6 semanas', pts: 3000,
    insignia: '◐', color: '#2e844a',
    why: 'Qué significa "aprender" para una máquina: minimizar una función de error ajustando parámetros con gradientes. Todo lo que viene después (redes, transformers, GPT) es esta misma idea con arquitecturas más ricas. Si esto queda sólido, el resto es variación.',
    nodos: [
      { id: 'f1-1', tipo: 'TEORÍA', pts: 500, min: 600, tit: 'Loss + gradient descent, con regresión como vehículo',
        d: 'Regresión lineal y logística: el laboratorio más chico donde la idea completa de ML existe entera. Vas a ver una función de costo, calcular su gradiente, y mover los parámetros para bajarla. Por qué empezar acá: es el átomo. Una red neuronal son muchas de estas apiladas con no-linealidades en el medio.',
        r: [
          ['CURSO', 'ML Specialization (Andrew Ng) — Curso 1', 'el estándar mundial, auditable gratis en Coursera', 'https://www.coursera.org/specializations/machine-learning-introduction'],
          ['CURSO', 'Google ML Crash Course', 'gratis, ~15h, interactivo', 'https://developers.google.com/machine-learning/crash-course'],
          ['CURSO', 'Kaggle Learn: Intro to Machine Learning', '~3h, directo al grano', 'https://www.kaggle.com/learn/intro-to-machine-learning'],
          ['VIDEO', 'DotCSV — Regresión Lineal y Mínimos Cuadrados (ES)', 'la intuición en español', 'https://www.youtube.com/watch?v=k964_uNn3l0'],
          ['VIDEO', 'StatQuest — Gradient Descent (EN)', '~25 min, la mejor explicación visual', 'https://www.youtube.com/watch?v=sDv4f4s2SB8'],
          ['VIDEO', 'Curso ML desde cero completo (Ringa Tech, ES)', 'regresión y clasificación de una', 'https://www.youtube.com/watch?v=xyU2pzKTQE0'],
        ] },
      { id: 'f1-2', tipo: 'PROYECTO', pts: 600, min: 180, tit: 'P1 — Regresión desde cero en NumPy',
        d: 'Implementás gradient descent a mano y graficás la loss bajando época a época. La primera vez que ves a una máquina aprender por dentro, sin framework tapándote la mecánica. Sale directo de lo que viste en Ng, pero escrito por vos.',
        r: [
          ['DOC', 'NumPy — Quickstart', 'lo justo de arrays para P1', 'https://numpy.org/doc/stable/user/quickstart.html'],
          ['VIDEO', 'Linear Regression from scratch (Sentdex, EN)', 'implementación paso a paso', 'https://www.youtube.com/watch?v=SvmueyyODD4'],
          ['CÓDIGO', 'Repo de Andrew Ng labs (comunidad)', 'los notebooks del curso para comparar', 'https://github.com/greyhatguy007/Machine-Learning-Specialization-Coursera'],
        ] },
      { id: 'f1-3', tipo: 'TEORÍA', pts: 400, min: 400, tit: 'Validación y métricas',
        d: 'Train/val/test, overfitting, regularización, precision/recall/F1, ROC/AUC. El corazón de cualquier lead scoring, y directamente tu dominio de RevOps. Por qué es crítico: sin separar los datos bien, no distinguís un modelo que aprendió de uno que memorizó, y en producción eso es la diferencia entre útil y peligroso.',
        r: [
          ['VIDEO', 'StatQuest — ML playlist completa (EN)', 'bias-variance, log-reg, ROC/AUC, 10–20 min c/u', 'https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF'],
          ['DOC', 'scikit-learn — Model evaluation', 'la referencia de métricas', 'https://scikit-learn.org/stable/modules/model_evaluation.html'],
          ['DOC', 'scikit-learn — Cross-validation', 'cómo validar sin hacer trampa', 'https://scikit-learn.org/stable/modules/cross_validation.html'],
          ['LIBRO', 'Introduction to Statistical Learning (ISLP)', 'PDF gratis oficial, caps 2 y 5', 'https://www.statlearning.com'],
          ['VIDEO', 'DotCSV — Overfitting y regularización (ES)', 'el concepto en español', 'https://www.youtube.com/watch?v=7-6X3DTt3R8'],
        ] },
      { id: 'f1-4', tipo: 'TEORÍA', pts: 400, min: 360, tit: 'Árboles, random forest y gradient boosting',
        d: 'El caballo de batalla real en datos tabulares, que son exactamente los datos de un CRM. XGBoost gana la mayoría de las competencias con datos tipo planilla. Por qué te importa a vos específicamente: tus casos de uso (lead scoring, churn, enriquecimiento) casi siempre son tabulares, no imágenes ni texto largo.',
        r: [
          ['VIDEO', 'StatQuest — Decision Trees + Random Forests (EN)', 'la mejor explicación visual que existe', 'https://www.youtube.com/watch?v=_L39rN6gz7Y'],
          ['VIDEO', 'StatQuest — Gradient Boost / XGBoost (EN)', 'serie de 4, imperdible', 'https://www.youtube.com/watch?v=3CC4N4z3GJc'],
          ['DOC', 'scikit-learn — Ensembles', 'random forest y gradient boosting', 'https://scikit-learn.org/stable/modules/ensemble.html'],
          ['DOC', 'XGBoost — tutoriales oficiales', 'el estándar de la industria', 'https://xgboost.readthedocs.io/en/stable/tutorials/index.html'],
          ['CURSO', 'Kaggle Learn: Intermediate ML', '~4h, missing values, leakage, pipelines', 'https://www.kaggle.com/learn/intermediate-machine-learning'],
        ] },
      { id: 'f1-5', tipo: 'PROYECTO', pts: 700, min: 300, tit: 'P2 — Lead scoring con scikit-learn',
        d: 'Tu primer proyecto de dominio real. Dataset Bank Marketing (Kaggle) o datos CRM sintéticos; datos reales de clientes NO, salvo anonimizados (guardrail tuyo: portales de clientes son producción). Entregable: métricas honestas + una página explicando qué aprendió el modelo y qué features pesan. Esto ya es venta: un scoring hecho por alguien que entiende las métricas vale.',
        r: [
          ['PRÁCTICA', 'Kaggle — dataset Bank Marketing', "buscá 'bank marketing', el clásico", 'https://www.kaggle.com/datasets'],
          ['LIBRO', 'Hands-On ML (Géron) — notebooks caps 2–3', 'gratis en el repo oficial, el proyecto guiado', 'https://github.com/ageron/handson-ml3'],
          ['CURSO', 'Kaggle Learn: Feature Engineering', '~5h, para exprimir el dataset', 'https://www.kaggle.com/learn/feature-engineering'],
          ['DOC', 'scikit-learn — Pipeline', 'para no filtrar datos entre train y test', 'https://scikit-learn.org/stable/modules/compose.html'],
        ] },
      { id: 'f1-6', tipo: 'CHECKPOINT', pts: 400, min: 60, tit: '⭐ Checkpoint M1 — examen con Claude',
        d: 'El primer hito medible. Tres pruebas: implementás regresión logística + gradient descent de memoria; le explicás bias-variance a Claude en modo examinador y sobrevivís a las repreguntas; y el test de salida de Python (20 min, archivo vacío, sin ayuda: cargar CSV, filtrar, métrica agrupada, un gráfico). Si el test de salida sale, tu fluidez dejó de ser cuello de botella.',
        nota: 'Premio pactado: acá se desbloquea el widget de escritorio. Y recién acá se reabre la colección de roadmaps, si todavía te interesa.' },
    ],
  },
  {
    id: 'f2', num: 'FASE 2', tit: 'Redes desde cero', dur: '3–4 semanas', pts: 3000,
    insignia: '◉', color: '#9050e9',
    why: 'Backpropagation ES la regla de la cadena del cálculo, administrada con prolijidad. Acá la matemática se aprende en el momento exacto en que el proyecto la exige, no antes. El objetivo: construir una red neuronal con tus manos hasta que deje de ser una caja negra.',
    nodos: [
      { id: 'f2-1', tipo: 'TEORÍA', pts: 500, min: 300, tit: 'Backprop y la regla de la cadena',
        d: 'Primero la intuición visual del gradiente fluyendo hacia atrás por la red; después lo implementás en P3. Por qué es el concepto bisagra: entender backprop es entender cómo aprende CUALQUIER red, desde un MLP hasta GPT. Todo lo demás es escala y arquitectura.',
        r: [
          ['VIDEO', '3Blue1Brown — Neural Networks (EN, subs ES)', 'serie de 4 videos, ~1h, imperdible', 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi'],
          ['VIDEO', 'DotCSV — Redes Neuronales desde cero (ES)', 'serie en español, parte 1 a 3 (backprop)', 'https://www.youtube.com/watch?v=MRIv2IwFTPg'],
          ['VIDEO', 'DotCSV — Backpropagation (ES)', 'el video específico de backprop', 'https://www.youtube.com/watch?v=eNIqz_noix8'],
          ['LIBRO', 'Nielsen — Neural Networks and Deep Learning', 'libro online gratis, caps 1–2', 'http://neuralnetworksanddeeplearning.com'],
          ['LECTURA', 'CS231n — notas de backprop', 'las notas del curso de Stanford, gratis', 'https://cs231n.github.io/optimization-2/'],
        ] },
      { id: 'f2-2', tipo: 'PROYECTO', pts: 700, min: 180, tit: 'P3 — micrograd (Karpathy)',
        d: 'Un motor de autograd en ~100 líneas siguiendo el primer video de Karpathy. El proyecto con mejor ratio comprensión/hora que existe: construís el mecanismo de diferenciación automática que usan PyTorch y TensorFlow, en miniatura. Regla estricta: retipeás todo (cero copy-paste) y predecís cada salida antes de correr.',
        r: [
          ['VIDEO', 'Karpathy — The spelled-out intro to neural networks and backprop (EN)', '~2h25, el video fundacional del plan', 'https://www.youtube.com/watch?v=VMj-3S1tku0'],
          ['CÓDIGO', 'micrograd (repo oficial)', 'para comparar contra TU versión al final', 'https://github.com/karpathy/micrograd'],
          ['DOC', 'Zero to Hero — índice del curso', 'el curso completo de Karpathy', 'https://karpathy.ai/zero-to-hero.html'],
        ] },
      { id: 'f2-3', tipo: 'PROYECTO', pts: 700, min: 300, tit: 'P4 — MNIST en NumPy puro → PyTorch',
        d: 'Forward y backprop a mano hasta ≥95% de accuracy clasificando dígitos. Después lo repetís en PyTorch para SENTIR exactamente qué te regala el framework: las mismas 200 líneas se vuelven 20. Ese contraste es el aprendizaje.',
        r: [
          ['LIBRO', 'Nielsen — cap 1', 'implementa literalmente este proyecto, guiado', 'http://neuralnetworksanddeeplearning.com/chap1.html'],
          ['DOC', 'PyTorch — Learn the Basics', 'el tutorial oficial, para la segunda pasada', 'https://pytorch.org/tutorials/beginner/basics/intro.html'],
          ['VIDEO', 'Karpathy — makemore parte 1 (EN)', 'MLP desde cero, mismo espíritu', 'https://www.youtube.com/watch?v=PaCmpygFfXo'],
          ['VIDEO', 'PyTorch en 1 hora (Aladdin Persson, EN)', 'referencia rápida de sintaxis', 'https://www.youtube.com/watch?v=Z_ikDlimN6A'],
        ] },
      { id: 'f2-4', tipo: 'TEORÍA', pts: 400, min: 360, tit: 'Optimizadores, inicialización, batch norm',
        d: 'SGD → Momentum → Adam, inicialización de pesos, batch normalization. Entendido por experimento (ablaciones que diseñás con Claude), no de memoria. Por qué: son las perillas que hacen que una red entrene bien o no entrene nada, y saber girarlas es la diferencia entre un modelo que converge y uno que da NaN.',
        r: [
          ['LIBRO', 'Understanding Deep Learning (Prince)', 'PDF gratis oficial, los caps de training', 'https://udlbook.github.io/udlbook/'],
          ['VIDEO', 'Karpathy — makemore parte 3: activaciones, BatchNorm (EN)', 'justo este tema, a fondo', 'https://www.youtube.com/watch?v=P6sfmUTpUmc'],
          ['CURSO', 'fast.ai — Practical Deep Learning', 'alternativa top-down si querés otro ángulo, gratis', 'https://course.fast.ai'],
          ['LECTURA', 'CS231n — notas de training', 'tips prácticos de Stanford', 'https://cs231n.github.io/neural-networks-3/'],
        ] },
      { id: 'f2-5', tipo: 'ELECTIVA', pts: 0, min: 300, tit: '🧶 Electiva — Visión: clasificador de crochet', opt: true,
        d: 'Transfer learning con un ResNet preentrenado sobre fotos tuyas de puntos de crochet. Clasificación fina con dataset chico: el caso de uso perfecto, y el 80% de la base ya la tenés de esta fase. No cuenta para el progreso: es para cuando quieras jugar con visión.',
        r: [
          ['DOC', 'PyTorch — Transfer Learning tutorial', 'el tutorial canónico', 'https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html'],
          ['CURSO', 'Kaggle Learn: Computer Vision', '~4h de CNNs prácticas', 'https://www.kaggle.com/learn/computer-vision'],
          ['VIDEO', 'DotCSV — Redes Convolucionales (ES)', 'CNNs explicadas en español', 'https://www.youtube.com/watch?v=V8j1oENVz00'],
        ] },
      { id: 'f2-6', tipo: 'CHECKPOINT', pts: 400, min: 60, tit: '⭐ Checkpoint M2',
        d: 'Derivás backprop de una red de 2 capas en papel · tu MNIST de NumPy funciona y llega al 95% · explicás qué hacen learning rate y batch size con experimentos propios, no de memoria.',
        nota: '' },
    ],
  },
  {
    id: 'f3', num: 'FASE 3', tit: 'Lenguaje y transformers', dur: '4–6 semanas', pts: 3600,
    insignia: '◆', color: '#fe9339',
    why: 'De contar caracteres a attention: el puente directo a entender qué hace Claude cuando te responde. Este es el corazón del plan para vos, porque es la arquitectura detrás de todas las herramientas que usás a diario y donde tenés ventaja acumulada. GPU: acá entran Colab/Kaggle.',
    nodos: [
      { id: 'f3-1', tipo: 'PROYECTO', pts: 700, min: 480, tit: 'P5 — makemore: de bigramas a un transformer chico',
        d: 'La serie completa de Karpathy. Modelos de lenguaje a nivel carácter que escalan paso a paso: bigramas → MLP → capas → hasta un transformer. Cada video construye sobre el anterior, con las mismas reglas: retipear, predecir, romper. Al final entendés generación de texto desde los cimientos.',
        r: [
          ['VIDEO', 'Karpathy — makemore (playlist completa, EN)', '5 partes, ~8h en total', 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ'],
          ['CÓDIGO', 'makemore (repo oficial)', '', 'https://github.com/karpathy/makemore'],
          ['VIDEO', 'DotCSV — Modelos del Lenguaje / GPT (ES)', 'contexto en español', 'https://www.youtube.com/watch?v=eD0Sr40wZoM'],
        ] },
      { id: 'f3-2', tipo: 'TEORÍA', pts: 400, min: 180, tit: 'Tokenización (BPE)',
        d: 'Cómo el texto se convierte en los números que el modelo procesa. Byte-Pair Encoding es el algoritmo real detrás de GPT y Claude. Por qué te sirve YA: después de esto entendés la mitad de los comportamientos raros de los LLMs que usás (por qué no cuenta letras, por qué ciertos prompts fallan, por qué el tokenizer importa para el costo).',
        r: [
          ['VIDEO', "Karpathy — Let's build the GPT Tokenizer (EN)", '~2h, el tema a fondo', 'https://www.youtube.com/watch?v=zduSFxRajkE'],
          ['CÓDIGO', 'minbpe (repo oficial de Karpathy)', 'BPE mínimo y limpio', 'https://github.com/karpathy/minbpe'],
          ['DOC', 'Hugging Face — Tokenizers', 'cómo funcionan en la práctica', 'https://huggingface.co/learn/nlp-course/chapter6/1'],
        ] },
      { id: 'f3-3', tipo: 'TEORÍA', pts: 600, min: 360, tit: 'Attention y anatomía del transformer',
        d: 'El mecanismo central: qué computan Query, Key y Value, y por qué self-attention destronó a las RNN. La anatomía completa del bloque transformer. Este es EL concepto de la era actual de la IA. Si lo entendés de verdad, cambia hasta cómo prompteás.',
        r: [
          ['VIDEO', "Karpathy — Let's build GPT: from scratch (EN)", '~2h, el video más importante del plan', 'https://www.youtube.com/watch?v=kCc8FmEb1nY'],
          ['LECTURA', 'The Illustrated Transformer (Jay Alammar, EN)', 'la explicación visual canónica', 'https://jalammar.github.io/illustrated-transformer/'],
          ['VIDEO', '3Blue1Brown — Attention in transformers (EN, subs ES)', 'la intuición geométrica', 'https://www.youtube.com/watch?v=eMlx5fFNoYc'],
          ['PAPER', 'Attention Is All You Need', 'tu primer paper, leído con el protocolo', 'https://arxiv.org/abs/1706.03762'],
          ['LIBRO', 'Build a LLM From Scratch (Raschka)', 'código gratis en el repo, caps 2–4', 'https://github.com/rasbt/LLMs-from-scratch'],
          ['CURSO', 'Hugging Face — LLM Course', 'caps 1–2, contexto del ecosistema, gratis', 'https://huggingface.co/learn/llm-course/chapter1/1'],
        ] },
      { id: 'f3-4', tipo: 'PROYECTO', pts: 800, min: 420, tit: 'P6 — Tu nanoGPT sobre corpus propio',
        d: "Entrenás tu propio GPT diminuto en Colab/Kaggle con un corpus que te importe: tus posts de LinkedIn, tus escritos, Martín Fierro, lo que quieras ver 'hablar'. Documentás curvas de loss y muestras generadas. El momento en que todo lo anterior se junta y ves texto salir de algo que construiste vos.",
        r: [
          ['CÓDIGO', 'nanoGPT (repo oficial)', 'la base de tu proyecto', 'https://github.com/karpathy/nanoGPT'],
          ['VIDEO', "Karpathy — Let's reproduce GPT-2 (EN)", '~4h, para después de M3 cuando pidas más', 'https://www.youtube.com/watch?v=l8pRSuU81PU'],
          ['DOC', 'Weights & Biases — quickstart', 'para trackear tus curvas de loss como un pro, gratis', 'https://docs.wandb.ai/quickstart'],
        ] },
      { id: 'f3-5', tipo: 'TEORÍA', pts: 300, min: 120, tit: 'Protocolo de papers + por qué los LLMs fallan como fallan',
        d: 'El protocolo para leer papers sin ahogarte: abstract y figuras solo → escribís tus preguntas → recién ahí Claude, sección por sección, verificando tu comprensión. Nunca el resumen primero, eso es leer la contratapa. Y dos lecturas de Anthropic que pegan distinto cuando YA entrenaste un predictor de próximo token.',
        r: [
          ['LECTURA', 'Anthropic — Why do AI models hallucinate?', 'tiene otro sabor después de la Fase 3', 'https://claude.com/resources/tutorials/why-do-ai-models-hallucinate'],
          ['LECTURA', 'Anthropic — What is sycophancy in AI models?', 'cómo el entrenamiento moldea el comportamiento', 'https://claude.com/resources/tutorials/what-is-sycophancy-in-ai-models'],
          ['VIDEO', 'How to read a paper (comunidad, EN)', 'método de 3 pasadas', 'https://www.youtube.com/watch?v=733m6qBH-jI'],
        ] },
      { id: 'f3-6', tipo: 'CHECKPOINT', pts: 400, min: 60, tit: '⭐ Checkpoint M3',
        d: 'Explicás attention en papel sin mirar (qué computa cada matriz y por qué) · tu GPT propio entrena con curvas documentadas y genera texto plausible · agarrás una implementación ajena de transformer y anotás cada línea.',
        nota: '' },
    ],
  },
  {
    id: 'f4', num: 'FASE 4', tit: 'LLMs aplicados', dur: '3–5 semanas', pts: 3200,
    insignia: '▲', color: '#e5567e',
    why: 'Conectar los internals con lo que ya hacés todos los días. Acá vive tu material de Anthropic: la capa de aplicación, ahora parada sobre fundamentos reales. Fine-tuning, RAG y evals, que es la habilidad más subvaluada del campo y la más vendible en tu contexto de RevOps.',
    nodos: [
      { id: 'f4-1', tipo: 'TEORÍA', pts: 400, min: 300, tit: 'Pretraining vs instruct vs RLHF · LoRA',
        d: 'Cómo un modelo pasa de predecir texto a seguir instrucciones (instruction tuning) y a alinearse (RLHF), a nivel conceptual. Y LoRA: la matemática de fine-tuning eficiente, que es descomposición de bajo rango, más simple de lo que suena una vez que pasaste la Fase 2.',
        r: [
          ['PAPER', 'LoRA: Low-Rank Adaptation', 'el paper original', 'https://arxiv.org/abs/2106.09685'],
          ['CURSO', 'Hugging Face — LLM Course, fine-tuning', 'los caps de fine-tuning, gratis', 'https://huggingface.co/learn/llm-course/chapter3/1'],
          ['VIDEO', 'Fine-tuning explained (comunidad, EN)', 'panorama de técnicas', 'https://www.youtube.com/watch?v=eC6Hd1hFvos'],
          ['LIBRO', 'Raschka — caps de fine-tuning', 'en el mismo repo gratis', 'https://github.com/rasbt/LLMs-from-scratch'],
        ] },
      { id: 'f4-2', tipo: 'PROYECTO', pts: 600, min: 300, tit: 'P7a — LoRA con tu estilo de escritura',
        d: 'Fine-tune de un modelo open chico sobre tus propios textos. Vas a entender en carne propia qué hacía tu generador de posts por PROMPTING versus qué hace el fine-tuning de verdad: dos formas distintas de meter tu voz en un modelo.',
        r: [
          ['DOC', 'Hugging Face — PEFT (LoRA en la práctica)', 'la librería oficial', 'https://huggingface.co/docs/peft/index'],
          ['CÓDIGO', 'Anthropic Cookbook', 'recetas para construir con la API', 'https://github.com/anthropics/anthropic-cookbook'],
          ['PRÁCTICA', 'Google Colab', 'GPU gratis para el entrenamiento', 'https://colab.research.google.com'],
        ] },
      { id: 'f4-3', tipo: 'TEORÍA', pts: 400, min: 300, tit: 'Embeddings, retrieval y evals',
        d: 'Embeddings para búsqueda semántica, cómo funciona retrieval, y evaluación: medir si el sistema funciona con NÚMEROS, no con vibes. Por qué es tu ventaja: evaluar sistemas de LLM es la habilidad que casi nadie tiene y la que más se paga en tu contexto de agencia.',
        r: [
          ['DOC', 'Claude Docs — embeddings y evals', 'la referencia oficial', 'https://docs.claude.com'],
          ['DOC', 'Anthropic — guía de prompt engineering', 'la referencia completa', 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview'],
          ['CURSO', 'DeepLearning.AI — Short Courses', 'cursos cortos gratis de RAG y evaluación', 'https://www.deeplearning.ai/short-courses/'],
          ['VIDEO', 'What is RAG? (comunidad, EN)', 'el patrón explicado', 'https://www.youtube.com/watch?v=T-D1OfcDW1M'],
        ] },
      { id: 'f4-4', tipo: 'RECURSO', pts: 600, min: 600, tit: '🎓 Anthropic Academy — tu material, desplegado',
        d: 'Todo gratis y con certificado. Esto es exactamente lo que me pasaste, curso por curso, ubicado en el momento del plan donde rinde de verdad: ya no sos consumidor de la API, entendés qué pasa por debajo. Sirve para el plan Y para tu laburo de hoy.',
        r: [
          ['CURSO', 'Building with the Claude API', '84 lecciones, ~8h de video', 'https://claude.com/courses/building-with-the-claude-api'],
          ['CURSO', 'Introduction to Model Context Protocol', 'formaliza lo que ya tenés en producción', 'https://claude.com/courses/introduction-to-model-context-protocol'],
          ['CURSO', 'Catálogo completo de cursos Anthropic', 'Claude Code 101 y in Action, MCP Advanced, Agent Skills, Subagents, AI Fluency', 'https://claude.com/resources/courses'],
          ['RECURSO', 'Anthropic Academy (hub general)', 'el índice de aprendizaje', 'https://www.anthropic.com/learn'],
          ['RECURSO', 'Anthropic — tutoriales', 'guías cortas por tema', 'https://claude.com/resources/tutorials'],
        ] },
      { id: 'f4-5', tipo: 'PROYECTO', pts: 800, min: 420, tit: 'P7b — RAG sobre docs de HubSpot + eval set',
        d: 'Un RAG sobre la documentación de HubSpot con un eval set en serio: retrieval medido con números, comparado contra tu skill hubspot-docs actual. Aprendizaje y herramienta de laburo real en el mismo movimiento, que es tu combinación favorita.',
        r: [
          ['CÓDIGO', 'Anthropic Cookbook — RAG', 'las recetas como punto de partida', 'https://github.com/anthropics/anthropic-cookbook'],
          ['DOC', 'Claude Docs', 'embeddings, tool use, evals', 'https://docs.claude.com'],
          ['DOC', 'HubSpot API — referencia', 'tu fuente de datos', 'https://developers.hubspot.com/docs/api/overview'],
        ] },
      { id: 'f4-6', tipo: 'CHECKPOINT', pts: 400, min: 60, tit: '⭐ Checkpoint M4',
        d: 'Explicás LoRA sin agitar las manos · tenés un RAG con calidad de retrieval medida (no vibes) · escribiste un eval harness propio.',
        nota: '' },
    ],
  },
  {
    id: 'cap', num: 'CAPSTONE', tit: 'CRM Intelligence', dur: '3–4 semanas', pts: 3000,
    insignia: '★', color: '#032d60',
    why: 'Demostrar dominio con algo desplegado, y contarlo. Tu calendario de LinkedIn pide 2–3 posts semanales: este viaje ES el contenido, y el compromiso público es el mejor antídoto contra el patrón de arrancar fuerte y abandonar.',
    nodos: [
      { id: 'c-1', tipo: 'PROYECTO', pts: 1500, min: 900, tit: 'CRM Intelligence: scoring + LLM + evals + deploy',
        d: 'El proyecto que junta todo: lead scoring clásico (Fase 1) + clasificación/enriquecimiento con LLM (Fase 4) + evaluación seria + algo desplegado. La evolución natural de tu idea del bot de auditorías: un servicio que Refindable podría vender, construido por alguien que entiende las dos capas. Tu posicionamiento estratégico hecho producto.',
        r: [
          ['LECTURA', 'Anthropic — Cowork para sales: account research', 'inspiración de producto en tu dominio', 'https://claude.com/resources/tutorials/using-claude-cowork-for-sales-account-research'],
          ['LECTURA', 'Anthropic — Cowork para marketing ops', 'ídem, lado marketing', 'https://claude.com/resources/tutorials/using-claude-cowork-for-marketing-ops-review'],
          ['DOC', 'Streamlit — docs', 'para desplegar rápido una demo, gratis', 'https://docs.streamlit.io'],
        ] },
      { id: 'c-2', tipo: 'PROYECTO', pts: 700, min: 300, tit: 'Writeup público + serie de LinkedIn',
        d: 'Documentás el camino de punta a punta en posts. Doble beneficio: consolidás lo aprendido explicándolo (Feynman), y construís el activo de tu pivot (un micrograd tipeado con notas propias dice más en una entrevista que cualquier certificado).',
        r: [
          ['LECTURA', 'tu base de posts en Notion', 'revisá tu formato Lunes de HubSpot antes de escribir', 'https://www.notion.so'],
        ] },
      { id: 'c-3', tipo: 'RECURSO', pts: 0, min: 600, tit: '🚀 Post-capstone: agentes con base real (menú, no tarea)', opt: true,
        d: 'Recién acá. Con attention, embeddings y evals adentro, este material que juntaste es un fin de semana, no un laberinto. No cuenta para el progreso: es tu menú de próximos pasos cuando el capstone esté cerrado.',
        r: [
          ['GUÍA', 'The Complete Guide to Building Skills for Claude', 'el PDF que pasaste: 32 págs de fundamentals, testing y distribución', 'https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf'],
          ['CÓDIGO', 'anthropics/skills (repo oficial)', 'skills para clonar y adaptar', 'https://github.com/anthropics/skills'],
          ['ROADMAP', 'AI Agents (roadmap.sh oficial)', 'el curado, con recursos por nodo', 'https://roadmap.sh/ai-agents'],
          ['ROADMAP', 'AI Engineer PDF (roadmap.sh)', 'versión descargable del oficial', 'https://roadmap.sh/pdfs/roadmaps/ai-engineer.pdf'],
          ['LECTURA', 'Anthropic — The 4 Ds of AI Fluency', 'el framework conceptual', 'https://claude.com/resources/tutorials/the-4-ds-of-ai-fluency-behavioral-indicators'],
        ] },
      { id: 'c-4', tipo: 'CHECKPOINT', pts: 100, min: 30, tit: '⭐ Checkpoint final',
        d: 'Algo desplegado + writeup publicado. Después decidís: track B (preentrenar tu propio modelo y servirlo detrás del bot de Telegram) o profundizar donde más te haya picado.',
        nota: 'Cerraste el roadmap. En serio.' },
    ],
  },
]

export const TIPO_LABEL: Record<string, string> = { 'PRÁCTICA': 'PRÁCT.', 'CÓDIGO': 'CÓDIGO' }

export const NICON: Record<string, { e: string; bg: string; bd: string }> = {
  'SETUP': { e: '🛠️', bg: '#eaf5fe', bd: '#cfe6fb' },
  'TEORÍA': { e: '📘', bg: '#f3ecfe', bd: '#e3d3fb' },
  'PROYECTO': { e: '💻', bg: '#e6f7f5', bd: '#c7ece8' },
  'CHECKPOINT': { e: '🏁', bg: '#fff4dc', bd: '#ffe4b3' },
  'ELECTIVA': { e: '✨', bg: '#fdeef3', bd: '#f8d3e0' },
  'RECURSO': { e: '🎓', bg: '#eafaf0', bd: '#c9ecd6' },
}
