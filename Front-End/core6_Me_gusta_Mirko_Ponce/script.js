var me_gusta = 9;
var me_gusta2 = 12;
var me_gusta3 = 9;

function meGusta() {
    me_gusta++;

    var cantidadCodigo = document.querySelector(".cantidad");
    cantidadCodigo.innerText = me_gusta;
}

function meGusta2() {
    me_gusta2++;
    var cantidadCodigo = document.querySelector(".cantidad2");
    cantidadCodigo.innerText = me_gusta2;
}
function meGusta3() {
    me_gusta3++;
    var cantidadCodigo = document.querySelector(".cantidad3");
    cantidadCodigo.innerText = me_gusta3;
}