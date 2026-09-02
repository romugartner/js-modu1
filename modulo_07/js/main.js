// 1. Array base (tus objetos)
let usuarios = [
  { id: 1, nombre: "Romulo", apellido: "Gartner", edad: 32, profesion: "Administrativo" },
  { id: 2, nombre: "Rodrigo", apellido: "Gartner", edad: 37, profesion: "Maestro" },
  { id: 3, nombre: "Vanesa", apellido: "Gartner", edad: 42, profesion: "Martillera" },
  { id: 4, nombre: "Matias", apellido: "Gartner", edad: 26, profesion: "Profesor" },
];

// 2. Referencias del DOM
const formUsuario = document.getElementById("formUsuario");
const contenedorItems = document.getElementById("contenedor-items");
const mensajeTotal = document.getElementById("mensajeTotal");
const btnOrdenar = document.getElementById("btnOrdenar");


// 3. Función para renderizar la lista en el DOM
function renderizarUsuarios(lista) {
  contenedorUsuarios.innerHTML = ""; // Limpia el contenedor

  lista.forEach((usuario) => {
    const tarjeta = document.createElement("div");
    tarjeta.style.border = "1px solid #ccc";
    tarjeta.style.margin = "8px 0";
    tarjeta.style.padding = "10px";

    tarjeta.innerHTML = `
      <h3>${usuario.nombre} ${usuario.apellido}</h3>
      <p>Edad: ${usuario.edad} años</p>
      <p>Profesión: ${usuario.profesion}</p>
      <button class="btn-eliminar" data-id="${usuario.id}">Eliminar</button>
    `;

    contenedorUsuarios.appendChild(tarjeta);
  });

  actualizarTotalEdades();
  activarBotonesEliminar();
}

// 4. Calcular total con reduce y mostrarlo en la vista
function actualizarTotalEdades() {
  const total = usuarios.reduce((sumatoria, u) => sumatoria + u.edad, 0);
  mensajeTotal.textContent = `Suma total de edades registradas: ${total}`;
}

// 5. Asignar evento eliminar a cada botón renderizado
function activarBotonesEliminar() {
  const botones = document.querySelectorAll(".btn-eliminar");
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const idAEliminar = Number(e.target.dataset.id);
      usuarios = usuarios.filter((u) => u.id !== idAEliminar);
      renderizarUsuarios(usuarios); // Actualiza la vista
    });
  });
}

// 6. Evento de formulario (agregar usuario)
formUsuario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nuevoUsuario = {
    id: Date.now(),
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    edad: Number(document.getElementById("edad").value),
    profesion: document.getElementById("profesion").value,
  };

  usuarios.push(nuevoUsuario);
  formUsuario.reset();
  renderizarUsuarios(usuarios);
});

// 7. Eventos de botones (sort y slice/top 3)
btnOrdenar.addEventListener("click", () => {
  usuarios.sort((a, b) => a.edad - b.edad);
  renderizarUsuarios(usuarios);
});




