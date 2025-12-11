//filter retorna los elementos de un arreglo em base a una condicion 

//dame todos los productos mayores a 400
const carrito4 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado1;
resultado1=carrito4.filter(producto.precio>400)
console.log(resultado1)