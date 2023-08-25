let input = require('prompt-sync')();

let numeros = [2, 4, 6, 3, 5, 7]
console.log(numeros)

console.log('-----------------')

let contador = 0
while (contador < numeros.length) {
    
    console.log(numeros[contador])
    contador++

}

console.log('-----------------')

contador = 0;
do {
    
    console.log(numeros[contador])
    contador++

} while (contador < numeros.length);

console.log('-----------------')

for (let index = 0; index < numeros.length; index++) {
    
    console.log(numeros[index])
    
}

console.log('-----------------')

for (const numero of numeros) {
    
    console.log(numero)

}

console.log('-----------------')

for (const numero in numeros) {
    
    console.log(numero)

}