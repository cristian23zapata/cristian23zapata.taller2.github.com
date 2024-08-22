'use strict'

function enviar(){
    let personas = document.getElementById('personas').value
    if(personas<=200){
        let costoPorPersona = personas * 14000
        document.write(`el costo de los platos para ${personas} personas es de : ${costoPorPersona} `)
        console.log(`el costo de los platos para ${personas} personas es de : ${costoPorPersona} `)
    }
    if(personas>200 && personas<=300){
        let costoPorPersona = personas * 11000
        document.write(`el costo de los platos para ${personas} personas es de : ${costoPorPersona} `)
        console.log(`el costo de los platos para ${personas} personas es de : ${costoPorPersona} `)
    }
    if(personas>300){
        let costoPorPersona = personas * 9000
        document.write(`el costo de los platos para ${personas} personas es de : ${costoPorPersona} `)
        console.log(`el costo de los platos para ${personas} personas es de : ${costoPorPersona} `)
    }
}