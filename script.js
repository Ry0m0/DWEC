document.getElementById("boton").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;

  const nacimiento = new Date(fecha);
  const hoy = new Date();
  const edad = hoy.getFullYear() - nacimiento.getFullYear();

  if (nombre === "" || fecha === "" || nacimiento >= hoy || edad < 10) {
    document.getElementById("mensaje").textContent = "Acceso denegado";
  } else {
    document.getElementById("mensaje").textContent = "";
    const nombreFormateado = nombre.trim().toUpperCase();
    document.getElementById("panel").innerHTML = "Jugador: " + nombreFormateado + "<br>Edad: " + edad + " años";
  }

  const panel = document.getElementById("panel");
  if (edad < 18) {
    panel.style.backgroundColor = "lightgreen";
  } else {
    panel.style.backgroundColor = "lightblue";
  }
  panel.style.padding = "10px";

});