/* function Producto(nombre,valor){
    this.nombre = nombre,
    this.valor = valor, 
    this.disponible = true
}

const producto2 = new Producto('play', 34);

 */

/* console.log(producto2)


const tabla = [1,2,3,[4,5,6,[7,8,9]]]

console.table(tabla)

const monedas = ["bnb", "btc", "usdt", "eth", "algo"]

// funcion (for) para recorrer los elementos de monedas

for( let i = 0; i < monedas.length; i++){
    console.log(monedas[i])
} */

/* const producto2 = [
    {nombre : "pablo", apellido: "vandecaveye"},
    {nombre : "dai", apellido: "gomez"},
    {nombre : "valentin", apellido: "vandecaveye"},
    {nombre : "matias", apellido: "vandecaveye"}
    
]
 */



/* for (let e = 0; e < producto2.length; e++){
    console.log(`${producto2[e].nombre} - valor ${producto2[e].apellido}`)
};
 */
/* producto2.forEach(function (f){
    console.log(`${f.nombre}`)
})

const calculadora = [
    {valor1 : 1},
    {valor1 : 2},
    {valor1 : 3},
    {valor1 : 4}
]

calculadora.forEach(function (calcular){
    console.log(`${calcular.valor1 * 2}`)
})
 */


let total = 0; // Inicializamos las variable total que comienza con 0 elementos en el carrito. 

function agregarCarrito(precio){
    return total += precio;
}

function CalcularImpuestos(total){
    return total * 1.21;
}



total = agregarCarrito(300);
total = agregarCarrito(300);
total = agregarCarrito(300);
total = agregarCarrito(300);

total = agregarCarrito(300);// va a agregar el objeto al carrito y sumar su precio a otros elementos 

const totalPagar = CalcularImpuestos(total);

console.log( `Total a pagar con impuestos ${totalPagar}`)

console.log(total)


