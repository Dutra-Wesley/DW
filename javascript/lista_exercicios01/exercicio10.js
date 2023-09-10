let input = require('prompt-sync')();

let carros = [];

for (let index = 0; index < 5; index++) {
    
    let modelo = input('Informe o modelo do ' + (index + 1) + 'º carro: ')
    let fabricante = input('Informe o fabricante do ' + (index + 1) + 'º carro: ')
    let ano = Number(input('Informe ano do ' + (index + 1) + 'º carro: '))
    let valor = Number(input('Informe o valor do ' + (index + 1) + 'º carro: '))

    let carro = {

        modelo : modelo,
        fabricante : fabricante,
        ano : ano,
        valor : valor,
    }

    carros.push(carro);
}

let totalValor = contabilizarValorDosCarros();
console.log('---------------------------------')
console.log('Total do valor dos carros: R$'+ totalValor);
console.log('---------------------------------')

let anoInformado = input('Informe um ano para comparar com os carros: ')
listarCarrosPorAno(anoInformado);

let fabricanteInformado = input('Informe um fabricante: ')
listarCarrosPorFabricante(fabricanteInformado);

function contabilizarValorDosCarros() {
    
    let totalValor = 0;

    for (const carro of carros) {
        
        totalValor += carro.valor;
    }
    
    return totalValor;
}

function listarCarrosPorAno(anoInformado) {
    
    console.log('---------------------------------')
    console.log('Carros com ano menor que o informado: ')
    for (const carro of carros) {
        
        if (carro.ano < anoInformado) {
            
            console.log(carro)
        }
    }
    console.log('---------------------------------')
}

function listarCarrosPorFabricante(fabricanteInformado) {
    
    console.log('---------------------------------')
    console.log('Carros com fabricante informado: ')
    for (const carro of carros) {
        
        if (carro.fabricante === fabricanteInformado) {
            
            console.log(carro)
        }
    }
    console.log('---------------------------------')
}
