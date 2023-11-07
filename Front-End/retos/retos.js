
/*Crea un función que reciba dos arreglos del mismo tamaño y regrese un arreglo con sus sumas
EJ:
arr1 = [1, 2, 3, 4]
arr2 = [1, 2, 3, 4]

return [2, 4, 6, 8]
*/
var newArray = [];

function sumarArreglos(array1, array2){
    for(let i = 0; i < array1.length; i++){
    newArray[i] = array1[i]+array2[i];   //array1[0] + array2[0] // 1 + 1 = 2   newArray[0] = 2
    }
    return newArray;
}

newArray = sumarArreglos([1, 2, 3, 4],[1, 2, 3, 4]); 
console.log(newArray);  // [3,7]

/*
Crea una función que reciba un número y regrese un arreglo con los números de fibonacci hasta esa posición
EJ:
num = 6
return = [0, 1, 1, 2, 3, 5]
return = [0, 1, 2, 3, 4, 5]

Serie de fibonacci:
0, 1, 1, 2, 3, 5, 8...
*/