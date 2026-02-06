const cliente={
    nombre:"juan",
    saldo:500
}

console.log(cliente)
console.log(typeof cliente)

//forma correcta de crear proto y crear objeto nueo
function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo
}
const juan=new Cliente('Juan',500)
console.log(juan)