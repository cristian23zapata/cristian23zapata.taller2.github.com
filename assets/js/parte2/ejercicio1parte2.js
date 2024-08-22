'use strict'

function enviar(){
    let estrato = document.getElementById('estrato').value
    let ancho = document.getElementById('ancho').value
    let alto = document.getElementById('alto').value
    let profundidad = document.getElementById('profundidad').value

    let metrosCubicos = parseInt(ancho) * parseInt(alto) * parseInt(profundidad)

    if(estrato==1){
        let valorPagar = metrosCubicos*5000
        document.write(`el valor a pagar por llenar la pisina es de : ${valorPagar}`)
    }
    if(estrato==2){
        let valorPagar = metrosCubicos*6500
        document.write(`el valor a pagar por llenar la pisina es de : ${valorPagar}`)
    }
    if(estrato==3){
        let valorPagar = metrosCubicos*7000
        document.write(`el valor a pagar por llenar la pisina es de : ${valorPagar}`)
    }
    if(estrato==4){
        let valorPagar = metrosCubicos*8000
        document.write(`el valor a pagar por llenar la pisina es de : ${valorPagar}`)
    }
    if(estrato==5){
        let valorPagar = metrosCubicos*9200
        document.write(`el valor a pagar por llenar la pisina es de : ${valorPagar}`)
    }
}