function changeLogin(elemento_btn){
    elemento_btn.innerText = "Logout";
}

function changeLoginBack(elemento_btn){
    elemento_btn.innerText = "Login";
}

function eliminarAddDef(elemento_button){
    elemento_button.remove();
}

var likea = 0;
function addLikesA(elemento){
    likea++;
    elemento.innerText = `${likea} Likes`
    alert("Ninja was liked");
}

var likeb = 0;
function addLikesB(elemento){
    likeb++;
    elemento.innerText = `${likeb} Likes`
    alert("Ninja was liked");
}