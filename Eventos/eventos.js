// JS permite asociar una funcion a cada evento, este tipo de funciones se denomina event handlers
//Las funciones se asocian a cada elemento que se quiere escuchar. 


//exiten 3 formas de definir eventos


function clicker(){
    alert('Hola Clase');
}

function clickerAnonima(msg){
    alert('Hola '+ msg)
}

document.querySelector('#trigger').addEventListener('click', clicker);

// Primero el evento y luego la funcion que se ejecutara, puede ser una funcion anonima o no.


document.querySelector('#trigger-anonima').addEventListener('click', function(){
    clickerAnonima('desde funcion anonima')
});


//se aplica la propiedad del nodo para definir el evento
document.querySelector('#trigger-nodo').ondblclick = ()=>{alert('Hola desde una funcion flecha')

}

//Tercer Metodo declarar en linea el el evento que estara escuchando la accion del usuario
//poco recomendada ya que no es practico manejarlo y "ensucia " la estructura HTML


//MouseEvent

document.querySelector('#trigger-mouse').onmousemove =()=>{console.log("mouse sobre el boton")};


/* let formElem = document.querySelectorAll('form input, form textarea')

for (const elem of formElem){
    elem.addEventListener('change', function(){

        console.log(elem.value);

    })
    elem.addEventListener('input', function(){

        console.log(elem.value);

    })
} */

//cancelar un evento por defecto por ejemplo al hacer click en un link preventDefault
document.querySelector('form').addEventListener('submit', function(e){
    console.log(e)
    e.preventDefault();

    console.log('envio')
})

document.querySelector('#trigger-event').addEventListener('click', function(e){
    clickerAnonima('desde un evento')
    e.target.textContent = "Clicado"; // cambia el texto del boton al realizar el click
});