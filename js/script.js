console.log("iniciar nuestro js");
let array_colores = new Array("btn-info", "btn-secondary", "btn-dark");

function colorCard(estado) {
    //primero defino botones
    let botones = document.getElementsByClassName("btn"); //html collecctions
    let array_botones = Array.prototype.slice.call(botones); //html en array
    var count_array = array_colores.length - 1;
    var i = 0;
    array_botones.forEach(function(element, indice, array) {

        if (estado == true) {
            element.classList.add("btn-primary");
            element.classList.add(array_colores[i]);

        } else {
            element.classList.remove(array_colores[indice]);
            element.classList.add("btn-primary");
        }
        if (i == count_array) {
            i = 0;
        } else {
            i++;
        }
    });
}

function mostrarOcultar(show) {
    let row = document.getElementById("mostrarOcultar");
    if (show == true) {
        row.classList.remove("d-none");
    } else {
        row.classList.add("d-none");
    }
}