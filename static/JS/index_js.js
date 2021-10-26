function mostrarSugerencia (selectPais){

    var paisElegido = "";
    var xmlhttp;

    if (selectPais == "Espania"){
        paisElegido = "España";
    }else if (selectPais == "Mexico"){
        paisElegido = "México";
    }else if(selectPais == "Argentina"){
        paisElegido = "Argentina";
    }else if (selectPais == "Colombia"){
        paisElegido="Colombia";
    }else {
        paisElegido="nada"
    }

    
    if (selectPais.length == 0 || paisElegido == "nada"){
        document.getElementById("txtInformacion").innerHTML="No hay selección";
        mostrarCiudades();
        return;
    }

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                var jsonResponse = xmlhttp.responseText;
                var objetoJSON = JSON.parse(jsonResponse);
                paisesRecibidos = objetoJSON.listadoPaises.pais;

                for (var i = 0; i < paisesRecibidos.length; i++){
                    var nombrePais = objetoJSON.listadoPaises.pais[i].nombre;
                    if (nombrePais == paisElegido){
                        document.getElementById("txtInformacion").innerHTML = "El pais Recibidos es " + nombrePais + " y tiene indice " + i;
                        var ciudadesPais = objetoJSON.listadoPaises.pais[i].ciudadImportante;
                        mostrarCiudades (ciudadesPais);
                    }
                }
            }
    }

    xmlhttp.open("GET", "listadoPaises.json?nocache=' + (new Date()).getTime()'")
    xmlhttp.send();


}

function mostrarCiudades(arrayCiudades){
    var nodoMostrarResultados = document.getElementById("listaCiudades");
    if (!arrayCiudades){
        nodoMostrarResultados.innerHTML = "";
        return;
    }

    var contenidoAMostrar = "";
    for (var i = 0; i < arrayCiudades.length; i++){
        contenidoAMostrar = contenidoAMostrar + '<div id="ciudades' + i + '">';
        contenidoAMostrar += '<a href="https://www.google.com">' + arrayCiudades[i] + '</a></div>';
    }
    if (contenidoAMostrar) {
        nodoMostrarResultados.innerHTML = contenidoAMostrar;
    }
}