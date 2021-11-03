console.log("iniciar nuestro js");
let array_colores = new Array("btn-info", "btn-secondary", "btn-dark");

function colorCard() {
    let botones = document.getElementsByClassName("btn"); //html collecctions
    let array_botones = Array.prototype.slice.call(botones); //html en array
    array_botones.forEach(function(element, indice, array) {
        console.log(element);
        element.classList.add(array_colores[indice]);

    });
}