
/*
La estructura de control de bucle permite repetir un bloque de código varias veces, mientras se cumpla una condición o hasta que se alcance un objetivo.
Repite instrucciones de forma controlada hasta que la condición deje de cumplirse

Tipos más comunes:
for → repite un número conocido de veces.
while → repite mientras la condición sea verdadera.
do...while → repite al menos una vez y luego verifica la condición.

Bucles especiales como for...of y for...in → para recorrer colecciones o propiedades.
*/
/*Modificá este while para que el counter se modifique en cada ejecución del while y que se ejecute solo 10 0 11 veces. Al finalizar mostrá un mensaje usando console.log() que diga "Terminó"
*/

let counter = 0;

while (counter <11) {
  console.log("Contando: " + counter);
  counter++;
}

console.log("Terminó");