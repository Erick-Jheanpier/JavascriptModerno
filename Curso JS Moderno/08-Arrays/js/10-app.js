//map tecrea un arreglo nuevo y el for each no
const car1=[
    {nombre:"monitor de 20 pulgadas",precio:500 },
    {nombre:"televisor",precio:100 },
    {nombre:"tablet",precio:200 },
    {nombre:"audifonos",precio:300 },
    {nombre:"teclado",precio:400 }
]

const nuevoarreglo1=car1.forEach(function(producto){
    return `${producto.nombre}- precio: ${producto.precio}`
}) //te da resultado de underfined

const nuevoarreglo2=car1.map(function(producto){
    return `${producto.nombre}- precio: ${producto.precio}`
})

console.log(nuevoarreglo1)
console.log(nuevoarreglo2)

