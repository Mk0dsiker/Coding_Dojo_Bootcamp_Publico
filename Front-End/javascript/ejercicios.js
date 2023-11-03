// Sigma -  Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.

//Cuerpo del codigo

var sum = 0;                          //Declaramos variable sum inicializada en 0
var mensaje = "";                     //Declaramos variable mensaje inicialzado con un string vacio

for(var i = 1; i <=100; i++){         //Bucle for inicia en 1 termina en 100, incrementa de 1 en 1
    sum += i;                         //Sumamos a la variable sum los valores de cada ciclo for
    mensaje += i+"+";                 //Concatenamos a la variable mensaje los valores de cada ciclo for
}

//Mensajes por consola usando interpolació

console.log(`La suma total es: ${sum}`);            //Imprime por consola La suma total es: 5050
console.log(`La suma de ${mensaje} es: ${sum}`);    //Imprime por consola :

/*La suma de 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20+21+22+23+24+25+26+27+28+29+30+31+32+33+34+35+36+37+38+39+40+41+42+43+44+45+46+47+48+49+50+51+52+53+54+55+56+57+58+59+60+61+62+63+64+65+66+67+68+69+70+71+72+73+74+75+76+77+78+79+80+81+82+83+84+85+86+87+88+89+90+91+92+93+94+95+96+97+98+99+100+ es: 5050*/

//Mensajes por consola sin interpolación
// console.log("La suma total es: "+sum); 
// console.log("La suma de: "+mensaje+" es: "+sum);
// console.log("La suma total de: 1 + 2 + 3 + ... + 98 + 99 + 100 = "+sum);




//Sigma pares e impares - Escribe código que sume los valores pares del 1 al 100 en una variable suma_pares y valores impares en una variable suma_impares. Intenta hacer UN solo bucle. % -> mod. 5%2clea

// var sum_pares = 0;
// var sum_impares = 0;

// for(var i = 1; i <=100; i++){
//     if(i % 2 === 0){
//         sum_pares += i;
//     }
//     else {
//         sum_impares += i;
//     }
// }
// console.log(`La suma de los numeros pares entre 1 y 100 es: ${sum_pares}`);
// console.log(`La suma de los numeros impares entre 1 y 100 es: ${sum_impares}`);

// console.log(sum_pares);
// console.log("La suma de los numeros pares entre 1 y 100 es: "+sum_pares);
// console.log("La suma de los numeros impares entre 1 y 100 es: "+sum_impares);
