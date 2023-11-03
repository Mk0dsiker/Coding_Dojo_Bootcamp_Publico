//Los Ninjas de Joseph

console.log("Bienvenidos al Dojo");
console.log("Somos los Ninjas de Joseph");


let inicio = 10;
let fin = 1;
while (inicio > fin) {
    console.log("bucle While");
    if(inicio % 2 == 1) {
        inicio --;
        fin++;

    }else {
        inicio -=2;
        fin++
    }
}


