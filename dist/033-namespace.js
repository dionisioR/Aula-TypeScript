"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome, motor) {
            this.nome = nome;
            this.motor = motor;
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    class Motor {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const motor = new Motores.Motor('V8');
const carro = new Veiculos.Carro('Fusca', motor);
console.log(carro.nome);
console.log(carro.motor.pot);
