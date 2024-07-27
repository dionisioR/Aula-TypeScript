type TipoDeArray = (number | string)[]
let valores: TipoDeArray = [1,2,3, '4', '5']
console.log(valores)

console.log('-----------------');

type Pessoa = {
    nome: string,
    idade: number,
    vivo?:boolean  // ? indica um campo opcional
}

let fulano:Pessoa;
fulano = {
    nome: 'Fulano',
    idade: 30
}
console.log(fulano)

console.log('-----------------')

let pessoas: Pessoa[]

pessoas = [
    {nome: 'Fulano', idade: 30},
    {nome: 'Ciclano', idade: 25, vivo:false },
    { nome: 'Beltrano', idade: 35, vivo:true }
]
console.log(pessoas)
console.log(pessoas[0])
console.log(pessoas[0].vivo)  // undefined
console.log(pessoas[1])
console.log(pessoas[2])
console.log(pessoas[2].nome)
console.log(pessoas[2].idade)
console.log(pessoas[2].vivo)
