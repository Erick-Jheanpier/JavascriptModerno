//object literal
const producto12={
    nombre:"monitor de 20 pulgadas",
    precio:300,
    disponible:true
}

//object constructor
function Producto(nombre,precio){
this.nombre=nombre;
this.precio=precio;
this.disponible=true
}
const p1=new Producto('monitor de 24 pulgadas',200)
console.log(p1)

const p2=new Producto('tv',20)
console.log(p1)
