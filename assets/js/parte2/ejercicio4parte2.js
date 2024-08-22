'use strict'


function enviar(){
    let estudiantes =document.getElementById('estudiantes').value

    if(estudiantes>100){
        let precio = estudiantes * 6500
        document.write(`el director debe pagar : ${precio} a la compañia de viajes`)
        console.log(`el director debe pagar : ${precio} a la compañia de viajes`)
    }
    if(estudiantes>=50 && estudiantes<100){
        let precio = estudiantes * 7000
        document.write(`el director debe pagar : ${precio} a la compañia de viajes`)
        console.log(`el director debe pagar : ${precio} a la compañia de viajes`)
    }
    if(estudiantes>=30 && estudiantes<=49){
        let precio = estudiantes * 9500
        document.write(`el director debe pagar : ${precio} a la compañia de viajes`)
        console.log(`el director debe pagar : ${precio} a la compañia de viajes`)
    }
    if(estudiantes<30){
        let precio = 1000000
        document.write(`el director debe pagar : ${precio} a la compañia de viajes`)
        console.log(`el director debe pagar : ${precio} a la compañia de viajes`)
    }
}