//moment js tu aiado para formatear fechas
const hoy=new Date()
moment.locale('es')
console.log(moment().format('MMMM Do YYYY h:mm:ss a'))
console.log(moment().format('LLLL',hoy))