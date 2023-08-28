let input = require('prompt-sync')();

let livros = []

for (let index = 0; index < 5; index++) {

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

const tituloOrdenado = livros.map(e => e).sort((a, b) =>
    a.titulo.localeCompare(b.titulo))

console.log(tituloOrdenado)
console.log(tituloOrdenado.reverse())

const autorOrdenado = livros.map(e => e).sort((a, b) =>
    a.autor.localeCompare(b.autor))


console.log(autorOrdenado)
console.log(autorOrdenado.reverse())

const anoOrdenado = livros.map(e => e).sort((a, b) =>
    a.ano.toString().localeCompare(b.ano))


console.log(anoOrdenado)
console.log(anoOrdenado.reverse())
