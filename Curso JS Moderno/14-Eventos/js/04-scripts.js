//eventos que sucede en un formulario (submit)
const formulario1=document.querySelector('#formulario')
formulario1.addEventListener('submit',(e)=>{
    e.preventDefault()  //previene que la pagina se autodirija muy util
    console.log('buscando..')
})

