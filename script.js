document.getElementById("boton").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;

  const nacimiento = new Date(fecha);
  const hoy = new Date();
  const edad = hoy.getFullYear() - nacimiento.getFullYear();

  if (nombre === "" || fecha === "" || nacimiento >= hoy || edad < 10) {
    document.getElementById("mensaje").textContent = "Acceso denegado";
  } else {
    document.getElementById("mensaje").textContent = "Hola " + nombre;
  }
});