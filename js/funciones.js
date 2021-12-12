async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder('utf-8').encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    //console.log(hashHex);
    return hashHex;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let params = new URLSearchParams(location.search);

// Ordeno objetos de Json
function ordenarJSON(data, key, orden) {
    return data.sort(function(a, b) {
        var x = a[key],
            y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}

// Muestro destacados de indez
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
            elementGalery += ' <div class="btn-group">';
            elementGalery += '<button type="button" class="btn btn-dark"> <center> <a href="' + element.pagina + '">Ver Mas</a></button></center>';
            elementGalery += '</div></div></div></div></div>';

            let gallery = document.getElementById('gallery_view');
            $('#gallery_view').append(elementGalery);

        }
    });
}

// Muestro cursos al cargar pagina
function setCursos() {

    let listaCursos = productos.cursos;
    listaCursos.forEach(element => {
        if (element.cursoDestacado == false) {

            let elementListaCursos = '<div class="col-2">';
            elementListaCursos += '<div  class="cards" id="card' + element.id + '">';
            elementListaCursos += '<img src="' + element.imagen + '" class="card-img-top" alt="' + element.imagen + '">';
            elementListaCursos += '<div class="card-body">';
            elementListaCursos += '<h5 class="card-text">' + element.nombre + ' </h5>';
            elementListaCursos += '<p class="card-title">' + element.descripcion + '</p>';
            elementListaCursos += '<p>' + element.precio + '</p>' + '<center> <a href="contacto.html" class="btn btn-dark">Contacto</a></center>';
            elementListaCursos += '</div></a></div></div>';
            let gallery = document.getElementById('listaCursos');
            $('#listaCursos').append(elementListaCursos);
        }
    });
    ocultarOrdenamientoZA();
    ocultarOrdenamientoAZ();
}

// Ordeno Az
function setOrdenarAZ() {

    let listaCursos = productos.cursos;
    var oJSON = ordenarJSON(listaCursos, 'nombre', 'asc');

    oJSON.forEach(element => {
        if (element.cursoDestacado == false) {

            let elementListaCursos = '<div class="col-2">';
            elementListaCursos += '<div  class="cards" id="card' + element.id + '">';
            elementListaCursos += '<img src="' + element.imagen + '" class="card-img-top" alt="' + element.imagen + '">';
            elementListaCursos += '<div class="card-body">';
            elementListaCursos += '<h5 class="card-text">' + element.nombre + ' </h5>';
            elementListaCursos += '<p class="card-title">' + element.descripcion + '</p>';
            elementListaCursos += '<p>' + element.precio + '</p>' + '<center> <a href="contacto.html" class="btn btn-dark">Contacto</a></center>';
            elementListaCursos += '</div></a></div></div>';

            let gallery = document.getElementById('ordenarAZ');
            $('#ordenarAZ').append(elementListaCursos);

            console.log(element);
        }
    });
    ocultarOrdenamientoZA();
}

//Ordeno ZA
function setOrdenarZA() {

    let listaCursos = productos.cursos;
    var oJSON = ordenarJSON(listaCursos, 'nombre', 'desc');
    oJSON.forEach(element => {
        if (element.cursoDestacado == false) {


            let elementListaCursos = '<div class="col-2">';
            elementListaCursos += '<div  class="cards" id="card' + element.id + '">';
            elementListaCursos += '<img src="' + element.imagen + '" class="card-img-top" alt="' + element.imagen + '">';
            elementListaCursos += '<div class="card-body">';
            elementListaCursos += '<h5 class="card-text">' + element.nombre + ' </h5>';
            elementListaCursos += '<p class="card-title">' + element.descripcion + '</p>';
            elementListaCursos += '<p>' + element.precio + '</p>' + '<center> <a href="contacto.html" class="btn btn-dark">Contacto</a></center>';
            elementListaCursos += '</div></a></div></div>';

            let gallery = document.getElementById('ordenarZA');
            $('#ordenarZA').append(elementListaCursos);

            console.log(element);
        }
    });
    ocultarOrdenamientoAZ();
}

function mostrarCursos() {
    var x = document.getElementById("mostrarOcultarCursos");
    if (x.style.display != "none") {
        x.style.display = "none";
        ocultarOrdenamientoAZ();
        ocultarOrdenamientoZA();
    } else {
        x.style.display = "block";
        ocultarOrdenamientoZA();
        ocultarOrdenamientoAZ();
    }
}


function mostrarOrdenarAZ() {
    var x = document.getElementById("mostrarOcultarOrdenarAZ");
    if (x.style.display != "none") {
        x.style.display = "none";
        refreshPage();
    } else {
        x.style.display = "block";
        ocultarCursos();
        ocultarOrdenamientoZA();
    }
}

function mostrarOrdenarZA() {
    var x = document.getElementById("mostrarOcultarOrdenarZA");
    if (x.style.display != "none") {
        x.style.display = "none";
        refreshPage();
    } else {
        x.style.display = "block";
        ocultarCursos();
        ocultarOrdenamientoAZ();
    }
}

function ocultarCursos() {
    var ordenarCursosNone = document.getElementById("listaCursos");
    ordenarCursosNone.style.display = "none";
}

//oculto ordenamiento ZA
function ocultarOrdenamientoZA() {
    var ordenarAZNone = document.getElementById("mostrarOcultarOrdenarZA");
    ordenarAZNone.style.display = "none";
}

//oculto ordenamiento AZ
function ocultarOrdenamientoAZ() {
    var ordenarZANone = document.getElementById("mostrarOcultarOrdenarAZ");
    ordenarZANone.style.display = "none";
}

//refresco pagina
function refreshPage() {
    window.location.reload();
}