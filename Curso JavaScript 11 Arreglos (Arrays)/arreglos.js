

//Arreglo vacio
const a= []
const b = [1, true, "hola", ["A", "B", "C"]]
console.log(a)
console.log(b)

console.log(b[3])
console.log(b[2])
console.log(b[3][2]) //Para lograr imprimir el valor que esta anidado dentro del arreglo

const c =Array.of("X", "Y", "Z",9 ,8, 7)

console.log(c)

const d = Array(100).fill(false);
console.log(d);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");
console.log(colores);

colores.pop();
console.log(colores);


colores.forEach(function(el,index){
console.log(`<li id="${index}">${el}</li>`)
})