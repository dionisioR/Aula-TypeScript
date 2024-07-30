"use strict";
class Computador {
    nome = "Computador";
    ram = 0;
    cpu = 0;
    ligado = false;
}
const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();
comp1.nome = "Rapidão";
comp2.nome = "Carão";
comp3.nome = "Gamer";
console.log(comp1);
console.log(comp2);
console.log(comp3);
console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
