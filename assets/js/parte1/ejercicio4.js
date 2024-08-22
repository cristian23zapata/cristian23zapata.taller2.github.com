'use strict'

function enviar(){
let numero = document.getElementById('numero').value

alert(`su numero es : ${numero}`)

if(numero<0){
    numero = numero*-1
    alert(`el valor absoluto de su numero es : ${numero}`)
    console.log(`el valor absoluto de su numero es : ${numero}`)
}
else{
    alert(`el valor absoluto de su numero es :  ${numero}`)
    console.log(`el valor absoluto de su numero es : ${numero}`)
}

}
