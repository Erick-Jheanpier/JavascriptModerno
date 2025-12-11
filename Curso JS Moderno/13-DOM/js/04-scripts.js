//moificar textos o imagenes 
const encabezado=document.querySelector('.contenido-hero h1')
console.log(encabezado.innerHTML) //se trae el html
console.log(encabezado.innerText ) //si en el css -visibility:hidden no lo va encontrar
console.log(encabezado.textContent) //si lo va a encontrar

document.querySelector('.contenido-hero h1').textContent='nuevo heading'

const imagen=document.querySelector('.card img')
imagen.src='img/hacer2.jpg'