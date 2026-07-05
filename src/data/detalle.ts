// Info estructurada + sub-tareas por paso. Indexado por id de nodo.
export interface Detalle {
  obj: string        // Objetivo
  entregable: string // Entregable
  listo: string      // Listo cuando…
  sub: string[]      // checklist de sub-tareas
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
