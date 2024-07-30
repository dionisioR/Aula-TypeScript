import IAnimal from './010-interfaces.js';

export default class Animal implements IAnimal {
    readonly nome: string;
    idade: number;
    private _estaVivo: boolean;

    constructor(nome: string) {
        this.nome = nome;
        this.idade = 0;
        this._estaVivo = false;
    }

    get estaVivo(): boolean{
        return this._estaVivo;
    }

    crescer(): void {
        this.idade++;
        console.log(`O animal cresceu. E tem ${this.idade} anos de idade`);
    }

    morrer(): void {
        this._estaVivo = false;
        console.log(this.estaVivo ? "Está vivo!" : "Morreu!!!");
    }

    nascer(): void {
        this._estaVivo = true;
        console.log(`O animal ${this.nome} nasceu e ${this.estaVivo ? 'está vivo' : 'não está vivo'}.`);
    }
}
