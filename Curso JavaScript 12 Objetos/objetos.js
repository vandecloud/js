//Objetos 

//En JS todo es un objeto. 

const b = {}

console.log(b) // Esta varible es de tipo objeto

const c = new Object();
console.log()

// un objeto es una coleccion de llaves y corchetes

// un objeto esta compuesto por atributos/propiedades (Nombre, apellido, edad etc)

const jon = {
    nombre: "Jon",
    apellido:"Connor",
    edad:35,
    pasatiempo: ["correr", "estudiar", "ver series"],
    soltero:false,
    contacto:{
        email:"asad@adsad.com",
        twitter:"@adasdad",
        movil:"1313123",
    },
    saludar:function(){
        console.log(`hola :)`)
    },
    decirMiNombre:function()
    {
     console.log(`Hola Mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`) //This hace referencia al mismo objeto (jon)
    }
}

// saludar al ser una funcion no es un atributo o propiedad es un metodo


console.log(jon);
console.log(jon["nombre"]);
console.log(jon["apellido"]);
console.log(jon.nombre);
console.log(jon.apellido);
console.log(jon.pasatiempo);
console.log(jon.pasatiempo[1]);
console.log(jon.contacto);
console.log(jon.contacto.twitter);
jon.saludar() //porque ya tiene un console.log la funcion
console.log(jon.saludar);
jon.decirMiNombre()


/*
const datos = {
    nombre: prompt("Cual es tu nombre:"),
    apellido: prompt("cual es tu Apellido:"),
    edad: prompt("Cual es tu edad:"),
    pasatiempo: prompt("Cual es tu pasatiempo"),
    soltero:false,
    contacto:{
        email:"asad@adsad.com",
        twitter:"@adasdad",
        movil:"1313123",
    },
    saludar:function(){
        console.log(`hola :)`)
    },
    decirMiNombre:function()
    {
     console.log(`Hola Mi nombre es ${this.nombre} 
     ${this.apellido} y tengo ${this.edad} años mi pasatiemo es
      ${this.pasatiempo} si te quieres poner contacto conmigo 
      me puedes escribir a ${this.contacto.email}` )
       //This hace referencia al mismo objeto (jon)
    }
}

datos.decirMiNombre()
*/

console.log(Object.keys(jon))//Metodo Keys que me permite listar todas las {} del objeto
console.log(Object.values(jon)) //Metodo Keys que me permite listar todas las {} del objeto
console.log(jon.hasOwnProperty("nombre")); //Valida si la propiedad que le pasamos esta dentro del objeto (jon)
console.log(jon.hasOwnProperty("nacimiento"));//Valida si la propiedad que le pasamos esta dentro del objeto (jon)
