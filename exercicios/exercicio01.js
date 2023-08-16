let input = require('prompt-sync')();

let nota1 = Number(input('Digite a primeira nota do aluno: '))
let nota2 = Number(input('Digite a segunda nota do aluno: '))

let mediaAluno = (nota1 + nota2) / 2

console.log('As notas do aluno foram: ' + (nota1) + ' e ' + (nota2) + ' e sua média foi: ' + mediaAluno)

if (mediaAluno >= 7) {
    
    console.log('Aluno aprovado!')

} else {

    console.log('Aluno Reprovado!')

}