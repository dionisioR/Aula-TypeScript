"use strict";
class Computador_02 {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info() {
        console.log(`Nome: ${this.nome}, RAM: ${this.ram}GB, CPU: ${this.cpu}GHz, Ligado: ${this.ligado}`);
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
let computador_1 = new Computador_02("PC_01", 8, 4);
computador_1.info();
computador_1.ligar();
computador_1.info();
computador_1.desligar();
computador_1.info();
