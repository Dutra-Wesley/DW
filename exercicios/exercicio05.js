let input = require('prompt-sync')();

let totalNumeros = Number(input('Informe quantos números deseja digitar: '))

let menorNumero = 0;
let maiorNumero = 0;
let numerosSomados = 0;

for (let index = 0; index < totalNumeros; index++) {
   
    numeros = Number(input('Informe o ' + index + 'º ' + 'número: '))

    if (totalNumeros[index] > maiorNumero) {
        
        maiorNumero = totalNumeros[index]

    }

    if (totalNumeros[index] < menorNumero) {
        
        menorNumero = totalNumeros[index]

    }
    
    numerosSomados = totalNumeros[index]

}


let mediaNumeros = numerosSomados / totalNumeros.length
console.log('O menor número informado é: ' + menorNumero)
console.log('O maior número informado é: ' + maiorNumero)
console.log('A média desses números é: ' + mediaNumeros)