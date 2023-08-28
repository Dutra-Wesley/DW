let input = require('prompt-sync')();

let paisA = Number(input('Informe o total da população do país A: '))
let taxaCrescimentoA = Number(input('Informe a taxa de crescimento anual do país A: '))

let paisB = Number(input('Informe o total da população do país B: '))
let taxaCrescimentoB = Number(input('Informe a taxa de crescimento anual do país B: '))

let anosParaUltrapassar =0;

if (paisA > paisB) {
    
    console.log('O páis A já tem uma população maior!!')

} else if (taxaCrescimentoA < taxaCrescimentoB) {
    
    console.log('A taxa de crescimento do páis A é menor que a do país B, logo ele nunca será ultrapassado!!')

}

while (paisA < paisB) {
    
    paisA += (paisA * taxaCrescimentoA)
    paisB += (paisB * taxaCrescimentoB)
    anosParaUltrapassar++

}

console.log('Levará ' + anosParaUltrapassar + ' anos para o país A ultrapassar o país B')
