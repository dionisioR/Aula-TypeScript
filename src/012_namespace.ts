import Animal from "./Animal.js";

export namespace Terrestres{
     export class Cachorro extends Animal{
        constructor(nome: string){
            super(nome);
        }
        correr(){
            console.log(`${this.nome} está correndo.`);
        }
    }
}
export namespace Marinhos{
    export class Golfinho extends Animal{
        constructor(nome: string){
            super(nome);
        }
        nadar(){
            console.log(`${this.nome} está nadando.`);
        }
    }
}