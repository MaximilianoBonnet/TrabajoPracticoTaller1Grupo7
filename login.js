// function validar() {
//     var usuario = document.getElementById("usuario").value;
//     var Contraseña = document.getElementById("pass").value;

//     if (usuario == "usuario" && Contraseña == "1234") {
//         window.location.href = `./login2.html`
//     } else {
//         alert("Verifique sus credenciales");
//     }
// }


function validar() {
    let usuario = $('#usuario').val();
    let Contraseña = $('#pass').val();
    if (usuario == '' || Contraseña == '') {
        alert('Debe ingresar un usuario y contraseña');
    } else {
        let url = "credenciales.json";
        $.getJSON(url, function(data) {
                // console.log(data);
                sha256(Contraseña).then(function(respuestaHasheada) {
                    chequearUsuario(data, usuario, respuestaHasheada);
                    alert('Exito');
                });
            })
            .fail(function() {
                alert("error página en mantenimiento ");
            })
    }
}


function chequearUsuario(data, usuario, respuestaHasheada) {
    var user = false;
    $.each(data.users, function(key, val) {

        val = JSON.stringify(val);
        val = JSON.parse(val);

        if (usuario === val.user) {
            user = true;

            if (Contraseña == val.respuestaHasheada) {
                console.log("contraseña Correcta");
                $('#userId').val(val.idUser);
                $('#login_form').submit();
                return false;
            } else {
                alert("contraseña incorrecta");
                return false;
            }
        } else {
            console.log("usuario no coincide");
        }
    })

    if (user == false) {
        console.log("Usuario no registrado");
    }


}