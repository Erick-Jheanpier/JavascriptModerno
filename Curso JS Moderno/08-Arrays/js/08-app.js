//destructuring de objetos
const prod={
    nombre:'monitor de 20 pulgadas',
    precio:300,
    disponible:true
}

const {nombre,precio,disponible}=prod;

//destructuring de arreglos
const num=[10,20,30,40,50]
const [primero,segundo, tercero]=num //primero, segundo, tercero es una forma de darle un nombre a la posicion 
//const [primero, , tercero]=num  // las , sirve para indicar la posicion que no hace falta en este caso solo me intersa la posicion 2 y 0
console.log(tercero) //resultado 30