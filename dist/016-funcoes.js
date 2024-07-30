"use strict";
function teste() {
    console.log('teste');
}
teste();
teste();
teste();
console.log('---------------------');
function logar(user, pass) {
    console.log(`Usuário: ${user}, Senha: ${pass}`);
}
logar('admin', '123456');
logar('cliente', '456654');
logar('user', '999999');
console.log('---------------------');
function somar(a, b) {
    return a + b;
}
console.log(somar(10, 20));
let soma = somar(50, 55.54);
console.log(soma);
let string_soma = somar(4, 5.6).toString();
console.log(string_soma);
console.log('---------------------');
function somar2(n1, n2 = 0) {
    return n1 + n2;
}
console.log(somar2(5));
console.log(somar2(5, 6.6));
console.log('---------------------');
function logar2(user, pass, name) {
    if (name) {
        console.log(`Usuário: ${user}, Senha: ${pass}, Nome: ${name}`);
    }
    else {
        console.log(`Usuário: ${user}, Senha: ${pass}`);
    }
}
logar2('admin', '123456');
logar2('cliente', '456654', 'Jane Doe');
console.log('---------------------');
function logar3(user, pass, name) {
    let dados;
    if (name) {
        dados = { user, pass, name };
    }
    else {
        dados = { user, pass };
    }
    return dados;
}
let dados_logar3 = logar3('admin', '123456');
console.log(dados_logar3);
dados_logar3 = logar3('cliente', '456654', 'Jane Doe');
console.log(typeof (dados_logar3));
console.log(dados_logar3);
console.log(dados_logar3.user);
