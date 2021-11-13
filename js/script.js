console.log("Mi página");

let test = '';

function enviarDatos() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let textarea = document.getElementById("info");
    let estado = true;
    if (nombre.value == '') {
        alert("Falta ingresar nombre \n");
        estado = false;
    } else if (apellido.value == '') {
        alert("Falta ingresar apellido \n");
        estado = false;
    } else if (telefono.value == '') {
        alert("Falta ingresar telefono \n");
        estado = false;
    } else if (email.value == '') {
        alert("Falta ingresar Email");
        estado = false;
    } else if (textarea.value == '') {
        alert("Falta ingresar su consulta \n");
        estado = false;
    }
    if (estado = true) {
        alert("Mensaje enviado con éxito. \n Nos pondremos en contacto a la brevedad");
    }

}