// juego de cartas: (llegar a 30 puntos)

const nombre =  prompt("coloca tu nombre aqui") 

let juego = prompt("elegi el juego deseado: 1. Truco 2. Chinchon 3. Rumi")

switch(juego){
    case "1":
    console.log("Truco");
    break;


    case "2":
    console.log("Chichon");
    break;


    case "3":
    console.log("Rumi");
    break;


    default:
        console.log("opcion invalida")
    break;

}


for(let i = 0; i <=30; i++){
    console.log(i);
}
