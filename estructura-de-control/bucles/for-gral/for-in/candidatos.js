
/*
  El objetivo de este ejercicio es usar un for...in para recorrer un array de usuarios y chequear si cumplen con los requisitos de un aviso laboral o no.

Copiá este código base y completá la lógica.
*/

// Tu código original, ya completado correctamente
const usuarios = [
  { nombre: "Juan", habilidades: ["javascript", "react"] },
  { nombre: "María", habilidades: ["typescript", "react", "next.js"] },
  { nombre: "Lucas", habilidades: [] },
  { nombre: "Ana", habilidades: ["inglés", "javascript"] },
  { nombre: "Sofía", habilidades: ["typescript", "react"] },
  { nombre: "Martín", habilidades: ["react", "next.js"] },
  { nombre: "Julián", habilidades: ["javascript", "typescript"] },
  { nombre: "Lucía", habilidades: ["inglés", "react"] },
  { nombre: "Ezequiel", habilidades: ["typescript", "react"] },
];

const aviso = {
  compania: "TechFlow",
  texto: "Buscamos desarrolladores para unirse a nuestra startup de tecnología innovadora.",
  requisitos: ["typescript", "react"],
};

const candidatos = [];
let indiceCandidatos = 0;

// Lógica para encontrar candidatos
for (const index in usuarios) {
  const usuario = usuarios[index];
  let cumpleRequisitos = true;

  for (const requisito of aviso.requisitos) {
    if (!usuario.habilidades.includes(requisito)) {
      cumpleRequisitos = false;
      break;
    }
  }

  if (cumpleRequisitos) {
    candidatos[indiceCandidatos++] = index;
  }
}

console.log("Índices de usuarios que cumplen con los requisitos:", candidatos);

// Completa la lógica necesaria para usar
// los indices guardados en el array 'candidatos'
// y mostrar los usuarios que cumplen con los requisitos
console.log("---");
console.log("Usuarios que cumplen con los requisitos:");

for (const indice of candidatos) {
  const usuarioCandidato = usuarios[indice];
  console.log(`- Nombre: ${usuarioCandidato.nombre}, Habilidades: ${usuarioCandidato.habilidades.join(", ")}`);
}