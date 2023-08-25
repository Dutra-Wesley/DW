let input = require('prompt-sync')();

let numeros = []

for (let index = 0; index < 10; index++) {
    
    numeros[index] = Number(input('Informe o ' + (index+1) + 'º número: ')) 
 
}

let numeroInformado = Number(input('Informe um número que deseja buscar: '))
let contagem = 0;

for (let index = 0; index < numeros.length; index++) {
    
    if (numeros[index] === numeroInformado) {
        
        contagem++

    }
    
}

console.log('O número informado aparece ' + contagem + ' vezes')