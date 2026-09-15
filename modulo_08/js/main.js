// 1. Array inicial por defecto (si Storage está vacío)
const usuariosIniciales = [
  { id: 1, nombre: "Romulo", apellido: "Gartner", edad: 32, profesion: "Administrativo" },
  { id: 2, nombre: "Rodrigo", apellido: "Gartner", edad: 37, profesion: "Maestro" },
  { id: 3, nombre: "Vanesa", apellido: "Gartner", edad: 42, profesion: "Martillera" },
  { id: 4, nombre: "Matias", apellido: "Gartner", edad: 26, profesion: "Profesor" },
];

// 2. Persistencia: Recuperar datos desde localStorage usando JSON.parse y OR (||)
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || usuariosIniciales;

// 3. Referencias del DOM
const formUsuario = document.getElementById("formUsuario");
const contenedorItems = document.getElementById("contenedor-items");
const mensajeTotal = document.getElementById("mensajeTotal");
const mensajeFeedback = document.getElementById("mensajeFeedback");
const btnOrdenar = document.getElementById("btnOrdenar");
const btnVaciar = document.getElementById("btnVaciar");
const inputBuscar = document.getElementById("inputBuscar");

// Función auxiliar para sincronizar cambios en localStorage
function guardarEnStorage() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// 4. Mensajes dinámicos en pantalla
function mostrarFeedback(mensaje) {
  mensajeFeedback.textContent = mensaje;
  setTimeout(() => {
    mensajeFeedback.textContent = "";
  }, 2500);
}

// 5. Renderizado dinámico con Destructuring y Operador Ternario
function renderizarUsuarios(lista) {
  contenedorItems.innerHTML = "";

  // Operador ternario para verificar si la lista tiene elementos
  lista.length === 0
    ? (contenedorItems.innerHTML = "<p>No hay registros disponibles.</p>")
    : lista.forEach((usuario) => {
        // ✅ Destructuring del objeto usuario
        const { id, nombre, apellido, edad, profesion } = usuario;

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-usuario");

        tarjeta.innerHTML = `
          <div>
            <h3>${nombre} ${apellido}</h3>
            <p>Edad: ${edad} años | Profesión: ${profesion}</p>
          </div>
          <button class="btn-eliminar" data-id="${id}">Eliminar</button>
        `;

        contenedorItems.appendChild(tarjeta);
      });

  actualizarTotalEdades();
  activarBotonesEliminar();
}

// 6. Total de edades
function actualizarTotalEdades() {
  const total = usuarios.reduce((acum, u) => acum + u.edad, 0);
  // Operador ternario para formatear el mensaje
  mensajeTotal.textContent = total > 0 
    ? `Suma total de edades registradas: ${total}` 
    : "Sin registros para sumar edades.";
}

// 7. Evento para eliminar elemento individual y sincronizar Storage
function activarBotonesEliminar() {
  const botones = document.querySelectorAll(".btn-eliminar");
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const idAEliminar = Number(e.target.dataset.id);
      usuarios = usuarios.filter((u) => u.id !== idAEliminar);
      
      guardarEnStorage();
      renderizarUsuarios(usuarios);
      mostrarFeedback("Usuario eliminado correctamente.");
    });
  });
}

// 8. Evento Submit: Crear objeto, agregar y guardar en Storage
formUsuario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nuevoUsuario = {
    id: Date.now(),
    nombre: document.getElementById("nombre").value.trim(),
    apellido: document.getElementById("apellido").value.trim(),
    edad: Number(document.getElementById("edad").value),
    profesion: document.getElementById("profesion").value.trim(),
  };

  usuarios.push(nuevoUsuario);
  guardarEnStorage();
  formUsuario.reset();
  renderizarUsuarios(usuarios);
  mostrarFeedback("¡Usuario guardado con éxito!");
});

// 9. Evento de teclado: Búsqueda en tiempo real
inputBuscar.addEventListener("input", () => {
  const texto = inputBuscar.value.toLowerCase().trim();
  const filtrados = usuarios.filter(({ nombre, profesion }) => 
    nombre.toLowerCase().includes(texto) || profesion.toLowerCase().includes(texto)
  );
  renderizarUsuarios(filtrados);
});

// 10. Ordenamiento por edad
btnOrdenar.addEventListener("click", () => {
  usuarios.sort((a, b) => a.edad - b.edad);
  guardarEnStorage();
  renderizarUsuarios(usuarios);
  mostrarFeedback("Lista ordenada por edad.");
});

// 11. Vaciar Storage y reiniciar simulador
btnVaciar.addEventListener("click", () => {
  usuarios = [];
  localStorage.removeItem("usuarios"); // o localStorage.clear()
  renderizarUsuarios(usuarios);
  mostrarFeedback("Se eliminaron todos los registros.");
});

// Render inicial
renderizarUsuarios(usuarios);


