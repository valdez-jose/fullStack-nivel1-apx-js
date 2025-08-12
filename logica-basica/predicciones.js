
//completá todas las predicciones
// Valores iniciales
const base = 9;
let multiplicador = 3;
const texto = "JavaScript";
const booleano = true;
const modulo = 5;
let acumulador = 5;

// ------------------------------------
// Operaciones

const suma = base + multiplicador;
// Predicción: suma va a ser 12
console.log(suma);

const resta = base + suma - acumulador;
// Predicción: resta va a ser 16
console.log(resta);

let frase = texto
frase += " " + "es genial";
// frase va a ser "JavaScript es genial"
console.log(frase);

const negacion = !booleano;
// negación va a valer false
console.log(negacion);

const dobleNegacion = !!negacion;
// dobleNegacion va a valer false
console.log(dobleNegacion);

multiplicador *= 3;
// multiplicador va a valer 9
console.log(multiplicador);

const division = base * 10 / multiplicador;
// division va a valer 10
console.log(division);

const residuo = base % modulo;
// residuo va a valer 4
console.log(residuo);

const esPar = multiplicador % 2 === 0;
// esPar va a valer false
console.log(esPar);

const comparacion = acumulador == "5";
// comparacion va a valer true
console.log(comparacion);

const comparacionEstricta = acumulador === "5";
// comparacionEstricta va a valer false
console.log(comparacionEstricta);

acumulador += base;
// acumulador va a valer 14
console.log(acumulador);

const mayor = acumulador > base;
// mayor va a valer true
console.log(mayor);

const menorOigual = multiplicador <= 30;
// menorOigual va a valer true
console.log(menorOigual);

const operadorOR = booleano || false;
// operadorOR va a valer true
console.log(operadorOR);

const operadorAND = booleano && (base > 5);
// operadorAND va a valer true
console.log(operadorAND);
const combinado = (base * multiplicador) - modulo;
// combinado va a valer 76
console.log(combinado);