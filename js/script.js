console.log("Mi página");

let test = '';

function enviarDatos() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let textarea = document.getElementById("info");
    if (nombre.value == '') {
        alert("Falta ingresar nombre \n");
    }
    if (apellido.value == '') {
        alert("Falta ingresar apellido \n");
    }
    if (telefono.value == '') {
        alert("Falta ingresar telefono \n");

    }
    if (email.value == '') {
        alert("Falta ingresar Email");
    }
    if (textarea.value == '') {
        alert("Falta ingresar su consulta \n");
    }
    alert("Mensaje enviado con éxito. \n Nos pondremos en contacto a la brevedad");
}