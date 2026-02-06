//crear elemento con spread operator similar al ejercico 5
const carrito1=[];
//definir un producto
const product={
    nombre:'monitor de 32 pulgadas',
    precio:400
}

const product2={
    nombre:'celular',
    precio:800
}

const product3={
    nombre:'teclado',
    precio:800
}

let resultado=[...carrito1,product] //... hace referencia a una copia y product es lo que se agregaa esa variable resultado
resultado=[...carrito1,product2] //deaclaracion relativa


console.table(resultado)

//imperactiva modifica el objeto actual osea a carrito1 mientras la declarativa no lo hace