let input = require('prompt-sync')();

let arrayTarefas = []
let resposta = ''

do {
    
    console.log('1 - ADICIONAR TAREFA')
    console.log('2 - REMOVER TAREFA')
    console.log('3 - LISTAR TAREFAS')

    let opcao = Number(input('Informe a opção desejada: '))

    switch (opcao) {
        case 1:
            
             let novaTarefa = input('Informe que tarefa deseja adicionar: ')
             arrayTarefas.push(novaTarefa.toLocaleUpperCase())

            break;
            
        case 2:
                
            let removerTarefa = input('Informe que tarefa deseja remover: ')
            let indexParaExcluir = arrayTarefas.indexOf(removerTarefa.toLocaleUpperCase())
            
            if (indexParaExcluir !== -1) {
                
                arrayTarefas.splice(indexParaExcluir, 1)
                console.log('Tarefa: ' + removerTarefa + ' removida!')
            } else {

                console.log('Tarefa: ' + removerTarefa + ' não encontrada no array!')
            }

            break;

        case 3:
                
            for (const tarefas of arrayTarefas) {
                
                console.log(tarefas.toLocaleUpperCase())

            }

            break;

        default:

            console.log('Informe uma opção válida!!')
            break;
    }

    resposta = input('Deseja fazer outra alteração? Caso contrário o programa será finalizado! SIM OU NÃO: ')

} while (resposta.toLocaleUpperCase() === 'SIM');