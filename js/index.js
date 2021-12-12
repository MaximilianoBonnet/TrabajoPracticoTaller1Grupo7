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