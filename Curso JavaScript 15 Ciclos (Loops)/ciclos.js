// Ciclos Bucles While DO while 

let contador = 0

while (contador < 10){
    console.log("While" + contador);
    contador++;
}

// Entra y evalua como el contador ya vale 10 la siguiente evaluacion de false y se sale.
do {
    console.log("Do While " + contador)
    contador++;
} while(contador < 10);
 
//DO While se ejecuta al menos una vez ya que primero ejecuta el bloque de codigo y despues evalua.


/* for (inicializacion de la variable; condicion; decremento o incremento){
    sentencia que se ejecuta en el for
}*/

for (let i=0; i<10; i++){
    console.log("for " + i);
}

let numeros = [-1,0,10,20,30,40,50,60,70,90,100];

for(let i=0; i<numeros.length;i++){ // va a ir incrementando las posiciones en mi arreglo de uno en uno y va a imprimir cada posicion de mi array.
    console.log(numeros[i]);
}

//variantes del FOR for off for in

const jon ={ 
nombre : "Jon",
apellido : "Mircha",
edad : 35
}
//Recorrer todos los elementos de un objeto
for(const propiedad in jon ){
    console.log(`key:${[propiedad]}, value:${jon[propiedad]}`)
}

//for off permite recorrer todos los elementos de cualquier objeto interables 

let cadena = "Hola mundo"

for (const elemento of numeros){
    console.log(elemento)
}

for(const caracter of cadena){
    console.log(caracter)
}