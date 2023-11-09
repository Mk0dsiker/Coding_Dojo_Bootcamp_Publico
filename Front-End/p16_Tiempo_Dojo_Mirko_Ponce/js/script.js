function alerta(elemento){
    var lugar = elemento.innerText;
    // alert("Cargando reporte meteorológico de"+lugar);
    alert(`Cargando reporte meteorológico de ${lugar}`);
}

function eliminar_cookie() {
    var cookie = document.querySelector(".cookie");
    // console.log(cookie);
    cookie.remove();
}