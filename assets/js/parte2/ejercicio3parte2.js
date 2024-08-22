'use strict'


function enviar(){
    let kiloUvas = document.getElementById('kiloUvas').value
    let tipo = document.getElementById('tipo').value
    let tamaño = document.getElementById('tamaño').value

    tipo = tipo.toUpperCase()

    let uva = 2000
    if(tipo == "A"){
        if(tamaño == 1){
            uva += 2000
            let precioUvas = parseFloat(uva) * parseFloat(kiloUvas)
            document.write(`el valor de las uvas de tipo : ${tipo} y tamaño ${tamaño} es de : ${precioUvas}`)
            console.log(`el valor de las uvas de tipo : ${tipo} y tamaño ${tamaño} es de : ${precioUvas}`)
        }
        if(tamaño == 2){
            uva += 1000
            let precioUvas = parseFloat(uva) * parseFloat(kiloUvas)
            document.write(`el valor de las uvas de tipo : ${tipo} y tamaño ${tamaño} es de : ${precioUvas}`)
            console.log(`el valor de las uvas de tipo : ${tipo} y tamaño ${tamaño} es de : ${precioUvas}`)
        }
    }
    if(tipo == "B"){
        if(tamaño == 1){
            uva -= 500
            let precioUvas = parseFloat(uva) * parseFloat(kiloUvas)
            document.write(`el valor de las uvas de tipo : ${tipo} y tamaño ${tamaño} es de : ${precioUvas}`)
            console.log(`el valor de las uvas de tipo : ${tipo} y tamaño ${tamaño} es de : ${precioUvas}`)
        }
        if(tamaño == 2){
            uva -= 900
            let precioUvas = parseFloat(uva) * parseFloat(kiloUvas)
            document.write(`el valor de las uvas de tipo : ${tipo} y tamaño ${tamaño} es de : ${precioUvas}`)
            console.log(`el valor de las uvas de tipo : ${tipo} y tamaño ${tamaño} es de : ${precioUvas}`)
        }
    }
}