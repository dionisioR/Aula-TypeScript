// esport class Pessoa_a {
class Pessoa_a {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

// export class Objeto {
class Objeto {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

const Coisas = ["Corda", "Pilha", "Lâmpada", "Chave"]

export default Pessoa_a
export {Coisas, Objeto}