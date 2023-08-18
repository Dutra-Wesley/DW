let input = require('prompt-sync')();

let nomes = []

for (let index = 0; index < 10; index++) {
    
    nomes[index] = input('Informe o ' + (index+1) + 'º nome: ')
    
}

for (let index = 0; index < nomes.length; index++) {
    
    console.log(nomes[index])
    
}

console.log('--')

for (let index = 9; index >= 0; index--) {
    
    console.log(nomes[index])
    
}