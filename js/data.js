/* ElectroAcademia 2.0 · Contenido educativo original, sin dependencias. */
const EA = (()=>{
const raw = `
Números y signos|Aritmética|Interpretar valores positivos y negativos y operar con ellos.|Saldo bancario: un ingreso suma y una deuda resta.|Un número negativo está por debajo de cero. Sumar un positivo desplaza a la derecha en la recta numérica; restarlo desplaza a la izquierda. Al restar un negativo, se suma su opuesto.|a−(−b)=a+b|Una cuenta tiene $18.000, paga $25.000 y recibe $12.000.|18.000−25.000+12.000=5.000. Primero el saldo queda en −7.000; después queda en +5.000.|No confundir el signo de una cantidad con la operación que estamos realizando.|Cuánto cambia el saldo cuando ingreso o retiro dinero.|signed
Multiplicar y dividir|Aritmética|Resolver productos, divisiones y jerarquía de operaciones.|Repartir uniformemente el costo de una compra grupal.|Multiplicar es sumar grupos iguales; dividir es repartir en partes iguales. En productos y cocientes dos signos iguales dan positivo; signos diferentes dan negativo. Primero se calculan paréntesis, después potencias, multiplicación y división, y finalmente suma y resta.|(−a)(−b)=ab; a÷b=c ⇔ a=bc|Cuatro amigos compran ocho entradas de $9.000 cada una y dividen el total entre cuatro.|8×9.000÷4=18.000 por persona. La multiplicación y la división se hacen de izquierda a derecha.|No resolver siempre de izquierda a derecha si hay sumas y productos mezclados.|Ajustar el número de personas y observar el costo individual.|multiply
Fracciones|Aritmética|Sumar, restar, multiplicar y dividir fracciones.|Receta que necesita tres cuartos de taza de leche.|El denominador indica las partes iguales del entero; el numerador indica cuántas partes tomamos. Para sumar fracciones se requiere denominador común. Multiplicar consiste en multiplicar numeradores y denominadores; para dividir se multiplica por el inverso.|a/b+c/d=(ad+bc)/(bd); (a/b)÷(c/d)=ad/bc|Una receta usa 1/2 de taza y después 1/4 de taza de leche.|1/2=2/4, entonces 2/4+1/4=3/4 de taza.|No sumar numeradores y denominadores al mismo tiempo.|Mover dos porciones para completar una unidad.|fraction
Decimales, porcentajes y potencias|Aritmética|Operar decimales, porcentajes, exponentes y raíces.|Descuento de una compra y área de una habitación.|Un porcentaje es una fracción con denominador 100. Una potencia repite factores iguales; el exponente negativo representa el inverso. La raíz cuadrada deshace un cuadrado de un valor no negativo.|p%=p/100; aⁿ=a·…·a; a⁻ⁿ=1/aⁿ; √(a²)=abs(a)|Una chaqueta de $80.000 tiene un descuento del 15 %.|Descuento=80.000×15/100=12.000; precio final=68.000.|No confundir descontar el 15 % con pagar solo el 15 %.|Modificar precio y descuento para ver el total.|percent
Unidades y notación científica|Aritmética|Usar potencias de diez y convertir unidades físicas.|Medir el grosor de un cabello y una distancia en kilómetros.|La notación científica expresa un número como a×10ⁿ, con 1≤abs(a)<10. La unidad y su prefijo siempre deben acompañar al número. Micro=10⁻⁶, nano=10⁻⁹, pico=10⁻¹², mili=10⁻³.|1 μC=10⁻⁶ C; 1 pF=10⁻¹² F|Un componente almacena 480 pC de carga.|480 pC=480×10⁻¹² C=4,8×10⁻¹⁰ C.|Confundir pC (carga) con pF (capacitancia).|Cambiar prefijos y convertir cantidades.|scientific
Variables y expresiones|Álgebra|Interpretar letras, términos, coeficientes y expresiones.|Precio de varias entradas a un espectáculo.|Una variable es un valor desconocido o cambiante. En 3x+5, el 3 es el coeficiente de x y 5 es constante. Los términos semejantes tienen la misma parte literal.|ax+bx=(a+b)x|Tres boletos cuestan x pesos cada uno y el transporte vale $5.000.|El costo total es 3x+5.000. Si x=10.000, el costo es 35.000.|La expresión 3x significa 3 multiplicado por x, no 3+x.|Modificar el precio y observar la expresión total.|linear
Ecuaciones y despeje|Álgebra|Resolver igualdades aplicando operaciones equivalentes.|Parqueadero con tarifa fija y valor por hora.|Una ecuación es una igualdad. Para despejar debemos realizar la misma operación en ambos lados, manteniendo el equilibrio. Comprobamos sustituyendo el resultado.|ax+b=c ⇒ x=(c−b)/a (a≠0)|Un estacionamiento cobra $4.000 más $3.000 por hora. El recibo marca $16.000.|16.000=4.000+3.000h; h=(16.000−4.000)/3.000=4 h.|No cambiar un término de lado sin explicar la operación inversa.|Equilibrar una balanza variando el valor desconocido.|linear
Fracciones algebraicas|Álgebra|Operar expresiones racionales y reconocer restricciones.|Consumo de combustible según kilómetros.|Una fracción algebraica combina números y letras. Para sumarlas buscamos denominador común y excluimos valores que anulen el denominador. Simplificar factores no equivale a cancelar términos de una suma.|a/x+b/x=(a+b)/x (x≠0)|Un viaje se divide en dos tramos de 60 km y 90 km a la misma velocidad v.|Tiempo total=60/v+90/v=150/v horas si v está en km/h y v≠0.|No cancelar la x del numerador contra una x que solo es parte de una suma.|Variar velocidad para ver el tiempo total.|inverse
Cuadráticas y sistemas|Álgebra|Resolver problemas con cuadrados y dos incógnitas.|Dimensiones de un terreno rectangular.|Una ecuación cuadrática incluye x². Podemos factorizar o usar la fórmula general; el discriminante b²−4ac indica las soluciones reales. Un sistema impone dos condiciones simultáneas.|ax²+bx+c=0 ⇒ x=(−b±√(b²−4ac))/(2a)|El lado de un terreno cuadrado debe producir 49 m² de área.|x²=49; x=±7 matemáticamente, pero la longitud física es x=7 m.|No aceptar una longitud negativa en el contexto físico.|Cambiar el área y observar los lados posibles.|quadratic
Formulación física y despejes|Álgebra|Despejar fórmulas con productos, fracciones y potencias.|Velocidad de viaje y tiempo de recorrido.|Al despejar, se conserva la igualdad aplicando operaciones inversas. Una fórmula física además exige que las unidades sean compatibles y el resultado tenga sentido.|v=d/t; d=vt; t=d/v|Un bus recorre 180 km a 60 km/h constantes.|t=d/v=180/60=3 h.|No mezclar km/h y m/s sin convertir.|Cambiar distancia y velocidad para hallar tiempo.|speed
Geometría y áreas|Geometría y vectores|Calcular áreas y perímetros de formas habituales.|Pintar una pared y comprar material.|El perímetro suma longitudes; el área mide superficie y usa unidades cuadradas. La esfera tiene superficie 4πr²; el círculo área πr².|A_rect=b·h; A_circ=πr²; A_esfera=4πr²|Una pared mide 4 m de ancho y 2,5 m de alto.|A=4×2,5=10 m². Si 1 L cubre 5 m², hacen falta 2 L.|No confundir metros (longitud) con metros cuadrados (área).|Mover ancho, alto y radio para observar áreas.|area
Pitágoras y distancias|Geometría y vectores|Resolver triángulos rectángulos.|Escalera apoyada en una pared.|En un triángulo rectángulo, la hipotenusa es el lado más largo y está enfrente del ángulo recto. El teorema relaciona los cuadrados de los lados.|a²+b²=c²|Una escalera tiene 5 m y su base está a 3 m de la pared.|Altura=√(5²−3²)=√16=4 m.|No sumar los catetos sin elevarlos al cuadrado.|Mover base y longitud de escalera.|pythagoras
Trigonometría|Geometría y vectores|Relacionar lados y ángulos mediante seno, coseno y tangente.|Calcular altura de un edificio desde el suelo.|Seno=cateto opuesto/hipotenusa; coseno=adyacente/hipotenusa; tangente=opuesto/adyacente. La calculadora debe configurarse en grados o radianes según el problema.|sinθ=o/h; cosθ=a/h; tanθ=o/a|Desde 10 m de distancia se observa la parte superior de una pared con ángulo de 45°.|Altura=10 tan(45°)=10 m (si los ojos están a nivel del suelo).|Confundir los grados con los radianes en la calculadora.|Modificar el ángulo y observar la altura.|trig
Vectores y componentes|Geometría y vectores|Distinguir escalares y vectores y descomponerlos.|Empujar un carrito en una dirección.|Un escalar tiene solo magnitud; un vector tiene magnitud, dirección y sentido. Sus componentes en dos ejes se calculan con seno y coseno.|Fx=F cosθ; Fy=F sinθ|Una persona empuja un carrito con 10 N a 60° respecto a la horizontal.|Fx=10 cos60°=5 N; Fy≈8,66 N.|No sumar magnitudes sin considerar la dirección.|Mover el ángulo y observar componentes.|vector
Suma vectorial y producto escalar|Geometría y vectores|Sumar vectores y calcular productos escalares.|Dos personas empujando un mueble.|Las componentes se suman por eje. La magnitud resultante se obtiene con Pitágoras y el producto escalar relaciona magnitudes y el coseno del ángulo entre vectores.|R=√(Rx²+Ry²); A·B=abs(A)abs(B)cosθ|Dos fuerzas horizontales actúan: 12 N a la derecha y 5 N a la izquierda.|La resultante es 12−5=7 N hacia la derecha.|La dirección del resultado es tan importante como su magnitud.|Ajustar dos fuerzas y analizar el equilibrio.|vector
Funciones y gráficas|Cálculo|Interpretar funciones, pendientes, dominios y límites intuitivos.|Registro del desplazamiento de un ciclista.|Una función asigna un resultado a cada entrada válida. La pendiente de una recta representa la variación de la salida por unidad de entrada. El límite describe a qué valor se aproxima la función.|m=(y₂−y₁)/(x₂−x₁)|Una bicicleta recorre 6 km en 30 minutos a velocidad constante.|Pendiente=6/0,5=12 km/h.|No confundir la altura de la gráfica con su pendiente.|Cambiar pendiente e intercepto de una función.|function
Derivada y reglas básicas|Cálculo|Calcular derivadas sencillas e interpretar tasas de cambio.|Velocidad instantánea en una carretera.|La derivada es el límite de la tasa de cambio promedio cuando el intervalo tiende a cero. Las constantes derivan a cero; en las potencias el exponente baja y se resta uno.|d(xⁿ)/dx=n xⁿ⁻¹; d(c)/dx=0; (f+g)'=f'+g'|La posición de un patinador es s(t)=3t² en metros.|v(t)=ds/dt=6t m/s. A t=2 s, v=12 m/s.|La derivada de x² no es x; es 2x.|Variar el punto de tangencia para observar la pendiente.|derivative
Producto, cociente y cadena|Cálculo|Aplicar reglas combinadas de derivación.|Cambio del volumen de un depósito.|La regla del producto deriva dos factores variables. La del cociente contempla numerador y denominador. La cadena deriva funciones compuestas. También hay derivadas de seno, coseno, eˣ y ln x.|(fg)'=f'g+fg'; (f/g)'=(f'g−fg')/g²; (f∘g)'=f'(g)g'|El área de un rectángulo con lados x y x+2 es A=x(x+2).|A'=1·(x+2)+x·1=2x+2. El resultado coincide al expandir A=x²+2x.|En la regla del producto no basta con multiplicar las derivadas.|Modificar los lados variables de un rectángulo.|derivative
Integrales y antiderivadas|Cálculo|Comprender acumulación e integrales indefinidas.|Agua acumulada en un tanque.|Integrar suma contribuciones pequeñas; una antiderivada deshace la derivación. En integrales indefinidas añadimos una constante porque su derivada es cero.|∫xⁿdx=xⁿ⁺¹/(n+1)+C (n≠−1); ∫1/x dx=ln(abs(x))+C|Un grifo aporta agua con caudal q(t)=2t litros/minuto.|La cantidad acumulada desde 0 hasta T es ∫₀ᵀ2t dt=T² litros; a T=3, 9 L.|No olvidar la constante C en integrales indefinidas.|Modificar límites para observar el área acumulada.|integral
Integral definida y técnicas|Cálculo|Evaluar integrales definidas y reconocer sustitución y por partes.|Trabajo al desplazar un objeto con fuerza variable.|La integral definida acumula cambios con signo. El teorema fundamental permite evaluarla restando valores de una antiderivada. Sustitución invierte la regla de la cadena; por partes proviene de la regla del producto.|∫ₐᵇf(x)dx=F(b)−F(a); ∫u dv=uv−∫v du|Una fuerza F(x)=2x N actúa desde x=0 hasta x=3 m.|Trabajo=∫₀³2x dx=[x²]₀³=9 J.|Una integral de una función negativa puede dar un resultado negativo: área firmada.|Variar límites y potencia para ver resultados.|integral
Cargas eléctricas|Electrostática|Comprender interacción eléctrica, signos y ley de Coulomb.|Globo que atrae pequeños papeles.|La carga eléctrica se conserva. Dos cargas iguales se repelen; cargas opuestas se atraen. Un globo cargado también atrae papeles neutros mediante polarización. En cargas puntuales, Coulomb relaciona fuerza y distancia.|F=k·abs(q₁q₂)/r²; k≈8,99×10⁹ N·m²/C²|Dos cargas de 1 μC se separan 1 m.|F≈8,99×10⁹×(10⁻⁶)²=0,00899 N y se repelen si ambas son positivas.|No afirmar que el papel necesita carga neta opuesta para ser atraído.|Frotar un globo y acercarlo a papelitos.|balloon
Campo eléctrico|Electrostática|Calcular campo y superponer contribuciones vectoriales.|Ubicación de una pequeña carga de prueba.|El campo eléctrico indica la fuerza por unidad de carga de prueba positiva. Los campos de distintas fuentes se suman como vectores. El campo apunta alejándose de cargas positivas y hacia negativas.|E=F/q₀; E_puntual=kQ/r² (magnitud)|Una carga de 2 nC crea un campo a 0,30 m.|E≈8,99×10⁹×2×10⁻⁹/(0,30)²≈200 N/C, radial hacia afuera.|No confundir el campo (N/C) con la fuerza (N).|Mover la carga de prueba en un campo.|field
Planos y superficies cargadas|Electrostática|Distinguir campo de plano infinito y esfera uniformemente cargada.|Superficie electrizada y pantalla metálica.|Para un plano infinito con densidad σ, el campo tiene magnitud σ/(2ε₀) en ambos lados y apunta hacia afuera si σ>0. Una corteza esférica uniformemente cargada produce campo exterior de carga puntual y campo interior cero.|E_plano=σ/(2ε₀); E_esfera=kQ/r² (r>a); E=0 (r<a)|El plano YZ positivo está en x=0 y una corteza positiva se centra en x=10a.|Sobre el eje X, los campos se enfrentan solo en 0<x<9a; en 4a la igualdad da σ=Q/(72πa²).|No usar el campo exterior de la esfera dentro de ella.|Modificar posición y observar dos campos enfrentados.|plane
Flujo y ley de Gauss|Electrostática|Entender superficies gaussianas, flujo y simetría.|Campo a través de una superficie cerrada.|El flujo eléctrico mide cuánto campo atraviesa una superficie orientada; para superficie cerrada, Gauss relaciona flujo neto con carga encerrada. Solo se extrae E de la integral con suficiente simetría.|Φ=∮E·dA=Q_enc/ε₀|Una superficie esférica encierra 3 nC.|Φ=3×10⁻⁹/8,854×10⁻¹²≈339 N·m²/C.|No confundir carga encerrada con todas las cargas existentes en el entorno.|Variar carga encerrada y radio de una superficie.|gauss
Conductores y potencial|Electrostática|Resolver campos por regiones y diferencias de potencial.|Blindaje metálico y conductores concéntricos.|En equilibrio electrostático, el campo dentro del metal conductor es cero. En dos conductores esféricos concéntricos, una carga +Q en la esfera central induce −Q en la cara interior de la cubierta. El potencial se obtiene integrando −E·dr.|ΔV=−∫E·dr; E_metal=0; Q_interior=−Q|Esfera central +Q y cubierta total −4Q.|Superficie interior=−Q, exterior=−3Q; al poner a tierra la cubierta exterior queda con carga 0 en este modelo aislado.|No integrar dentro de regiones conductoras donde E=0.|Mover radio y carga para observar campos por regiones.|conductors
Capacitores: concepto|Capacitores|Interpretar capacitancia, carga, voltaje y geometría.|Flash fotográfico que almacena energía.|Un capacitor almacena carga de igual magnitud y signo opuesto en dos placas. Para placas paralelas ideales, C=ε₀A/d. La capacitancia depende de la geometría y del material dieléctrico.|C=Q/ΔV; C=ε₀A/d; U=½CV²|Un capacitor de 80 pF almacena 480 pC.|ΔV=Q/C=480/80=6 V.|La unidad pF mide capacitancia y pC mide carga.|Mover separación de placas y voltaje.|capacitor
Capacitores en serie y paralelo|Capacitores|Calcular capacitancia equivalente y distribuciones.|Banco de capacitores en un circuito.|En serie, los capacitores tienen igual magnitud de carga y sus voltajes se suman. En paralelo, comparten voltaje y las cargas se suman. No intercambiar las reglas.|1/Cs=Σ1/Ci; Cp=ΣCi; Q=CV|Dos capacitores de 120 pF y 60 pF se conectan en serie a 12 V.|Cs=40 pF, Q=480 pC, V1=4 V y V2=8 V.|En serie no se suman capacitancias directamente.|Cambiar C1,C2 y alternar conexiones.|series
Reconexión y conservación|Capacitores|Predecir voltaje final tras desconexión y reconexión.|Compartir carga entre dos capacitores cargados.|Si el conjunto queda aislado, se conserva la carga neta de los nodos; al conectar capacitores en paralelo con polaridades coincidentes, comparten voltaje. La orientación de conexión importa.|Vf=(C₁V₁+C₂V₂)/(C₁+C₂) (misma polaridad)|Una serie equivalente de 40 pF a 12 V se conecta en paralelo con un capacitor de 80 pF a 6 V, con polaridades coincidentes.|Vf=(40×12+80×6)/120=8 V; carga final del tercero=80×8=640 pC.|No sumar magnitudes de carga si las polaridades se conectan opuestas.|Cambiar la polaridad antes de conectar.|reconnect
Taller de examen original|Examen|Resolver los tres problemas del examen de recuperación de enero de 2025.|Plano y esfera; conductores concéntricos; circuito de capacitores.|Primero dibujar, identificar simetrías, escribir regiones, indicar direcciones y elegir una fórmula justificada. Después sustituir, operar, revisar unidades e interpretar. Problema 1: campo de plano y corteza esférica. Problema 2: Gauss y potencial. Problema 3: serie, paralelo y carga conservada.|σ=Q/(72πa²); Q(R₂)=−Q; Q(R₃)=−3Q; Vfinal=8 V|En el problema 3 se indica Cs=40 pF, batería de 12 V y C3=80 pF con 480 pC.|C1=120 pF, C2=60 pF; V1=4 V,V2=8 V; al conectar con la misma polaridad, C3 termina con 640 pC.|El solucionario del documento usa '960 pF' donde debe decir '960 pC' para la suma de cargas.|Verificar resultados con el simulador del circuito.|exam
Simulacro y repaso|Examen|Resolver problemas nuevos, registrar errores y priorizar refuerzos.|Evaluación con tiempo y problemas contextualizados.|El simulacro incorpora conceptos de los tres problemas del examen sin copiar únicamente sus respuestas. Se evalúa planteamiento, signos, unidades y justificación física. Si una técnica falla, se vuelve a la lección de fundamento.|E=kQ/r²; ΔV=−∫E·dr; Q=CV|Una asociación en paralelo de 40 pF y 80 pF comparte 8 V.|Q_total=(40+80)×8=960 pC; el capacitor de 80 pF posee 640 pC.|Acertar un número sin explicar el procedimiento no garantiza comprensión.|Resolver retos variables de los laboratorios.|exam
`.trim();
const labs=[
['signed','Saldo y números negativos','Ingreso mensual (miles)',0,50,18,'Gasto (miles)',0,50,25],
['multiply','Distribuir el costo','Artículos',1,12,8,'Participantes',1,8,4],
['fraction','Fracciones de una receta','Porciones (cuartos)',0,8,3,'Porciones extra (cuartos)',0,8,1],
['percent','Descuentos y porcentajes','Precio (miles)',20,200,80,'Descuento (%)',0,70,15],
['scientific','Conversor de unidades','Valor',1,100,48,'Potencia de diez',-12,-3,-9],
['linear','Balanza algebraica','Coeficiente a',1,8,3,'Constante b',0,20,5],
['inverse','Tiempo y velocidad','Distancia (km)',10,300,150,'Velocidad (km/h)',10,120,60],
['quadratic','Terreno cuadrado','Lado (m)',1,15,7,'Precio por m² (miles)',1,40,12],
['speed','Distancia y velocidad','Distancia (km)',20,400,180,'Velocidad (km/h)',20,140,60],
['area','Área de un terreno','Ancho (m)',1,20,4,'Alto (m)',1,20,5],
['pythagoras','Escalera contra una pared','Base (m)',1,8,3,'Altura (m)',1,10,4],
['trig','Triángulo y ángulo','Distancia (m)',2,20,10,'Ángulo (grados)',5,75,45],
['vector','Fuerzas en dos ejes','Fuerza (N)',1,30,10,'Ángulo (grados)',0,180,60],
['function','Gráfica de una función','Pendiente',-4,4,2,'Intercepto',-8,8,1],
['derivative','Pendiente instantánea','Coeficiente de x²',1,5,3,'Punto x',-5,5,2],
['integral','Área bajo una curva','Límite inferior',0,4,0,'Límite superior',5,10,6],
['balloon','Globo y papelitos','Frotamientos simulados',0,20,8,'Distancia (cm)',1,20,6],
['field','Campo de una carga','Carga (nC)',-8,8,2,'Distancia (cm)',10,100,30],
['plane','Plano y corteza esférica','Posición x/a',1,8,4,'Q/(σa²)',1,250,226],
['gauss','Flujo y carga encerrada','Carga (nC)',-10,10,3,'Radio (cm)',10,100,50],
['conductors','Conductores concéntricos','Carga central (nC)',1,10,3,'Carga exterior (nC)',-30,10,-12],
['capacitor','Placas paralelas','Área (cm²)',10,200,80,'Separación (mm)',1,10,5],
['series','Serie y paralelo','C1 (pF)',20,160,120,'C2 (pF)',20,160,60],
['reconnect','Reconexión con polaridad','V1 (V)',0,20,12,'V2 con signo (V)',-20,20,6],
['exam','Banco de examen','Cs (pF)',20,100,40,'C3 (pF)',20,160,80]
];
const lessonRows=raw.split('\n').map((line,i)=>{let [title,module,objective,context,explanation,formula,situation,resolution,trap,experiment,lab]=line.split('|');return {id:i+1,title,module,objective,context,explanation,formula,situation,resolution,trap,experiment,lab};});
const unique=[...new Set(lessonRows.map(x=>x.lab))];
const LABS=labs.map(([id,title,a,min,max,v,b,min2,max2,v2],i)=>({id,title,a,min,max,v,b,min2,max2,v2,lessons:lessonRows.filter(l=>l.lab===id).map(l=>l.id)}));
const extraGlossary=[
['Carga eléctrica','Propiedad de la materia responsable de interacciones electromagnéticas; se mide en culombios (C).','Electrostática'],['Campo eléctrico','Fuerza por unidad de carga de prueba positiva; unidad N/C.','Electrostática'],['Potencial eléctrico','Energía potencial eléctrica por unidad de carga; unidad voltio (V).','Electrostática'],['Flujo eléctrico','Integral de superficie del producto escalar E·dA; unidad N·m²/C.','Electrostática'],['Permitividad del vacío','Constante ε₀≈8,8541878128×10⁻¹² F/m.','Electrostática'],['Conductor','Material con cargas capaces de redistribuirse; en equilibrio electrostático el campo interior del metal es cero.','Electrostática'],['Corteza esférica','Superficie o capa con geometría de esfera hueca.','Electrostática'],['Capacitancia','Relación entre carga almacenada y diferencia de potencial; se mide en faradios (F).','Capacitores'],['Capacitor','Dispositivo que almacena carga y energía en un campo eléctrico.','Capacitores'],['Serie','Conexión de capacitores en la que circula la misma magnitud de carga en el modelo ideal.','Capacitores'],['Paralelo','Conexión de capacitores que comparten diferencia de potencial.','Capacitores'],['Polarización','Redistribución de cargas en un objeto bajo influencia de un campo externo.','Electrostática'],['Toma de tierra','Conexión eléctrica que fija el potencial de referencia e intercambia carga con la Tierra.','Electrostática'],['Vector','Magnitud con módulo, dirección y sentido.','Geometría y vectores'],['Derivada','Límite de la razón incremental; tasa instantánea de cambio.','Cálculo'],['Integral definida','Acumulación con signo de una función en un intervalo.','Cálculo'],['Integral indefinida','Familia de antiderivadas que difieren en una constante.','Cálculo'],['Regla de la cadena','Permite derivar composiciones de funciones.','Cálculo'],['Teorema fundamental del cálculo','Relaciona integrales definidas y antiderivadas.','Cálculo'],['Variable','Símbolo que representa un valor desconocido o cambiante.','Álgebra'],['Incógnita','Valor que se pretende hallar en una ecuación.','Álgebra'],['Exponente','Indica una potencia de la base.','Aritmética'],['Fracción','Representación de partes de una unidad o de una razón.','Aritmética'],['Radián','Unidad angular del SI; 2π rad equivalen a una vuelta completa.','Geometría y vectores'],['Densidad superficial de carga','Carga por unidad de superficie, σ=Q/A; unidad C/m².','Electrostática'],['Voltio','Unidad de diferencia de potencial: 1 V = 1 J/C.','Electrostática'],['Faradio','Unidad de capacitancia: 1 F=1 C/V.','Capacitores'],['Culombio','Unidad de carga eléctrica.','Electrostática'],['Producto escalar','Operación A·B=|A||B|cosθ que produce un escalar.','Geometría y vectores'],['Superficie gaussiana','Superficie cerrada imaginaria utilizada al aplicar la ley de Gauss.','Electrostática']
];
const formulaRows=[
['Aritmética','Signos en un producto','(−a)(−b)=ab','Producto de dos cantidades negativas.'],['Aritmética','Potencias','aᵐ·aⁿ=aᵐ⁺ⁿ','Producto de potencias de igual base.'],['Aritmética','Exponente negativo','a⁻ⁿ=1/aⁿ','Requiere a≠0.'],['Aritmética','Raíz cuadrada','√(a²)=abs(a)','Raíz principal no negativa.'],['Álgebra','Ecuación lineal','ax+b=c ⇒ x=(c−b)/a','Requiere a≠0.'],['Álgebra','Fórmula cuadrática','x=(−b±√(b²−4ac))/(2a)','Requiere a≠0 y discriminante no negativo para soluciones reales.'],['Álgebra','Proporción','a/b=c/d ⇒ ad=bc','Requiere denominadores distintos de cero.'],['Geometría y vectores','Pitágoras','a²+b²=c²','Triángulo rectángulo, c hipotenusa.'],['Geometría y vectores','Área del círculo','A=πr²','r radio.'],['Geometría y vectores','Área esfera','A=4πr²','Superficie de esfera.'],['Geometría y vectores','Seno','sinθ=opuesto/hipotenusa','Triángulo rectángulo.'],['Geometría y vectores','Coseno','cosθ=adyacente/hipotenusa','Triángulo rectángulo.'],['Geometría y vectores','Tangente','tanθ=opuesto/adyacente','Adyacente distinto de cero.'],['Geometría y vectores','Componentes','Fx=Fcosθ; Fy=Fsinθ','Ángulo medido desde el eje x positivo.'],['Geometría y vectores','Módulo vector','|F|=√(Fx²+Fy²)','Dos dimensiones, ejes ortogonales.'],['Geometría y vectores','Producto escalar','A·B=|A||B|cosθ','θ ángulo entre vectores.'],['Cálculo','Definición de derivada',"f'(x)=lim[h→0](f(x+h)−f(x))/h",'Requiere existencia del límite.'],['Cálculo','Regla de potencia',"d(xⁿ)/dx=nxⁿ⁻¹",'Para potencias donde la función es derivable.'],['Cálculo','Regla del producto',"(fg)'=f'g+fg'",'Funciones derivables.'],['Cálculo','Regla del cociente',"(f/g)'=(f'g−fg')/g²",'g≠0.'],['Cálculo','Regla de cadena',"(f(g(x)))'=f'(g(x))g'(x)",'Composición de funciones derivables.'],['Cálculo','Trigonométricas',"(sin x)'=cos x; (cos x)'=−sin x",'Ángulos en radianes.'],['Cálculo','Exponencial y logaritmo',"(eˣ)'=eˣ; (ln|x|)'=1/x",'x≠0 para ln|x|.'],['Cálculo','Integral potencia','∫xⁿdx=xⁿ⁺¹/(n+1)+C','n≠−1.'],['Cálculo','Integral 1/x','∫(1/x)dx=ln(abs(x))+C','x≠0 en un intervalo conectado.'],['Cálculo','Teorema fundamental','∫ₐᵇf(x)dx=F(b)−F(a)',"F'=f y f integrable."],['Cálculo','Integración por partes','∫u dv=uv−∫v du','u y v diferenciables.'],['Cálculo','Sustitución','∫f(g(x))g′(x)dx=∫f(u)du','u=g(x), en condiciones apropiadas.'],['Electrostática','Ley de Coulomb','F=k·abs(q₁q₂)/r²','Cargas puntuales en vacío, r>0.'],['Electrostática','Campo puntual','E=k|Q|/r²','Magnitud para carga puntual; signo determina dirección.'],['Electrostática','Plano infinito','E=|σ|/(2ε₀)','Plano infinito uniformemente cargado en vacío.'],['Electrostática','Superficie esférica','E=k|Q|/r² (r>a); E=0 (r<a)','Superficie esférica uniformemente cargada.'],['Electrostática','Ley de Gauss','∮E·dA=Qenc/ε₀','Superficie cerrada.'],['Electrostática','Potencial eléctrico','ΔV=−∫ E·dr','Integral de línea en electrostática.'],['Electrostática','Densidad superficial','σ=Q/A','Carga uniforme sobre área A.'],['Capacitores','Capacitancia','C=Q/ΔV','Q magnitud de carga de una placa.'],['Capacitores','Placas paralelas','C=εA/d','Modelo ideal, sin efectos de borde; ε del medio.'],['Capacitores','Capacitores en serie','1/Ceq=Σ1/Ci','Asociación ideal en serie.'],['Capacitores','Capacitores en paralelo','Ceq=ΣCi','Asociación ideal en paralelo.'],['Capacitores','Energía almacenada','U=½CV²','Capacitor lineal.'],['Capacitores','Reparto de carga','Vf=(C₁V₁+C₂V₂)/(C₁+C₂)','Conexión paralelo aislada, voltajes con signo orientados consistentemente.']
];
const glossary=extraGlossary.map(([term,definition,category])=>({term,definition,category}));
const formulas=formulaRows.map(([category,name,expression,notes])=>({category,name,expression,notes}));
// Ampliaciones del formulario: cálculo completo y unidades relevantes.
const advancedFormulas=[
['Aritmética','Porcentaje','parte=(p/100)·total','p porcentaje de una cantidad.'],
['Aritmética','Suma de fracciones','a/b+c/d=(ad+bc)/(bd)','b,d≠0.'],
['Aritmética','División de fracciones','(a/b)/(c/d)=ad/(bc)','b,c,d≠0.'],
['Aritmética','Potencia de potencia','(aᵐ)ⁿ=aᵐⁿ','Se aplica a potencias definidas.'],
['Aritmética','Radical principal','√a=b ⇔ b²=a y b≥0','a≥0.'],
['Álgebra','Producto notable','(a+b)²=a²+2ab+b²','Expansión algebraica.'],
['Álgebra','Diferencia cuadrados','a²−b²=(a−b)(a+b)','Factorización.'],
['Álgebra','Discriminante','Δ=b²−4ac','Ecuación cuadrática.'],
['Álgebra','Regla de tres','x=bc/a','Proporcionalidad directa, a≠0.'],
['Geometría y vectores','Circunferencia','P=2πr','Longitud de una circunferencia.'],
['Geometría y vectores','Volumen esfera','V=(4/3)πr³','Esfera maciza.'],
['Geometría y vectores','Conversión angular','180°=π rad','Ángulos.'],
['Geometría y vectores','Distancia de dos puntos','d=√((x₂−x₁)²+(y₂−y₁)²)','Coordenadas cartesianas.'],
['Geometría y vectores','Vector unitario','û=v/|v|','Para v distinto de cero.'],
['Cálculo','Derivada constante','d(c)/dx=0','c constante.'],
['Cálculo','Derivada suma',"(f±g)'=f'±g'",'Funciones derivables.'],
['Cálculo','Derivada seno compuesto',"d(sin(g(x)))/dx=cos(g(x))g'(x)",'Argumento en radianes.'],
['Cálculo','Derivada tangente',"d(tan x)/dx=sec²x",'cos x≠0, x en radianes.'],
['Cálculo','Derivada a^x',"d(aˣ)/dx=aˣ ln(a)",'a>0 y a≠1.'],
['Cálculo','Derivada x^x',"d(xˣ)/dx=xˣ(ln x+1)",'x>0.'],
['Cálculo','Derivada parcial','∂f/∂x','Se deriva respecto a x manteniendo fijas las otras variables.'],
['Cálculo','Integración lineal','∫(af+bg)dx=a∫f dx+b∫g dx','Constantes a y b.'],
['Cálculo','Integral de constante','∫c dx=cx+C','c constante.'],
['Cálculo','Integral exponencial','∫eˣdx=eˣ+C','Función exponencial natural.'],
['Cálculo','Integral exponencial base a','∫aˣ dx=aˣ/ln(a)+C','a>0, a≠1.'],
['Cálculo','Integral seno','∫sin x dx=−cos x+C','Ángulo en radianes.'],
['Cálculo','Integral coseno','∫cos x dx=sin x+C','Ángulo en radianes.'],
['Cálculo','Integral inverso cuadrado','∫r⁻² dr=−1/r+C','r≠0. Indispensable para potencial esférico.'],
['Cálculo','Integral potencia entre radios','∫[R₁,R₂]r⁻²dr=1/R₁−1/R₂','R₂>R₁>0.'],
['Cálculo','Integración de f(g)g prima','∫f(g(x))g′(x)dx=F(g(x))+C','F′=f. Sustitución.'],
['Electrostática','Constante Coulomb','k=1/(4πε₀)','En vacío.'],
['Electrostática','Campo vectorial carga puntual','E⃗=kQ(r⃗−r⃗₀)/|r⃗−r⃗₀|³','Punto de observación diferente del origen de carga.'],
['Electrostática','Fuerza eléctrica','F⃗=qE⃗','q carga de prueba en un campo.'],
['Electrostática','Potencial carga puntual','V=kQ/r','Referencia V(infinito)=0 para distribución localizada.'],
['Electrostática','Potencial entre conductores','V(R₂)−V(R₁)=kQ(1/R₂−1/R₁)','Región libre entre conductores concéntricos.'],
['Electrostática','Campo dentro conductor','E⃗=0','Conductor en equilibrio electrostático.'],
['Capacitores','Campo entre placas','E≈ΔV/d','Placas ideales, campo uniforme.'],
['Capacitores','Carga de serie','Q₁=Q₂=…=Qserie','Magnitudes para serie ideal.'],
['Capacitores','Voltaje de serie','Vtotal=ΣVi','Voltajes orientados consistentemente.'],
['Capacitores','Carga en paralelo','Qtotal=ΣQi','Cargas de una misma polaridad.'],
['Capacitores','Energía como carga','U=Q²/(2C)','Capacitor lineal.'],
['Capacitores','Energía como QV','U=½QV','Capacitor lineal.'],
['Capacitores','Capacitancia dieléctrico','C=κε₀A/d','Dieléctrico lineal que llena el espacio, sin bordes.']
];
formulas.push(...advancedFormulas.map(([category,name,expression,notes])=>({category,name,expression,notes})));
const extraTerms=`Número entero~Número sin parte fraccionaria: …, −2, −1, 0, 1, 2, …~Aritmética
Número negativo~Número menor que cero; puede expresar deuda, descenso u orientación.~Aritmética
Valor absoluto~Distancia de un número respecto de cero; no es negativa.~Aritmética
Numerador~Parte superior de una fracción; indica porciones tomadas.~Aritmética
Denominador~Parte inferior de una fracción; indica número de partes iguales.~Aritmética
Mínimo común múltiplo~Menor número positivo que es múltiplo de varios números dados.~Aritmética
Porcentaje~Fracción expresada sobre cien.~Aritmética
Notación científica~Expresión a×10ⁿ para valores muy grandes o pequeños.~Aritmética
Prefijo micro~Factor 10⁻⁶; símbolo μ.~Aritmética
Prefijo nano~Factor 10⁻⁹; símbolo n.~Aritmética
Prefijo pico~Factor 10⁻¹²; símbolo p.~Aritmética
Radical~Símbolo √ que indica raíz.~Aritmética
Monomio~Expresión algebraica de un solo término.~Álgebra
Coeficiente~Número que multiplica a una variable o expresión.~Álgebra
Constante~Valor que permanece fijo en el problema.~Álgebra
Ecuación~Igualdad que contiene valores conocidos y desconocidos.~Álgebra
Despejar~Transformar una igualdad para dejar aislada una incógnita.~Álgebra
Factorizar~Reescribir una expresión como un producto de factores.~Álgebra
Discriminante~Expresión b²−4ac que clasifica raíces de una cuadrática.~Álgebra
Sistema de ecuaciones~Conjunto de igualdades que deben cumplirse a la vez.~Álgebra
Hipotenusa~Lado opuesto al ángulo recto en un triángulo rectángulo.~Geometría y vectores
Cateto~Cada uno de los dos lados que forman el ángulo recto.~Geometría y vectores
Perímetro~Longitud total del borde de una figura.~Geometría y vectores
Área~Medida de superficie en unidades cuadradas.~Geometría y vectores
Radio~Distancia del centro a un punto de una circunferencia o esfera.~Geometría y vectores
Seno~Razón cateto opuesto/hipotenusa en triángulo rectángulo.~Geometría y vectores
Coseno~Razón cateto adyacente/hipotenusa en triángulo rectángulo.~Geometría y vectores
Tangente~Razón cateto opuesto/adyacente.~Geometría y vectores
Componente vectorial~Proyección de un vector sobre un eje.~Geometría y vectores
Vector unitario~Vector de módulo 1 que especifica dirección y sentido.~Geometría y vectores
Función~Regla que asigna a cada entrada válida un resultado.~Cálculo
Dominio~Conjunto de valores para los que está definida una función.~Cálculo
Límite~Valor al que tiende una función cuando la variable se aproxima a un punto.~Cálculo
Pendiente~Cambio vertical dividido por cambio horizontal.~Cálculo
Antiderivada~Función cuya derivada produce otra función dada.~Cálculo
Constante de integración~Constante C de la familia de antiderivadas.~Cálculo
Sustitución~Técnica de integración basada en cambiar la variable.~Cálculo
Integración por partes~Técnica basada en la regla del producto de derivadas.~Cálculo
Regla del producto~Fórmula para derivar una multiplicación de funciones.~Cálculo
Regla del cociente~Fórmula para derivar división de funciones.~Cálculo
Regla de la potencia~Fórmula para derivar e integrar expresiones xⁿ bajo sus condiciones.~Cálculo
Derivada parcial~Derivada respecto a una variable manteniendo otras constantes.~Cálculo
Campo radial~Campo que apunta a lo largo de la dirección del radio.~Electrostática
Superposición~Suma vectorial de campos debidos a fuentes diferentes.~Electrostática
Equilibrio electrostático~Estado sin movimiento macroscópico de cargas libres en el conductor.~Electrostática
Diferencia de potencial~Trabajo por unidad de carga entre dos puntos con signo convencional.~Electrostática
Carga encerrada~Carga neta dentro de una superficie cerrada.~Electrostática
Potencial de referencia~Nivel elegido para asignar valor cero al potencial.~Electrostática
Dieléctrico~Material aislante que puede polarizarse y modificar la capacitancia.~Capacitores
Energía electrostática~Energía almacenada en una configuración de campo eléctrico.~Capacitores
Carga conservada~Carga neta total que permanece fija en un sistema aislado.~Capacitores
Polaridad~Orientación del signo eléctrico entre terminales o placas.~Capacitores`;
glossary.push(...extraTerms.split('\n').map(line=>{let [term,definition,category]=line.split('~');return {term,definition,category}}));
const diagnostic=[
['¿Cuánto es −7 + 12?',['−19','5','19'],1,'El resultado es 5 porque 12−7=5.','Aritmética'],
['¿Cuánto es (−4)×(−3)?',['−12','12','7'],1,'Dos factores negativos producen un positivo.','Aritmética'],
['¿Cuál operación se resuelve primero en 3+4×2?',['3+4','4×2','Da igual'],1,'Multiplicar antes de sumar: 3+8=11.','Aritmética'],
['¿Cuánto es 21÷7?',['3','14','7'],0,'21 dividido entre 7 es 3.','Aritmética'],
['¿Qué vale 9−15?',['6','−6','−24'],1,'Al quitar 15 de 9 se obtiene −6.','Aritmética'],
['¿Cuánto es 1/2+1/4?',['2/6','3/4','1/6'],1,'Usar denominador común 4: 2/4+1/4.','Fracciones y potencias'],
['¿Cuánto es 2³?',['6','8','9'],1,'2×2×2=8.','Fracciones y potencias'],
['¿Cuánto es √49?',['7','24,5','−7'],0,'La raíz cuadrada principal de 49 es 7.','Fracciones y potencias'],
['¿Qué significa 10⁻³?',['1000','0,001','−1000'],1,'Un exponente negativo representa el recíproco.','Fracciones y potencias'],
['¿Cuánto es 25 % de 80?',['20','25','40'],0,'0,25×80=20.','Fracciones y potencias'],
['Si x+8=15, x vale…',['23','7','8'],1,'Restar 8 de ambos lados.','Álgebra'],
['Si 2x=18, x vale…',['9','16','36'],0,'Dividir ambos lados entre 2.','Álgebra'],
['Si v=d/t, ¿cómo se despeja t?',['d/v','v/d','dv'],0,'Multiplicar por t y dividir por v.','Álgebra'],
['¿Cuánto es 3x+2x?',['5x','5x²','6x'],0,'Se suman los coeficientes de términos semejantes.','Álgebra'],
['Si x²=25 y x es una longitud positiva, x vale…',['−5','5','25'],1,'La longitud no puede ser negativa.','Álgebra'],
['Área de rectángulo de 3 m por 4 m…',['7 m²','12 m²','12 m'],1,'Área=base×altura.','Geometría y vectores'],
['Una escalera forma triángulo 3,4,5. Hipotenusa…',['3','4','5'],2,'Pitágoras 3²+4²=5².','Geometría y vectores'],
['Coseno de 60° es…',['0,5','1','0'],0,'cos(60°)=1/2.','Geometría y vectores'],
['Un vector tiene…',['Solo dirección','Módulo, dirección y sentido','Solo valor numérico'],1,'El escalar solo tiene magnitud.','Geometría y vectores'],
['Dos fuerzas opuestas de 7 N y 2 N producen…',['9 N hacia la menor','5 N hacia la mayor','0 N'],1,'Restar magnitudes cuando actúan en sentidos opuestos.','Geometría y vectores'],
["Derivada de x²…",['2x','x','x³/3'],0,'Regla de potencia.','Cálculo'],
["Derivada de una constante…",['1','0','La constante'],1,'Una constante no cambia.','Cálculo'],
['¿Qué representa una integral definida?',['Solo pendiente','Acumulación con signo','División'],1,'La integral acumula contribuciones pequeñas.','Cálculo'],
['Integral indefinida de 2x…',['x²+C','2','2x²'],0,'La derivada de x² es 2x.','Cálculo'],
['∫₀² x dx vale…',['4','2','1'],1,'[x²/2] de 0 a 2 = 2.','Cálculo'],
['Dos cargas positivas se…',['Atraen','Repelen','Anulan siempre'],1,'Mismo signo se repele.','Física básica'],
['Unidad de carga eléctrica…',['Faradio','Newton','Culombio'],2,'Culombio = carga.','Física básica'],
['Campo dentro del metal conductor en equilibrio…',['Cero','Infinito','Siempre negativo'],0,'Las cargas se redistribuyen y anulan el campo interior.','Física básica'],
['Capacitores en paralelo comparten…',['La misma carga','El mismo voltaje','La misma distancia'],1,'Los nodos de cada capacitor tienen la misma diferencia de potencial.','Física básica'],
['En una serie ideal de capacitores la magnitud de carga…',['Es igual','Es siempre cero','Depende solo del área'],0,'Cada capacitor en serie lleva igual magnitud de carga.','Física básica']
].map(([q,options,correct,why,category])=>({q,options,correct,why,category}));
const groups=['Aritmética','Álgebra','Geometría y vectores','Cálculo','Electrostática','Capacitores','Examen'];
return {lessons:lessonRows,labs:LABS,glossary,formulas,diagnostic,groups};
})();
