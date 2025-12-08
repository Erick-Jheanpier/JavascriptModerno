//breack y continue en foor llop
for (let b=0;b<=10;b++){
    if(b===5){
        console.log('CINCO')
        //break; 
        continue;
    }
}

const carrito=[
    {nombre:"monitor de 20 pulgadas",precio:500 },
    {nombre:"televisor",precio:100 ,descuento:true },
    {nombre:"tablet",precio:200 },
    {nombre:"audifonos",precio:300 },
    {nombre:"teclado",precio:400 }
]

for(let i=0;i<carrito.length;i++){
    if(carrito[i].descuento){
        console.log('el articulo ',carrito[i].nombre," tiene descuento")
    }
}