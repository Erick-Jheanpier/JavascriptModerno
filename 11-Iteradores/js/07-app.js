//for off itera sobre arreglos
const pendientes1=['tarea','comer',"estudiar"]


const car=[
    {nombre:"monitor de 20 pulgadas",precio:500 },
    {nombre:"televisor",precio:100 },
    {nombre:"tablet",precio:200 },
    {nombre:"audifonos",precio:300 },
    {nombre:"teclado",precio:400 }
]

for(let pendiente of pendientes1){
    console.log(pendiente)
}

for(let producto of car){
    console.log(producto.nombre)
}