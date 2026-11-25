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