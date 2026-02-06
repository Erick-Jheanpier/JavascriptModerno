/*primeros pasos con localstorage*/ 

localStorage.setItem('nombre','juan');
const producto={
    nombre:"monitor de 20  pugadas",
    precio:300
}
const productoString=JSON.stringify(producto);
localStorage.setItem('producto',productoString)

const meses=['enero','febrero','marzo'];
const mesesString=JSON.stringify(meses);
localStorage.setItem('meses',mesesString)