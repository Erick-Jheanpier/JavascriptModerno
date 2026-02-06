const mes=['enero','febrero','marzo']
mes[3]='abril'
//agregar al final del arreglo sin conocer la extencion del arreglo
mes.push('abril')
console.table(mes)
//---------------------------
const carrito=[];
//definir un producto
const producto={
    nombre:'monitor de 32 pulgadas',
    precio:400
}
const producto2={
    nombre:'celular',
    precio:800
}
const producto3={
    nombre:'teclado',
    precio:800
}
carrito.push(producto)
carrito.push(producto2)
carrito.unshift(producto3) //pone el elemento al inicio

console.table(carrito)
