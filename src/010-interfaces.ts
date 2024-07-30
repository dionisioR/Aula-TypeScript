export default interface IAnimal{
    nome: string;
    idade: number;
    estaVivo: boolean;

    nascer(): void;
    crescer(): void;
    morrer(): void;
}

// let cachorro: IAnimal = {
//     nome: 'Rex',
//     idade: 5,
//     estaVivo: false,
//     nascer(): void {
//         this.estaVivo = true;
//         console.log(`O cachorro ${this.nome} nasceu e ${this.estaVivo? 'está vivo':'não esta vivo'}.`);
//     },
//     crescer(): void {
//         this.idade++;
//         console.log(`O cachorro cresceu. E tem ${this.idade} anos de idade`);
//     },
//     morrer(): void {
//         this.estaVivo = false
//         console.log(this.estaVivo? "Está vivo!": "Morreu!!!");
//     }

// }

// console.log(cachorro.nome);
// console.log(cachorro.idade);
// console.log(cachorro.estaVivo);
// cachorro.nascer();
// cachorro.crescer();
// cachorro.crescer();
// cachorro.crescer();
// cachorro.crescer();
// cachorro.crescer();
// cachorro.morrer();