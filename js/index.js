const url = 'productos.json';
const request = new XMLHttpRequest();
request.open('GET', url); // setean el método, la url de api
request.responseType = 'json'; //definen el tipo de dato que les devuelve
request.send(); //envían la solicitud
var productos = '';

console.log(request.response);



function setDataCursos() {
    let curso = document.getElementById("");
    curso.innerHTML = .dt;
    let titulo = document.getElementById("title");
    titulo.innerHTML = "<b>" + equipo["pais"] + "</b>";
    let grupo = document.getElementById("grupo");
    grupo.innerHTML = equipo.grupo;


}

$(document).ready(function() {

    $('#addPlayer').submit(function(e) {
        e.preventDefault();
        console.log("ENVIADO FORMULARIO")
    })
});

function enviarForm() {
    $('#addPlayer').submit();
}

function setTableGammers() {
    let jugadores = equipo.jugadores;
    jugadores.forEach(element => {


        let elementGalery = '<div class="col"><div class="card shadow-sm" id="card' + element.id + '">';
        elementGalery += '<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>';
        elementGalery += '<div class="card-body">';
        elementGalery += '<p class="card-text"><b> NOMBRE: ' + element.nombre + ' </b></p>';
        elementGalery += '<p class="card-text"><b> POSICION: </b>' + element.posicion + ' </p>';
        elementGalery += '<p class="card-text"><b> APODO: </b>' + element.apodo + ' </p>';
        elementGalery += '<p class="card-text"><b> EDAD: </b>' + element.edad + ' </p>';
        elementGalery += '<div class="d-flex justify-content-between align-items-center">';
        elementGalery += '<div class="btn-group">';
        elementGalery += '<button type="button" class="btn btn-sm btn-outline-secondary" onclick="viewPlayer(\'' + element + '\')">View</button>';
        elementGalery += '<button type="button" class="btn btn-sm btn-outline-secondary" onclick="showAlert(' + element.id + ', true)">Alert</button>';
        elementGalery += '<button type="button" class="btn btn-sm btn-outline-secondary" onclick="showAlert(' + element.id + ', false)">remove Alert</button>';
        elementGalery += '</div><small class="text-muted">9 mins</small></div></div></div></div>';

        let gallery = document.getElementById('gallery_view');
        // gallery.innerHTML = elementGalery;
        $('#gallery_view').append(elementGalery);

        console.log(element);
    });
}


function viewPlayer(player) {
    console.log(Object.values(player));
}