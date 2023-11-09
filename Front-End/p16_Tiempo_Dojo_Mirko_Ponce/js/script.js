function alerta(elemento){
    var lugar = elemento.innerText;
    // alert("Cargando reporte meteorológico de"+lugar);
    alert(`Cargando reporte meteorológico de ${lugar}`);
}

function eliminarCookie() {
    var cookie = document.querySelector(".cookie");
    // console.log(cookie);
    cookie.remove();
}

function cambiarTemperatura() {
    var CoF = document.querySelector("select").value;
    console.log(CoF);

    for(let i=0; i<8; i++){
        var tempElement = document.querySelector('#temp'+i);
        var temperature = tempElement.innerText;
        temperature = parseInt(temperature); //Transforma texto a numero
        console.log(temperature);

        var newTemp = 0;
        if(CoF === "C°") {
            //F -> C
            newTemp = Math.round((temperature - 32) * 5 / 9);
        } else {
            //C -> F
            newTemp = Math.round((temperature * 9 / 5) + 32);
        }

        tempElement.innerText = (`${newTemp}°`);        
    }
    
}