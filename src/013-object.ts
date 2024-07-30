
// não preciso declarar o tipo como object.
// o typescript já vai entender (através da estrutura) que o código se trata de um objeto

// let dados: object = {
"use strict";
let dados = {
    nome: "Anna",
    idade: 25,
    endereco: {
        rua: 'Av. Paulista',
        numero: 53,
        cidade: 'São Paulo',
        estado: 'SP',
    },
    ola: function(){
        console.log('Olá! ' + this.nome);
    },
    info: function(curso:string){
        console.log(`Olá! Meu nome é ${this.nome} e estou cursando ${curso}`);
    }
};
console.log(dados);
console.log(typeof dados);
console.log(dados.nome);
console.log(dados.endereco.rua);
dados.nome = "Anna Maria";
console.log(dados);
dados.ola();
dados.info('JavaScript')