
/*En este ejercicio queremos saber que parte del carrito entra dentro del presupuesto. Esto ya no es solamente filtrar ítems de un array. Es ir calculando el monto de cada ítem (precio * cantidad) y además chequear si ese monto más el acumulado entra dentro de nuestro presupuesto.*/
const carrito = [
  { nombre: "Manzanas", precio: 35, cantidad: 3, categoria: "Frutas" },
  { nombre: "Pan", precio: 40, cantidad: 2, categoria: "Panadería" },
  { nombre: "Leche", precio: 50, cantidad: 1, categoria: "Lácteos" },
  { nombre: "Huevos", precio: 60, cantidad: 12, categoria: "Proteínas" },
  { nombre: "Pasta", precio: 45, cantidad: 1, categoria: "Despensa" },
  { nombre: "Queso", precio: 80, cantidad: 1, categoria: "Lácteos" },
  { nombre: "Tomates", precio: 30, cantidad: 4, categoria: "Verduras" },
  { nombre: "Aceite de Oliva", precio: 99, cantidad: 1, categoria: "Despensa" },
  { nombre: "Jabón", precio: 70, cantidad: 2, categoria: "Higiene" },
  { nombre: "Cereal", precio: 55, cantidad: 1, categoria: "Despensa" },
];

const montoDisponible = 200;

let indiceLoop = 0;
let totalAGastar = 0;
const comprables = [];
let indiceComprables = 0;

while (indiceLoop < carrito.length) {
  const producto = carrito[indiceLoop];
  const precioTotalItem = producto.precio * producto.cantidad;
  const nuevoTotalPreliminar = totalAGastar + precioTotalItem;

  // --- Lógica agregada aquí ---
  if (nuevoTotalPreliminar <= montoDisponible) {
    comprables[indiceComprables] = producto;
    totalAGastar = nuevoTotalPreliminar;
    indiceComprables++;
  }
  // --- Fin de la lógica agregada ---

  indiceLoop++;
}

console.log("Con $" + montoDisponible + " puedes comprar:", comprables);