'use strict'

function enviar(){
    let nombre = document.getElementById('nombre').value
    let edad = document.getElementById('edad').value
  
    if(edad>=18){
        console.log(`su nombre es : ${nombre} y usted tiene : ${edad} años`)
        document.write(`su nombre es : ${nombre} y usted tiene : ${edad} años`)
    }
    
}

