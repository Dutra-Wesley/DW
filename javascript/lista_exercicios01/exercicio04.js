let input = require('prompt-sync')();

let totalNumeros = Number(input('Informe quantos números deseja digitar: '))

let arrayNumeros = preencherArray(totalNumeros)
imprimirArray(arrayNumeros)

function imprimirArray(arrayNumeros) {
    
    for (let index = 0; index < arrayNumeros.length; index++) {
        
        if (arrayNumeros[index] %2 === 0) {
            
            console.log(index)

        }

    }

}

function preencherArray(totalNumeros) {
    
    let arrayNumeros = []

    for (let index = 0; index < totalNumeros; index++) {
        
        arrayNumeros[index] = Number(input('Informe o ' + (index+1) + 'º valor: '))
        
    }
    
    return arrayNumeros
}
