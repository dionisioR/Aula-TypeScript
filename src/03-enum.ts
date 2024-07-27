enum produtoStatus{
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3
}

function checarStatusProduto(status:number){
    switch(status){
        case produtoStatus.Ativo:
            return "Produto Ativo";
        case produtoStatus.Inativo:
            return "Produto Inativo";
        case produtoStatus.Indisponivel:
            return "Produto Indisponivel";
        default:
            return "Status desconhecido";
    }
}

console.log(checarStatusProduto(1)); // Produto Ativo
console.log(checarStatusProduto(2)); // Produto Ativo
console.log(checarStatusProduto(3)); // Produto Ativo
console.log(checarStatusProduto(4)); // Produto Ativo
//console.log(checarStatusProduto('5')); // Produto Ativo