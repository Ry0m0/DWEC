document.getElementById("boton").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;

  if (nombre === "") {
    document.getElementById("mensaje").textContent = "Acceso denegado";
  } else {
    document.getElementById("mensaje").textContent = "Hola " + nombre;
  }
});