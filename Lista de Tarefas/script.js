let listaDeCompras = [];

function adicionarItem(item) {
    listaDeCompras.push(item);
    console.log(`${item} foi adicionado à lista.`);
}

function removerItem(item) {
    let index = listaDeCompras.indexOf(item);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`${item} foi removido da lista.`);
    } else {
        console.log(`${item} não encontrado na lista.`);
    }
}

function pesquisarItemPorNome(nome) {
    if (listaDeCompras.includes(nome)) {
        console.log(`${nome} está na lista de compras.`);
    } else {
        console.log(`${nome} não encontrado na lista.`);
    }
}

function pesquisarItemPorPosicao(posicao) {
    if (posicao >= 0 && posicao < listaDeCompras.length) {
        console.log(`O item na posição ${posicao} é: ${listaDeCompras[posicao]}`);
    } else {
        console.log(`Posição inválida.`);
    }
}

function menu() {
    let opcao;
    do {
        opcao = prompt(`Escolha uma opção:\n1. Adicionar item\n2. Remover item\n3. Pesquisar por nome\n4. Pesquisar por posição\n5. Exibir lista\n6. Sair`);
        switch (opcao) {
            case '1':
                let itemAdicionar = prompt("Digite o nome do item:");
                adicionarItem(itemAdicionar);
                break;
            case '2':
                let itemRemover = prompt("Digite o nome do item a remover:");
                removerItem(itemRemover);
                break;
            case '3':
                let nomePesquisar = prompt("Digite o nome do item a pesquisar:");
                pesquisarItemPorNome(nomePesquisar);
                break;
            case '4':
                let posicaoPesquisar = parseInt(prompt("Digite a posição do item a pesquisar:"));
                pesquisarItemPorPosicao(posicaoPesquisar);
                break;
            case '5':
                console.log("Lista de Compras:", listaDeCompras);
                break;
            case '6':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '6');
}

menu();
