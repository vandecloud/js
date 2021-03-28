
/*
function estoEsUnaFuncion(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

estoEsUnaFuncion();
*/

/*
function unaFuncionQueDevuelveValor(){

    console.log("Uno");
    return 19;
    console.log("Dos");
    console.log("Tres")
    
    return "La funcion ha retornado cadena de texto"

}

let valorDeFuncion = unaFuncionQueDevuelveValor();

console.log(valorDeFuncion)
*/

function saludar(nombre, edad){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años` )
}

saludar ("Oliver", 8)

saludar(); //==> Sin definir 

console.log("===========================================================")

function saludar(nombre="Odin", edad = 7){ //==> Defino parametros por defecto
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años` )
}

saludar ("Oliver", 8)

saludar(); //==> ejecuta por defecto

console.log("========================Funciones declaradas VS funciones Expresadas ===========================")

funcionDeclarada()

function funcionDeclarada(){
    console.log("esto es una funcion delcarada, puede invovarse en cualquier parte de nuestro codigo incluso antes de que la funcion sea declarada")
}

funcionDeclarada()

console.log("======================== funciones Expresadas ===========================")


//Funcion Anonima
funcionExpresada()

const funcionExpresada = function(){
    console.log(`esto es una funcion expresada, es decir una funcion que se le ah
    asignado como valor una variable, si se invocamos esta funcion antes de su definicion
    JS nos dira...Uncaught ReferenceError: Cannot access 'funcionExpresada' before initialization
    `)
    }
    

funcionExpresada()

/*
ORDEN DEL CODIGO

1- IMPORTACION DE MODULOS
2- DECLARACION DE VARIBLES
3- DECLARACION DE Funciones
4- EJECUCION DE CODIGO
*/