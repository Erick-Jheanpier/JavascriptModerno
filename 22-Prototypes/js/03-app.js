//creando un prototype
function Cliente2(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo
}
Cliente2.prototype.tipoCliente2=function(){
   let tipo;
   if(this.saldo>1000){
    tipo='gold'
   }else if(this.saldo>5000){
    tipo='platium'
   }else{
    tipo='normal'
   }
   return tipo
}
Cliente2.prototype.nombreClienteSaldo=function(){
    return `nombre:${this.nombre},saldo:${this.saldo},tipo cliente ${this.tipoCliente2()}`
}
Cliente2.prototype.retirarSaldo=function(retira){
    this.saldo-=retira
}
//instanciamos
const Pedro2=new Cliente2('Pedro',6000)
console.log(Pedro2.tipoCliente2())
console.log(Pedro2.nombreClienteSaldo())
Pedro2.retirarSaldo((1000))
console.log(Pedro2.nombreClienteSaldo())
console.log(Pedro2)

