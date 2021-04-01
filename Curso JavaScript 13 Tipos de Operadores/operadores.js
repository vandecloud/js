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

console.log("****OPERADORES DE DECREMENTO E INCREMENTO****")
let i = 1; // Declaracion de variable

console.log("**** let i = 1 operamos i = i + 1 ")
i = i + 1
console.log(i)

console.log ("*** es igual que escribir i+1 =2 *** ")
let j = 1
j += 1
console.log(j)

// Operador unario

console.log ("**Operador unario h = 1 => h++ con el signo + incrementamo en uno y con el signo menos decrecemos en 1")
h = 1
h++;
console.log("h = 1")
console.log(" h++" + "="+ h)

++h
console.log("++h (suma 1 a la variable y luego lo muestra por pantalla )no es lo mismo h++ (imprime el valor por patalla y luego le suma + 1)")
console.log(" ++h" + "=" + h )

// Estructuras condicionales NOT(NO)(!) OR(O)(||) AND(I)(&&) 

//NOT cambia la condicion del valor, lo que es verdadero lo trasforma en falso y lo falso en verdadero

console.log(!true)
console.log(!false)

console.log("OR cuando una condicion se cumpla va a validar como true")

console.log(9===9 || "9"===9)
console.log("AND Cuando las 2 o mas condiciones todas deben ser verdaderas para que and devuelva TRUE")

console.log(9===9 && "9"===9)

console.log(9===9 && 9===9)




