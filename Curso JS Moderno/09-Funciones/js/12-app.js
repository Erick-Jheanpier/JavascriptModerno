//AÑADIR FUNCIONES EN UN OBJETO (arrow function)
const reproductor={
    reproducir:(id)=>console.log('reproduciendo cancion con el id ',id),
    pausar:()=>console.log('pausando...'),
    borrar:(id)=>console.log('borrando cancion ',id),
    crearPlaylist:(nombre)=>console.log('creando la playlist de ',nombre),
    reproducirPlaylist:(nombre)=>console.log('reproduciendo la playlist ',nombre)
}

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlaylist('makano')
reproductor.reproducirPlaylist('makano')