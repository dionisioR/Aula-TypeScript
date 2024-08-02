function f_teste<T>(valor: T):T{
    return valor
}

console.log(f_teste<string>("Olá, TypeScript!"))
console.log(f_teste<number>(10))
console.log(f_teste<boolean>(true))
console.log(f_teste<object>({nome: 'Teste', idade: 30}))
console.log('---------------------------------------------------------') 

function exemplo<T,Y>(dado_a:T, dado_b:Y):Y{
    return dado_b 
}

console.log(exemplo<string, number>("Olá, TypeScript!", 10))
console.log(exemplo<number,string>(22, "JavaScript")) 
console.log(exemplo<boolean,boolean>(true, false)) 
console.log('---------------------------------------------------------') 


class C_teste<T>{
    public valor:T
    constructor(valor:T){
        this.valor = valor
    }
}

const ct1 = new C_teste<number>(10)
console.log(ct1.valor)
const ct2 = new C_teste<string>('RD3W')
console.log(ct2.valor)