//Mostrar un mensaje antes de la lista de criptomonedas insertado a traves del id msgCriptoByDom de la etiqueta div

let criptoMoneda =
{
    nombre : "BNB",
    precio : 469,
    capital :"$72 Millones",
}

let msgConcatenado = ` La criptomo moneda ${criptoMoneda.nombre} actualmente con el valor de  ${criptoMoneda.precio} dolares y una Cap. de Mercado  ${criptoMoneda.capital}, esta en su mejor punto para la compra`

//console.log(msgConcatenado)

let parrafo = document.createElement("h2", tagName= "otro");

parrafo.textContent = msgConcatenado;

document.querySelector('#msgCriptoByDom').appendChild(parrafo);



//Crear e insertar elementos 

const criptoMonedasArray = ['BNB', 'BTC', 'ETH',  'LTC',  'ANT',  'NEO','QTUM']
const criptoBrokerArray = ['Coinlist', 'Binance', 'KuCoin',]
const operacionArray = ['BE', 'ABIERTA', 'CERRADA',]
const posicionArray = ['LONG', 'SHORT'] // A utilizar en el futuro

const title = document.getElementById('title')
const subTitle = document.getElementById('subTitle')
const subTitle2 = document.getElementById('subTitle2')
const criptoList = document.getElementById('criptoList')
const selectCripto = document.getElementById('criptoSelect')
const selectBroker = document.getElementById('brokerSelect')
const selectoperacionSelect = document.getElementById('operacionSelect')




// Colocamos el titulo de nuestro desafio
/* title.innerHTML = "<span class='stilo'>Desafio Manipulando el DOM</span>"

subTitle.innerHTML = "<span class='stilo2'>Lista dinamica tomada de un array y insertada en el DOM</span>" */

// Use Frament ya que permite ahorrar recursos de equipo ya que 
const fragment = document.createDocumentFragment()

/* for (const cripto of criptoMonedasArray){
    const itemList = document.createElement('li')
    itemList.textContent = cripto
    fragment.appendChild(itemList)
}

criptoList.appendChild(fragment) */

//subTitle2.innerHTML = "<span class='stilo2'>Menu desplegable creado a partir de un array</span>"

for (const cripto of criptoMonedasArray){
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', cripto.toLowerCase() )
    selectItem.textContent = cripto
    fragment.appendChild(selectItem)

}
selectCripto.appendChild(fragment)



for (const broker of criptoBrokerArray){
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', broker.toLowerCase() )
    selectItem.textContent = broker
    fragment.appendChild(selectItem)

}
selectBroker.appendChild(fragment)


for (const operacion of operacionArray){
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', operacion.toLowerCase() )
    selectItem.textContent = operacion
    fragment.appendChild(selectItem)

}

selectoperacionSelect.appendChild(fragment)



//Efectos Fade In Fade Out Fade Toggle.


$(document).ready(function () {
    $('.fadeOut').click(function(){
        $("#msgCriptoByDom").fadeOut(3000, function(){
            $('.fadeOut').text ("Fin del Efecto 👻")
        });
    })

});

$(document).ready(function () {
    $('.fadeIn').click(function(){
        $("#msgCriptoByDom").fadeIn(3000, function(){
            $(".fadeIn").text ("Fin del efecto 👌")
        });
    })

});

$(document).ready(function () {
    $('.fadeTog').click(function(){
        $("#msgCriptoByDom").toggle(800);
    })

});







//Permite cargar primero toda la estructura HTML antes de ejecutar nuestro JS, esto en caso de que el script de JS no este al final 
//de la estructura HTML antes del cierre del Body.

/*document.addEventListener('readystatechange', function(){
    console.log(document.querySelector(".navbar"));
})
*/

//acceso por document desde consola

//console.log(document.body)

// getElementById() Acceder al elemento en base al ID del elemento unico en la estructura HTML
// getElementByClassName() // Accder 
// getElementByTagName()
/* 
document.getElementById('domTexto').textContent // Solo devuelve el contenido Texto que esta encerrado en el ID domTexto

document.getElementById('domParrafo') // Devuelve el texto que esta encerrado en el ID "domParrafo"

document.getElementsByClassName('table')[1] // Nos devuelve un array y podemos selecionar a traves de un metodo a que elemento de ese array queremos acceder. 

document.getElementsByTagName('table') // trae todos los elemento table de la pagina, es menos especifico ya que puede existir mas de un elemento table. 

document.querySelector('table') // Equivalene a ByID

document.querySelectorAll('[class]') // Todos los elemento que coicida con lo que buscamos 

document.querySelectorAll('[id]');

let lista = document.querySelectorAll('[tr]')

console.log(lista) */

// Imprimir cada elemento de nuestra lista (li)
/* 
var ls = document.querySelectorAll('#lista li')

for(const l of ls){
    console.log(l.textContent)
}

// Seleccionamos los titulos h1 que estan contenidos dentro del div con ID dom
var titulos = document.querySelectorAll('#dom h1')

for (const h of titulos){
    console.log(h.textContent)
}

// Seleccionar todos los titulos del documento HTML


var allTitulos = document.querySelectorAll('h1')

for (const h of allTitulos){
    console.log(h.textContent)
}

//Creacion de elementos, es un metodo que le pasamos como parametro la etiqueta HTML

var elem = document.createElement('p');

elem.textContent = "Hola Mundodo desde Cripto Vande"

document.body.appendChild(elem)

//=============================================//

/* 

var listaItem = document.createElement('li');

listaItem.textContent = "Nuevo elemento desde JS con Create Element"

document.querySelector('#lista').appendChild(listaItem)

//Removimos nuestra lista de Crito monendas de una forma dinamica. 

document.querySelector('#lista').parentElement.removeChild(document.querySelector ('#lista'));


// recuperar los datos de un formulario a traves del ID

document.querySelector('#BROKER').textContent

//document.querySelectorAll('input[type="email", texarea]')// busca de manera especifica 


/* let fromCtrl = document.querySelectorAll('input[type="email"],input[type="password"], texarea')// busca de manera especifica en los input del formulario login

let datos = {}

for (const elemt of fromCtrl){
    datos[elemt.id] = elemt.value;
}

console.log(datos) 
 */



