let input = require('prompt-sync')();

let notasAlunos = []
let totalNotas = 0;

for (let index = 0; index <10; index++) {
    
    notasAlunos[index] = Number(input('Informe a ' + (index+1) + 'ª nota: '))
    totalNotas += notasAlunos[index]

}

let mediaTurma = totalNotas / notasAlunos.length
let contagem = 0;

for (let index = 0; index < notasAlunos.length; index++) {
    
    if (notasAlunos[index] > mediaTurma) {
        
        contagem++

    }
    
}

console.log('No total ' + contagem + ' alunos ficaram acima da média da geral da turma')