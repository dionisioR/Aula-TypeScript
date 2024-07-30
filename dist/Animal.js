export default class Animal {
    nome;
    _idade;
    _estaVivo;
    constructor(nome) {
        this.nome = nome;
        this._idade = 0;
        this._estaVivo = false;
    }
    get estaVivo() {
        return this._estaVivo;
    }
    get idade() {
        return this._idade;
    }
    set idade(numero) {
        if (numero >= 0) {
            this._idade = numero;
        }
        else {
            console.log("Idade não pode ser negativa.");
        }
    }
    crescer() {
        this._idade++;
        console.log(`O animal cresceu. E tem ${this._idade} anos de idade`);
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
