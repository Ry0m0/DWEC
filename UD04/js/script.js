// EJERCICIO 1: OBJETOS

// Creamos el objeto alumno
let alumno = {
    edad: 18,
    admin: false,
    stats: {
        posts: 0,
        followers: 0
    }
};

// Seleccionamos el párrafo del HTML donde mostraremos los resultados
let output = document.getElementById("output");

// 1. Incrementamos posts en 2 y followers en 3
alumno.stats.posts += 2;
alumno.stats.followers += 3;

// 2. Cambiamos admin a true y mostramos el resultado en el párrafo
alumno.admin = true;
output.innerHTML += "Admin actual: " + alumno.admin + "<br>";

// 3. Quitamos la propiedad admin del objeto
delete alumno.admin;

// 4. Función fuera del objeto para recorrer sus propiedades
function mostrarPropiedades(obj) {
    for (let clave in obj) {
        let valor = obj[clave];

        // Si el valor es una función, no lo mostramos
        if (typeof valor === "function") {
            continue;
        }

        // Si el valor es un objeto (y no es null), recorremos sus propiedades internas
        if (typeof valor === "object" && valor !== null) {
            output.innerHTML += clave + ":<br>";
            for (let subClave in valor) {
                if (typeof valor[subClave] !== "function") {
                    output.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;" + subClave + ": " + valor[subClave] + "<br>";
                }
            }
        } else {
            // Propiedad normal (como edad)
            output.innerHTML += clave + ": " + valor + "<br>";
        }
    }
}

// Llamamos a la función pasando el objeto alumno
mostrarPropiedades(alumno);