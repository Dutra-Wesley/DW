let input = require('prompt-sync')();

let texto = input('Digite um pequeno texto: ')
let palavraProcurada = input('Informe a palavra que deseja procurar no texto: ')
let palavraNova = input('Informe a palavra nova que será trocada: ')

let posicao = texto.indexOf(palavraProcurada)
let novoTexto = ''
let contador = 0;

while (posicao !== -1) {
    
    novoTexto = texto.replace(palavraProcurada, palavraNova)
    posicao = texto.indexOf(palavraProcurada, posicao + 1)
    contador++

}

console.log('O texto original é: ' + texto)
console.log('O novo texto é: ' + novoTexto)
console.log('A palavra foi trocada: ' + contador + ' vezes')
