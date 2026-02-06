//congelar un objeto para no poder modificarlo

"use strict" //se usa para que se exija reglas obligatorias que se deben de cumplir
const producto8={
    nombre:"monitor de 20 pulgadas",
    precio:300,
    disponible:true
}

Object.freeze(producto8) //congela y no permite que se cree un nuevo objeto, reasigne o elimine
producto8.disponible=false
producto8.imagen='imagen.jpg'

console.log(producto8)
console.log(Object.isFrozen(producto8)) //retorna true o false si esta congelado o no