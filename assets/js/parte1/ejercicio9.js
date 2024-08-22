'use strict'

function enviar(){
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value

    let suma = parseFloat(numero1) + parseFloat(numero2)

    document.write(`la suma del numero ${numero1} y el numero ${numero2} es : ${suma}`)
    console.log(`la suma del numero ${numero1} y el numero ${numero2} es : ${suma}`)
    alert(`la suma del numero ${numero1} y el numero ${numero2} es : ${suma}`)
}