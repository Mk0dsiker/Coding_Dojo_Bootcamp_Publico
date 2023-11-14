async function buscarDigimon() {
    //URL: https://digimon-api.vercel.app/api/digimon?name=nombreDigimon

    var nombreDigimon = document.querySelector("#nombre_digimon").value
    // Nombre de digimon que ingresa el usuario
    
    var nivelDigimon = document.querySelector("#nivel_digimon").value
    // Nivel de digimon que ingresa el usuario

    var response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${nombreDigimon}`);

    var responseJson = await response.json();
    console.log(responseJson);

    /*responseJson = {
        response = [
            {
                img:
                level:
                name:
            }
        ]
    }*/

    var digimon = responseJson.map(digi => 
            `<article class="card_digimon">
                <h1>${digi['name']}</h1>
                <p><u>${digi['level']}</u></p>
                <img src="${digi['img']}">
            </article>`);
            
    var textDigimon = digimon.join("");
    document.querySelector(".articles").innerHTML = textDigimon;

}