const a_soma = (...n:number[]):number =>{
    return n.reduce((soma, proximoValor) => soma + proximoValor, 0);
}

console.log(a_soma(1, 2, 3, 4, 5)); // 15
console.log(a_soma(1))
console.log(a_soma(1,5))
console.log(a_soma(1,5,10))