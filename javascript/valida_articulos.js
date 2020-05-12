function valida_articulo() {
    var checkboxVer = document.getElementById('articulo').checked;
    var precio = document.forms["form_articulos"]["precio"].selectedIndex;

    if (precio==null || precio===0){
        alert("Debe seleccionar un precio")
    }else if (!checkboxVer){
        alert("Por favor selecione que ha elegido el articulo correcto");
    }else if (!document.querySelector('input[name="marca"]:checked')){
        alert("Por favor eliga una marca");
    }else {
        document.form_articulos.submit();
    }
}