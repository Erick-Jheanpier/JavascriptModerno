//destructuracion de objetos dentro de objetos
const producto6={
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
const { nombre, fabricacion: { pais } } = producto6;
console.log(pais);
