let input = require('prompt-sync')();

let carrinhoDeCompras = [];
let opcao = '';

do {
    
    console.log('----------------------------------------------------')
    console.log('1 - ADICIONAR PRODUTO NO CARRINHO')
    console.log('2 - REMOVER PRODUTO DO CARRINHO')
    console.log('3 - ALTERAR QUANTIDADE DE UM PRODUTO NO CARRINHO')
    console.log('4 - LISTAR OS PRODUTOS DO CARRINHO')
    console.log('5 - FINALIZAR COMPRA')

    console.log('----------------------------------------------------')
    opcao = Number(input('Informe a opção desejada: '))

    switch (opcao) {
        case 1:
            
            console.log('----------------------------------------------------')
            let nome = input('Informe o nome do produto: ')
            
            const filtrarNome = carrinhoDeCompras.filter(elemento => elemento.nome === nome);

            if (filtrarNome.length > 0) {
                
                console.log('Produto ' + nome + ' já existe no carrinho')

            } else {

                let quantidade = Number(input('Informe a quantidade do produto: '))
                let preco = Number(input('Informe o preço do produto: '))
                adicionarProdutoAoCarrinho(nome, quantidade, preco);
            }

            break;
    
        case 2:
            
            let removerProduto = input('Informe o nome do produto que deseja remover: ')

            removerProdutoDoCarrinho(removerProduto);
            
            break;

        case 3:
            
            let produtoNovaQuantidade = input('Informe o nome do produto que deseja alterar a quantidade: ')
            let novaQuantidade = Number(input('Informe a nova quantidade do produto: '))

            alterarQuantidadeCarrinho(produtoNovaQuantidade, novaQuantidade);
           
            break;

        case 4:
            
            listarProdutosDoCarrinho();   
            break;

        case 5:
            
            finalizarCompra();   
            break;

        default:

            console.log('Informe uma opção válida!')
            break;
    }

} while (opcao !==5);

function adicionarProdutoAoCarrinho(nome, quantidade, preco) {
    
    let produto = {

        nome : nome,
        quantidade : quantidade,
        preco : preco,
    }

    carrinhoDeCompras.push(produto)
}

function removerProdutoDoCarrinho(removerProduto) {

    let indiceProduto = -1;
    for (const indice in carrinhoDeCompras) {
       
        if (carrinhoDeCompras[indice].nome === removerProduto) {
            
            indiceProduto = indice;
        }
    }

    if (indiceProduto !== -1 ) {
        carrinhoDeCompras.splice(indiceProduto, 1)

    } else {

        console.log('Produto: ' + removerProduto + ' não encontrado no carrinho')
    }
}

function alterarQuantidadeCarrinho(produtoNovaQuantidade, novaQuantidade) {
    
    for (const produto of carrinhoDeCompras) {
        
        if (produto.nome === produtoNovaQuantidade) {
            
            produto.quantidade = novaQuantidade;
        }
    }
}

function listarProdutosDoCarrinho() {
    
    const produtosCarrinho = carrinhoDeCompras.map(produto => produto);
    console.log(produtosCarrinho)
}

function finalizarCompra() {
    
    let valorTotal = 0;
    for (const produto of carrinhoDeCompras) {
        
        valorTotal += produto.preco * produto.quantidade;
    }

    console.log('Valor total das compras: R$' + valorTotal)
}
