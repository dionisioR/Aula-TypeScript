let arr = [10, 20, 30, 40]
let [aa, bb, cc, dd] = arr
console.log(aa)
console.log(bb)
console.log(cc)
console.log(dd)

console.log('--------------------')
const cores = {
    cor1:'Verde',
    cor2:'Azul',
    cor3:'Amarelo',
    cor4:'Vermelho',
}

let {cor1, cor2, cor3, cor4} = cores
console.log(cor1)
console.log(cor2)
console.log(cor3)
console.log(cor4)
console.log('--------------------')


let [num1=0, num2=0, num3=0] = [10]
console.log(num1, num2, num3)
console.log('--------------------')



let [num_a=0, num_b=0, ...num_c] = [10,20,30,40,50,60,70,80,90]
console.log(num_a, num_b, num_c)
console.log('--------------------')

let texto_a = "Curso de typescript no youtube..."
let [...palavras] = texto_a.split(' ')
console.log(palavras)

let [p1, p2, p3, ...p4] = texto_a.split(' ')
console.log(p1, p2, p3, p4)