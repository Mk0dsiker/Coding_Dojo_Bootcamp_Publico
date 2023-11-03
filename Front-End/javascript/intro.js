var num = 1;
let texto ="Este es un texto";
const otro_num =5;
var decimales = 1.11;
var bool = true;

console.log("Hola Mundo!");
console.log(otro_num);

var num1 = 3;
var num2 = 2;
var suma = num1 + num2;
console.log(suma);

var nombre = "Elena de Troya";
var mensaje = "Mi nomnbre es: ";
console.log(mensaje+nombre);

var otro_nombre = "Juana de Arco";
var otro_mensaje = `Mi nombre es: ${otro_nombre}, ¿como estás?`; //interpolación
var otro_mensaje2 = "Mi nombre es: "+otro_nombre+",¿como estás?"; //sin interpolación

console.log(otro_mensaje);
console.log(otro_mensaje2);

var combinamosTexto = "ABC";
console.log(combinamosTexto + num1);
console.log(combinamosTexto + num1 + num2);
console.log(num1 + num2 + combinamosTexto);

var orden = 10 + 20 / 6;
console.log(orden);
orden = (10+20) / 6; //papomudas

var n = 14;
n +=5; //n = n+5 = 14+5 = 19

var nombre_completo = "Pedro";
nombre_completo += " Pérez";
console.log(nombre_completo);
