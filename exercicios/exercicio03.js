let input = require('prompt-sync')();

let numeros = 0;
let totalNegativos = 0;

for (let index = 0; index <= 10; index++) {
    
    numeros = Number(input('Informe o ' + index + 'º ' + 'número: '))

    if (numeros < 0) {
        
        totalNegativos++

    }
    
}

console.log('No total foram informados ' + totalNegativos + ' números negativos')