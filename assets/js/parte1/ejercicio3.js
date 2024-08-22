'use strict'

function enviar(){
    let nombre = document.getElementById('nombre').value
    let edad = document.getElementById('edad').value
    let sexo = document.getElementById('sexo').value
    
    if(sexo == 1)
    {
        if(edad>=18)
        {
            document.write(`su nombre es : ${nombre} , usted es un hombre y usted tiene : ${edad} años`)
            console.log(`su nombre es : ${nombre} , usted es un hombre y usted tiene : ${edad} años`)
        }
    }
    }
