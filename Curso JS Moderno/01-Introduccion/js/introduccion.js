// const es una variable que contendra el valor del promp (DATO QUE SE PIDE EN UNA VENTANA EMERGENTE)
const nombre = prompt("¿Cómo te llamas?");

// pon el dato de la variable en pantalla con queryselector
document.querySelector('.contenido').innerHTML = `Hola ${nombre}, estás aprendiendo JavaScript`;
