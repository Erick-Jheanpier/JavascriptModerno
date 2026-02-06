//findindex nos dice en que indice de nuestro arreglo se encuentra el elemento

const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito1 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses1.forEach((mes,index)=>{
    if(mes==='Abril'){
        console.log("encontrado een el indice" , index)
    }
    })

//encontrar el indice de abril
const indice=meses1.findIndex((mes)=>mes==='Abril')
 console.log("encontrado een el indice" , indice)

 //encontrar un indice de un arreglo de objetos
 const indice2=carrito1.findIndex(producto=>producto.precio===100)
  console.log("encontrado een el indice" , indice2)

