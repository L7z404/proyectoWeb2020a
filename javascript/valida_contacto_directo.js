function ValidaContactoDir(){
   var nombre = document.getElementById("nombre").value;
   var radiosSexo = document.getElementsByName("sexo");

    var seleccionado = false;
    for (var i=0; i<radiosSexo.length; i++){
        if (radiosSexo[i].checked){
            seleccionado=true;
            break;
        }
    }

    if (nombre==null || nombre.length===0 || /^\s+$/.test(nombre)){
        alert("Debes escribir tu nombre completo");
        document.getElementById("nombre").focus();
    } else if (!seleccionado){
        alert("Debes elegir un genero");
    }

}