'use strict'

function enviar(){
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value
    if(numero1!=0 && numero2!=0){
        document.write(`primer numero : ${numero1} segundo numero : ${numero2} `)
        console.log(`primer numero : ${numero1} segundo numero : ${numero2} `)
        alert(`primer numero : ${numero1} segundo numero : ${numero2} `)
    }
}