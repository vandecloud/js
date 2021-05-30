//Desclaracion de Variables 

const criptoExchangeArray = ['Coinlist', 'Binance', 'KuCoin','StormGain']
/* const criptoCoArray = ['BNB', 'BTC', 'ETH',  'LTC',  'ANT',  'NEO','QTUM'] */
const posicionArray = ['LONG', 'SHORT']
let seguimientoInversiones = [];



const inversiones = document.querySelector('#inversiones');
const listaInversiones = document.querySelector('#listaInversiones tbody');
const limpiarAllInversiones = document.querySelector('#limpiarAllInversiones');
const nuevaOperacion= document.querySelector('#nuevaOperacion');
const exchangeSelect = document.querySelector('#exchangeSelect');
const coinSelect = document.querySelector('#coinSelect');
const posicionSelect = document.querySelector('#posicionSelect');

const criptomonedasSelect = document.querySelector('#coinSelect');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = { // Seria utilizado para relizar la consulta via api y traerme el resultado de la cotizacion
    moneda: '',
    criptomoneda: ''
};



cargarEventListeners();
function cargarEventListeners(){
    // Agregamos operacion cuando presionamos en "Nueva Operacion"
    nuevaOperacion.addEventListener('click', agregarOperacion);

    // Muestra las operaciones de Local Storage


    limpiarAllInversiones.addEventListener('click', () => {
        
        seguimientoInversiones = []; // reseteamos el arrego
        localStorage.clear(); // Eliminamos el contenido Local Storage
        limpiarHTML(); // Eliminamos el contenido HTML
        
    })

    //Luego de cargar el contenido cargamos lo almacenado en local storgage, en caso de que no exista contenido agregamos un arreglo vacio para evitar error.
    document.addEventListener('DOMContentLoaded', ()=>{
        seguimientoInversiones = JSON.parse(localStorage.getItem('inversiones')) || [];

        inversionHTML()
    })

}


// Funciones

function agregarOperacion(e){
    e.preventDefault();

    if(e.target.classList.contains('newOperation')){
        const  operacionEjecutada = e.target.parentElement
       leerDatosFormulario(operacionEjecutada);
    }
    

}


// Lee contenido Formulario
function leerDatosFormulario(operacion){

    //Crear un objeto con la informacion ingresada
    const infoFormulario = {
        id : uniqueNumber(),
        exchange : operacion.querySelector('#exchangeSelect').value,
        coin : operacion.querySelector('#coinSelect').value,
        moneda : operacion.querySelector('#moneda').value,
        fecha : moment().format('LLL'),
        stoplost : operacion.querySelector('#stopLoss').value,
        takeprofit : operacion.querySelector('#takeProfit').value,
        posicion : operacion.querySelector('#posicionSelect').value,
        precioCompra : operacion.querySelector('#precioCompra').value,
        inversion: operacion.querySelector('#inversion').value,
    

    }
    // Agrega elementos al arreglo de seguimientoInversiones
    seguimientoInversiones = [...seguimientoInversiones, infoFormulario];
    inversionHTML();
}

// Mostra las inversiones en HTML
function inversionHTML(){

    // Limpiar el HTML
    limpiarHTML()

    // Reccorre el Arreglo de inversiones y genera el HTML
    seguimientoInversiones.forEach(operacion => {
        const row = document.createElement('tr');
    
        row.innerHTML= `
        <td id="dataId">${operacion.id}</td>
        <td>${(operacion.exchange).toUpperCase()}</td>
        <td>${(operacion.coin).toUpperCase()}</td>
        <td>${operacion.moneda}</td>
        <td>${operacion.fecha}</td>
        <td>${(operacion.stoplost)}</td>
        <td>${operacion.takeprofit}</td>
        <td>${(operacion.posicion).toUpperCase()}</td>
        <td>ABIERTA</td>
        <td>${operacion.precioCompra}</td>
        <td>${operacion.inversion}</td>
        <td><button Class="btn btn-warning bi bi-pencil mb-2 modificarOperacion"></button></td>
        <td><button Class="btn btn-danger bi bi-x-square mb-2"></button></td>
        
        `;
        // Agrega el HTML del formulario al tbody
        listaInversiones.appendChild(row);
    })

    //Agregamos la operacion a LocalStorage

    syncStorage()

}

function syncStorage(){
    localStorage.setItem('inversiones', JSON.stringify(seguimientoInversiones))
}

// Limpiar los elementos del tbody
function limpiarHTML(){
    //Forma Lenta
    //listaInversiones.innerHTML = ''

    // Forma optima 
    while(listaInversiones.firstChild){
        listaInversiones.removeChild(listaInversiones.firstChild)
    }
}

// Crear un unico ID para cada operacion a partir del date now
function uniqueNumber() {
    const date = Date.now();
    if (date <= uniqueNumber.previous) {
        date = ++uniqueNumber.previous;
    } else {
        uniqueNumber.previous = date;
    }
    return date;

}
uniqueNumber.previous = 0;



// Promises
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
});


document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

// Consulta la API par aobtener un listado de Criptomonedas
function consultarCriptomonedas() {

    // Ir  AtoPLISTS Y Despues market capp 
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';

    fetch(url)
        .then( respuesta => respuesta.json()) // Consulta exitosa...
        .then( resultado => obtenerCriptomonedas(resultado.Data)) // 
        .then( criptomonedas  =>  selectCriptomonedas(criptomonedas) )
        .catch( error => console.log(error));
}
// llena el select 
function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach( cripto => {
        const { FullName, Name } = cripto.CoinInfo;
        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        // insertar el HTML
        criptomonedasSelect.appendChild(option);
    });
}

function leerValor(e)  {
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
    e.preventDefault();

    // Extraer los valores
    const { moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    consultarAPI();
}







for (const exchange of criptoExchangeArray){
    const selectItem = document.createElement('option')
    selectItem.setAttribute('value', exchange.toLowerCase() )
    selectItem.textContent = exchange
    $(exchangeSelect).append(selectItem);

}

for (const posicion of posicionArray){
    const selectItem = document.createElement('option')
    selectItem.setAttribute('value', posicion.toLowerCase() )
    selectItem.textContent = posicion
    $(posicionSelect).append(selectItem);

}





let criptoMoneda =
{
    nombre : "BNB",
    precio : 469,
    capital :"$72 Millones",
}

let msgConcatenado = ` La criptomo moneda ${criptoMoneda.nombre} actualmente con el valor de  ${criptoMoneda.precio} dolares y una Cap. de Mercado  ${criptoMoneda.capital}, esta en su mejor punto para la compra`


let parrafo = document.createElement("h2", tagName= "otro");

parrafo.textContent = msgConcatenado;

document.querySelector('#msgCriptoByDom').appendChild(parrafo);

