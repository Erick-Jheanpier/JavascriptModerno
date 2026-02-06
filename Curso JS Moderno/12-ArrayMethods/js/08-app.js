//spred operator
const mesess = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carritos = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//spreed operator con arreglo de indices
const mesess1=[...mesess,'Agosto']
console.log(mesess1)

const produc={nombre:'disco duro',precio:300}
const carritos10=[...carrito,produc];
console.log(carritos10)