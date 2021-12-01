function validar() {
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;

    if (usuario == "usuario" && Contraseña == "1234") {
        window.location.href = `./HOME.html`
    } else {
        alert("Verifique sus credenciales");
    }
}