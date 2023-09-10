let input = require('prompt-sync')();

let alunos = []

// PREENCHENDO INFORMAÇÕES DOS ALUNOS
for (let index = 0; index < 5; index++) {

    let nome = input('Informe o nome do ' + (index + 1) + 'º aluno: ')
    let idade = Number(input('Informe a idade do ' + (index + 1) + 'º aluno: '))
    let media = Number(input('Informe a média do ' + (index + 1) + 'º aluno: '))

    let aluno = {

        nome: nome,
        idade: idade,
        media: media,
    }

    alunos.push(aluno)
}

let somaMedia = 0
let alunoMaisNovoIdade = 99
let alunoMaisNovo = {
    nome: '',
    idade: 0,
}

let alunoMaisVelhoIdade = 0
let alunoMaisVelho = {
    nome: '',
    idade: 0,
}

// IDENTIFICANDO A SOMA DA MÉDIA DOS ALUNOS, ALUNO MAIS NOVO E ALUNO MAIS VELHO
for (let index = 0; index < alunos.length; index++) {
    
    somaMedia += alunos[index].media

    if (alunos[index].idade < alunoMaisNovoIdade) {
        
        alunoMaisNovo.idade = alunos[index].idade
        alunoMaisNovo.nome = alunos[index].nome
        alunoMaisNovoIdade = alunos[index].idade
    }
    
    if (alunos[index].idade > alunoMaisVelhoIdade) {
        
        alunoMaisVelho.idade = alunos[index].idade
        alunoMaisVelho.nome = alunos[index].nome
        alunoMaisVelhoIdade = alunos[index].idade
    }
}

const mediaTurma = somaMedia / alunos.length
console.log('Média da turma é: ' + mediaTurma)
console.log('O aluno mais novo é: ' + alunoMaisNovo.nome + ' sua idade é: ' + alunoMaisNovo.idade)
console.log('O aluno mais velho é: ' + alunoMaisVelho.nome + ' sua idade é: ' + alunoMaisVelho.idade)

// QUAIS ALUNOS FICARAM A BAIXO DA MÉDIA DA TURMA
for (let index = 0; index < alunos.length; index++) {
    
    if (alunos[index].media < mediaTurma) {
        
        console.log('O aluno ' + alunos[index].nome + ' ficou abaixo da média da turma!')
    }
}
