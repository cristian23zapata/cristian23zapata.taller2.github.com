'use strict'

function enviar(){
    let nombre = document.getElementById('nombre').value
    let edad = document.getElementById('edad').value
  
    if(edad>=18){
        document.write(`su nombre es : ${nombre} y usted tiene : ${edad} años`)
        console.log(`su nombre es : ${nombre} y usted tiene : ${edad} años`)
    }
    else{
        document.write('Eres menor de edad, no puedes usar esta APP')
        console.log('Eres menor de edad, no puedes usar esta APP')
    }
}