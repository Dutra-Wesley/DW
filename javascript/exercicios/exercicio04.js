let input = require('prompt-sync')();

let totalPares = 0;

for (let index = 0; index < 10; index++) {
    
    let numeros = Number(input('Informe o ' + (index+1) + 'º ' + 'número: '))

    if (numeros %2 === 0) {
        
        totalPares++

    }
    
}

console.log('No total foram informados ' + totalPares + ' números pares')