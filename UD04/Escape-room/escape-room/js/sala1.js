// SALA 1 - ESTRUCTURA INICIAL

const mensaje = document.getElementById("mensaje");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnSiguiente = document.getElementById("btn-siguiente");

// Recargar la pantalla actual
btnReiniciar.addEventListener("click", function () {
    window.location.reload();
});

// Cambiar a la pantalla de la segunda sala
btnSiguiente.addEventListener("click", function () {
    window.location.href = "sala2.html";
});