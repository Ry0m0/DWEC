document.getElementById("boton").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;

  if (nombre === "" || fecha === "") {
    document.getElementById("mensaje").textContent = "Acceso denegado";
  } else {
    document.getElementById("mensaje").textContent = "Hola " + nombre;
  }
});