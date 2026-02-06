//el problema de no usar el protupe
function Cliente1(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo
}
const juan1=new Cliente1('Juan',500)

function formatearCliente(cliente1){
    const {nombre,saldo}=cliente1
    return 'el cliente '+nombre+' tiene un saldo de '+saldo
}

function formatearEmpresa(empresa){
    const {nombre,saldo,categoria}=empresa
    return 'el cliente '+nombre+' tiene un saldo de '+saldo+' y pertenece la categoria'+categoria
}

console.log(formatearCliente(juan1))

function Empresa(nombre,saldo, categoria){
    this.nombre=nombre;
    this.saldo=saldo
    this.categoria=categoria
}
const ccj=new Empresa('codigo con juan ',4000,' cursos en linea')
console.log(formatearEmpresa(ccj))