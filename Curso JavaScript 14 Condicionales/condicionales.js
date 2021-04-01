//estructura de control: mecanismo que nos permite controlar el flujo de nuestra programacion

//IF Else

let edad = 19;

if(edad > 17){
    console.log("Eres mayor de edad: ");
}
else{
    console.log("Eres Menor de edad");
}

if(edad >= 18){
    console.log("Eres mayor de edad: ");
}
else{
    console.log("Eres Menor de edad");
}

if(edad < 18){
    console.log("Eres mayor de edad: ");
}
else{
    console.log("Eres Menor de edad");
}

if(edad <= 17){ //Ojo porque esto incluye al valor que estamos comparando
    console.log("Eres mayor de edad: ");
}
else{
    console.log("Eres Menor de edad");
}
/*
Dejame Dormir 0hrs - 5hrs
Buenos dias 6hrs- 11hrs
Buenas tardes 12pm -18hrs
Buenas Noches 19hrs - 23hrs
*/

let hora = 20;

if( hora >=0 && hora<=5){
    console.log("Dejame Dormir")
} else if (hora >=6 && hora<=11){
    console.log("Buenos dias")
}else if(hora >=12 && hora<=18){
    console.log("Buenas Tardes")
}else{
    console.log("Buenas Noches")
}

//Simplificacion de Else if con operador Ternario

console.log("Operador Ternario")
let eresMayor = (edad>=18)
    ?"Eres mayor de edad"
    :"Eres menor de edad";
console.log(eresMayor);

/*shitch--case*/

/* domingo -0
lunes - 1
martes -2
miercoles- 3
jueves -4
viernes -5 
sabado -6 */

let dia =6;
switch (dia) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;    
    default:
        console.log("No es un dia de la Semana")
        break;
}






