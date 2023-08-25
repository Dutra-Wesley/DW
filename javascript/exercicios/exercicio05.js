let input = require('prompt-sync')();

let totalNumeros = Number(input('Informe quantos números deseja digitar: '))

let menorNumero = 0;
let maiorNumero = 0;
let numerosSomados = 0;

for (let index = 0; index < totalNumeros; index++) {
   
    let numeros = Number(input('Informe o ' + (index+1) + 'º ' + 'número: '))

    if (numeros > maiorNumero || index === 0) {
        
        maiorNumero = numeros

    }

    if (numeros < menorNumero || index === 0) {
        
        menorNumero = numeros

    }
    
    numerosSomados += numeros

}

let mediaNumeros = numerosSomados / totalNumeros
console.log('O menor número informado é: ' + menorNumero)
console.log('O maior número informado é: ' + maiorNumero)
console.log('A média desses números é: ' + mediaNumeros)