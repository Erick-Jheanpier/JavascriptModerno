//every para usar esto todos los elemetos deben de cumplrise una condicion
const carrito6 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultadoq=carrito6.every(producto=>producto.precio<1000)
console.log(resultadoq)