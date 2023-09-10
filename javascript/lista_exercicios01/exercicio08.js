let input = require('prompt-sync')();

let livros = []

for (let index = 0; index < 3; index++) {

    let titulo = input('Informe o título do ' + (index + 1) + 'º livro: ')
    let autor = input('Informe o autor do ' + (index + 1) + 'º livro: ')
    let ano = Number(input('Informe o ano do ' + (index + 1) + 'º livro: '))

    let livro = {

        titulo: titulo,
        autor: autor,
        ano: ano,
    }

    livros.push(livro)
}

const tituloOrdenado = livros.map(e => e).sort((a, b) => a.titulo.localeCompare(b.titulo))
console.log('Titulo ordenado: ')
console.log(tituloOrdenado)
console.log('Titulo ordenado reversamente: ')
console.log(tituloOrdenado.reverse())
console.log('-----------------------------------------------')

const autorOrdenado = livros.map(e => e).sort((a, b) => a.autor.localeCompare(b.autor))
console.log('Autor ordenado: ')
console.log(autorOrdenado)
console.log('Autor ordenado reversamente: ')
console.log(autorOrdenado.reverse())
console.log('-----------------------------------------------')

const anoOrdenado = livros.map(e => e).sort((a, b) => a.ano.toString().localeCompare(b.ano))
console.log('Ano ordenado: ')
console.log(anoOrdenado)
console.log('Ano ordenado reversamente: ')
console.log(anoOrdenado.reverse())
console.log('-----------------------------------------------')
