let input = require('prompt-sync')();

let numeros = 0;
let totalPares = 0;

for (let index = 0; index <= 10; index++) {
    
    numeros = Number(input('Informe o ' + index + 'º ' + 'número: '))

    if (numeros %2 === 0) {
        
        totalPares++

    }
    
}

console.log('No total foram informados ' + totalPares + ' números pares')