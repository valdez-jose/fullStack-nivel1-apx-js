
/*Desafío
En este ejercicio debemos encontrar los usuarios que tengan publicadas propiedades en alquiler. La idea es combinar 2 while, uno para recorrer los usuarios y otro para recorrer cada publicación dentro del objeto del usuario. */

// Array de usuarios con sus publicaciones
const usuarios = [
  {
    id: 1,
    nombre: "Juan Pérez",
    publicaciones: [
      { title: "Departamento en alquiler - Centro", type: "alquiler" },
      { title: "Casa en venta - Suburbios", type: "venta" },
    ],
  },
  {
    id: 2,
    nombre: "María López",
    publicaciones: [
      { title: "Local comercial en alquiler - Zona Norte", type: "alquiler" },
    ],
  },
  {
    id: 3,
    nombre: "Carlos García",
    publicaciones: [
      { title: "Terreno en venta - Campo", type: "venta" },
      { title: "Cabaña en venta - Montaña", type: "venta" },
    ],
  },
  {
    id: 4,
    nombre: "Ana Torres",
    publicaciones: [],
  },
  {
    id: 5,
    nombre: "Luis Gómez",
    publicaciones: [
      { title: "Oficina en alquiler - Centro", type: "alquiler" },
      { title: "Apartamento en venta - Playa", type: "venta" },
    ],
  },
  {
    id: 6,
    nombre: "Sofía Martínez",
    publicaciones: [],
  },
];

let indexUsuario = 0;

while (indexUsuario < usuarios.length) {
  const usuario = usuarios[indexUsuario];
  console.log("Evaluando el usuario:", usuario.nombre); 

  let indexPublicacion = 0;

  while (indexPublicacion < usuario.publicaciones.length) {
    const publicacion = usuario.publicaciones[indexPublicacion];

    // --- Tu lógica va aquí ---
    if (publicacion.type === "alquiler") {
      console.log(`✅ ¡${usuario.nombre} tiene una propiedad en alquiler!`);
      console.log(`- Título de la publicación: "${publicacion.title}"`);
    }

    indexPublicacion++;
  }
  
  indexUsuario++;
}

