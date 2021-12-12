function validar() {
    let usuario = $('#usuario').val();
    let Contrasena = $('#pass').val();
    if (usuario == '' || Contrasena == '') {
        alert('Debe ingresar un usuario y contraseña');
    } else {
        let url = "../TrabajoPracticoTaller1Grupo7/credenciales.json";
        $.getJSON(url, function(data) {
                console.log(data);
                sha256(Contrasena).then(function(respuestaHasheada) {
                    chequearUsuario(data, usuario, respuestaHasheada);
                });
            })
            .fail(function() {
                alert("error página en mantenimiento ");
            })
    }
}


function chequearUsuario(data, usuario, pass) {
    var user = false;
    $.each(data.users, function(key, val) {

        val = JSON.stringify(val);
        val = JSON.parse(val);

        if (usuario === val.user) {
            user = true;

            if (pass == val.password) {
                console.log("Usuario Logueado");
                $('#userId').val(val.idUser);
                $('#userName').val(val.user);
                $('#perfilUser').val(val.perfil);
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