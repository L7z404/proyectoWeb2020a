function valida_vendedor() {
    var edad = document.getElementById("edad").value;
    var nombre = document.getElementById("nombre").value;
    var ap = document.getElementById("ap").value;
    var am = document.getElementById("am").value;


    if (edad<18){
        if (edad<=0){
            alert("Por favor eliga una edad valida")
        }else {
            alert("Debes ser mayor de 17 años para llenar este formulario")
        }
    } else if (!document.querySelector('input[name="sexo"]:checked')){
        alert("Por favor elige un genero")
    }else if(document.forms["form_vendedor"]["fecha_contrato"].value === "" || document.forms["form_vendedor"]["fecha_contrato"].value === "1970-01-01"){
        alert("Por favor eliga una fecha")
    }
    else if (nombre_valido(nombre,ap,am)!==false){
        document.form_vendedor.submit();
    }
}

function nombre_valido(nombre,ap,am) {
    if (nombre.length < 3 || ap.length < 3 || am.length < 3){
        if (nombre.length === 0 || ap.length === 0 || am.length === 0){
            alert("Por favor ingrese los datos de su nombre")
            return false;
        } else{
            alert("Por favor ingrese nombres completos")
            return false;
        }
    }
    else{
        return true;
    }
}