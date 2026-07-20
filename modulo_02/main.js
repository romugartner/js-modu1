

// juego de cartas: (llegar a 30 puntos)

const nombre =  prompt("coloca tu nombre aqui") 

let juego = prompt("elegi el juego deseado: 1. Truco 2. Chinchon 3. Rumi")

switch(juego){
    case "1":
    alert("Jugar Truco")
    console.log("Truco");
    break;


    case "2":
    alert("Jugar Chinchon")
    console.log("Chichon");
    break;


    case "3":
    alert("Jugar Rumi")
    console.log("Rumi");
    break;


    default:
        console.log("opcion invalida")
    break;

}