// Promesa

function muestraPerrito() {
    fetch("https://dog.ceo/api/breeds/image/random")
        // .then(response => console.group(response));
        .then(response => response.json())
        .then(data => {
            /* data = {
                    "message": "url/img.png",
                    "status": "success" } */
                console.log(data);
                var imagen_perrito = `<img src=${data['message']} alt="perrito">`
                document.querySelector(".img").innerHTML = imagen_perrito;
            });
}

// Async

async function muestraPerritoAsync() {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var data = await response.json();
    var imagen_perrito = `<img src=${data['message']} alt="perrito">`
                document.querySelector(".img").innerHTML = imagen_perrito;

}

