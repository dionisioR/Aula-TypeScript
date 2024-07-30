"use strict";
let valores = [1, 2, 3, '4', '5'];
console.log(valores);
console.log('-----------------');
let fulano;
fulano = {
    nome: 'Fulano',
    idade: 30
};
console.log(fulano);
console.log('-----------------');
let pessoas;
pessoas = [
    { nome: 'Fulano', idade: 30 },
    { nome: 'Ciclano', idade: 25, vivo: false },
    { nome: 'Beltrano', idade: 35, vivo: true }
];
console.log(pessoas);
console.log(pessoas[0]);
console.log(pessoas[0].vivo);
console.log(pessoas[1]);
console.log(pessoas[2]);
console.log(pessoas[2].nome);
console.log(pessoas[2].idade);
console.log(pessoas[2].vivo);
