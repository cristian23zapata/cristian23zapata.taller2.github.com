'use strict'

function enviar(){
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value
    if(numero1>0){
        document.write(`numero positivo : ${numero1}  `)
        console.log(`numero positivo : ${numero1}  `)
    }
    if(numero2>0){
        document.write(`numero positivo : ${numero2}  `)
        console.log(`numero positivo : ${numero2}  `)
    }
}

