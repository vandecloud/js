// Concatenacion unir una variable (+)

// Interpolacion de variables. 
// Con template string  (`) respeta la identancion del codigo HTML

let nombre = 'Pablo'
let apellido = 'Vandecaveye'

let saludo = "Hola mi nombre es" + " " + nombre + " " + apellido + "."

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`

console.log(saludo)
console.log(saludo2)

let ul = `
<ul>
    <li>primavera</li>
    <li>verano</li>
    <li>otoño</li>
    <li>invierno</li>
</ul>
`

console.log(ul)
