"use strict";
class Conta_01 {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaPF_01 extends Conta_01 {
    cpf;
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPJ_01 extends Conta_01 {
    cnpj;
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
    }
}
let conta_a = new ContaPF_01("João", 12312312311);
console.log(conta_a.titular);
console.log(conta_a);
console.log('--------------');
let conta_b = new ContaPJ_01("Empresa XYZ", 195261254100109);
console.log(conta_b.titular);
console.log(conta_b);
