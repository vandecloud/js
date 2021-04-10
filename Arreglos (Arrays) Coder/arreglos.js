

/*Arreglo vacio
const a= []
const b = [1, true, "hola", ["A", "B", "C"]] // Arreglo es una coleccion de elementos
console.log(a) // Arrego Vacio
console.log(b) //Arreglo de 4 elementos

console.log(b[3]) // Referencio o cordenada del elemento que quiero imprimir ("Array")
console.log(b[2])
console.log(b[3][2]) //Para lograr imprimir el valor que esta anidado dentro del arreglo

const c =Array.of("X", "Y", "Z",9 ,8, 7)
console.log(c)

const d = Array(100).fill(false);
console.log(d);
*/



const criptos = ["BNB",  "BTC",  "ETH",  "LTC", "ANT", "NEO"];
console.log(criptos);

criptos.push("USDT");
console.log(criptos);

criptos.pop();
console.log(criptos);

// Construir una lista basada en mi array 

criptos.forEach(function(el,index){
console.log(`<li id="${index}">${el}</li>`)
})