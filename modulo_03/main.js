// Saludar a cliente

function saludarCliente(nombre) {
    console.log("Hola " + nombre);
}

let nombre = prompt("Coloca tu nombre:")
saludarCliente("Romulo Gartner");


// // Puntos con tipo flecha
const duplicarPuntos = (puntos) => puntos * 2;

let misPuntos = duplicarPuntos(50);

console.log(misPuntos); 



//Calcular el precio de las naranjas con return 

function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

let precio = Number(prompt("Ingresá el precio de las naranjas"));
let cantidad = Number(prompt("Ingresá la cantidad de naranjas a llevar"));

let resultado = calcularTotal(precio,cantidad); 

console.log(resultado);


