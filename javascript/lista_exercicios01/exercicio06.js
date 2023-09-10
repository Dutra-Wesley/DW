let input = require('prompt-sync')();

let arrayTarefas = []
let opcao = '';

do {
    
    console.log('-----------------------')
    console.log('1 - ADICIONAR TAREFA')
    console.log('2 - REMOVER TAREFA')
    console.log('3 - LISTAR TAREFAS')
    console.log('4 - ENCERRAR O PROGRAMA')
    console.log('-----------------------')

    opcao = Number(input('Informe a opção desejada: '))

    switch (opcao) {
        case 1:
            
            let novaTarefa = input('Informe a nova tarefa que deseja adicionar: ')
            novaTarefa.toLocaleUpperCase()
            let indexTarefaRepetida = arrayTarefas.indexOf(novaTarefa)

            if (indexTarefaRepetida === -1) {
                
                arrayTarefas.push(novaTarefa)

            } else {

                console.log('Tarefa já existente na lista!')
            }

            break;
            
        case 2:
                
            let removerTarefa = input('Informe que tarefa deseja remover: ')
            removerTarefa.toLocaleUpperCase()
            let indexParaExcluir = arrayTarefas.indexOf(removerTarefa)
            
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

        case 4:

            console.log('PROGRAMA ENCERRADO!')
            break;

        default:

            console.log('Informe uma opção válida!!')
            break;
    }

} while (opcao !== 4);
