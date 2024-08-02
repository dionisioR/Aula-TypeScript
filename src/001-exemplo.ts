let nome: string;
let idade: number;
let plataforma: string;
let ativo:boolean;

nome = 'RD3W-CURSOS';
idade = 2;
plataforma = 'Youtube';
ativo = true;

console.log(`nome: ${nome}, idade: ${idade}, plataforma: ${plataforma}, ativo: ${ativo}`);

function somar_(a:number, b:number){
    return a + b;
}

let x = 8;
let y = 2;
let w = '5'
console.log(somar_(x,y));
// console.log(somar(x,w));

// array de número
let numeros: number[] = [1,2,3,4,5];
console.log(numeros)

// array de números e strings
let numerosStrings: (number|string)[] = [1,2,3,4,5,'6','7'];
console.log(numerosStrings)

// array que aceita números e a palavra 'RD3W' apenas

let numerosPalavras: (number|'RD3W')[] = [1,2,3,4,5,'RD3W'];
console.log(numerosPalavras)

// array com o número '13' e a palavra 'RD3W' apenas
let umNumeroEUmaPalavra: (13|'RD3W')[] = [13, 'RD3W', 13]
console.log(umNumeroEUmaPalavra)

// 38min