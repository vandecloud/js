

$(document).ready(function () {

/*    //Selector de Jquery
    $('h1').html('Etiqueta h1 JQ');
    $('.display-4').html('Desde class')
    $('#idh1').html('desde ID')

    //Selector de Java Scrip Nativo
    document.querySelector('h1').innerHTML = 'Etiqueta h1 JS'
    document.querySelector('.display-4').innerHTML = 'Desde class JS'
    document.querySelector('#idh1').innerHTML = 'Desde ID JS'

    //Selector Mutiples igual a CSS
    $('.container h2:first').html ('Seleccionamos el primer H1 JQ')
    $('.container h2:last').html ('Selector multiple desde JQ')

    //Agregar o quitar clases
    $('#idh1').addClass('text-danger');
    $('#idh1').removeClass('display-4');

    //Agregar elementos
    $('#contenido').append('<h1 class="text-danger"> este es un elemento al final </h1>');
    $('#contenido').prepend('<h1 class="text-danger"> este es un elemento al Inicio </h1>');

    //Podemos agregar propiedade de CSS, auque no es recomendado ya que para ello es conveniente tenerlo separado en un archivo CSS y asi mantener el orden. 
    $('.display-3').css('color', 'blue');
    $('.display-3').css({color:'black', background:'salmon', padding:'10px'}); // seleccion mutiples propiedades
*/
 
//

$('#contenido').prepend('<h1 class="text-danger">Practica JQ manipulando el DOM </h1>')
var parrafo = $('#resultado p');

$('.btn-primary').click(function(){
    parrafo.addClass('display-4')
})

$('.btn-danger').click(function(){
    parrafo.removeClass('display-4')
})

$('.btn-warning').click(function(){
    parrafo.toggleClass('display-4')
})

// Removemos la funcion por defecto al precionar submit (enviar y evitamos que se vea en la barra del explorador /? nombre o contenido que colocamos en el input)
$('#formulario').submit(function(e) { 
    e.preventDefault();
    let nombre = $('#nombre').val()
    console.log(nombre)

    
});


});




/* $('.class')
$('#id .clase > elementos') */

// Para saber si existe un elemento en el DOM $('body').length >0
// esto da true.

// Conjunto de metodos para acceder al DOM y asociar eventos a un selector. 

//Document ready metodo que nos permite confirmar que el documento esta listo y todos los elementos estan en su lugar para dar paso a la ejecucion de java script. 

// Tres formas de corta de ready()

$('document').ready(function(){
    console.log('El Dom esta listo')
    $('#addProd').addClass('gorila');
})


$(function(){
    console.log('El Dom esta listo')
})


$(() =>{console.log('arrow func')})

// Ready vs. Load, cuando se necesita determina cuando se cargo todas las imagenes y otros recursos externos de la pagina que usamos el evento load.

/* $(document).ready(function (){
    console.log('El DOM esta listo');
})

window.addEventListener('load', function(){
    console.log('Todos los elementos de la ventana esta cargados');
})

//leazy load, permite acelerar la carga de una pagina web.

// Metodo ON, similar al evento addEventListener de java script. 
// El metodo ON acepta distintos parametros, esuchar y delegar eventos. 
 */