
/*
Este bucle se usa en casos muy específicos, donde tenemos que repetir una acción al menos una vez y no sabemos cuantas veces. El caso clásico es pedirle al usuario que ingrese un dato y no continuar con el resto del programa hasta que lo haga. El siguiente ejemplo es un poco avanzado pero es para que se entienda el uso y para que vean que solo se usa en casos muy particulares.

*/

let modoEspera = true;
let intentos = 0;

function sigueElModoEsperaParaLasEntradas() {
  intentos++;
  return intentos <= 3;
}

do {
  console.log("Las entradas todavía no están disponibles");
  modoEspera = sigueElModoEsperaParaLasEntradas();
} while (modoEspera);

console.log("¡Las entradas ya están disponibles!");

