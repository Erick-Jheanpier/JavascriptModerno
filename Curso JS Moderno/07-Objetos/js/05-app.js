//objetos dentro de objetos
const producto5={
    nombre:"monitor de 20 pulgadas",
    precio:300,
    disponible:true,
    ifnormacion:{
        peso:'1kg',
        medida:'1 m'
    },
    fabricacion:{
        pais:"peru"
    }
}

console.log(producto5)
console.log(producto5.ifnormacion.peso)
console.log(producto5.ifnormacion.medida)
console.log(producto5.fabricacion.pais)