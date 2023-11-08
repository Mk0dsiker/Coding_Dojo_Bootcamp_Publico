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

function editar_perfil() {
    var elemento_nombre = document.querySelector("#nombre");

    //Obtener el elemento
    var input = document.getElementById("input_nombre");
    if(input.value == ""){
        elemento_nombre.innerText = "elMk po";
    } else {
        elemento_nombre.innerText = input.value;
    }    

    document.querySelector(".location").innerHTML = '<img class="icons" src="/Coding_Dojo_Bootcamp_Publico/Front-End/core4_Pagina_de_perfil_Mirko_Ponce/img/icons/map-marker.png" alt="map marker">Playa Ancha';

    document.querySelector('.cardBody h5').innerHTML = 'Animador Digital <span>|</span> Desarrollador Web Front-End<span>|</span> Técnico legend'

    elemento_nombre.style.color = "white";
    elemento_nombre.style.backgroundColor = "blue";

}