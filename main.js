class Usuario {
  constructor(nombre, apellido, edad, profesion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.profesion = profesion;
   
  }

  saludar() {
    console.log(
      "Buenas, me llamo " + this.nombre + " " + this.apellido + ", estoy haciendo una tesis y soy " + this.profesion);
  }

  esMayorDeEdad() {
    return this.edad >= 18 && this.apellido == "Gartner"
  }
}

const Usuario1 = new Usuario("Vanesa", "Gartner", 42, "Martillera Publica");
const Usuario2 = new Usuario("Rodrigo", "Gartner", 37, "Profesor");
const Usuario3 = new Usuario("Elva", "Dumrauf", 42, "Enfermera");
const Usuario4 = new Usuario("Matias", "Gartner", 42, "Profesor");


Usuario1.saludar();
console.log(Usuario1.esMayorDeEdad());
console.log(Usuario1.apellido);

