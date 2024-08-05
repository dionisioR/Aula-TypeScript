// Sintaxe
// let nomeVariavel: TypeAnntation = valor

// Variáveis
let nome_a: string = 'João';
console.log(nome_a)
console.log('------------')

// Arrays
let animais: string[] = ["elefante", "cachorro", "Gato", "Panda", "Girafa"]
console.log(animais)
console.log('------------')


// Objetos
let carro_a: {
    marca: string,
    ano: number,
    preco: number
}

carro_a = {marca: 'Fiat', ano: 2020, preco: 30000 }
console.log(carro_a)
console.log('------------')


// Funções
function multiplicaNumero(n1:number, n2:number){
    return n1 * n2
}
console.log(multiplicaNumero(5, 5))