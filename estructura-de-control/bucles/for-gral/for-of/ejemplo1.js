/*El bucle for...of ejecuta el bloque de código para cada elemento de un iterable (Array, String, y hay otros que vamos a ver más adelante) en los cuales cada iteración contará con una variable para el valor de esa posición.
codigo:
for(const item of iterable) {
  console.log(item); // Aquí item es el valor del array
} 
*/
const iterable = [1, 2, 3];

for (const elemento of iterable) {
  console.log(elemento);
}
// Vamos a ver:
// 1
// 2
// 3
console.log('Fin')
console.log('')

const palabra = "Hola";
for (const elemento of palabra) {
  console.log(elemento);
}

// Vamos a ver:
// H
// o
// l
// a
console.log('Fin')
console.log('')
const gato = 'Soy un gato'
for(const elemento of gato){
  console.log(elemento)
}


