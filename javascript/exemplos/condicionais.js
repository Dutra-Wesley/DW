let input = require('prompt-sync')();

// O PROMPT SEMPRE LÊ EM FORMATO STRING!!
let numero = Number(input('Informe um número: '))
console.log(numero)

if (numero %2 === 0) {
    
    console.log('O número é par!')

} else {

    console.log('O número é impar!')

}

switch (numero) {
    case 1:
        
        console.log('Domingo')
        break;
    
    case 2:

        console.log('Segunda-feira')
        break;
    
    case 3:

        console.log('Terça-feira')
        break

    case 4:

        console.log('Quarta-feira')
        break;

    case 5:

        console.log('Quinta-feira')
        break;

    case 6:

        console.log('Sexta-feira')
        break;

    case 7:

        console.log('Sábado')
        break;

    default:

        console.log('Valor inválido!')
        break;

}