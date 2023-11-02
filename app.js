
const estadoSelect = document.getElementById("estado");
const estadoSeleccionadoLabel = document.getElementById("labelEstado")

function cambiarEstado () {
    let estadoSelecto = estadoSelect.value;
    estadoSeleccionadoLabel.textContent = "Estado de la tarea: " + estadoSelecto;
}

estadoSelect.addEventListener("change", cambiarEstado);