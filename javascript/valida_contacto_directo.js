function ValidaContactoDir(){
   var nombre = document.getElementById("nombre").value;
   var radiosSexo = document.getElementsByName("sexo");
   var edad = document.getElementById("edad").selectedIndex;
   var checkboxAx = document.getElementsByName("noticias");

    var seleccionado = false;
    for (var i=0; i<radiosSexo.length; i++){
        if (radiosSexo[i].checked){
            seleccionado=true;
            break;
        }
    }

    var seleccionado2 = false;
    for (var b=0; b<checkboxAx.length; b++){
        if (checkboxAx[b].checked){
            seleccionado2=true;
            break;
        }
    }

    if (nombre==null || nombre.length===0 || /^\s+$/.test(nombre)){
        alert("Debes escribir tu nombre completo");
        document.getElementById("nombre").focus();
    } else if (!seleccionado){
        alert("Debes elegir un genero");
    } else if (edad==null || edad===0){
        alert("Debes elegir tu edad");
        document.getElementById("edad").focus();
    }else if (!seleccionado2){
        alert("Debes elegir al menos 1 noticia")
    }else{
        document.form_contactoDir.submit();
    }

}