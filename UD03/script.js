// ==========================================
// 1. EVENTO DE REGISTRO (Creación de perfil)
// ==========================================
document.getElementById("boton").addEventListener("click", function () {
  // Obtenemos los valores del HTML
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;

  // Métodos de Date: Convertimos el texto de la fecha a un objeto Date
  const nacimiento = new Date(fecha);
  const hoy = new Date();
  // Calculamos la edad usando métodos de Date (getFullYear)
  const edad = hoy.getFullYear() - nacimiento.getFullYear();

  // Validación: Nombre vacío, fecha vacía, fecha futura o edad menor a 10
  if (nombre === "" || fecha === "" || nacimiento >= hoy || edad < 10) {
    document.getElementById("mensaje").textContent = "Acceso denegado";
  } else {
    document.getElementById("mensaje").textContent = "";

    // Métodos de String: trim() quita espacios, toUpperCase() pone en mayúsculas
    const nombreFormateado = nombre.trim().toUpperCase();

    // Modificación del DOM: innerHTML permite insertar etiquetas <br>
    document.getElementById("panel").innerHTML = "Jugador: " + nombreFormateado + "<br>Edad: " + edad + " años";

    // Manipulación dinámica de CSS: Cambiamos el color según la edad
    const panel = document.getElementById("panel");
    if (edad < 18) {
      panel.style.backgroundColor = "lightgreen";
    } else {
      panel.style.backgroundColor = "lightblue";
    }
    panel.style.padding = "10px";

    // ==========================================
    // 2. ALMACENAMIENTO DEL NAVEGADOR (Storage)
    // ==========================================
    // localStorage: Guarda el nombre de forma permanente (no expira)
    localStorage.setItem("jugador", nombreFormateado);

    // sessionStorage: Guarda los puntos de la partida actual (se borra al cerrar pestaña)
    sessionStorage.setItem("puntosPartida", "0");

    // Cookie: Guarda el último acceso. max-age=300 significa que dura 5 minutos (300 seg)
    document.cookie = "ultimoAcceso=" + nombreFormateado + "; max-age=300; path=/";
  }
});

// ==========================================
// 3. EVENTO DE JUEGO (Interacción y puntuación)
// ==========================================
let puntos = 0;

document.getElementById("atacar").addEventListener("click", function () {
  // Uso básico de Arrays: Creamos una lista de misiones
  const misiones = ["Derrotar al dragón", "Encontrar el tesoro", "Salvar a la princesa", "Escalar la montaña"];

  // Números aleatorios y redondeo: Math.random() saca un decimal, Math.floor() lo redondea hacia abajo
  const indiceAleatorio = Math.floor(Math.random() * misiones.length);
  const misionActual = misiones[indiceAleatorio]; // Extraemos la misión usando el índice

  // Math.round: Redondea al número entero más cercano
  let ganados = Math.round(Math.random() * 10);

  // Math.max: Compara 1 y "ganados", y devuelve el mayor. Así garantizamos que gane mínimo 1 punto.
  ganados = Math.max(1, ganados);

  puntos = puntos + ganados;

  // Modificación del DOM: Mostramos los puntos y la misión
  document.getElementById("puntos").textContent = "Puntos: " + puntos + " | Misión: " + misionActual;

  // Actualizamos el sessionStorage con los nuevos puntos
  sessionStorage.setItem("puntosPartida", puntos);
});

// ==========================================
// 4. VENTANA ADICIONAL (Pop-up)
// ==========================================
document.getElementById("btnAyuda").addEventListener("click", function () {
  // Recuperamos el nombre del localStorage (si no existe, ponemos "Desconocido")
  const nombreGuardado = localStorage.getItem("jugador") || "Desconocido";

  // window.open: Abre una nueva ventana. Le pasamos el nombre por la URL (Query String)
  window.open("ayuda.html?nombre=" + encodeURIComponent(nombreGuardado), "Ayuda", "width=400,height=300");
});