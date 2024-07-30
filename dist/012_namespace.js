import Animal from "./Animal.js";
export var Terrestres;
(function (Terrestres) {
    class Cachorro extends Animal {
        constructor(nome) {
            super(nome);
        }
        correr() {
            console.log(`${this.nome} está correndo.`);
        }
    }
    Terrestres.Cachorro = Cachorro;
})(Terrestres || (Terrestres = {}));
export var Marinhos;
(function (Marinhos) {
    class Golfinho extends Animal {
        constructor(nome) {
            super(nome);
        }
        nadar() {
            console.log(`${this.nome} está nadando.`);
        }
    }
    Marinhos.Golfinho = Golfinho;
})(Marinhos || (Marinhos = {}));
