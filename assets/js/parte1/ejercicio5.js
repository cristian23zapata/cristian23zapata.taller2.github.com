'use strict'

function enviar(){
    let numero = document.getElementById('numero').value
    if(numero<0){
        console.log(`su numero es : ${numero} y este número tiene raíz imaginaria `)
        alert(`su numero es : ${numero} y este número tiene raíz imaginaria `)
    }
    if(numero>0){
        let raiz = Math.sqrt(numero,2)
        console.log(`la raiz cuadrada de ${numero} es : ${raiz}`)
        alert(`la raiz cuadrada de ${numero} es : ${raiz}`)
    }    
}


