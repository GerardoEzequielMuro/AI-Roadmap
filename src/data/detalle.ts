// Info estructurada + sub-tareas por paso. Indexado por id de nodo.
export interface Detalle {
  obj: string        // Objetivo
  entregable: string // Entregable
  listo: string      // Listo cuando…
  sub: string[]      // checklist de sub-tareas
  // Capas didácticas (supervisadas por revisión pedagógica):
  concepto?: string  // el concepto clave en criollo, con analogía
  errores?: string[] // malentendidos / errores típicos de principiante
  chequeo?: string[] // autopreguntas de repaso (retrieval practice)
}

export const DETALLE: Record<string, Detalle> = {
  // ---------- FASE 0 ----------
  'f0-1': {
    obj: 'Tener el andamiaje mínimo: repo, carpeta por proyecto, journal y el CLAUDE.md que vuelve a Claude tutor.',
    entregable: 'Repo ai-learning con /proyectos, journal.md y el CLAUDE.md pegado en la raíz.',
    listo: 'Podés hacer commit y el CLAUDE.md tiene las reglas de tutor puestas.',
    sub: [
      'Crear el repo ai-learning (local + GitHub)',
      'Una carpeta por proyecto (p0, p1, …)',
      'journal.md: cada sesión termina con la próxima acción concreta',
      'Pegar el CLAUDE.md modo tutor en la raíz',
      'Primer commit',
    ],
  },
  'f0-2': {
    obj: 'Entorno Python reproducible con PyTorch CPU, scikit-learn y Jupyter.',
    entregable: 'Un venv con uv y un notebook que importa torch, sklearn y numpy sin error.',
    listo: 'import torch, sklearn, numpy corre y Jupyter abre.',
    sub: [
      'Instalar uv',
      'Crear el venv del proyecto',
      'Instalar PyTorch (CPU), scikit-learn, numpy, pandas',
      'Instalar y abrir Jupyter',
      'Notebook de prueba: importar todo y print de versiones',
    ],
  },
  'f0-3': {
    obj: 'Dejar lista la GPU gratis para cuando llegues a la Fase 3.',
    entregable: 'Cuentas activas de Colab y Kaggle, con GPU verificada.',
    listo: 'Abriste un notebook en Colab con runtime GPU y confirmaste horas en Kaggle.',
    sub: [
      'Crear/loguear cuenta de Google Colab',
      'Crear cuenta Kaggle y verificar teléfono (habilita GPU)',
      'Abrir un notebook Colab con GPU',
      'Confirmar las horas semanales de GPU en Kaggle',
    ],
  },
  'f0-4': {
    obj: 'Pasar tu Python de pasivo a activo escribiendo ~100 líneas sin Claude en pantalla.',
    entregable: 'Un script que lee un CSV de leads e imprime un mini-reporte (conteos, promedios, agrupado por categoría).',
    listo: 'Corre de punta a punta sin ayuda; recién ahí Claude lo revisa.',
    sub: [
      'Conseguir o armar un CSV de leads',
      'Leer el CSV (módulo csv o pandas)',
      'Contar filas y valores por categoría',
      'Calcular un promedio (ej. score)',
      'Agrupar por categoría e imprimir el reporte',
      'Cerrar Claude mientras lo escribís',
      'Al terminar: Claude muestra la versión idiomática y la retipeás',
    ],
  },
  'f0-5': {
    obj: 'Construir intuición geométrica de vectores, matrices y derivadas antes de las fórmulas.',
    entregable: 'Media carilla de notas propias con la intuición de matriz, producto y gradiente.',
    listo: 'Podés explicar con un dibujo qué es una matriz y qué es una derivada.',
    sub: [
      '3Blue1Brown Álgebra lineal: caps 1–4',
      '3Blue1Brown Cálculo: caps 1–3',
      'Escribir 3–4 frases con tu intuición de gradiente',
      'Mirar el mapa conceptual de ML (DotCSV)',
    ],
  },

  // ---------- FASE 1 ----------
  'f1-1': {
    obj: 'Entender el bucle de ML: costo → gradiente → actualizar parámetros.',
    entregable: 'Notas con la fórmula de la loss, su gradiente y el paso de update.',
    listo: 'Explicás por qué gradient descent baja la loss y qué hace el learning rate.',
    sub: [
      'Andrew Ng Curso 1: regresión lineal',
      'Costo (MSE) y su gradiente en papel',
      'Regresión logística y cross-entropy',
      'StatQuest: Gradient Descent',
      'Anotar el rol del learning rate',
    ],
  },
  'f1-2': {
    obj: 'Implementar gradient descent desde cero y ver la loss bajar.',
    entregable: 'Notebook con regresión en NumPy y un gráfico de loss por época.',
    listo: 'La curva de loss baja y los coeficientes coinciden con sklearn.',
    sub: [
      'Dataset simple o sintético',
      'Forward: predicción con los pesos',
      'Loss (MSE) y su gradiente',
      'Loop de update por épocas',
      'Graficar loss vs época',
      'Comparar coeficientes contra sklearn',
    ],
  },
  'f1-3': {
    obj: 'Saber medir si un modelo aprendió o solo memorizó.',
    entregable: 'Notas con train/val/test y cuándo usar precision/recall/F1/ROC-AUC.',
    listo: 'Elegís la métrica correcta para un caso de lead scoring y lo justificás.',
    sub: [
      'Split train/val/test sin fugas',
      'Overfitting vs underfitting (bias-variance)',
      'Precision, recall, F1: cuándo cada una',
      'ROC / AUC',
      'Cross-validation con sklearn',
    ],
  },
  'f1-4': {
    obj: 'Dominar el caballo de batalla de datos tabulares (tu terreno de CRM).',
    entregable: 'Comparación en un dataset: árbol vs random forest vs XGBoost, con métricas.',
    listo: 'Explicás por qué boosting suele ganar en tabular y qué hiperparámetros mueven la aguja.',
    sub: [
      'StatQuest: árboles + random forest',
      'StatQuest: gradient boost / XGBoost',
      'Entrenar los 3 en un dataset tabular',
      'Comparar métricas y tiempos',
      'Ver la importancia de features',
    ],
  },
  'f1-5': {
    obj: 'Tu primer proyecto de dominio: un scoring honesto y explicable.',
    entregable: 'Modelo + una página con métricas reales y qué features pesan.',
    listo: 'Métricas en test sin fugas + lectura de negocio de las top features.',
    sub: [
      'Dataset Bank Marketing o CRM sintético (nada real sin anonimizar)',
      'EDA rápido y limpieza',
      'Pipeline sklearn para evitar leakage',
      'Entrenar y evaluar en test',
      'Feature importance',
      'Escribir 1 página con la lectura de negocio',
    ],
  },
  'f1-6': {
    obj: 'Probar que la base de ML y tu fluidez de Python ya están.',
    entregable: 'Reg. logística de memoria + examen oral con Claude + test de salida de Python aprobado.',
    listo: 'Pasás las 3 pruebas sin ayuda.',
    sub: [
      'Implementar regresión logística + GD de memoria',
      'Explicar bias-variance a Claude y sobrevivir a las repreguntas',
      'Test de salida Python (20 min, archivo vacío): CSV, filtro, métrica agrupada, gráfico',
      'Desbloquear el premio: widget de escritorio',
    ],
  },

  // ---------- FASE 2 ----------
  'f2-1': {
    obj: 'Entender backprop como la regla de la cadena aplicada con orden.',
    entregable: 'Derivación en papel del gradiente de una red de 2 capas.',
    listo: 'Explicás cómo fluye el gradiente hacia atrás y por qué.',
    sub: [
      '3Blue1Brown: Neural Networks (4 videos)',
      'DotCSV: backpropagation',
      'Derivar en papel una red de 2 capas',
      'Leer las notas de backprop de CS231n',
    ],
  },
  'f2-2': {
    obj: 'Construir un motor de autograd en ~100 líneas y entenderlo entero.',
    entregable: 'Tu micrograd tipeado a mano que deriva expresiones y entrena un MLP mini.',
    listo: 'Predecís cada salida antes de correr y coincide; comparado contra el repo de Karpathy.',
    sub: [
      'Video de Karpathy (spelled-out intro)',
      'Clase Value con + y *',
      'backward() y topological sort',
      'tanh / ReLU',
      'Entrenar un MLP diminuto',
      'Comparar contra micrograd oficial',
    ],
  },
  'f2-3': {
    obj: 'Entrenar una red que clasifica dígitos, primero a mano y luego en PyTorch.',
    entregable: 'MNIST en NumPy ≥95% y la misma red en PyTorch.',
    listo: 'Ambas llegan a ~95% y explicás qué te regaló el framework.',
    sub: [
      'Cargar MNIST',
      'Forward + backprop en NumPy',
      'Entrenar hasta ≥95%',
      'Reescribir en PyTorch (nn.Module)',
      'Comparar líneas de código y velocidad',
    ],
  },
  'f2-4': {
    obj: 'Saber girar las perillas que hacen que una red entrene bien.',
    entregable: 'Mini-ablaciones propias: efecto de lr, init y batchnorm.',
    listo: 'Mostrás con experimentos qué pasa al cambiar lr, init y BN.',
    sub: [
      'SGD → Momentum → Adam',
      'Inicialización de pesos',
      'Batch normalization',
      'Diseñar 2–3 ablaciones con Claude',
      'Registrar los resultados',
    ],
  },
  'f2-5': {
    obj: 'Jugar con visión vía transfer learning (opcional, no cuenta para el progreso).',
    entregable: 'Clasificador de puntos de crochet con un ResNet preentrenado.',
    listo: 'Clasifica tus fotos con accuracy razonable.',
    sub: [
      'Juntar un dataset chico de fotos',
      'Transfer learning con ResNet',
      'Fine-tune de la última capa',
      'Evaluar en fotos nuevas',
    ],
  },
  'f2-6': {
    obj: 'Confirmar que entendés cómo aprende una red por dentro.',
    entregable: 'Backprop en papel + MNIST NumPy al 95% + explicación experimental de lr/batch.',
    listo: 'Pasás las 3 pruebas.',
    sub: [
      'Derivar backprop de 2 capas en papel',
      'Tu MNIST NumPy llega al 95%',
      'Explicar lr y batch size con experimentos propios',
    ],
  },

  // ---------- FASE 3 ----------
  'f3-1': {
    obj: 'Escalar de bigramas a un transformer chico, paso a paso.',
    entregable: 'Los modelos de la serie makemore, tipeados por vos, generando nombres.',
    listo: 'Cada modelo genera texto y entendés qué agrega cada nivel.',
    sub: [
      'makemore parte 1 (bigramas + MLP)',
      'parte 2 (MLP más profundo)',
      'parte 3 (BatchNorm / activaciones)',
      'partes 4–5 (hacia el transformer)',
      'Retipear todo y predecir antes de correr',
    ],
  },
  'f3-2': {
    obj: 'Entender cómo el texto se vuelve tokens y por qué importa.',
    entregable: 'Un BPE mínimo propio que tokeniza y destokeniza.',
    listo: 'Explicás por qué un LLM no cuenta letras y cómo el tokenizer afecta el costo.',
    sub: [
      'Video de Karpathy (GPT Tokenizer)',
      'Implementar BPE mínimo (merges)',
      'Encode/decode de ida y vuelta',
      'Comparar tu tokenizer con tiktoken',
    ],
  },
  'f3-3': {
    obj: 'Entender de verdad Q/K/V y el bloque transformer.',
    entregable: 'Notas + un diagrama propio de self-attention y del bloque completo.',
    listo: 'Explicás attention en papel sin mirar (qué computa cada matriz).',
    sub: [
      "Karpathy: Let's build GPT",
      'The Illustrated Transformer',
      '3Blue1Brown: attention',
      'Leer Attention Is All You Need con el protocolo',
      'Dibujar el bloque transformer de memoria',
    ],
  },
  'f3-4': {
    obj: 'Entrenar tu propio GPT diminuto sobre un corpus que te importe.',
    entregable: 'Un nanoGPT entrenado en Colab/Kaggle con curvas de loss y muestras generadas.',
    listo: 'Genera texto plausible y documentaste las curvas.',
    sub: [
      'Elegir corpus (tus posts, Martín Fierro, etc.)',
      'Preparar y tokenizar los datos',
      'Entrenar nanoGPT en GPU (Colab/Kaggle)',
      'Trackear la loss (W&B o a mano)',
      'Guardar muestras generadas',
    ],
  },
  'f3-5': {
    obj: 'Poder leer papers sin ahogarte y releer a Anthropic con otra cabeza.',
    entregable: 'Un paper leído con el protocolo de 3 pasadas + tus preguntas escritas.',
    listo: 'Podés resumir el aporte del paper con tus palabras.',
    sub: [
      'Leer solo abstract + figuras',
      'Escribir tus preguntas',
      'Recién ahí, Claude sección por sección',
      'Releer hallucinate y sycophancy de Anthropic',
    ],
  },
  'f3-6': {
    obj: 'Confirmar que entendés transformers de punta a punta.',
    entregable: 'Attention en papel + tu GPT entrenado + una implementación ajena anotada.',
    listo: 'Pasás las 3 pruebas.',
    sub: [
      'Explicar attention en papel sin mirar',
      'Tu GPT entrena con curvas y genera texto',
      'Anotar cada línea de un transformer ajeno',
    ],
  },

  // ---------- FASE 4 ----------
  'f4-1': {
    obj: 'Entender cómo un modelo pasa a seguir instrucciones y qué es LoRA.',
    entregable: 'Notas con pretraining vs instruct vs RLHF y la intuición de LoRA (bajo rango).',
    listo: 'Explicás LoRA sin agitar las manos.',
    sub: [
      'Leer el paper de LoRA',
      'HF course: fine-tuning',
      'Notas: pretraining vs instruct vs RLHF',
      'Intuición de descomposición de bajo rango',
    ],
  },
  'f4-2': {
    obj: 'Fine-tunear un modelo chico con tu voz y compararlo con prompting.',
    entregable: 'Un adapter LoRA entrenado sobre tus textos + comparación vs generador por prompt.',
    listo: 'Notás la diferencia entre meter tu voz por prompt vs por fine-tune.',
    sub: [
      'Juntar tu corpus de textos',
      'PEFT/LoRA sobre un modelo open chico',
      'Entrenar en Colab',
      'Generar y comparar contra prompting',
    ],
  },
  'f4-3': {
    obj: 'Entender búsqueda semántica y, sobre todo, cómo evaluar con números.',
    entregable: 'Notas + un mini-eval que mide retrieval con una métrica.',
    listo: 'Medís calidad de retrieval con números, no con vibes.',
    sub: [
      'Embeddings y similitud',
      'Cómo funciona retrieval (RAG)',
      'Diseñar un eval set chico',
      'Elegir y calcular una métrica (recall@k)',
    ],
  },
  'f4-4': {
    obj: 'Desplegar tu material de Anthropic ahora que entendés lo de abajo.',
    entregable: 'Al menos 2 cursos completados (con certificado).',
    listo: 'Terminaste Building with the Claude API y el intro de MCP.',
    sub: [
      'Building with the Claude API',
      'Introduction to MCP',
      'Elegir 1–2 del catálogo (Agent Skills, Subagents…)',
      'Guardar los certificados',
    ],
  },
  'f4-5': {
    obj: 'Un RAG real sobre docs de HubSpot, medido en serio.',
    entregable: 'RAG + eval set con retrieval medido, comparado contra tu skill actual.',
    listo: 'Tenés números de calidad de retrieval y una comparación honesta.',
    sub: [
      'Ingestar los docs de HubSpot',
      'Indexar embeddings',
      'Pipeline de retrieval + respuesta',
      'Armar el eval set y medir',
      'Comparar vs skill hubspot-docs',
    ],
  },
  'f4-6': {
    obj: 'Confirmar la capa aplicada (fine-tuning + RAG + evals).',
    entregable: 'Explicación de LoRA + RAG con retrieval medido + eval harness propio.',
    listo: 'Pasás las 3 pruebas.',
    sub: [
      'Explicar LoRA sin manos',
      'RAG con calidad medida',
      'Escribir un eval harness propio',
    ],
  },

  // ---------- CAPSTONE ----------
  'c-1': {
    obj: 'Juntar todo en un producto desplegado que Refindable podría vender.',
    entregable: 'App con scoring + enriquecimiento/clasificación LLM + evals + deploy.',
    listo: 'Está online, con evals, y podés demostrarlo.',
    sub: [
      'Definir el caso (lead scoring + LLM)',
      'Modelo de scoring (Fase 1)',
      'Capa LLM: clasificación / enriquecimiento',
      'Eval set y métricas',
      'Deploy (Streamlit u otro)',
      'Demo grabada',
    ],
  },
  'c-2': {
    obj: 'Contar el viaje: consolidar explicando y construir tu activo de pivot.',
    entregable: 'Una serie de posts + un writeup técnico del recorrido.',
    listo: 'Publicaste la serie y el writeup.',
    sub: [
      'Esquema de la serie',
      'Escribir 3–5 posts',
      'Writeup técnico con código propio',
      'Publicar y linkear el repo',
    ],
  },
  'c-3': {
    obj: 'Menú de próximos pasos con base real (opcional).',
    entregable: 'Un skill o agente chico construido con lo aprendido.',
    listo: 'Tenés algo funcionando o el menú elegido.',
    sub: [
      'Leer la guía de Skills',
      'Clonar anthropics/skills',
      'Elegir un roadmap.sh de agentes',
      'Construir un skill/agente mínimo',
    ],
  },
  'c-4': {
    obj: 'Cerrar el roadmap con algo desplegado y publicado.',
    entregable: 'Producto online + writeup publicado.',
    listo: 'Ambos hechos. Cerraste el roadmap.',
    sub: [
      'Producto desplegado',
      'Writeup publicado',
      'Decidir track B o profundizar',
    ],
  },
}

// Capas didácticas (redactadas y revisadas por agentes con rol de docente
// experto / diseñador instruccional). Se fusionan sobre DETALLE al cargar.
type Didac = Pick<Detalle, 'concepto' | 'errores' | 'chequeo'>
const DIDACTICO: Record<string, Didac> = {
  'f0-1': {
    concepto: 'Antes de aprender IA necesitás un lugar ordenado donde guardar tu trabajo y una regla que evite el atajo que te frena. El repo es tu cuaderno de taller: una carpeta por proyecto y un journal.md donde cada sesión termina anotando la próxima acción concreta, así al volver no arrancás de cero. El CLAUDE.md modo tutor es el candado clave: le prohíbe a Claude escribirte la solución, porque si te la escribe aprendés a mirar, no a hacer. Pensalo como un profe de natación que se niega a nadar por vos: molesta al principio, pero es la única forma de que flotes solo.',
    errores: ['No trates el journal como un diario lindo: la única línea que importa es la próxima acción concreta.', "El error clásico es negociar con el CLAUDE.md ('dale, solo esta línea'): si cedés, deja de ser tutor y volvés a solo mirar.", 'Git y GitHub no son lo mismo: Git es el control de versiones local, GitHub es donde lo subís; no gastes horas puliendo el setup, con commitear alcanza.'],
    chequeo: ['Si prendés la compu en tres días sin recordar nada, ¿qué parte de tu repo te dice exactamente qué hacer y por qué?', '¿Con tus palabras, qué le prohibiste a Claude en el CLAUDE.md y qué problema tuyo puntual resuelve esa prohibición?'],
  },
  'f0-2': {
    concepto: "Un entorno es una caja aislada con la versión exacta de Python y las librerías que tu proyecto usa, para que 'me anda en mi máquina' sea verdad siempre. uv es el gestor que arma esa caja rápido y limpio, como un organizador que te separa las herramientas de cada trabajo así no se mezclan. Instalás PyTorch en versión CPU a propósito: alcanza de sobra hasta la Fase 3 y te evita pelear con ROCm en tu RX 6600, que es frágil y te come días enteros. Jupyter es tu mesada: un cuaderno donde corrés código por pedazos y ves el resultado al toque, ideal para explorar.",
    errores: ["No confundas el entorno del proyecto con el Python global del sistema: instalar todo 'afuera' es lo que después rompe versiones.", 'El error clásico acá es forzar la GPU (ROCm) desde el día uno: elegí CPU en el selector de PyTorch y seguí de largo.', "No des por instalado nada 'de palabra': si el import torch, sklearn, numpy no corre limpio en el notebook, el paso no está listo."],
    chequeo: ['¿Por qué conviene un entorno por proyecto en vez de instalar todas las librerías en un solo Python global?', '¿Qué estás sacrificando al instalar PyTorch en CPU y por qué en tu caso conviene igual hasta la Fase 3?'],
  },
  'f0-3': {
    concepto: 'Entrenar redes de verdad (Fase 3 en adelante) pide una GPU, un chip que hace miles de cuentas en paralelo y acelera el entrenamiento de horas a minutos. Tu RX 6600 no sirve cómoda para esto, así que dejás listas dos cocinas prestadas y gratis: Colab te da una T4 en el browser y Kaggle te da unas 30 horas semanales de GPU más datasets y cursos que vas a usar ya en la Fase 1. Es como reservar la cancha con anticipación: la creás ahora, sin apuro, para que el día que la necesites esté esperándote y no pierdas impulso.',
    errores: ['No saltees la verificación por teléfono en Kaggle: sin eso no se te habilita la GPU y lo vas a descubrir tarde.', 'El error clásico es abrir un notebook en Colab y asumir que ya está en GPU: hay que elegir el runtime GPU a mano y confirmarlo.', 'No pienses que la GPU gratis es infinita: Colab y Kaggle tienen límites/cuotas, por eso Kaggle da horas medidas por semana.'],
    chequeo: ['¿Para qué sirve una GPU en el entrenamiento y por qué no te alcanza con tu CPU/RX 6600 en la Fase 3?', '¿Cómo comprobás, hoy, que tu Colab quedó realmente en modo GPU y no en CPU?'],
  },
  'f0-4': {
    concepto: 'Leíste meses de código que te escribió Claude, así que entendés IA cuando la ves: eso es vocabulario pasivo, como cuando cazás un idioma escuchándolo pero todavía no lo hablás. Este proyecto pasa ese Python de pasivo a activo escribiendo vos ~100 líneas sin Claude en pantalla: leer un CSV de leads, contar, promediar, agrupar por categoría e imprimir un mini-reporte. Que salga feo está perfecto, porque el aprendizaje pasa mientras tecleás y te trabás, no mientras mirás. Recién cuando corre de punta a punta Claude te muestra la versión prolija, que retipeás para incorporar el modo idiomático.',
    errores: ["El error clásico es dejar Claude 'por las dudas' en otra ventana: si podés espiar, no estás escribiendo de memoria y el ejercicio pierde el sentido.", 'No busques que salga elegante a la primera: un script feo que corre entero enseña muchísimo más que uno lindo copiado.', 'No confundas leer una línea y entenderla con poder escribirla en blanco: el objetivo es exactamente lo segundo.'],
    chequeo: ['¿Cuál es la diferencia entre vocabulario pasivo y activo en programación, y por qué este script sin Claude ataca justo esa brecha?', 'Sin mirar tu código, ¿cómo leerías un CSV, contarías filas por categoría y sacarías un promedio? Contalo en pasos.'],
  },
  'f0-5': {
    concepto: "Antes de las fórmulas conviene construir la imagen mental, porque una vez que 'ves' qué es una cosa, la matemática deja de ser magia y pasa a tener sentido. Una matriz no es una tabla de números muerta: es una función que estira, rota o aplasta el espacio, y multiplicar por ella es aplicar esa transformación. Una derivada es simplemente la pendiente, cuánto sube o baja algo si lo empujás un poquito, la base de cómo una red decide para dónde ajustarse. Esto va en ratos muertos (tablet, celu) con 3Blue1Brown; el resto de la matemática la vas a aprender adentro de cada proyecto, cuando la pieza haga falta.",
    errores: ['No caigas en mirar los videos como Netflix: si no podés redibujar la idea después, no la construiste, solo la viste pasar.', 'No confundas una matriz con una simple grilla de datos: acá te importa cómo transforma el espacio, no cómo se ve.', 'El error clásico es querer memorizar fórmulas ahora: en esta etapa buscás la intuición geométrica, las cuentas llegan después con cada proyecto.'],
    chequeo: ['Explicá con un dibujo o con las manos qué le hace una matriz al espacio cuando la aplicás a un vector.', '¿Qué representa una derivada geométricamente y por qué esa idea es clave para que una red "aprenda" a mejorar?'],
  },
  'f1-1': {
    concepto: 'Aprender, para una máquina, es puro juego de frío-caliente. La loss es un número que mide cuánto le erra el modelo: cuanto más alto, peor. El gradiente es la brújula que marca la pendiente: apunta hacia donde ese número SUBE más rápido, así que gradient descent da pasitos justo para el lado contrario, una y otra vez, para bajarlo. Pensalo como bajar un cerro con niebla: no ves el fondo, pero sentís la pendiente bajo los pies y das un paso cuesta abajo; repetís hasta que el piso se aplana.',
    errores: ["Creer que gradient descent 'resuelve la ecuación' de una: en realidad tantea de a pasos y puede tardar o quedarse a mitad de camino.", 'Confundir la loss (lo que se minimiza) con la métrica de negocio (lo que te importa): son dos números distintos.', 'Poner el learning rate a ojo sin entender que muy grande rebota y se dispara, y muy chico no llega nunca.'],
    chequeo: ['¿Qué pasa paso a paso con la loss y los parámetros si ponés el learning rate demasiado grande, y por qué?', 'Explicá con tus palabras qué información te da el gradiente que no te da la loss sola.', '¿Por qué regresión lineal y logística usan losses distintas (MSE vs cross-entropy) si el mecanismo de descenso es el mismo?'],
  },
  'f1-2': {
    concepto: 'Acá dejás de mirar y escribís vos el loop que hace aprender: predecir, medir el error, calcular el gradiente, mover los pesos, repetir. Cuando veas la curva de loss bajando época a época, esa bajada ES el aprendizaje pasando frente a tus ojos, sin ningún framework tapando la mecánica. La prueba de que quedó bien es simple: tus coeficientes hechos a mano tienen que caer casi iguales a los que escupe sklearn.',
    errores: ['Vectorizar mal con NumPy y sumar donde había que promediar: el gradiente queda con la escala cambiada y la loss no baja o explota.', 'Olvidarse de normalizar las features: una columna en miles y otra en decimales hacen que el descenso zigzaguee o no avance.', "Ver que 'algo baja' y darlo por bueno sin comparar contra sklearn ni chequear que convergió de verdad."],
    chequeo: ['Si tu curva de loss sube en vez de bajar, ¿cuáles son las dos o tres causas que revisarías primero y por qué?', '¿Cómo sabés que el modelo terminó de aprender y no que le falta más entrenamiento?', '¿Qué te dice que tus coeficientes coincidan con los de sklearn, y qué te diría que NO coincidan?'],
  },
  'f1-3': {
    concepto: "Un modelo puede aprender de verdad o puede hacer trampa memorizando las respuestas, y desde afuera parecen iguales hasta que llegan datos nuevos. Por eso partís los datos en tres: entrenás con unos, ajustás con otros y recién medís de verdad con un set que el modelo nunca vio, como tomar un examen con preguntas que no estaban en la guía de estudio. Y accuracy sola engaña: si el 95% de tus leads no convierte, un modelo que dice 'ninguno convierte' acierta el 95% y no sirve para nada; ahí entran precision, recall y F1 para medir lo que importa.",
    errores: ["Tocar el test set más de una vez para 'mejorar': ahí dejó de ser test y volviste a hacer trampa sin darte cuenta.", 'Guiarse solo por accuracy en datos desbalanceados, que es justo el caso de lead scoring.', "Creer que overfitting es 'un mal modelo', cuando muchas veces es un modelo demasiado bueno memorizando ruido del train."],
    chequeo: ['Tenés un scoring con 97% de accuracy y el cliente lo odia: ¿qué métricas mirás para entender qué está pasando?', 'Explicá por qué el val set y el test set cumplen roles distintos y qué pasa si los mezclás.', '¿En qué situación de negocio priorizás recall sobre precision, y en cuál al revés?'],
  },
  'f1-4': {
    concepto: "Un árbol de decisión es literalmente un juego de preguntas sí/no encadenadas ('¿el lead abrió más de 3 mails? ¿es de una empresa grande?') hasta llegar a una predicción. Un árbol solo es inestable, así que random forest arma cientos con datos y preguntas distintas y los hace votar, como pedir opinión a un panel en vez de a una persona. Gradient boosting es más astuto: arma árboles en fila donde cada uno se dedica a corregir los errores del anterior. En datos de planilla, que son exactamente los de un CRM, este enfoque le gana casi siempre a las redes neuronales.",
    errores: ["Pensar que 'más árboles = siempre mejor': en random forest ayuda, pero en boosting demasiados árboles sobreajustan.", 'Creer que un árbol grande que clava el 100% en train es un modelo excelente, cuando es el caso de libro de memorización.', "Leer feature importance como si dijera causa ('esto CAUSA la conversión') cuando solo dice qué usó el modelo para partir."],
    chequeo: ['¿Cuál es la diferencia de fondo entre cómo random forest y boosting combinan sus árboles, y por qué eso los hace fallar distinto?', '¿Por qué los métodos de árboles suelen ganarle a las redes en datos tabulares de CRM?', 'Si XGBoost te da mucha mejor métrica en train que en test, ¿qué está pasando y qué hiperparámetros tocás?'],
  },
  'f1-5': {
    concepto: 'Este es tu primer modelo de tu propio terreno: predecir qué lead vale la pena. La idea que fija todo el proyecto es el pipeline: encadenar limpieza, transformación y modelo en un solo bloque para que el aprendizaje de las features (promedios, escalas, categorías) se calcule SOLO con el train y nunca se contamine con el test. Si escapás una pizca de info del test hacia el train, tus métricas quedan infladas y en producción el modelo decepciona. El entregable de verdad no es el modelo: es la página que explica, en criollo de negocio, qué features pesan y por qué.',
    errores: ['Fitear el scaler o el encoder sobre todo el dataset antes de splitear: es leakage clásico y te da métricas mentirosas.', 'Usar datos reales de portales de clientes sin anonimizar, pisando tu propio guardrail de que eso es producción.', 'Entregar solo la métrica sin la lectura de negocio: un scoring sin explicación de features no lo compra nadie.'],
    chequeo: ['¿Qué es data leakage y cómo el pipeline de sklearn te protege de él exactamente?', 'Si tus top features fueran un identificador de cliente o la fecha de carga, ¿qué sospecharías?', '¿Cómo le explicarías a Santi, sin jerga, por qué tu modelo confía en las 3 features que confía?'],
  },
  'f1-6': {
    concepto: 'Este checkpoint mide dos cosas a la vez: que entendiste el ciclo de ML y que tu Python dejó de ser cuello de botella. Dominarlo de verdad se prueba cuando podés escribir regresión logística con su gradient descent de memoria (sin buscar), defender bias-variance ante un Claude que te repregunta, y sobre todo aprobar el test de salida: archivo vacío, 20 minutos, sin ayuda, cargar un CSV, filtrar, sacar una métrica agrupada y un gráfico. Si eso sale fluido, no fue suerte: la fluidez ya es tuya.',
    errores: ['Confundir reconocer con recordar: entendés todo cuando LEÉS la solución, pero con el archivo vacío te trabás. Eso es no saberlo todavía.', 'Explicarle a Claude con palabras lindas pero vagas y creer que sobreviviste, cuando la primera repregunta concreta te desarma.', 'Haber aprobado P1 y P2 con Claude susurrándote y creer que eso equivale a poder hacerlo solo.'],
    chequeo: ['Sin mirar nada: ¿cuáles son los pasos del loop de entrenamiento de una regresión logística, de la predicción al update?', 'Si no podés escribir el update de gradient descent de memoria, ¿qué parte específica es la que no está firme?', '¿Qué preguntas te haría un examinador exigente sobre bias-variance para pescar si lo entendés o lo repetís?'],
  },
  'f2-1': {
    concepto: 'Backprop no es magia ni un algoritmo nuevo: es la regla de la cadena del cálculo aplicada con orden. Cada operación de la red sabe su derivada local (si muevo mi entrada un poquito, cuánto cambia mi salida), y backprop encadena esas derivadas desde el error hacia atrás para repartir la culpa entre cada peso. Pensalo como una fila de engranajes: girás el último y el movimiento se propaga hacia atrás, multiplicándose en cada eje. Eso es todo lo que hace, desde un MLP de 2 capas hasta GPT.',
    errores: ['Confundir backprop con gradient descent: backprop calcula los gradientes, GD los usa para mover los pesos, son dos pasos distintos.', 'Creer que hay que derivar la red entera como una fórmula gigante, en vez de multiplicar derivadas locales chiquitas paso a paso.', 'Olvidar que backprop necesita los valores que guardaste en el forward pass: sin esos números cacheados no podés calcular las derivadas locales.'],
    chequeo: ["Contame con tus palabras qué significa que 'el gradiente fluye hacia atrás' y qué representa exactamente el gradiente de un peso.", 'Si una neurona alimenta a dos caminos distintos de la red, ¿qué pasa con su gradiente cuando llega la información de vuelta por ambos lados?', '¿Por qué backprop necesita que primero hagas el forward pass y guardes los valores intermedios?'],
  },
  'f2-2': {
    concepto: 'La idea que fija micrograd: un motor de autograd es solo tres cosas juntas. Cada número recuerda de qué operación salió y quiénes fueron sus padres (arma un grafo), sabés recorrer ese grafo en orden topológico de la salida hacia atrás, y en el camino cada nodo acumula su gradiente con la regla de la cadena. Cuando lo tipeás en 100 líneas y funciona, entendés que PyTorch es exactamente esto pero a escala industrial. Deja de ser una caja negra para siempre.',
    errores: ['Copiar y pegar el código de Karpathy en vez de retipearlo y predecir cada salida: ahí no aprendés nada, mirás.', 'No entender por qué el gradiente se acumula (+=) en vez de asignarse (=): si un nodo se usa más de una vez, sus contribuciones se suman.', 'Confundir el orden topológico: hacer backward sin garantizar que un nodo reciba todo su gradiente antes de pasárselo a sus padres.'],
    chequeo: ['¿Por qué hace falta el orden topológico para hacer backward y qué se rompería si recorrieras los nodos en cualquier orden?', 'Explicame por qué el gradiente se acumula con += y en qué caso concreto se nota la diferencia.', 'Si comparás tu micrograd contra el de Karpathy y dan lo mismo, ¿qué te asegura eso y qué no te asegura sobre tu comprensión?'],
  },
  'f2-3': {
    concepto: "El corazón de este proyecto es el contraste: primero forward y backprop a mano en NumPy hasta llegar al 95%, y después la misma red en PyTorch. Cuando ves que tus 200 líneas se vuelven 20, sentís exactamente qué te regala el framework: el autograd que escribiste vos, las capas ya armadas y el optimizador. La clave técnica es pensar en matrices, no en loops: un batch de imágenes es una matriz y todo el forward es multiplicación de matrices. Ese salto de 'una neurona a la vez' a 'todo vectorizado' es media Fase 2.",
    errores: ['No normalizar los píxeles (dejarlos en 0–255 en vez de escalarlos): la red entrena mal o directamente no converge.', 'Resolver el forward con loops de Python en vez de operaciones matriciales de NumPy: funciona pero es lentísimo y esconde la estructura.', 'Calcular softmax y cross-entropy por separado sin cuidar la estabilidad numérica: te aparecen NaN o inf por exponenciales que explotan.'],
    chequeo: ['¿Por qué conviene normalizar los píxeles antes de entrenar y qué pasa si no lo hacés?', 'Cuando reescribís la red en PyTorch, ¿qué tres cosas concretas dejaste de programar a mano y quién las hace ahora?', 'Si tu MNIST en NumPy se estanca en 60% de accuracy, ¿qué partes del forward o del backprop revisarías primero y por qué?'],
  },
  'f2-4': {
    concepto: 'Estas son las perillas que deciden si una red entrena bien o tira NaN. El learning rate es el tamaño del paso al bajar la montaña del error; momentum le suma inercia para no frenarse en cada bache; Adam adapta el paso por cada parámetro. La inicialización arranca los pesos en una escala sana para que las activaciones no exploten ni se mueran, y batch norm mantiene esa distribución estable capa a capa. Lo importante: esto se aprende girando las perillas y mirando qué pasa (ablaciones), no memorizando fórmulas.',
    errores: ['Tratar el learning rate como una perilla mágica y única, ignorando que init, batch size y BN interactúan entre sí.', 'Inicializar todos los pesos en cero (o todos iguales): rompés la simetría y todas las neuronas aprenden lo mismo, o sea nada.', 'Creer que Adam siempre le gana a un SGD bien tuneado, o usar batch norm en modo train cuando estás evaluando.'],
    chequeo: ['Contame qué le pasa a la loss si ponés el learning rate demasiado alto y qué si lo ponés demasiado bajo.', '¿Por qué inicializar todos los pesos iguales arruina el entrenamiento, en términos de qué aprende cada neurona?', 'Diseñaste una ablación de batch norm: ¿qué medís, contra qué lo comparás y qué resultado te haría concluir que BN está ayudando?'],
  },
  'f2-5': {
    concepto: 'Transfer learning es reusar un modelo que ya aprendió a ver. Un ResNet entrenado en millones de fotos ya sabe detectar bordes, texturas y formas; vos aprovechás toda esa base y solo reentrenás la última capa para tu tarea puntual (distinguir puntos de crochet). Por eso funciona con un dataset chico de fotos tuyas: no estás enseñando a ver desde cero, estás reespecializando algo que ya ve. Es el caso de uso perfecto cuando tenés pocos datos y poco tiempo.',
    errores: ['Entrenar toda la red desde cero con un dataset chico: overfitting seguro, la gracia era reusar lo preentrenado.', 'No aplicar a tus fotos la misma normalización (media y desvío) con la que se entrenó el ResNet original.', 'No separar un set de validación y terminar midiendo accuracy sobre las mismas fotos con las que entrenaste.'],
    chequeo: ['¿Por qué transfer learning te deja entrenar con pocas fotos, cuando entrenar desde cero necesitaría muchísimas más?', '¿Qué representan las primeras capas de un ResNet preentrenado y por qué tiene sentido congelarlas y solo tocar la última?', 'Si tu clasificador de crochet anda perfecto en tus fotos pero falla feo con fotos nuevas, ¿qué sospechás que pasó y cómo lo verificás?'],
  },
  'f2-6': {
    concepto: 'Este checkpoint prueba que entendés cómo aprende una red por dentro, no de memoria sino de verdad. Tres evidencias: derivás backprop de una red de 2 capas en papel (regla de la cadena aplicada a mano), tu MNIST en NumPy llega solo al 95% clasificando dígitos, y explicás qué hacen learning rate y batch size mostrando experimentos propios. Si las tres salen, backprop dejó de ser una caja negra y estás listo para transformers.',
    errores: ['Encarar el examen de memoria en vez de por comprensión: si no podés derivar en papel, no lo entendiste todavía.', "Explicar el efecto del learning rate y el batch size 'de libro' sin haber corrido vos los experimentos que lo muestran.", 'Dar por bueno el 95% de MNIST sin poder explicar qué parte del código produce ese resultado.'],
    chequeo: ['Sin mirar apuntes, ¿podés derivar el gradiente de una red de 2 capas y decir qué representa cada término?', '¿Qué experimento concreto corriste para mostrar el efecto del learning rate, y qué viste en la curva de loss?', 'Si tuvieras que explicarle a otra persona por qué tu MNIST llega al 95%, ¿qué piezas del forward y del backprop le señalarías?'],
  },
  'f3-1': {
    concepto: "Un modelo de lenguaje hace una sola cosa: mirar lo que viene y apostar cuál es el próximo carácter. Un bigrama solo mira la letra anterior (tabla de 'después de q casi siempre viene u'); a medida que la serie escala, el modelo mira contexto cada vez más largo y con más matices, hasta que el transformer decide mirando toda la ventana a la vez. La idea que fija makemore es que bigrama, MLP y transformer no son cosas distintas: son la MISMA tarea de predecir el siguiente token, con un motor cada vez más rico. Lo mágico no es la arquitectura, es que generás nombres nuevos muestreando esa apuesta una y otra vez.",
    errores: ["Creer que el modelo 'memoriza nombres': no guarda una lista, aprende una distribución de qué carácter sigue a cuál.", 'Pensar que un modelo más grande siempre generaliza mejor, cuando con un dataset chico un MLP profundo puede overfittear feo.', 'Copiar y pegar el código de Karpathy en vez de retipear y predecir cada salida, que es donde está el 90% del aprendizaje.'],
    chequeo: ['¿Qué gana un MLP sobre un bigrama puro, y qué le sigue faltando que después resuelve la atención?', '¿Cómo pasás de una tabla de probabilidades del próximo carácter a generar un nombre entero?', 'Si tu modelo genera puro ruido o siempre el mismo nombre, ¿qué mirarías primero para diagnosticar?'],
  },
  'f3-2': {
    concepto: "El modelo no ve letras: ve números. La tokenización es el diccionario que parte el texto en pedazos ('tokens') y le asigna a cada uno un ID. BPE arranca con caracteres sueltos y va fusionando los pares que más aparecen juntos, así 'ción' termina siendo un solo token porque es frecuente, pero un nombre raro se parte en varios pedacitos. Entender esto te explica de una un montón de rarezas: el modelo no puede contar las letras de 'strawberry' porque nunca vio letras sueltas, vio el token entero, y el costo de tu API se mide en tokens, no en palabras.",
    errores: ['Confundir token con palabra o con letra: un token es un pedazo estadístico, a veces media palabra, a veces varias.', 'Creer que el conteo de tokens equivale al de caracteres, y por eso subestimar costo o longitud de contexto.', 'Pensar que hay un único tokenizer universal: cada familia de modelos tiene el suyo, y el mismo texto da distinta cantidad de tokens según cuál uses.'],
    chequeo: ['¿Por qué un LLM falla al contar letras o al hacer acrósticos, en términos de cómo ve el texto?', 'Explicá con tus palabras el bucle de BPE: qué mide para decidir el próximo merge.', '¿Por qué un texto en español o en un idioma poco representado suele gastar más tokens que el mismo contenido en inglés?'],
  },
  'f3-3': {
    concepto: "Attention es un mecanismo de búsqueda dentro de la propia oración. Cada token emite una Query ('qué ando buscando'), y todos —él incluido— ofrecen una Key ('qué tengo para ofrecer'); el producto entre Query y Key dice cuánto le presta atención uno a otro, y con esos pesos mezcla los Value ('qué información traigo'). Así, en 'el gato que perseguía al ratón estaba cansado', el token 'cansado' puede mirar fuerte a 'gato' aunque estén lejos, y resolver de quién habla. Eso es lo que las RNN hacían mal por procesar en fila india: self-attention deja que cada token mire a todos de una, y esa es la bisagra de toda la era actual de la IA.",
    errores: ['Creer que Query, Key y Value son tres cosas distintas de afuera: son tres proyecciones lineales del MISMO token, aprendidas.', "Pensar que la atención 'entiende' significado; solo computa similitudes de vectores y arma promedios ponderados.", 'Olvidar que en un GPT la atención es causal (enmascarada): un token no puede mirar el futuro, solo lo que vino antes.'],
    chequeo: ['Contá el camino de un solo token por un bloque: qué le pasa desde que entra hasta que sale, nombrando Q, K, V, la máscara y la MLP.', '¿Por qué self-attention destronó a las RNN? ¿Qué problema concreto de las RNN resuelve?', '¿Qué aporta tener múltiples cabezas de atención en vez de una sola?'],
  },
  'f3-4': {
    concepto: 'Acá se junta todo: agarrás nanoGPT y lo entrenás vos, en GPU, sobre un corpus que te importe, y ves salir texto de algo que armaste con tus manos. La idea que fija es visceral: un LLM es un predictor de próximo token entrenado sobre muchísimo texto, y vos acabás de hacer la versión mínima del mismo proceso que hay detrás de Claude. Documentar las curvas de loss y las muestras generadas es parte del proyecto, porque ahí ves en vivo cómo el modelo pasa de escupir ruido a imitar el estilo del corpus.',
    errores: ['Esperar un chatbot: un nanoGPT sobre tu corpus imita el ESTILO y continúa texto, no responde preguntas ni sigue instrucciones.', 'Confundir loss que baja con calidad: la loss de train puede seguir bajando mientras el modelo empieza a repetir o a memorizar el corpus.', 'Entrenar con un corpus demasiado chico o sucio y después culpar a la arquitectura del texto pobre que sale.'],
    chequeo: ['¿Qué te dice comparar la curva de loss de train contra la de validación mientras entrena?', 'Si el texto generado se repite en loop o es incoherente, ¿qué palancas tocás (datos, tamaño, temperatura, pasos)?', '¿Qué diferencia hay entre este modelo que entrenaste y un asistente como Claude, más allá del tamaño?'],
  },
  'f3-5': {
    concepto: "Un paper no se lee de corrido como una novela: el protocolo es abstract y figuras primero, escribís TUS preguntas, y recién ahí vas sección por sección chequeando si entendiste, nunca al revés. Leer el resumen ajeno primero es como leer la contratapa: te da la ilusión de saber sin el laburo. Y las dos lecturas de Anthropic sobre alucinaciones y adulación (sycophancy) pegan distinto ahora que entrenaste vos un predictor de próximo token: entendés que el modelo no 'miente' ni 'quiere caerte bien' con intención, sino que produce el texto más probable dado su entrenamiento, y que esos comportamientos son consecuencia de cómo fue optimizado.",
    errores: ['Creer que las alucinaciones son bugs a parchear, en vez de una consecuencia esperable de un modelo que siempre completa con lo más plausible.', "Atribuirle intenciones al modelo ('miente', 'te chupa las medias'): la adulación sale del proceso de entrenamiento, no de un deseo.", 'Querer entender cada ecuación del paper en la primera pasada en vez de sacar primero la idea central y las figuras.'],
    chequeo: ['Con tus palabras: ¿por qué un modelo entrenado para predecir el próximo token inventa datos con total seguridad?', '¿Qué del proceso de entrenamiento empuja a un modelo a ser adulador, y por qué eso puede ser peligroso?', '¿En qué orden atacás un paper nuevo y por qué leer el resumen ajeno primero te sabotea?'],
  },
  'f3-6': {
    concepto: 'Este checkpoint prueba que los transformers dejaron de ser una caja negra para vos en las tres dimensiones que importan: teoría, construcción y lectura de código ajeno. Explicar attention en papel sin mirar demuestra que tenés el mecanismo internalizado, no memorizado; tener tu GPT entrenado con curvas documentadas prueba que sabés hacerlo correr de verdad; y anotar línea por línea una implementación ajena demuestra que podés leer el campo, que es lo que te habilita a seguir solo.',
    errores: ["Aprobar de memoria recitando 'Query, Key, Value' sin poder explicar qué computa cada matriz ni por qué.", "Dar por bueno un GPT que 'entrenó' sin mirar si la loss bajó de forma sana ni si el texto generado tiene sentido.", 'Anotar el transformer ajeno en general sin poder justificar qué hace cada línea concreta y por qué está ahí.'],
    chequeo: ['Si tuvieras que dibujar el bloque transformer de memoria ahora mismo, ¿qué piezas ponés y en qué orden fluye el dato?', '¿Qué evidencia concreta mostrás de que tu GPT entrenó bien y no solo "corrió"?', 'Frente a una implementación ajena de attention, ¿qué línea te costaría más justificar y por qué?'],
  },
  'f4-1': {
    concepto: 'Un modelo base solo predice la próxima palabra: es un loro gigante que aprendió a completar texto de internet, no a obedecerte. El instruction tuning lo pone a practicar con ejemplos de pedido→respuesta para que siga órdenes, y el RLHF le enseña cuáles respuestas prefiere un humano usando una nota de calidad, no solo texto copiado. LoRA es fine-tuning barato: en vez de reescribir los millones de pesos del modelo, le pegás dos matrices chiquitas al costado (un cambio de bajo rango) y solo entrenás esas; es como corregir un libro impreso con post-its en vez de reimprimir la edición entera.',
    errores: ['Creer que instruct y RLHF son modelos distintos y no etapas encima del mismo modelo base.', 'Pensar que LoRA cambia los pesos originales del modelo, cuando en realidad los congela y entrena matrices aparte.', "Confundir 'bajo rango' con 'modelo chico': el rango es el tamaño del ajuste, no del modelo."],
    chequeo: ['¿Qué gana un modelo en el paso de RLHF que no le dio el instruction tuning?', 'Si LoRA congela el modelo base, ¿dónde queda guardado lo que aprendió y qué entrenás exactamente?', '¿Por qué LoRA usa mucha menos memoria y disco que un fine-tune completo?'],
  },
  'f4-2': {
    concepto: 'La idea que fija este proyecto es sentir en la mano la diferencia entre meter tu voz por prompt versus por fine-tune. Con prompting le pegás ejemplos tuyos en cada pedido y el modelo imita de memoria corta; con LoRA le entrenás un adapter que absorbe tu estilo y ya lo trae puesto sin recordárselo. Al comparar las dos salidas vas a entender cuándo conviene cada una: el prompt es flexible y gratis de cambiar, el fine-tune es más consistente pero cuesta entrenarlo y queda fijo.',
    errores: ['Esperar que con un corpus chico y pocos ejemplos el modelo clone tu estilo perfecto.', 'Meter datos sucios o mezclados y culpar a LoRA cuando el problema es el dataset.', 'No dejar un baseline por prompting para comparar, y quedarte sin saber si el fine-tune sirvió.'],
    chequeo: ['¿En qué caso concreto de tu laburo elegirías fine-tune por sobre prompting, y por qué?', '¿Cómo te das cuenta de que el adapter aprendió tu voz y no solo memorizó frases del corpus?', '¿Qué cambiarías del dataset si las salidas te salen genéricas?'],
  },
  'f4-3': {
    concepto: "Un embedding convierte un texto en una lista de números (un punto en un espacio) donde cosas que significan parecido quedan cerca, así 'baja de precio' y 'descuento' terminan vecinas aunque no compartan palabras. Retrieval es usar esa cercanía para, ante una pregunta, traer los pedazos de documento más parecidos y pasárselos al modelo. La parte que casi nadie hace bien son los evals: en vez de leer dos respuestas y decir 'zafa', armás un set de preguntas con la respuesta correcta conocida y medís con un número, por ejemplo recall@k, cuántas veces el pedazo correcto apareció entre los primeros k que trajiste.",
    errores: ["Medir calidad 'por vibes' leyendo un par de ejemplos en vez de un set con métrica.", 'Confundir similitud de embeddings con relevancia real: cerca no siempre es útil para la pregunta.', 'Armar el eval set con las mismas preguntas fáciles y creer que el sistema anda en todo.'],
    chequeo: ['¿Qué te dice recall@k que no te dice mirar dos respuestas sueltas?', '¿Por qué dos textos sin palabras en común pueden tener embeddings cercanos?', '¿Cómo armarías un eval set que de verdad exponga las fallas de tu retrieval?'],
  },
  'f4-4': {
    concepto: 'Acá desplegás el material de Anthropic que ya tenías, pero ahora parado sobre fundamentos: cuando hacés Building with the Claude API entendés qué es el próximo token que sale, no solo qué endpoint llamar. Lo que te llevás es la capa de aplicación formalizada (API, MCP, agentes) con certificado, y rinde justo en este punto porque dejás de ser consumidor a ciegas y podés diagnosticar por qué algo falla. Es el momento donde tu laburo diario y el plan se tocan: lo que aprendés lo usás el lunes.',
    errores: ['Hacer los cursos en piloto automático sin conectar cada concepto con lo que ya construiste antes.', 'Saltear MCP pensando que es teoría, cuando ya lo tenés en producción sin nombrarlo.', 'Coleccionar certificados sin bajar nada a un proyecto propio.'],
    chequeo: ['¿Qué comportamiento de la API entendés distinto ahora que sabés cómo predice tokens?', '¿Qué cosa que ya usabas en tu laburo te formalizó el curso de MCP?', '¿Cuál de los cursos del catálogo te sirve más para el capstone y por qué?'],
  },
  'f4-5': {
    concepto: 'La idea clave: construir un RAG sobre los docs de HubSpot y demostrar que anda con números, no con fe. Ingestás la documentación, la cortás en pedazos, los guardás como embeddings, y ante cada pregunta traés los pedazos relevantes para que Claude responda con esa fuente a la vista. Lo que separa esto de un juguete es el eval set: medís tu retrieval y lo comparás honestamente contra tu skill actual de hubspot-docs, así sabés si mejoraste o solo cambiaste. Aprendizaje y herramienta de laburo real en el mismo movimiento.',
    errores: ['Creer que RAG es fine-tuning: RAG no cambia el modelo, le pasa contexto fresco en cada consulta.', 'Cortar los docs en pedazos demasiado grandes o chicos y arruinar el retrieval sin darte cuenta.', "Declarar que 'mejora tu skill actual' sin un eval set que lo pruebe con números."],
    chequeo: ['¿Por qué RAG y fine-tuning resuelven problemas distintos, y cuál usarías para docs que cambian seguido?', '¿Cómo decidís el tamaño de los chunks y qué pasa si te pasás para cada lado?', '¿Qué números tendrías que ver para afirmar honestamente que tu RAG le gana a la skill vieja?'],
  },
  'f4-6': {
    concepto: 'Este checkpoint prueba que dominás la capa aplicada entera: fine-tuning, RAG y evals dejaron de ser palabras. Explicás LoRA sin agitar las manos (qué se congela, qué se entrena, por qué es barato), mostrás un RAG con calidad de retrieval medida en números reales, y escribiste tu propio eval harness desde cero. Si las tres salen sin ayuda, tenés la habilidad más subvaluada y vendible del campo en tu contexto de RevOps: no solo armar sistemas de LLM, sino saber si funcionan.',
    errores: ['Explicar LoRA con analogías vagas sin poder decir qué matrices se entrenan y qué se congela.', 'Presentar el RAG con ejemplos lindos elegidos a mano en vez de una métrica sobre un set.', "Llamar 'eval harness' a correr tres pruebas sueltas sin set fijo ni métrica reproducible."],
    chequeo: ['Si te cortan a la mitad, ¿podés explicar LoRA y el eval de tu RAG sin apoyarte en notas?', '¿Qué mediría tu eval harness y cómo lo correrías de nuevo mañana con el mismo criterio?', '¿Qué parte de la fase quedó más floja y cómo la cerrarías antes de pasar al capstone?'],
  },
  'c-1': {
    concepto: 'Este es el proyecto donde las dos capas que aprendiste tienen que darse la mano: el scoring clásico (Fase 1) pone un número frío sobre qué lead vale, y el LLM (Fase 4) lee lo que el número no ve (la nota de la reunión, el mail, el contexto). Pensalo como un médico que junta el análisis de sangre con lo que el paciente le cuenta: ninguna de las dos solo alcanza. La idea que fija es que un producto de IA no es un modelo, es un modelo evaluado y desplegado que alguien puede usar sin vos al lado. Si no lo podés mostrar online y medir, todavía es un experimento, no un producto.',
    errores: ['Armar el producto sin eval set: si no medís, no sabés si el LLM mejora o ensucia el scoring, solo tenés una corazonada linda.', 'Que el LLM decore y no decida: agregar una capa de lenguaje que no cambia ninguna acción, puro humo caro.', 'Perseguir el deploy perfecto (infra, auth, escala) antes de que el core funcione y esté medido.'],
    chequeo: ['¿Qué hace exactamente el LLM que el modelo tabular no podía hacer, y con qué número lo demostrás?', 'Si un lead entra y el sistema se equivoca, ¿cómo te das cuenta y qué parte del pipeline mirás primero?', '¿Qué le mostrarías a Santi en la demo para que entienda en dos minutos por qué esto Refindable lo puede vender?'],
  },
  'c-2': {
    concepto: 'Acá el objetivo no es lucirte, es entender de nuevo pero más profundo: cuando tenés que explicarle a un desconocido cómo funciona tu micrograd o por qué elegiste tal métrica, se te caen los huecos que creías tapados (eso es Feynman puro). El writeup es el activo real de tu pivot: un post donde mostrás tu código tipeado con tus notas dice más en una entrevista que diez certificados. Escribís para enseñarle a alguien un paso atrás tuyo, no para impresionar a los que ya saben.',
    errores: ['Escribir para impresionar en vez de para enseñar: jerga, humo y cero claridad sobre qué aprendiste de verdad.', 'Contar solo los éxitos y esconder los errores, justo la parte que más engancha y más muestra criterio.', 'Dejar el writeup para el final como trámite, en vez de ir capturando el proceso mientras pasa.'],
    chequeo: ['¿Podés explicar tu proyecto entero sin usar ninguna palabra técnica que no hayas definido antes en el mismo post?', '¿Qué error o callejón sin salida del recorrido le ahorraría tiempo a alguien que arranca hoy?', 'Si un reclutador lee solo tu writeup, ¿qué queda claro que sabés hacer y qué prueba lo respalda?'],
  },
  'c-3': {
    concepto: 'Esto es un menú, no una tarea obligada: son los próximos pasos para cuando el capstone ya esté cerrado y quieras seguir jugando. Lo que te llevás es la tranquilidad de que, con attention, embeddings y evals adentro, construir un agente o un skill ya no es un laberinto sino un fin de semana, porque entendés qué pasa por debajo en vez de copiar recetas. No lo abras antes de terminar el capstone: es tentación de novedad disfrazada de progreso.',
    errores: ['Saltar a esto antes de cerrar el capstone, cayendo otra vez en el patrón de arrancar cosas nuevas y no terminar.', 'Tratar el menú como checklist obligatorio en vez de elegir una cosa que te pique de verdad.', 'Construir un agente sin evals porque ahora es "solo pegar APIs", olvidando todo lo que aprendiste.'],
    chequeo: ['De todo el menú, ¿qué te dan ganas de construir y qué problema tuyo concreto resolvería?', '¿Qué de lo que ya sabés (evals, retrieval, tool use) reusás directo si armás un agente con base real?', '¿Cómo sabrías que este próximo paso suma y no es solo empezar algo nuevo por la novedad?'],
  },
  'c-4': {
    concepto: 'Este checkpoint prueba lo único que no se puede fingir: que hay algo desplegado que un tercero puede tocar, y un writeup publicado donde contaste cómo lo hiciste. No es un examen de teoría, es la evidencia de que cerraste el círculo completo, de Python flojo a producto vivo. Cerrar acá significa que dejaste de ser alguien que estudia IA y pasaste a ser alguien que la construye y lo demuestra en público.',
    errores: ["Decir 'listo' con algo que corre solo en tu máquina: si no está online y accesible, no está desplegado.", "Publicar el writeup a medias o en borrador 'para después', que en la práctica es nunca.", 'Elegir track B o profundizar por inercia, sin preguntarte qué es lo que de verdad te quedó picando.'],
    chequeo: ['¿Podés pasarle el link a alguien ahora mismo y que lo use sin que vos expliques nada?', 'Mirando todo el roadmap, ¿qué tema te dejó con más ganas de ir más hondo y por qué?', '¿Qué elegís como siguiente movida (track B o profundizar) y qué te dice esa elección sobre hacia dónde querés pivotear?'],
  },
}

for (const [k, v] of Object.entries(DIDACTICO)) {
  if (DETALLE[k]) Object.assign(DETALLE[k], v)
}
