const url = '../TrabajoPracticoTaller1Grupo7/productos.json';
const request = new XMLHttpRequest();
request.open('GET', url); // setean el método, la url de api
request.responseType = 'json'; //definen el tipo de dato que les devuelve
request.send(); //envían la solicitud
var productos = '';

request.onload = function() {
    console.log(request.response);
    productos = request.response;
    setTablaDestacados(); //funcion que trae productos destacados
}

function setTablaDestacados() {
    let destacados = productos.cursos;
    destacados.forEach(element => {
        if (element.cursoDestacado == true) {

            let elementGalery = '<div class="col">';
            elementGalery += '<div class="card shadow-sm" id="card' + element.id + '">';
            elementGalery += '<title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>';
            elementGalery += '<img src="' + element.imagen + '" class="card-img-top" alt="...">';
            elementGalery += '<div class="card-body">';
            elementGalery += '<p class="card-text"><b> NOMBRE: </b>' + element.nombre + ' </p>';
            elementGalery += '<p class="card-text"><b> PRECIO: </b>' + element.precio + ' </p>';
            elementGalery += '<p class="card-text"><b> DESCRIPCION: </b>' + element.descripcion + ' </p>';
            elementGalery += '<div class="d-flex justify-content-between align-items-center">';
            elementGalery += '<div class="btn-group">';
            elementGalery += '<button type="button" class="btn btn-sm btn-dark colorVerdeBoton"> <a href="' + element.pagina + '">Ver Mas</a></button>';
            elementGalery += '</div></div></div></div></div>';

            let gallery = document.getElementById('gallery_view');
            $('#gallery_view').append(elementGalery);

            console.log(element);
        }
    });
}