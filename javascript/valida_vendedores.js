function valida_vendedor() {
    var id = document.getElementById("ID").value;
    var nombre = document.getElementById("nombre").value;
    var ap = document.getElementById("ap").value;
    var am = document.getElementById("am").value;
    var radiosSexo = document.getElementsByName("sexo");
    var edad = document.getElementById("edad").value;
    var dia = document.getElementById("dia").selectedIndex;
    var mes = document.getElementById("mes").selectedIndex;
    var anio = document.getElementById("year").selectedIndex;


    var seleccionado = false;
    for (var i=0; i<radiosSexo.length; i++){
        if (radiosSexo[i].checked){
            seleccionado=true;
            break;
        }
    }

    if (id==null || id===0 || id.length===0 || !/^([0-9])*$/.test(id)){
        alert("Debes escribir un ID valido");
        document.getElementById("ID").focus();
    }else if(nombre==null || nombre.length===0 || /^\s+$/.test(nombre)){
        alert("Debes escribir tu nombre completo");
        document.getElementById("nombre").focus();
    }else if (ap==null || ap.length===0 || /^\s+$/.test(ap)){
        alert("Debes escribir tu apellido paterno completo");
        document.getElementById("ap").focus();
    }else if (am==null || am.length===0 || /^\s+$/.test(am)){
        alert("Debes escribir tu apellido materno completo");
        document.getElementById("am").focus();
    }else if (!seleccionado){
        alert("Debes elegir un genero");
    }else if (edad==null || edad===0 || edad.length===0 || !/^([0-9])*$/.test(edad)){
        alert("Debes escribir tu edad");
    }else if (dia==null || dia===0) {
        alert("Debes elegir un dia");
        document.getElementById("dia").focus();
    }else if (mes==null || mes===0) {
        alert("Debes elegir un mes");
        document.getElementById("mes").focus();
    }else if (anio==null || anio===0){
        alert("Debes elegir un año");
        document.getElementById("year").focus();
    }else{
        document.form_vendedor.submit();
    }
}