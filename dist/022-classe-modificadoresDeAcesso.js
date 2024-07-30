"use strict";
class Computador_03 {
    id;
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
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
let pc = new Computador_03("PC_01", 8, 4);
pc.info();
pc.nome = 'Pc Gamer';
pc.info();
