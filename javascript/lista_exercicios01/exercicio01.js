let input = require('prompt-sync')();

let resposta = ''

do {
    
    console.log('Conversões disponíveis: ')
    console.log('1 - CELSIUS PARA FAHRENHEIT')
    console.log('2 - CELSIUS PARA KELVIN')
    console.log('3 - FAHRENHEIT PARA CELSIUS')
    console.log('4 - KELVIN PARA CELSIUS')
    console.log('5 - FAHRENHEIT PARA KELVIN;')
    console.log('6 - KELVIN PARA FAHRENHEIT')

    let tipoConversao = Number(input('Informe a opção desejada de conversão: '))
    let temperatura = 0;
    let conversao = 0;

    switch (tipoConversao) {
        case 1:

            temperatura = Number(input('Informe a quantidade de celsius: '))
           
            conversao = (temperatura * 1.8) + 32
            console.log(conversao.toFixed(2))

            break;
    
        case 2:

            temperatura = Number(input('Informe a quantidade de celsius: '))
            conversao = temperatura + 273.15
            console.log(conversao.toFixed(2))

            break;

        case 3:

            temperatura = Number(input('Informe a quantidade de fahrenheit: '))
            conversao = (temperatura - 32) / 1.8
            console.log(conversao.toFixed(2))

            break;

        case 4:

            temperatura = Number(input('Informe a quantidade de kelvin: '))
            conversao = ((temperatura - 273.15) * 1.8) + 32 
            console.log(conversao.toFixed(2))

            break;

        case 5:

            temperatura = Number(input('Informe a quantidade de fahrenheit: '))
            conversao =  (temperatura - 32) * 0.555 + 273.15
            console.log(conversao.toFixed(2))

            break;

        case 6:

            temperatura = Number(input('Informe a quantidade de kelvin: '))
            conversao =  (temperatura - 273.15) * 1.8 + 32
            console.log(conversao.toFixed(2))

            break;
        
        default:
            
            console.log('Por favor, digite uma opção válida!!')
            break;
    }
    
    resposta = input('Deseja fazer outra conversão, SIM OU NÃO: ' )

} while (resposta.toUpperCase() === 'SIM');
