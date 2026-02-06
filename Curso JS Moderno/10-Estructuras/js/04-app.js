//else if

const dinero1=500
const totalAPagar1=300
const tarjeta=true
const cheque=true
if(dinero1>totalAPagar1){
    console.log('si podemos pagar')
} else if(tarjeta){
    console.log('si puedo pagar porque tengo tarjeta')
} else if(cheque){
    console.log('si puedo pagar porque tengo cheque')
}

else{
    console.log('fondos insuficientes')
}