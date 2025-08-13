
/*Para que sirve los bucle?
   Es una estructura muy poderosa ya que nos permite organizar en una lista ordenada, un montón de objetos que representan entidades como usuarios, productos, lugares.
*/
const usuarios = [
  {
    id: "hj12ds92j",
    nombreCompleto: "Juan Pérez",
    ciudad: "Buenos Aires",
    mascotas: ["Firulais", "Michi"],
    email: "juan.perez@gmail.com"
  },
  {
    id: "kf98as71p",
    nombreCompleto: "Ana Gómez",
    ciudad: "Bogotá",
    mascotas: [],
    email: "ana.gomez@gmail.com"
  },
  {
    id: "mn63tr45q",
    nombreCompleto: "Carlos Ramírez",
    ciudad: "Ciudad de México",
    mascotas: ["Max", "Luna"],
    email: "carlos.ramirez@gmail.com"
  },
  {
    id: "zx75lg29v",
    nombreCompleto: "María Torres",
    ciudad: "Oaxaca",
    mascotas: ["Bobby"],
    email: "maria.torres@gmail.com"
  },
  {
    id: "qw82hj64k",
    nombreCompleto: "Pedro Fernández",
    ciudad: "Lima",
    mascotas: [],
    email: "pedro.fernandez@gmail.com"
  },
  {
    id: "ab39kl72f",
    nombreCompleto: "Lucía Martínez",
    ciudad: "Buenos Aires",
    mascotas: ["Simba"],
    email: "lucia.martinez@gmail.com"
  },
  {
    id: "yt48mn90z",
    nombreCompleto: "Jorge Rojas",
    ciudad: "Bogotá",
    mascotas: ["Nina", "Rocky"],
    email: "jorge.rojas@gmail.com"
  },
  {
    id: "uv91pq64w",
    nombreCompleto: "Sofía Herrera",
    ciudad: "Ciudad de México",
    mascotas: [],
    email: "sofia.herrera@gmail.com"
  },
  {
    id: "op54xs31c",
    nombreCompleto: "Diego López",
    ciudad: "Oaxaca",
    mascotas: ["Kira", "Tom"],
    email: "diego.lopez@gmail.com"
  },
  {
    id: "gh76bn83d",
    nombreCompleto: "Valentina Castro",
    ciudad: "Lima",
    mascotas: ["Coco"],
    email: "valentina.castro@gmail.com"
  }
];
let i = 0; 
while (i < usuarios.length){
  if (usuarios[i].mascotas.length > 0) { 
    console.log(`El usuario ${usuarios[i].nombreCompleto} tiene mascotas.`);
  }
  // modificamos i para que sea igual a si mismo +1
  i++;
}
