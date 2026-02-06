//funciones de objeto y acceder a sus valores
const producto11={
    nombre:"monitor de 20 pulgadas",
    precio:300,
    disponible:true,
    mostrarInfo:function(){
        console.log("el producto ",this.nombre," tiene un precio de :",this.precio)
    }
}

producto11.mostrarInfo()