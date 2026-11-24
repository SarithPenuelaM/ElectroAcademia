# Control de calidad · ElectroAcademia 2.0

## Verificaciones realizadas

- Se comprobó la sintaxis de los cuatro archivos JS con `node --check`.
- Se comprobó que existen 30 clases completas en la estructura y que ninguna carece de definición, fórmula, ejemplo o escenario de laboratorio.
- Se comprobó que cada clase tiene 2 ejemplos extra preparados, y 8 ejercicios autocorregibles de práctica más 5 retos de evaluación generados por el motor de laboratorio.
- Se verificó que existen 30 preguntas diagnósticas, seis competencias, 25 escenarios de laboratorio, y más de 80 términos y fórmulas documentados.
- En una prueba de ejecución con motor JavaScript y DOM simulado, al entrar sin diagnóstico se muestra la evaluación en lugar de la clase; al marcar diagnóstico completado se habilita la clase 1 y no la clase 2.
- Se verificaron los cálculos `Cserie(120pF,60pF)=40pF` y `Vfinal(40pF,12V;80pF,6V)=8V`.
- Se verificó que los recursos no llaman a API ni cargan scripts externos.

## Verificaciones pendientes

- El entorno de pruebas impidió navegar las páginas con Chromium (restricción `ERR_BLOCKED_BY_ADMINISTRATOR` incluso para localhost). Por tanto no se declara una certificación visual en navegadores reales.
- Se debe hacer revisión humana del rigor de las 30 lecciones y todas las soluciones y variables de cada laboratorio antes de uso académico formal.
- Se recomienda realizar pruebas manuales en GitHub Pages, computador y celular después del despliegue.

## Prueba manual recomendada

1. Abrir la página en una ventana privada: seleccionar Clase 1 sin diagnóstico; debe quedar bloqueada.
2. Contestar las 30 preguntas y enviar; comprobar el resumen de seis competencias.
3. Abrir Clase 1; verificar los tres ejemplos, ocho prácticas, cinco evaluaciones y reto aplicado.
4. Intentar entrar a Clase 2; debe permanecer bloqueada.
5. Entrar al laboratorio de Clase 1, modificar controles, introducir el cálculo correcto y completar.
6. Calificar la evaluación de Clase 1 con al menos 4/5 y reto aplicado correcto; comprobar desbloqueo de Clase 2.
7. Buscar 'integral' y 'capacitancia' en Biblioteca; deben mostrarse conceptos y fórmulas.
8. Exportar el progreso, importar en una ventana privada y comprobar la recuperación de clases y resultados.
