/* Ejemplo

var sandwich = {
    pan:    "masa madre",
    proteína:  "asado",
    queso:   "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};
    
console.log(sandwich);

function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);

*/


function pizzaOven(masa, tipoCorteza, tipoSalsa, toppings, quesos ){
    var newPizza = {};
    newPizza.masa = masa;
    newPizza.corteza = tipoCorteza;
    newPizza.salsa = tipoSalsa;
    newPizza.toppings = toppings;
    newPizza.quesos = quesos;
    return newPizza;
}

var p1 = pizzaOven("A la piedra", "Estilo chicago", "Tradcional", ["Pepperoni", "Salchicha"], ["Mozzarella"] );
console.log(p1);

var p2 = pizzaOven("Esponjosa", "Lanzada a mano", "Marinara", ["Champiñones", "Aceitunas", "Cebollas"], ["Mozzarella","Feta"]);
console.log(p2);

var p3= pizzaOven("A la piedra", "Sin corteza", "Pomodoro", ["Jamon","Aceituna Negra", "Tomate"], ["Mozzarela"]);
console.log(p3);

var p4= pizzaOven("Esponjosa", "Rellena de queso", "A la albahaca", ["Pimenton","Champiñon", "Aceituna"], ["Mozzarela", "Parmesano"]);
console.log(p4);


