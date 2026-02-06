//operador and (&&) revisa que se cumpla 2 condiciones
const usuario=true
const PuedesComprar=true
if(usuario && PuedesComprar){
    console.log('puedes comprar')
}else if(!usuario){
    console.log('inicia sesion')
} else if(!PuedesComprar){
    console.log('fondos insuficientes')
}else if(!usuario && !PuedesComprar){
    console.log('fondos insuficientes')
}