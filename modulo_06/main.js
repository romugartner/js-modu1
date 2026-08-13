const nombre = prompt("Nombre:");
const apellido = prompt("Apellido:");
const edad = Number(prompt("Edad:"));
const profesion = prompt("Profesión:");

// base de datos (array de objetos)
const Usuario = [
  { nombre: "Romulo", apellido: "Gartner", edad: 32, profesion: "Administrativo" },
  { nombre: "Rodrigo", apellido: "Gartner", edad: 37, profesion: "Maestro" },
  { nombre: "Vanesa", apellido: "Gartner", edad: 42, profesion: "Martillera" },
  { nombre: "Matias", apellido: "Gartner", edad: 26, profesion: "Profesor" },
];

// agrego el objeto del prompt
Usuario.push({ nombre, apellido, edad, profesion });

// sort (menor a mayor)
Usuario.sort((a, b) => a.edad - b.edad);
console.log("Usuario ordenado de menor a mayor:", Usuario);


// 4. Método .find -> Busca si coincide con la edad ingresada
const buscarEdad = Usuario.find(vida => vida.edad === edad);
console.log(buscarEdad); 

// 5. Método .reduce -> Suma la edad ingresada

const totalEdad = Usuario.reduce((sumatoria, vida) => sumatoria + vida.edad, 0);
console.log("suma total de las edades:", totalEdad);


