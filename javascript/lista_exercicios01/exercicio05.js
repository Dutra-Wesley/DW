let input = require('prompt-sync')();

let arrayNumeros = preencherArray()

let totalElementos = contabilizarTotalArray(arrayNumeros)
console.log('Total de elementos na array: ' + totalElementos)

contabilizarImparesArray(arrayNumeros)

function contabilizarImparesArray(arrayNumeros) {

   for (const numero of arrayNumeros) {
    
    if (numero %2 !== 0 ) {
     
       console.log(numero)
    }
   }
}

function contabilizarTotalArray(arrayNumeros) {
    let totalElementos = 0;

    for (const numero of arrayNumeros) {
      
        totalElementos += numero

    }
    return totalElementos
}

function preencherArray() {
    let arrayNumeros = []

    for (let index = 0; index < 10; index++) {
        
        arrayNumeros[index] = Number(input('Digite o ' + (index + 1) + 'º valor: '))
        
    }
    return arrayNumeros
}
