let input = require('prompt-sync')();

let arrayNumeros = preencherArray()

let totalElementos = contabilizarTotalArray(arrayNumeros)
let totalImpares = contabilizarImparesArray(arrayNumeros)
console.log('Total de elementos na array: ' + totalElementos)
console.log('Total de números ímpares: ' + totalImpares)

function contabilizarImparesArray(arrayNumeros) {
    let totalImpares = 0;

    for (let index = 0; index < arrayNumeros.length; index++) {
        
        if (arrayNumeros[index] %2 !== 0 ) {
     
            totalImpares++
    
        }
        
    }
    
    return totalImpares
}

function contabilizarTotalArray(arrayNumeros) {
    let totalElementos = 0;

    for (let index = 0; index < arrayNumeros.length; index++) {
        
        totalElementos += arrayNumeros[index]
        
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
