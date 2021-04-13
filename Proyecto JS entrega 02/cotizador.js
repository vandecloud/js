/*
let monedaConvertir = prompt("Ingresar la moneda a operar BNB - BTC - ETH - LTC - ANT - NEO");
let tiposDeCambioBNB = 0.003190;
let tiposDeCambioBTC = 0.0000170;
let tiposDeCambioETH = 0.00051;
let tiposDeCambioLTC = 0.0050;
let tiposDeCambioANT = 0.08606;
let tiposDeCambioNEO =0.02;

//Comprobamos si la moneda introducida es valida para realizar la conversion.
if (monedaConvertir === "BNB" || monedaConvertir ==="BTC" || monedaConvertir === "ETC" || monedaConvertir ==="LTC" || monedaConvertir==="ANT" || monedaConvertir==="NEO")
    { var montoACambiar = prompt(`¿cuando dolares deseas convertir a? ${monedaConvertir}`);
    }
else{ alert("NO es una moneda Valida")}

// Realizamos la comprobacion de que moneda aplica y realizamos el calculo.
switch (monedaConvertir) {
    case "BNB":
        resultado = montoACambiar * tiposDeCambioBNB;
        alert(`Tú recibirás  ${resultado} en  ${monedaConvertir}`);
        break;
    case "BTC":
        resultado = montoACambiar * tiposDeCambioBTC;
        alert(`Tú recibirás  ${resultado} en  ${monedaConvertir}`);
        break;
    case "ETH":
        resultado = montoACambiar * tiposDeCambioETH;
        alert(`Tú recibirás  ${resultado} en  ${monedaConvertir}`);
        break;

    case "LTC":
        resultado = montoACambiar * tiposDeCambioLTC;
        alert(`Tú recibirás  ${resultado} en  ${monedaConvertir}`);
        break;
    case "ANT":
        resultado = montoACambiar * tiposDeCambioANT;
        alert(`Tú recibirás  ${resultado} en  ${monedaConvertir}`);
        break;
    case "NEO":
        resultado = montoACambiar * tiposDeCambioNEO;
        alert(`Tú recibirás  ${resultado} en  ${monedaConvertir}`);
        break;

    default:
        alert("No se puede realizar la conversion")
        break;
}

const listaCriptomonedas = [];
let cantidad = 5;

do{
    let entrada = prompt("Ingresar la Cripto que quieres listar");
    listaCriptomonedas.push(entrada.toUpperCase());
    console.log(listaCriptomonedas.length);
}while(listaCriptomonedas.length != cantidad)

const nuevaListaCripto = listaCriptomonedas.concat(["ORO", "PLATA"]);

alert(nuevaListaCripto.join("\n"));

// Construir una lista basada en mi array con un indice por cada posicion en el array

nuevaListaCripto.forEach(function(el,index){
console.log(`<li id="${index}">${el}</li>`)
})
*/

class Cripto {
    constructor(nombre, cotizacion){
        this.nombre = nombre.toUpperCase();
        this.cotizacion = parseFloat(cotizacion);
    }
    comisionCompra(){
        this.cotizacion = this.cotizacion * 1.21;
    }
}

const criptos = [];

criptos.push(new Cripto("BNB", "0.003190"));
criptos.push(new Cripto("BTC", "0.0000170"));
criptos.push(new Cripto("ETC", "0.00051" ));
criptos.push(new Cripto("LTC", "0.0050" ));
criptos.push(new Cripto("ANT", "0.08606" ));
criptos.push(new Cripto("NEO", "0.02" ));

for(const cripto of criptos)
    cripto.comisionCompra();

console.log(criptos)

/*
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();

console.log(productos)
*/