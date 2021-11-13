console.log("mi página");

let test = ' ';


function enviarDatos() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let textarea = document.getElementById("info")
    if (email.value == '') {
        alert("Falta ingresar datos");
    }
    if (textarea == '') {
        alert("Falta ingresar datos \n");
    }
    alert("Mensaje enviado con éxito. \n Nos pondremos en contacto a la brevedad");
}