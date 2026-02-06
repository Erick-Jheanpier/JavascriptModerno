//AÑADIR FUNCIONES EN UN OBJETO
const reproductor={
    reproducir:function(id){
        console.log('reproduciendo cancion con el id ',id)
    },
    pausar:function(){
        console.log('pausando...')
    },
    borrar:function(id){
        console.log('borrando cancion ',id)
    },
    crearPlaylist:function(nombre){
        console.log('creando la playlist de ',nombre)
    },
    reproducirPlaylist:function(nombre){
        console.log('reproduciendo la playlist ',nombre)
    }
}

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlaylist('makano')
reproductor.reproducirPlaylist('makano')