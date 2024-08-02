"use strict";
class Conta_03 {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Número da conta: ${this.numero}, Titular: ${this.titular}`);
    }
    get saldo() {
        return this.saldoConta;
    }
    set saldo(saldoConta) {
        this.saldoConta = saldoConta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log('Valor inválido');
            return;
        }
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log('Valor inválido');
            return;
        }
        if (this.saldoConta >= valor) {
            this.saldoConta -= valor;
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
}
class ContaPF_03 extends Conta_03 {
    cpf;
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada - Titular: ${this.titular}.`);
    }
    info() {
        console.log('-----------------------');
        console.log("CONTA: TIPO PESSOA FÍSICA");
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log('-----------------------');
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log("Valor do depósito ultrapassou o limite de 1000.");
            return;
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log("Valor do saque ultrapassou o limite de 1000.");
            return;
        }
        else if (valor > this.saldo) {
            console.log("Saldo insuficiente para este saque.");
            return;
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJ_03 extends Conta_03 {
    cnpj;
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada - Titular: ${this.titular}.`);
    }
    info() {
        console.log('-----------------------');
        console.log("CONTA: TIPO PESSOA JURÍDICA");
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log('-----------------------');
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log("Valor do depósito ultrapassou o limite de 1000.");
            return;
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log("Valor do saque ultrapassou o limite de 10000.");
            return;
        }
        else if (valor > this.saldo) {
            console.log("Saldo insuficiente para este saque.");
            return;
        }
        else {
            super.saque(valor);
        }
    }
}
console.log("###################################");
let conta_a2 = new ContaPF_03("João", 12312312311);
console.log(conta_a2);
conta_a2.info();
conta_a2.deposito(500);
conta_a2.deposito(900);
conta_a2.deposito(2000);
console.log('Saldo: ' + conta_a2.saldo);
conta_a2.saque(500);
console.log('Saque: ' + conta_a2.saldo);
conta_a2.saque(1000);
console.log('Saque: ' + conta_a2.saldo);
conta_a2.saldo = 2000;
console.log('Novo saldo: ' + conta_a2.saldo);
