const autenticado=true
if(autenticado){
    console.log('el curso esta autenticado')
}

const puntaje=300
function revisarPuntaje(){
    if(puntaje>400){
        console.log('excelente')
        return
    }

    if(puntaje>300){
        console.log('buen puntaje excelente')
        return
    }
}

revisarPuntaje()