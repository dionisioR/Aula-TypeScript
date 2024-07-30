export default class Animal {
    nome;
    idade;
    _estaVivo;
    constructor(nome) {
        this.nome = nome;
        this.idade = 0;
        this._estaVivo = false;
    }
    get estaVivo() {
        return this._estaVivo;
    }
    crescer() {
        this.idade++;
        console.log(`O animal cresceu. E tem ${this.idade} anos de idade`);
    }
    morrer() {
        this._estaVivo = false;
        console.log(this.estaVivo ? "Está vivo!" : "Morreu!!!");
    }
    nascer() {
        this._estaVivo = true;
        console.log(`O animal ${this.nome} nasceu e ${this.estaVivo ? 'está vivo' : 'não está vivo'}.`);
    }
}
