//generar html desde js, creando nuevo enlace dde forma dinamica
const enlace=document.createElement('a')

//agregandole el texto
enlace.textContent='nuevo enlace'
console.log(enlace)

//seleccionar navegacion
const navegacion=document.querySelector('.navegacion')
navegacion.insertBefore(enlace,navegacion.children[1]) //insert before te da mas control como en que indice lo vas agregar

//creando nuevo card
const parrafo1=document.createElement('p')
parrafo1.textContent='Concierto'
parrafo1.classList.add('categoria','concierto')

const parrafo2=document.createElement('p')
parrafo2.textContent='Concierto de Rock'
parrafo2.classList.add('titulo')

const parrafo3=document.createElement('p')
parrafo1.textContent='$800 pror persona'
parrafo1.classList.add('precio')

//crear div con la clase info
const info=document.createElement('div')
info.classList.add('info')
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

//creando la imagen
const imagen=document.createElement('img')
imagen.src='img/hacer2.jpg'

//crear el card
const card=document.createElement('div')
card.classList.add('card')

//asignar la imagen
card.appendChild(imagen)

//asignar el info
card.appendChild(info)

//isnertar en el html
const contenedor=document.querySelector('.hacer .contenedor-cards')
contenedor.insertBefore(card,contenedor.children[0])