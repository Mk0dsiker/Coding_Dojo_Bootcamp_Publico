const API_KEY = "25acea1b7f87455d98c920cda2d9d748";

async function searchNews() {
    //URL: https://newsapi.org/v2/everything?apikey=LLAVES&q=TERMINOABUSCAR&pageSize=CANTIDAD

    var search = document.querySelector("#search").value //Valor que el usuario ingresó
    var cant = document.querySelector("#cant").value
    
    var response = await fetch(`https://newsapi.org/v2/everything?apikey=${API_KEY}&q=${search}&pageSize=${cant}`);

    var responseJson = await response.json();
    console.log(responseJson);

    /*responseJson = {
        articles = [
            {
                author:
                content:
                description:
                title:
                urlToImage
            }
        ]
    }*/

    var articles = responseJson['articles'].map(article =>
                    `<article>
                        <h2>${article['title']}</h2>
                        <u>${article['author']}</u>
                        <p>
                            ${article['description']}
                        </p>
                        <img src="${article['urlToImage']}">
                    </article>`);           



// Join

    var textArticles = articles.join("");
    document.querySelector(".articles").innerHTML = textArticles;

} 