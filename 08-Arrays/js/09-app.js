
//for each para iterar un array
const car=[
    {nombre:"monitor de 20 pulgadas",precio:500 },
    {nombre:"televisor",precio:100 },
    {nombre:"tablet",precio:200 },
    {nombre:"audifonos",precio:300 },
    {nombre:"teclado",precio:400 }
]

console.log(car.length)

for(let i=0;i<car.length;i++){
    console.log(car[i].nombre)
}