# ElectroAcademia 2.0 · Curso interactivo de 30 días

Portal web estático de matemáticas y electromagnetismo para personas que comienzan sin bases previas, basado en el examen de recuperación PEI1 (enero de 2025) proporcionado por el usuario.

## Ejecución

1. Descargar y descomprimir el archivo ZIP.
2. Abrir `index.html` en Chrome, Firefox o Edge. No usa bibliotecas remotas ni necesita conexión a servicios externos.
3. Para desarrollar con servidor local: `python -m http.server 8000` y abrir `http://localhost:8000`.

## Despliegue en GitHub Pages

1. Crear un repositorio en GitHub, por ejemplo `electroacademia`.
2. Subir **todo el contenido** de esta carpeta a la raíz del repositorio: `index.html`, `css/` y `js/`.
3. Ir a **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Seleccionar rama **main**, carpeta **/(root)** y guardar.
5. GitHub Pages mostrará la URL que normalmente sigue el esquema `https://usuario.github.io/electroacademia/`.

## Funcionalidades

- Diagnóstico obligatorio de 30 preguntas, evaluado por seis competencias y con explicación de respuestas.
- Ruta guiada de 30 días dividida en seis módulos; desbloqueo según aprobación de la clase anterior.
- 30 clases con objetivo, escenario cotidiano, explicación, fórmulas, tres ejemplos trabajados específicos, exploración y ocho ejercicios numéricos de práctica.
- Cinco retos numéricos variables de evaluación por clase y reto interpretativo; 80 % de puntuación y laboratorio obligatorio.
- 25 escenarios experimentales interactivos con controles, visualización SVG, resultados calculados y reto de comprobación.
- Biblioteca con más de 80 conceptos y 80 reglas o fórmulas.
- Tutor contextual determinista con pistas, soluciones, retroalimentación y cuaderno de errores.
- Seguimiento local con exportación/importación de respaldo JSON.
- Referencia académica a los tres problemas del examen, incluidos resultados de campo, conductores, potencial y capacitores.

## Reglas de avance

1. No se puede iniciar ninguna lección sin completar el diagnóstico.
2. Las clases se desbloquean una tras otra; las aprobadas siguen disponibles para repaso.
3. Aprobar requiere 4/5 respuestas numéricas correctas, acierto del reto interpretativo y laboratorio correspondiente completado.
4. La biblioteca es consultable sin aprobar las clases.

## Alcances y límites pedagógicos

Esta versión incluye **una ruta inicial completa y funcional de 30 clases**, pero no sustituye un texto universitario ni una tutoría presencial. Las técnicas avanzadas de cálculo están descritas en el formulario, aunque no todas tienen talleres especializados o demostraciones formales detalladas. Las evaluaciones numéricas usan modelos asociados a cada laboratorio y deben ampliarse para evaluar todo el espectro de subtemas. Se recomienda revisión académica por un docente antes de utilizarlo como material universitario acreditado.

El tutor se basa en reglas y respuestas predefinidas, **no es inteligencia artificial conversacional**. Los laboratorios usan modelos pedagógicos simplificados, con indicación explícita de sus supuestos; en particular, el índice de interacción del globo no es una ley física de frotamientos.

Almacenamiento: `localStorage` en este navegador. No hay autenticación, sincronización entre dispositivos ni copias automáticas en la nube. Usar **Mi progreso → Descargar respaldo JSON** para proteger datos.

## Nota del examen original

El examen de referencia tiene tres problemas: plano infinito y superficie esférica, conductores esféricos concéntricos, y capacitores en serie/paralelo con reconexión. Se preservan sus parámetros y resultados principales. En el solucionario del problema 3, la suma de cargas indica `960 pF`, unidad que debería ser **960 pC** (la capacitancia equivalente sí es `120 pF`).

## Archivos

- `index.html`: estructura inicial.
- `css/styles.css`: estilos adaptables.
- `js/data.js`: programa, examen diagnóstico, glosario y formulario.
- `js/enrichment.js`: dos casos resueltos adicionales de cada clase.
- `js/labs.js`: modelos matemáticos/físicos y gráficos SVG.
- `js/app.js`: navegación, progreso, práctica, evaluación y tutor.
- `QA.md`: pruebas técnicas realizadas y límites de validación.

No se necesitan claves, cuentas externas ni paquetes npm.
