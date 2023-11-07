console.log("Entramos a la página");

function alerta() {
    alert("Hiciste click");
    console.log("Hizo clicl en log out");
}

function cambiarTexto(elemento){
    elemento.innerText = "Otro texto";
}

function cambio_education(elemento_h3){
    elemento_h3.innerHTML = "Cambio h3 <span>Etiqueta span</span>";
}

function eliminar(elemento){
    elemento.remove();
}

function cambio_img(elemento_img){
    elemento_img.src = "/Coding_Dojo_Bootcamp_Publico/Front-End/core4_Pagina_de_perfil_Mirko_Ponce/img/images/phil-s.jpg"
}

function restaura_img(elemento_img){
    elemento_img.src = "/Coding_Dojo_Bootcamp_Publico/Front-End/core4_Pagina_de_perfil_Mirko_Ponce/img/images/user-square.png"
}