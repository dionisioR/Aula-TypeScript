"use strict";
var produtoStatus;
(function (produtoStatus) {
    produtoStatus[produtoStatus["Ativo"] = 1] = "Ativo";
    produtoStatus[produtoStatus["Inativo"] = 2] = "Inativo";
    produtoStatus[produtoStatus["Indisponivel"] = 3] = "Indisponivel";
})(produtoStatus || (produtoStatus = {}));
function checarStatusProduto(status) {
    switch (status) {
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
console.log(checarStatusProduto(1));
console.log(checarStatusProduto(2));
console.log(checarStatusProduto(3));
console.log(checarStatusProduto(4));
