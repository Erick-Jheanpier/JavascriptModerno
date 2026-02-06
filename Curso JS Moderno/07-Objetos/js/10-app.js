//copiar 2 objetos
const producto10={
    nombre:"monitor de 20 pulgadas",
    precio:300,
    disponible:true
}

const medidas={
    peso:'1kg',
    medida:'1m'
}

const resultado=Object.assign(producto10,medidas);
console.log(resultado)

//spread operator o reset operator
const resultado2={...producto10,...medidas}
console.log(resultado2)