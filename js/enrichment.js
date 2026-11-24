/* Talleres complementarios redactados para cada día. Enunciado, pasos y resultado. */
const EAX=(()=>{
const raw=`Un termómetro está en −4 °C y sube 9 °C.~−4+9=5 °C. Avanzamos nueve unidades desde −4.~La temperatura baja de 6 °C a −3 °C.~Cambio=−3−6=−9 °C, una disminución de 9 °C.
Se compran 6 botellas a $3.500 cada una.~6×3.500=$21.000; multiplicamos cantidad por precio.~La compra de $48.000 se reparte entre 6 personas.~48.000÷6=$8.000 por persona.
Una torta se reparte en 8 porciones; se comen 3.~Se consumieron 3/8 de la torta.~Se mezclan 2/3 L de jugo y 1/6 L de agua.~2/3+1/6=4/6+1/6=5/6 L.
Un producto de $50.000 tiene 20 % de descuento.~20 %=0,20; descuento=10.000; pago=40.000.~Una baldosa cuadrada tiene lado 0,4 m.~Área=0,4²=0,16 m². La raíz de 0,16 es 0,4.
Una lámina mide 0,005 m de grosor.~0,005 m=5×10⁻³ m=5 mm.~Una carga es 2,5 μC.~2,5 μC=2,5×10⁻⁶ C; micro significa una millonésima.
Cuatro cuadernos cuestan p pesos cada uno.~Costo total=4p; si p=$7.000 son $28.000.~Hay una tarifa de entrega de $4.000 además de cinco productos de precio x.~Expresión total=5x+4.000; para x=2.000 da $14.000.
Un taxi cobra $6.000 fijos más $2.000 por km; se pagan $20.000.~20.000=6.000+2.000x; x=7 km.~El doble de un número más 3 es 19.~2x+3=19; 2x=16; x=8. Comprobación: 2×8+3=19.
Se viaja 180 km a velocidad constante v.~Tiempo total t=180/v, siempre que v>0.~Un recipiente se vacía a una tasa de 1/x del depósito por minuto.~Para x=4, tasa=1/4=0,25 del depósito/minuto; x nunca debe ser 0.
El área de una habitación cuadrada es 64 m².~x²=64; la longitud física es x=8 m.~Dos lápices y un bolígrafo cuestan $8.000; un lápiz y un bolígrafo $5.000.~2x+y=8.000 y x+y=5.000; resta ecuaciones: x=3.000, y=2.000.
Una persona camina 1,5 km a 3 km/h.~t=d/v=1,5/3=0,5 h=30 min.~Una fuerza produce aceleración de 3 m/s² sobre masa de 4 kg.~F=ma=4×3=12 N; despejes m=F/a, a=F/m.
Una pared mide 6 m de largo por 2,8 m de alto.~A=6×2,8=16,8 m².~Un círculo tiene radio 2 m.~A=π×2²=4π≈12,57 m².
Se camina 6 m al este y luego 8 m al norte.~Distancia en línea recta=√(6²+8²)=10 m.~Una escalera de 13 m llega a 12 m de altura.~Separación de la pared=√(13²−12²)=5 m.
Una rampa sube 3 m en 4 m horizontales.~tanθ=3/4=0,75 y θ≈36,87°.~Una escalera de 10 m forma 30° con el suelo.~Altura=10 sin30°=5 m; distancia horizontal≈8,66 m.
Una fuerza de 20 N actúa a 30° de la horizontal.~Fx=20 cos30°≈17,32 N; Fy=20 sin30°=10 N.~Un repartidor avanza 4 km al este y 3 km al norte.~Vector (4,3); magnitud=√(16+9)=5 km.
Dos personas empujan 10 N al este y 6 N al oeste.~F_total=10−6=4 N al este.~Dos fuerzas perpendiculares tienen módulos 3 N y 4 N.~Resultante=√(3²+4²)=5 N; el producto escalar es 0.
Un carro recorre 2 km por cada 10 minutos.~Pendiente=2/(10/60)=12 km/h.~Una tarifa es f(x)=3x+5.~Para x=4, f(4)=17; al aumentar x en 1, el resultado aumenta en 3.
La posición es s(t)=t² metros.~Velocidad=s'(t)=2t m/s; en 4 s vale 8 m/s.~La posición es s(t)=4t³+2t.~Velocidad=s'(t)=12t²+2, gracias a linealidad y potencia.
Un rectángulo tiene lados x y x+3.~A=x(x+3); A'=(x+3)+x=2x+3.~Una función es y=(2x+1)³.~y'=3(2x+1)²×2=6(2x+1)², regla de la cadena.
Un grifo tiene caudal q(t)=3 litros/minuto constante.~Agua acumulada en 4 minutos: ∫₀⁴3 dt=12 L.~El caudal aumenta q(t)=2t litros/minuto.~En 3 min: ∫₀³2t dt=[t²]₀³=9 litros.
Una fuerza constante de 5 N desplaza 3 m en la misma dirección.~W=∫₀³5 dx=15 J.~Una fuerza variable F(x)=3x² actúa desde 1 a 2 m.~W=∫₁²3x² dx=[x³]₁²=8−1=7 J.
Dos globos cargados con el mismo signo se acercan.~Se repelen; la dirección de las fuerzas es opuesta sobre cada globo.~Dos cargas q1=2 μC y q2=3 μC están a 0,5 m.~F≈8,99×10⁹×6×10⁻¹²/0,25≈0,216 N.
Una carga de prueba de 2 nC siente una fuerza de 0,01 N.~E=F/q=0,01/(2×10⁻⁹)=5×10⁶ N/C.~Una carga puntual Q=1 nC produce campo a 1 m.~E=kQ/r²≈8,99 N/C, radialmente hacia fuera si Q>0.
Un plano infinito cargado positivamente tiene σ>0.~A ambos lados su campo se aleja del plano, con magnitud σ/(2ε₀).~Una corteza esférica uniformemente cargada tiene radio a.~En r<a el campo es 0; en r>a su magnitud es k|Q|/r².
Una esfera gaussiana encierra 1 nC.~Φ=10⁻⁹/ε₀≈113 N·m²/C.~Duplicamos el radio de la superficie cerrada sin variar carga encerrada.~El flujo neto no cambia; Gauss depende de Q encerrada, no del tamaño.
Una esfera conductora tiene carga +Q en equilibrio.~En el interior del metal E=0 y la carga se ubica en su superficie.~Una esfera +Q está en cavidad de una corteza conductora de carga total −4Q.~Cara interior=−Q, exterior=−3Q; conectada a tierra, cara exterior 0 en este caso.
Un capacitor ideal tiene C=20 μF, V=12 V.~Q=CV=240 μC.~Dos placas ideales de igual área duplican su separación.~C=εA/d; al duplicar d, la capacitancia se reduce a la mitad.
Dos capacitores C1=6 μF y C2=3 μF están en paralelo.~Ceq=6+3=9 μF.~Los mismos capacitores se conectan en serie.~1/Ceq=1/6+1/3=1/2; Ceq=2 μF.
Dos capacitores en paralelo aislados C1=2 μF a 12 V y C2=4 μF a 3 V.~Vfinal=(2×12+4×3)/6=6 V, misma polaridad.~Si el segundo capacitor se invierte antes de conectarlo.~Su voltaje lleva signo negativo: Vfinal=(2×12−4×3)/6=2 V.
El examen pregunta dónde puede anularse el campo entre plano y esfera positivos.~Solo sobre el eje X entre el plano x=0 y la superficie próxima x=9a, es decir 0<x<9a.~El capacitor 3 de 80 pF lleva inicialmente 480 pC.~V3=Q/C=480/80=6 V; después de reconectar con serie Cs=40 pF a 12 V, Vf=8 V.
Una fuente de 12 V carga una serie equivalente de 40 pF.~Q=CV=40×12=480 pC.~Una asociación aislada de 40 pF a 12 V y 80 pF a 6 V se reconecta con polaridades coincidentes.~Vfinal=(480+480)/(40+80)=8 V; Q3final=80×8=640 pC.`;
const cases=raw.split('\n').map(line=>{const [q1,a1,q2,a2]=line.split('~');return [{q:q1,a:a1},{q:q2,a:a2}]});
return {cases};
})();
