//agregar nuevas propiedades al objeto
const producto2={
    nombre:"monitor de 20 pulgadas",
    precio:300,
    disponible:true
}

producto2.imagen="imagen.jpg"
console.log(producto2)

//eliminar
delete producto2.disponible
console.log(producto2)
