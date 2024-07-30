"use strict";
const teste1 = () => {
    console.log('Teste com arrow function...');
};
teste1();
teste1();
teste1();
console.log('---------------------');
const teste2 = (nome) => {
    console.log(`Teste com arrow function` + ((nome) ? ` e nome: ${nome}` : ""));
};
teste2('Anna');
teste2();
console.log('---------------------');
const soma1 = (n1, n2 = 0) => {
    return n1 + n2;
};
console.log(soma1(10));
console.log(soma1(10, 20));
console.log('---------------------');
const soma2 = (n) => {
    let soma = 0;
    n.forEach((num) => {
        return soma += num;
    });
    return soma;
};
console.log(soma2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
