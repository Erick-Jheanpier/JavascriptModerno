//eventos con el mose
const nav=document.querySelector('.navegacion')

//click,mousedown ocurre cuando presionas y das click
//mouseenter cuando pasas el raton sobre el boton que tiene el evento (entrada)
//mouseout (salida) parecido a mouseenter pero lo conrario
//dblclick cuando das doble click

//registrar un evento
nav.addEventListener('click',()=>{
    console.log('haz dado un click')
})