function valida_clientes() {
    var id = document.getElementById("ID").value;
    var domicilio = document.getElementById("domicilio").value;
    var rfc = document.getElementById("rfc").value;
    var razonSocial = document.getElementById("razonSocial").value;


    if (id==null || id===0 || id.length===0 || !/^([0-9])*$/.test(id)){
        alert("Debes escribir un ID valido");
        document.getElementById("ID").focus();
    }else if (domicilio.length < 5 || domicilio.length===0){
        alert("Ingresa una direccion valida");
        document.getElementById("domicilio").focus();
    } else if (razonSocial.length < 3 || razonSocial.length===0){
        alert("Inngresa una razon social valida");
        document.getElementById("razonSocial").focus();
    } else if(rfc.length !== 13){
        alert("Ingrese una rfc valida");
        document.getElementById("rfc").focus();
    } else{
        document.form_cliente.submit();
    }

}
