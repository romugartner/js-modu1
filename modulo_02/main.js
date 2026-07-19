// Switch

const nombre = prompt("ingresa tu nombre aqui")

let opcion = prompt("Selecciona la opcion correspondiente: 1. Gana River 2. Gana Banfield 3.  Empatan ")

switch(opcion){
    case "1":
    console.log("Gana River");
    alert("Gana River");
    break;

    case "2":
    console.log("Gana Banfield");
    alert("Gana River");
    break;

    case "3":
    console.log("Empatan");
    alert("Gana River");
    break;

    default:
        console.log("opcion invalida")
    break;


}




