// .some soporta un arreglo de objetos y arreglo te da true o false te dice si existe un elemento o no

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//comprobar si un valor existe en un arreglo
const resultado=meses.includes('Enero')
console.log(resultado) //true o false

//en un arreglo de objetos se usa .some
const existe=carrito.some((producto)=>{
    return producto.nombre==='Celular'
})

console.log(existe) //true

//en un arreglo tradicional
const existe2=meses.some(mes=>mes==="Febrero")
console.log(existe2)