let input = require('prompt-sync')();

let arrayNumeros = preencherArray()

let totalElementos = contabilizarTotalArray(arrayNumeros)
console.log('Total de elementos na array: ' + totalElementos)
contabilizarImparesArray(arrayNumeros)

function contabilizarImparesArray(arrayNumeros) {

   for (const elemento of arrayNumeros) {
    
    if (elemento %2 !== 0 ) {
     
       console.log(elemento)

    }

   }
    
}

function contabilizarTotalArray(arrayNumeros) {
    let totalElementos = 0;

    for (const elemento of arrayNumeros) {
      
        totalElementos += elemento

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
