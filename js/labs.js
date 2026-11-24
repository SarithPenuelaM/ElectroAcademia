/* 25 escenarios de laboratorio matemático/físico, agrupados por área. */
const EALabs=(()=>{
const fmt=(v,n=3)=>{if(!Number.isFinite(v))return '—'; if(v===0)return '0'; if(Math.abs(v)>999999||Math.abs(v)<.0001)return v.toExponential(3).replace('e',' × 10^');return Number(v.toFixed(n)).toLocaleString('es-CO',{maximumFractionDigits:n});};
const deg=x=>x*Math.PI/180;
const evaluate=(id,a,b)=>{
let v=0,unit='',description='',math='',assumptions='';
switch(id){
case 'signed':v=a-b;unit='mil pesos';math=`${a} − ${b} = ${fmt(v)}`;description='Saldo final del presupuesto después del gasto.';break;
case 'multiply':v=a*9/b;unit='mil pesos/persona';math=`${a} × 9 ÷ ${b} = ${fmt(v)}`;description='Cada artículo cuesta $9.000, repartidos por igual.';break;
case 'fraction':v=(a+b)/4;unit='tazas';math=`(${a}+${b})/4 = ${fmt(v)}`;description='Suma de porciones de un cuarto de taza.';break;
case 'percent':v=a*(1-b/100);unit='mil pesos';math=`${a} × (1 − ${b}/100) = ${fmt(v)}`;description='Precio después de aplicar el descuento.';break;
case 'scientific':v=a*Math.pow(10,b);unit='unidades base';math=`${a} × 10^(${b}) = ${fmt(v,8)}`;description='Conversión de notación científica.';break;
case 'linear':v=(17-b)/a;unit='unidades de x';math=`${a}x + ${b} = 17 ⇒ x=(17−${b})/${a}=${fmt(v)}`;description='Valor que equilibra la ecuación.';break;
case 'inverse':case 'speed':v=a/b;unit='horas';math=`t=${a}/${b}=${fmt(v)}`;description='Tiempo de un viaje a velocidad constante.';break;
case 'quadratic':v=a*a*b;unit='mil pesos';math=`A=${a}²=${a*a} m²; costo=A×${b}=${fmt(v)}`;description='Costo estimado de un terreno cuadrado.';break;
case 'area':v=a*b;unit='m²';math=`A=${a}×${b}=${fmt(v)}`;description='Área rectangular.';break;
case 'pythagoras':v=Math.hypot(a,b);unit='m';math=`c=√(${a}²+${b}²)=${fmt(v)}`;description='Longitud de una escalera entre suelo y pared.';break;
case 'trig':v=a*Math.tan(deg(b));unit='m';math=`h=${a} tan(${b}°)=${fmt(v)}`;description='Altura observada desde el suelo.';break;
case 'vector':v=a*Math.cos(deg(b));unit='N, componente horizontal';math=`Fx=${a} cos(${b}°)=${fmt(v)}`;description=`La componente vertical es ${fmt(a*Math.sin(deg(b)))} N.`;break;
case 'function':v=a*2+b;unit='valor f(2)';math=`f(x)=${a}x+(${b}); f(2)=${fmt(v)}`;description='Valor de la función lineal en x=2.';break;
case 'derivative':v=2*a*b;unit="valor f'(x)";math=`f(x)=${a}x²; f'(x)=${2*a}x; f'(${b})=${fmt(v)}`;description='Pendiente instantánea de la función cuadrática.';break;
case 'integral':v=(b*b-a*a)/2;unit='unidades²';math=`∫[${a},${b}] x dx=(b²−a²)/2=${fmt(v)}`;description='Área bajo y=x para x≥0.';break;
case 'balloon':v=a*a/(b*b);unit='índice relativo';math=`I=${a}²/${b}²=${fmt(v)}`;description='Índice ilustrativo de interacción; más frotes y menor distancia elevan el indicador.',assumptions='Modelo didáctico, NO es una ley experimental de número de frotamientos a fuerza. La atracción del papel neutro es por polarización.';break;
case 'field':v=8.9875517923e9*(a*1e-9)/Math.pow(b/100,2);unit='N/C, con signo radial';math=`Er=kQ/r²=${fmt(v)} N/C`;description='El signo indica orientación respecto al radio: positivo sale, negativo entra.';break;
case 'plane':{let k=a,ratio=b;v=ratio/(4*Math.PI*Math.pow(10-k,2))-.5;unit='E_total/(σ/ε₀)';math=`E_x/(σ/ε₀)=0,5−(Q/(σa²))/(4π(10−x/a)²)=${fmt(-v)}`;v=-v;description='Campo normalizado para plano positivo en x=0 y esfera positiva centrada en x=10a; x entre 0 y 9a.';break;}
case 'gauss':v=a*1e-9/8.8541878128e-12;unit='N·m²/C';math=`Φ=Qenc/ε₀=${fmt(v)}`;description='El flujo neto no depende del radio de una superficie cerrada que encierra la misma carga.';break;
case 'conductors':v=b+a;unit='nC en superficie exterior';math=`Qint=−${a} nC; Qext=${b}−(−${a})=${fmt(v)} nC`;description='La superficie interna lleva −Qcentral; la carga exterior es el remanente de la cubierta.';break;
case 'capacitor':v=8.8541878128e-12*(a*1e-4)/(b*1e-3)*1e12;unit='pF';math=`C=ε₀A/d=${fmt(v)} pF`;description='Capacitancia de placas paralelas ideales en vacío, sin efectos de borde.';break;
case 'series':v=a*b/(a+b);unit='pF, serie';math=`Cs=${a}×${b}/(${a}+${b})=${fmt(v)} pF`;description=`En paralelo sería Cp=${a+b} pF. En serie comparten igual magnitud de carga.`;break;
case 'reconnect':v=(40*a+80*b)/120;unit='V final';math=`Vf=(40×${a}+80×(${b}))/120=${fmt(v)} V`;description='40 pF y 80 pF conectados en paralelo y aislados; un voltaje negativo representa polaridad opuesta.';break;
case 'exam':v=a+b;unit='pF en paralelo';math=`Cp=${a}+${b}=${fmt(v)} pF`;description='Capacitancia equivalente de dos elementos en paralelo; la carga se obtiene multiplicando por voltaje.';break;
}
return {v,unit,math,description,assumptions};
};
function illustration(id,a,b,e){let s='';let line='#5c9eb4',primary='#0b8b82',navy='#1e4c69'; const t=(x,y,str,size=13)=>`<text x="${x}" y="${y}" font-size="${size}" fill="#28485d" text-anchor="middle">${str}</text>`;
const svg=(content)=>`<svg viewBox="0 0 420 230" aria-label="Visualización interactiva del laboratorio" role="img" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="420" height="230" rx="12" fill="#edf6f9"/>${content}</svg>`;
if(['signed','multiply','fraction','percent','scientific','linear','inverse','speed','quadratic','area'].includes(id)){
if(id==='fraction'){let x=Math.min(8,a+b);for(let i=0;i<8;i++)s+=`<rect x="${28+i*47}" y="69" width="43" height="64" rx="7" fill="${i<x?primary:'#cbdde5'}"/>`;
s+=t(210,39,'Cada bloque representa 1/4 de taza',14)+t(210,175,`Cantidad total: ${fmt(e.v)} tazas`,19);
}else if(id==='linear'){s=`<path d="M60 117H360 M210 75V158" stroke="${navy}" stroke-width="4"/><rect x="80" y="91" width="100" height="40" rx="9" fill="${primary}"/><rect x="240" y="91" width="100" height="40" rx="9" fill="${line}"/>${t(130,116,`${a}x+${b}`,17)}${t(290,116,'17',17)}${t(210,199,`Equilibrio: x=${fmt(e.v)}`,17)}`;
}else {s=`<rect x="46" y="80" width="320" height="27" rx="9" fill="#d4e7eb"/><rect x="46" y="80" width="${Math.min(320,Math.abs(e.v)*2+30)}" height="27" rx="9" fill="${primary}"/>${t(210,59,'Modifica los valores y observa el resultado',15)}${t(210,154,`${fmt(e.v)} ${e.unit}`,18)}`;}}
else if(['pythagoras','trig'].includes(id)){let h=id==='pythagoras'?b:Math.min(10,a*Math.tan(deg(b)));let w=id==='pythagoras'?a:a;s=`<path d="M95 180 H325 V${180-Math.min(125,h*11)} Z" stroke="${primary}" stroke-width="4" fill="#98d9d433"/>${t(210,205,`${w} m`,14)}${t(363,115,`${fmt(h)} m`,14)}`;}
else if(id==='vector'){let rad=deg(b),x=210+Math.cos(rad)*90,y=125-Math.sin(rad)*90;s=`<path d="M40 125H380 M210 205V20" stroke="#b5cdd6" stroke-width="2"/><path d="M210 125 L${x} ${y}" stroke="${primary}" stroke-width="6" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r="7" fill="${primary}"/>${t(210,218,`${fmt(e.v)} N sobre el eje X`,14)}`;}
else if(['function','derivative','integral'].includes(id)){let pts=[];for(let x=30;x<=390;x+=4){let xx=(x-210)/29;let yy=id==='function'?a*xx+b:id==='derivative'?a*xx*xx:xx;let py=180-yy*9;if(py>-30&&py<260)pts.push(`${x},${py.toFixed(1)}`)}s=`<path d="M20 180H400 M210 12V219" stroke="#b0cad3" stroke-width="2"/><polyline points="${pts.join(' ')}" fill="none" stroke="${primary}" stroke-width="4"/>${t(215,25,id==='integral'?'Área acumulada':id==='derivative'?'Pendiente local':'Función ajustable',15)}`;if(id==='integral'){let x1=210+a*29,x2=210+b*29;s+=`<rect x="${Math.min(400,x1)}" y="183" width="${Math.max(0,Math.min(400,x2)-Math.min(400,x1))}" height="12" fill="#b6cde3"/>`;}}
else if(id==='balloon'){let dist=55+b*9;s=`<ellipse cx="110" cy="116" rx="48" ry="60" fill="#f5aa82" stroke="#c86a4c" stroke-width="3"/>${t(110,122,'− − −',18)}<path d="M109 175Q98 195 111 207" stroke="#ac7055" stroke-width="2" fill="none"/><rect x="${dist}" y="100" width="48" height="25" rx="4" fill="#f9dfac" stroke="#b7a075"/>${t(dist+24,116,'+ −',15)}${t(210,39,'Globo cargado / papel neutro polarizado',13)}`;}
else if(['field','plane','gauss','conductors'].includes(id)){s=`<circle cx="210" cy="119" r="${id==='gauss'?72:49}" fill="none" stroke="${id==='gauss'?'#b2acdb':primary}" stroke-width="${id==='gauss'?3:6}" stroke-dasharray="${id==='gauss'?'8 6':'0'}"/><circle cx="210" cy="119" r="10" fill="${primary}"/>${t(210,123,a>=0?'+':'−',18)}`;for(let i=0;i<8;i++){let ang=i*Math.PI/4,dx=Math.cos(ang),dy=Math.sin(ang);s+=`<path d="M${210+dx*55} ${119+dy*55}L${210+dx*84} ${119+dy*84}" stroke="${line}" stroke-width="2.5"/>`;}if(id==='plane')s+=`<rect x="55" y="25" width="9" height="190" fill="${navy}"/>${t(74,20,'Plano',12)}`;if(id==='conductors')s+=`<circle cx="210" cy="119" r="76" fill="none" stroke="#4f8fba" stroke-width="12"/>`;}
else if(['capacitor','series','reconnect','exam'].includes(id)){s=`<path d="M70 110H165 M165 58V161 M184 58V161 M184 110H240 M240 58V161 M259 58V161 M259 110H355" stroke="${primary}" stroke-width="5" fill="none"/>${t(210,36,'Capacitores ideales',15)}${t(210,204,`${fmt(e.v)} ${e.unit}`,18)}`;}
return svg(s);
}
return {evaluate,illustration,fmt};
})();
