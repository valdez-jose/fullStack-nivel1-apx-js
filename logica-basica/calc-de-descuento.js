
/*Calculadora de descuento
Desafío
En base al precio inicial de un producto y un porcentaje de descuento, determina el precio final de un producto. */
const precioInicial = 420;
// esto quieren decir que se le aplica el 30% de descuento 
const porcentajeDescuento = 50; 
const valorDelDescuento = (precioInicial * porcentajeDescuento) / 100; // tu código;
// Finalmente calcula el precio final restando el descuento
const precioFinal = precioInicial - valorDelDescuento;// tu código;
console.log(`Precio final con descuento aplicado, $${precioFinal}`);