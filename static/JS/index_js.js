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
        
    }


}