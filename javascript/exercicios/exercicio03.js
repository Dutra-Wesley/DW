let input = require('prompt-sync')();

let totalNegativos = 0;

for (let index = 0; index < 10; index++) {
    
    let numeros = Number(input('Informe o ' + (index+1) + 'º ' + 'número: '))

    if (numeros < 0) {
        
        totalNegativos++

    }
    
}

console.log('No total foram informados ' + totalNegativos + ' números negativos')