const Usuario = [
    {nombre: "Romulo", apellido: "Gartner", edad: 32, profesion: "Administrativo"},
    {nombre:"Rodrigo", apellido: "Gartner", edad: 37, profesion: "Maestro"},
    {nombre: "Vanesa", apellido: "Gartner", edad: 42,profesion: "Martillera"},
    {nombre: "Matias", apellido: "Gartner", edad: 26, profesion: "Profesor"},
];

Usuario.sort((a,b) => a.edad - b.edad);
console.log(Usuario);

const buscarEdad37 = Usuario.find(edad => edad.edad === 37);
console.log(buscarEdad37); 

const totalEdad = Usuario.reduce((sumatoria, vida) => sumatoria + vida.edad, 0);
console.log(totalEdad);


