let input = require('prompt-sync')();

let frase = input('Digite uma frase: ')
let palavra = input('Agora digite uma palavra que deseja procurar na frase: ')

let fraseDividida = frase.split(' ')
let contagem = 0;

for (let index = 0; index < fraseDividida.length; index++) {
    
    if (fraseDividida[index] === palavra) {
        
        contagem++

    }
    
}

console.log('A frase original é: ' + frase)
console.log('A palavra procurada foi: ' + palavra)
console.log('A palavra aparece ' + contagem + ' vezes na frase')