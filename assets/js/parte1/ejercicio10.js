'use strict'

function enviar(){
    let numero = document.getElementById('numero').value

    let porcentaje = (numero*5)/100

    document.write(`el 5% de ${numero} es : ${porcentaje}`)
    console.log(`el 5% de ${numero} es : ${porcentaje}`)
}