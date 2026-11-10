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

let puntos = 0;

document.getElementById("atacar").addEventListener("click", function () {

  const misiones = ["Derrotar al dragón", "Encontrar el tesoro", "Salvar a la princesa", "Escalar la montaña"];

  const indiceAleatorio = Math.floor(Math.random() * misiones.length);
  const misionActual = misiones[indiceAleatorio];

  const ganados = Math.round(Math.random() * 10);
  ganados = Math.max(1, ganados);

  puntos = puntos + ganados;

  document.getElementById("puntos").textContent = "Puntos: " + puntos + " | Misión: " + misionActual;
});