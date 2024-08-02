"use strict";
function f_teste(valor) {
    return valor;
}
console.log(f_teste("Olá, TypeScript!"));
console.log(f_teste(10));
console.log(f_teste(true));
console.log(f_teste({ nome: 'Teste', idade: 30 }));
console.log('---------------------------------------------------------');
function exemplo(dado_a, dado_b) {
    return dado_b;
}
console.log(exemplo("Olá, TypeScript!", 10));
console.log(exemplo(22, "JavaScript"));
console.log(exemplo(true, false));
console.log('---------------------------------------------------------');
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_teste(10);
console.log(ct1.valor);
const ct2 = new C_teste('RD3W');
console.log(ct2.valor);
