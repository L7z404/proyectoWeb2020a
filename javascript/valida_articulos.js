function valida_articulo() {
    var id = document.getElementById("ID").value;
    var precio = document.getElementById("precio").selectedIndex;
    var radiosMarca = document.getElementsByName("marca");
    var checkboxAx = document.getElementsByName("articulo");


    var seleccionado = false;
    for (var i = 0; i < radiosMarca.length; i++) {
        if (radiosMarca[i].checked) {
            seleccionado = true;
            break;
        }
    }

    var seleccionado2 = false;
    for (var b = 0; b < checkboxAx.length; b++) {
        if (checkboxAx[b].checked) {
            seleccionado2 = true;
            break;
        }
    }

    if (id == null || id === 0 || id.length === 0 || !/^([0-9])*$/.test(id)) {
        alert("Debes escribir un ID valido");
        document.getElementById("ID").focus();
    }else if (!seleccionado) {
        alert("Debes elegir una marca");
        document.getElementById("marca").focus();
    }else if (precio==null || precio===0) {
        alert("Debes elegir un precio");
        document.getElementById("precio").focus();
    }else if (!seleccionado2){
        alert("Debes elegir por lo menos 1 articulo");
        document.getElementById("articulo").focus();
    }else{
        document.form_articulos.submit();
    }

}