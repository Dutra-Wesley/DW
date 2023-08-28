let input = require('prompt-sync')();

let resposta = ''

do {
    
    console.log('Calcular área de: ')
    console.log('1 - QUADRADO')
    console.log('2 - RETÂNGULO')
    console.log('3 - CÍRCULO')
    console.log('4 - TRIÂNGULO')
    
    let calcular = Number(input('Qual figura geométrica deseja calcular a área?: '))
    let base =0;
    let altura =0;
    let calcularArea = 0;

    switch (calcular) {
        case 1:
            
            base = input('Informe a base do quadrado: ')
            altura = input('Informe a altura do quadrado: ')
            calcularArea = base * altura
            console.log(calcularArea)

            break;
        
        case 2:
            
            base = input('Informe a base do retângulo: ')
            altura = input('Informe a altura do retãngulo: ')
            calcularArea = base * altura
            console.log(calcularArea)

            break;

        case 3:
            
            let raio = input('Informe o raio do circulo: ')
            calcularArea = raio * raio
            console.log("π" + calcularArea)

            break;

        case 4:
            
            base = input('Informe a base do triângulo: ')
            altura = input('Informe a altura do triângulo: ')
            calcularArea = (base * altura) / 2
            console.log(calcularArea)

            break;

        default:
            
            console.log('Por favor, digite uma opção válida!!')
            break;
    }

    resposta = input('Deseja calcular outra forma?: ')

} while (resposta.toUpperCase() === 'SIM');
