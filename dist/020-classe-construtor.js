"use strict";
class Computador_01 {
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
}
let computador = new Computador_01("PC_01", 8, 4);
console.log(computador);
computador.ligado = true;
console.log(computador);
console.log(computador.nome);
console.log(computador.ligado);
console.log(computador.ram);
console.log(computador.cpu);
