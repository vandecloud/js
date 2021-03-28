//Operadores

//Aritmetico + - * % () lo que esta entre () se ejecuta primero

let a  = 5 +(5-10)*3
let modulo = 5/2;
let modulo02 = 5%2;

console.log(a);
console.log("****Modulo con (/) Nos devuelve el cociente ****")
console.log(modulo);
console.log("****Modulo 02 con (%) Nos devuelve el resto ****")
console.log(modulo02);

//Operadores relacionales

//> (mayor de) <(medor de)  >=(mayor igual de) =< (menor igual de)
// == (igual igual) === (tripe igual) != (diferente de) !== (diferente de)


console.log("**** Condicion VERDADERO O FALSO *****")

console.log("**** Condicion(8>9) *****")
console.log(8>9)
console.log("**** Condicion (9>8) *****")
console.log(9>8)
console.log("Operadores compuestos: 8 no es mayor que 9 y tampoco es = condicion False")
console.log("**** Condicion (8>=9) *****")
console.log(8>=9)
console.log("**** Condicion (9>=8) *****")
console.log("Operadores compuestos: 9 es mayor que 8 pero no es = condicion es True")
console.log(9>=8)
console.log("**** Condicion (7<7) *****")
console.log(7<7)
console.log("**** Condicion (7<=7) *****")
console.log("Operadores compuestos: 7 nos es mayor que 7 pero si es = condicion es True")
console.log(7<=7)

/*
= 1 igual es asignacion de variable (var let const)
== 2 iguales es comparacion de valores
=== 3 iguales validacion de tipo de datos y valor
*/
console.log("**** Condicion (=)(==)(===) *****")

console.log("**** Condicion(7==7) *****")
console.log(7==7)

console.log("**** Condicion(`7`==7) *****")
console.log("con == comparamos solamente los valores por esa razon da verdadero")
console.log (`7`==7);

console.log(`**** Condicion(8===8) *****`)
console.log(8===8)

console.log("**** Condicion(`8`===8) *****")
console.log("Con el ==== no solo comparamos valores si no tambien tipo de dato y por eso nos da falso")
console.log (`8`===8);

// Operadores de decremento e incremento 

let i = 1;
i = i + 2;
i+=3
console.log(i)

// Operador unario

console.log (i)





