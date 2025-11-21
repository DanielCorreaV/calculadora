## FALLOS

**1. Fallos del linter**
Los errores de linter aparecen muy temprano en el proceso, antes de compilar o ejecutar pruebas. En los logs se muestran mensajes indicando problemas en el estilo o calidad del código. Por ejemplo, se pueden ver errores como:
“Unexpected any”, “Missing return type on function”, o “variable is assigned a value but never used”.
Cuando el linter falla, el pipeline se detiene inmediatamente y aparece el mensaje “Process completed with exit code 1”. Esto indica que el código no cumple las reglas establecidas por ESLint.

**2. Fallos por cobertura insuficiente**
Cuando todas las pruebas pasan pero la cobertura es menor al umbral definido (por ejemplo, 80%), el verificador de cobertura marca el job como fallido.
En el log aparece algo como:
“Coverage 62% is below the expected minimum of 80%”
o “Coverage verification failed”.
Este tipo de fallo indica que falta cubrir parte del código con pruebas, aunque funcionalmente las pruebas existentes pasen.

## EJEMPLOS:

<img width="1918" height="676" alt="image" src="https://github.com/user-attachments/assets/ac152d72-e533-4930-aceb-34cd18079062" />

en este caso fallo porque se cometion un error intencional en la identacion, lo que provoco que el linter disparara una alerta y cortara el flujo del workflow.


<img width="1842" height="877" alt="image" src="https://github.com/user-attachments/assets/66ffae27-b142-425a-89b6-b49529d725e2" />

en este ejemplar si funciono todo, el linter da una excepcion pero resulta irrelevante ya que no corta la ejecución y no afecta los procesos.


##  IA y Ética:
** Metodos para detectar uso de IA **
Un primer método para detectar código generado por IA consiste en analizar patrones estilísticos.las IA generan codigo uniforme pero basico y estandar sin mencionar que pueden incorporar comentarios genéricos, nombres de variables poco contextuales y un formato consistente independientemente del problema ademas del uso recurrente de emojis o emoticonos, figuras etc. para adornar las lineas. Herramientas de análisis estático pueden detectar estas señales al comparar el estilo del código con el historial de escritura del autor humano. 
Un segundo método se basa en herramientas de detección especializadas como GPTZero, DetectGPT u otros clasificadores entrenados para reconocer probabilidades de autoría por IA. Estas herramientas evalúan aspectos como la “perplejidad” del texto o el nivel de predicción del contenido: si el código es demasiado “predecible” para el modelo, esto puede indicar origen de IA. 
Debemos aclarar que no son metodos absolutos por lo que hay cierto margen de fallo, igualmente no se desmerita su aficiencia.

** no es posible asegurar al 100% la autoría **
No es posible determinar si un proyecto o trabajo es de origen humano al 100% debido que siempre existen barreras que ponen en duda la habilidad del individuo, puede que este sea muy bueno y se le confunda con una IA de alto nivel, por otro lado aun una persona con poca habilidad puede esforzarse y mostrar un gran avance producto de su esfuerxo y no de una herramienta de inteligencia artificial. Siendo tantas las dudas y los tipos de personas no es posible determinarlo ya que no se tiene una seguridad absoluta de la condicion de cada quien.

** politicas de educacion para el uso de IA **
Las políticas razonables sobre el uso de IA en educación y calidad deberían centrarse en la transparencia y el aprendizaje real, no en prohibiciones absolutas. Para obtener ideas, refactorizar código o aprender nuevas técnicas pero exigir que el estudiante comprenda, explique y defienda el código final que entrega. También pedir que los estudiantes declaren cuándo han usado IA y en qué medida, fomentando buenas prácticas académicas. Para proyectos evaluativos, se pueden implementar actividades orales, revisiones en vivo o pequeñas modificaciones al codigo durante las presentaciones.
Igual su uso esta en cada quien, y se debe mentalizar a la poblacion que es una herramienta y no un sustituto.
