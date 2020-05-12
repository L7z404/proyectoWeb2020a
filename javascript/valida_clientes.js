function valida_clientes() {
    var domicilio = document.getElementById("domicilio").value;
    var rfc = document.getElementById("rfc").value;
    var razonSocial = document.getElementById("razonSocial").value;

    if (domicilio.length===0 && rfc.length === 0 && razonSocial.length === 0){
        alert("Por favor llene el formulario")
    } else if (domicilio.length < 5 || domicilio.length===0){
        alert("Ingresa una direccion valida")
    } else if (razonSocial.length < 3 || razonSocial.length===0){
        alert("Inngresa una razon social valida")
    } else if(rfc.length !== 13){
        alert("Ingrese una rfc valida")
    } else{
        document.form_cliente.submit();
    }

}
