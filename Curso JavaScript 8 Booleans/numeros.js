let a = 2;
let b = new Number(1); //Constructor objeto number (buscar en mozilla developer)
let c = 7.19;
let d = "5.6";


console.log(typeof c, typeof d); // Imprime el tipo de dato
console.log(a,b)
console.log(c.toFixed(1)); //Redondea con un decimal
console.log(c.toFixed(5)); //Redondea con 5 decimales
console.log(parseInt(c)); // Solo toma el entero
console.log(parseFloat(c)); // Entero + flotante
console.log(c + parseInt(d)); // Transforma el string a numero entero
console.log(c + parseFloat(d))

