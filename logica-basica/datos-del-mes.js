
/* Desafío
En este ejercicio vamos a construir una pequeña app que nos muestre la información importante de un mes en particular.
Para esto, nuestra app tiene que recibir el número del mes como argumento y mostrarnos información sobre ese mes.
Por ejemplo, al ejecutar tu programa de esta forma:*/

// Captura el número del mes del argumento de la línea de comandos
const numeroDeMes = process.argv[2];

/*
 El siguiente array contiene la data de cada mes
 Nota: El índice del array comienza en 0, mientras que los números de mes comienzan en 1.
 */
const informacionMensual = [
  {
    nombreDelMes: "Enero",
    cantidadDeDias: 31,
    eventoDelMes: "Año Nuevo",
  },
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 28, 
    eventoDelMes: "Día de San Valentín",
  },
  {
    nombreDelMes: "Marzo",
    cantidadDeDias: 31,
    eventoDelMes: "Equinoccio de Primavera",
  },
  {
    nombreDelMes: "Abril",
    cantidadDeDias: 30,
    eventoDelMes: "Día de la Tierra",
  },
  {
    nombreDelMes: "Mayo",
    cantidadDeDias: 31,
    eventoDelMes: "Día del Trabajo",
  },
  {
    nombreDelMes: "Junio",
    cantidadDeDias: 30,
    eventoDelMes: "Solsticio de Verano",
  },
  {
    nombreDelMes: "Julio",
    cantidadDeDias: 31,
    eventoDelMes: "Memes de Julio", 
  },
  {
    nombreDelMes: "Agosto",
    cantidadDeDias: 31,
    eventoDelMes: "Día del Niño",
  },
  {
    nombreDelMes: "Septiembre",
    cantidadDeDias: 30,
    eventoDelMes: "Equinoccio de Otoño",
  },
  {
    nombreDelMes: "Octubre",
    cantidadDeDias: 31,
    eventoDelMes: "Halloween",
  },
  {
    nombreDelMes: "Noviembre",
    cantidadDeDias: 30,
    eventoDelMes: "Día de Acción de Gracias",
  },
  {
    nombreDelMes: "Diciembre",
    cantidadDeDias: 31,
    eventoDelMes: "Navidad",
  },
];

// Calcula la posición en el array (el mes 1 está en la posición 0, etc.)
// Primero, convertimos el argumento a un número entero
const numeroDeMesInt = parseInt(numeroDeMes);

// Validamos que el número del mes sea válido
if (isNaN(numeroDeMesInt) || numeroDeMesInt < 1 || numeroDeMesInt > 12) {
  console.log("Error: Por favor, introduce un número de mes válido (del 1 al 12).");
  process.exit(1); // Sale del programa con un código de error
}

const posicionEnElArray = numeroDeMesInt - 1;

// Obtiene la información del mes correspondiente del array
const infoDelMes = informacionMensual[posicionEnElArray];

// Muestra la información por consola
console.log("Numero de mes:", numeroDeMes);
console.log("Nombre del mes:", infoDelMes.nombreDelMes);
console.log("Cantidad de días:", infoDelMes.cantidadDeDias);
console.log("Evento del mes:", infoDelMes.eventoDelMes);
