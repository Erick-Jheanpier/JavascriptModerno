//for each y map
const pendientes=['tarea','comer',"estudiar"]
pendientes.forEach((pendiente)=>{
    console.log(pendiente)
})

const car1=[
    {nombre:"monitor de 20 pulgadas",precio:500 },
    {nombre:"televisor",precio:100 },
    {nombre:"tablet",precio:200 },
    {nombre:"audifonos",precio:300 },
    {nombre:"teclado",precio:400 }
]

car1.forEach((producto)=>{
    console.log(producto)
}) //no crea ningun arreglo

car1.map((producto)=>{
    console.log(producto.nombre)
}) //map crea un nuevo arreglo