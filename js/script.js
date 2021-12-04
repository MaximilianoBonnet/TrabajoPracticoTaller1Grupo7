console.log("Mi página");

let test = '';

var nombreYApellido = document.getElementById('nomYAp');
var Email = document.getElementById('Email');
var Telefono = document.getElementById('Telefono');
var Comentario = document.getElementById('Comentario');
var errorNombreYAp = document.getElementById('errorNombreYAp');
var errorEmail = document.getElementById('errorEmail');
var errorTelefono = document.getElementById('errorTelefono');
var errorComentario = document.getElementById('errorComentario');
errorNombreYAp.style.color = 'red';
errorEmail.style.color = 'red';
errorTelefono.style.color = 'red';
errorComentario.style.color = 'red';

function enviarFormulario() {
    var mostrarModal = true;
    if (nombreYApellido.value === null | nombreYApellido.value === '') {
        errorNombreYAp.innerHTML = 'ingresa tu nombre y apellido';
        mostrarModal = false;
    } else {
        errorNombreYAp.innerHTML = '';
    }

    if (Email.value === null | Email.value === '') {
        errorEmail.innerHTML = 'ingresa tu email';
        mostrarModal = false
    } else {
        errorEmail.innerHTML = '';
    }

    if (Telefono.value === null | Telefono.value === '') {
        errorTelefono.innerHTML = 'ingresa tu telefono';
        mostrarModal = false
    } else {
        errorTelefono.innerHTML = '';
    }

    if (Comentario.value === null | Comentario.value === '') {
        errorComentario.innerHTML = 'ingresa un comentario';
        mostrarModal = false
    } else {
        errorComentario.innerHTML = '';
    }

    if (mostrarModal) {
        modal_container.classList.add('show');
    }

    return false;
}

const boton_enviar = document.getElementById('send');
const modal_container = document.getElementById('modal_container');
const modal_container2 = document.getElementById('modal_container2');
const boton_close = document.getElementById('close');
const boton_cerrar_datos_ingresados = document.getElementById('cerrar_datos_ingresados');


boton_close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

boton_enviar.addEventListener('click', () => {
    modal_container.classList.remove('show');
    var nombreYApDiv = document.getElementById('nombre_apellido_modal');
    var emailModalDiv = document.getElementById('email_modal');
    var telefonoModalDiv = document.getElementById('telefono_modal');
    var comentarioModalDiv = document.getElementById('comentario_modal');


    nombreYApDiv.innerHTML = nombreYApellido.value;
    emailModalDiv.innerHTML = Email.value;
    telefonoModalDiv.innerHTML = Telefono.value;
    comentarioModalDiv.innerHTML = Comentario.value;

    modal_container2.classList.add('show');
});

boton_cerrar_datos_ingresados.addEventListener('click', () => {
    modal_container2.classList.remove('show');
});