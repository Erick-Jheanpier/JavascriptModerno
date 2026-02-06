//sellar un objeto para no poder modificarlo

"use strict" //se usa para que se exija reglas obligatorias que se deben de cumplir
const producto9={
    nombre:"monitor de 20 pulgadas",
    precio:300,
    disponible:true
}

Object.seal(producto9) //no se puede eliminar o agregar pero si puedes modificar los objetos existentes
producto9.disponible=false
producto9.imagen='imagen.jpg'

console.log(producto9)
console.log(Object.isSealed(producto9)) //retorna true o false si esta congelado o no