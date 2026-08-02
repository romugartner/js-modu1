/* Preparación de la Colección:
 Crea un array con un nombre semántico asociado a tu proyecto.
 Inicialízalo con al menos 5 elementos (strings o números).*/

const nombreFamilia = ["Romulo", "Rodrigo", "Vanesa", "Matias", "Elva"];

/* Manipulación Dinámica:
Agrega un nuevo elemento al final del array usando push.
Agrega uno al principio usando unshift.
Elimina el último elemento y guárdalo en una variable para mostrarlo en un mensaje: "Se ha eliminado el elemento: [nombre]"*/


function saludarCliente(nombre) {
    console.log("Hola " + nombre);

    nombreFamilia.push("Favio");

    nombreFamilia.unshift("Ana");

    let eliminado = nombreFamilia.pop();
    alert("Se ha eliminado el elemento: " + eliminado);
    console.log(nombreFamilia);
    
}

let nombre = prompt("Coloca tu nombre:")
saludarCliente(nombre);


/*Búsqueda y Validación:
Solicita al usuario (mediante prompt o una variable fija) el nombre de un elemento para buscar.
Usa includes para verificar si existe.
Si existe, usa indexOf para informar en qué posición (índice) se encuentra.*/

let buscarElemento = prompt("Busca el nombre que necesites:");


console.log(buscarElemento);

// nombreFamilia.includes("Vanesa");
console.log(nombreFamilia.includes(buscarElemento));

console.log(nombreFamilia.indexOf(buscarElemento));

/* Actualización por Índice:
Busca un índice específico y cambia su valor por uno nuevo implementando el método splice.*/

nombreFamilia.splice(1, 1, "Mario");
console.log(nombreFamilia)

/*Reporte Iterativo:
Crea una función para recorrer el array.
Dentro de la función, utiliza un bucle for...of para recorrer el array y mostrar cada elemento con un formato claro (ej: "Producto: Manzana").*/

function recorrerArray(busqueda) {
    for (const familia of nombreFamilia){
    console.log("Hoy voy a estar con " + familia)
    }
}

let busqueda = prompt("Coloca lo que desees de la busqueda")
recorrerArray(busqueda)
