// comunicacion de funciones
iniciarapp()
function iniciarapp(){
    console.log('iniciando app..')
    segundafuncion()
}

function segundafuncion(){
    console.log('segunda funcion')
    usuarioautenticado('erick')
}

function usuarioautenticado(usuario){
    console.log('autenticando usuario ...esperr..')
    console.log('usuario autenticado exitosamente ',usuario)
}