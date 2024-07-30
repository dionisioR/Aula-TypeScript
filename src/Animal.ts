export default class Animal{
    readonly nome: string;
    private _idade: number;
    private _estaVivo: boolean;

    constructor(nome: string) {
        this.nome = nome;
        this._idade = 0;
        this._estaVivo = false;
    }

    get estaVivo(): boolean{
        return this._estaVivo;
    }

    get idade():number{
        return this._idade;
    }

    set idade(numero: number){
        if(numero >= 0){
            this._idade = numero;
        }else{
            console.log("Idade não pode ser negativa.");
        }
    }

    crescer(): void {
        this._idade++;
        console.log(`O animal cresceu. E tem ${this._idade} anos de idade`);
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