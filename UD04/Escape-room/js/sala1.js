// SALA 1

// Guardamos los elementos de la página en variables
const mensaje = document.getElementById("mensaje");           // el texto de mensajes
const btnReiniciar = document.getElementById("btn-reiniciar"); // botón reiniciar
const btnSiguiente = document.getElementById("btn-siguiente"); // botón siguiente sala
const btnComprobar = document.getElementById("btn-comprobar"); // botón comprobar
const inputCodigo = document.getElementById("codigo");         // caja donde se escribe el código

// OBJETO con propiedades simples, una función y un objeto anidado
const caja = {
    nombre: "Caja fuerte",   // propiedad simple: texto
    intentos: 0,             // propiedad simple: número
    abierta: false,          // propiedad simple: verdadero/falso
    secreto: {               // objeto anidado (un objeto dentro de otro)
        pista: "El año actual es 2026",
        valor: 2026
    },
    comprobar: function (numero) {      // propiedad con una función
        this.intentos++;                // suma 1 a los intentos
        if (numero === this.secreto.valor) {  // si el número es el correcto
            this.abierta = true;        // la caja se abre
        }
    }
};

// CLONACIÓN: hacemos una copia del objeto
// {...caja} copia la primera capa; "secreto" se copia aparte para que sea independiente
const copiaCaja = { ...caja, secreto: { ...caja.secreto } };
console.log("Copia de la caja:", copiaCaja);

// EXCEPCIONES: si algo falla dentro de try, se ejecuta catch
try {
    mensaje.textContent = "Pista: " + caja.secreto.pista;  // mostramos la pista
} catch (error) {
    console.log("Error:", error.message);                  // si falla, mostramos el error en consola
}

// Cuando se pulsa "Comprobar"
btnComprobar.addEventListener("click", function () {
    caja.comprobar(Number(inputCodigo.value));  // convertimos el texto a número y comprobamos

    if (caja.abierta) {   // si la caja está abierta
        mensaje.textContent = "¡Caja abierta! Puedes ir a la Sala 2.";
        btnSiguiente.disabled = false;          // activamos el botón de la siguiente sala
    } else {              // si no
        mensaje.textContent = "Código incorrecto. Intentos: " + caja.intentos;
    }
});

// Recarga la sala actual
btnReiniciar.addEventListener("click", function () {
    window.location.reload();
});

// Cambia a la sala 2
btnSiguiente.addEventListener("click", function () {
    window.location.href = "sala2.html";
});