function teste():void{
    console.log('teste')
}

teste() // Chamando a função
teste() // Chamando a função
teste() // Chamando a função
console.log('---------------------')

function logar(user:string, pass:string):void{
    console.log(`Usuário: ${user}, Senha: ${pass}`)
}

logar('admin', '123456') // Chamando a função
logar('cliente', '456654') // Chamando a função
logar('user', '999999') // Chamando a função
console.log('---------------------')


function somar(a:number, b:number):number{
    return a + b
}

console.log(somar(10, 20)) // Chamando a função
let soma:number = somar(50,55.54)
console.log(soma) // Chamando a função
let string_soma: string = somar(4, 5.6).toString()
console.log(string_soma)

console.log('---------------------')

// parâmetro com valor padrão
function somar2(n1:number, n2:number = 0){
    return n1 + n2
}
console.log(somar2(5))
console.log(somar2(5,6.6))


console.log('---------------------')

// paramentro opcional
function logar2(user:string, pass:string, name?:string):void{
    if(name){
        console.log(`Usuário: ${user}, Senha: ${pass}, Nome: ${name}`)

    }else{
        console.log(`Usuário: ${user}, Senha: ${pass}`)
    }
}

logar2('admin', '123456') // Chamando a função
logar2('cliente', '456654', 'Jane Doe') // Chamando a função

console.log('---------------------')

// Convertendo os parâmetros em um objeto

function logar3(user: string, pass: string, name?: string){
    let dados;
    if(name){
        dados = {user, pass, name}
    }else{
        dados = {user, pass}
    }
    return dados;
}

let dados_logar3 = logar3('admin', '123456')

console.log(dados_logar3)

dados_logar3 = logar3('cliente', '456654', 'Jane Doe')

console.log(typeof(dados_logar3))
console.log(dados_logar3)
console.log(dados_logar3.user)