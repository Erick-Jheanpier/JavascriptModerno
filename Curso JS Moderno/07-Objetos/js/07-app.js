//en una constante cuando son objetos los valores se pueden reasignar o eliminar en el sgt ejemplo (8) vamos a ver como evitar ello

const producto7={
    nombre:"monitor de 20 pulgadas",
    precio:300,
    disponible:true
}

producto.disponible=false;

delete producto.precio;

console.log(producto)