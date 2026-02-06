/** proyecto con localStorage */

//variables
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = []

//event listeners
eventListeners()
function eventListeners() {

    //cuando usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet)

    //cuando documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || []
        crearHTML()
    })
}


//funciones
function agregarTweet(e) {
    e.preventDefault()

    //textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value.trim()

    //validacion
    if (tweet === '') {
        mostrarError('El tweet no puede ir vacío')
        return
    }

    const tweetObj = {
        id: Date.now(),
        tweet: tweet
    }

    //añadir al arreglo de tweets
    tweets = [...tweets, tweetObj]

    //crear el HTML
    crearHTML()

    //resetear formulario
    formulario.reset()
}

//mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error
    mensajeError.classList.add('error')

    //insertar el contenido
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    setTimeout(() => {
        mensajeError.remove()
    }, 3000)
}

//muestra un listado de los tweets
function crearHTML() {

    limpiarHTML()

    if (tweets.length > 0) {
        tweets.forEach(tweet => {

            //agregar boton eliminar
            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.textContent = 'X'

            //funcion eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id)
            }

            //crear HTML
            const li = document.createElement('li')
            li.textContent = tweet.tweet

            //asignar boton
            li.appendChild(btnEliminar)

            //insertar en lista
            listaTweets.appendChild(li)
        })
    }

    sincronizarStorage()
}

//agregar tweets actuales a localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

//elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id)
    crearHTML()
}

//limpiar el html
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild)
    }
}
