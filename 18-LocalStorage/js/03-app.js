/*eliminar y actuaizar elementos en localstorage */
localStorage.removeItem('nombre')

//actualizar un registro
const mesesArrayObtener=JSON.parse(localStorage.getItem('meses'));
mesesArrayObtener.push('nuevo mes')
console.log(mesesArrayObtener)
localStorage.setItem('meses',JSON.stringify(mesesArrayObtener)) /**actualiza e ocastorage */

localStorage.clear() /**elimina todo el localstorage */