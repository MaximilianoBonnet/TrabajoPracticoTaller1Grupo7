/*
console.log("Mi página");

let test = '';

function testVal(dato) {
    let text = document.createTextNode(dato);
    element.appenchild(text)
    document.getElementById("body_page").appendChild(element);
}

function enviarDatos() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let textarea = document.getElementById("info");
    let estado = true;
    if (nombre.value == '') {
        modalMostrar("Falta ingresar nombre \n");
        estado = false;
    } else if (apellido.value == '') {
        modalMostrar("Falta ingresar apellido \n");
        estado = false;
    } else if (telefono.value == '') {
        modalMostrar("Falta ingresar telefono \n");
        estado = false;
    } else if (email.value == '') {
        modalMostrar("Falta ingresar Email");
        estado = false;
    } else if (textarea.value == '') {
        modalMostrar("Falta ingresar su consulta \n");
        estado = false;
    }
    if (estado = true) {
        modalMostrar("Mensaje enviado con éxito. \n Nos pondremos en contacto a la brevedad");
    }

}

function modalMostrar(title, description) {
    let elementTitle = document.getElementById('exampleModalLabel');
    title = document.createTextNode(title);


    let elementDescription = document.getElementById('textModal');
    description = document.createTextNode(description);

    elementTitle.innerHTML = title;
    elementDescription.innerHTML = description;


    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
        keyboard: false
    })
    myModal.show();
}
*/

let Enviar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
Enviar.addEventListener("click", function(e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});
cerrar.addEventListener("click", function() {
    modal.classList.toggle("modal-close")
})