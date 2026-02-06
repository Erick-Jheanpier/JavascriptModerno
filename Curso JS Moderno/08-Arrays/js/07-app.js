const carrito2=[];
//definir un producto
const produc={
    nombre:'monitor de 32 pulgadas',
    precio:400
}

const produc2={
    nombre:'celular',
    precio:800
}

const produc3={
    nombre:'teclado',
    precio:800
}

carrito2.push(produc)
carrito2.push(product2)
carrito2.unshift(produc3) //pone el elemento al inicio

//elimina el ultimo elemento de un arreglo
carrito2.pop();
console.table(carrito2)

carrito2.pop();
console.table(carrito2)

//eliminar del inicio del arreglo
carrito2.shift()
console.table(carrito2)

//si quieres eliminar cualquier posicion
carrito2.splice(1,1) // el primer item es la posiciom que deseas eliminar, el segundo item cuantos elemento deseas eliminar de ese elemento
console.table(carrito2)
