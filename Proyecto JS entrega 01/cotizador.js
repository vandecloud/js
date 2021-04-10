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
