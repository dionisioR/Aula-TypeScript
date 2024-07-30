enum dias{
    Domingo = 0,
    Segunda = 1,
    Terça = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6
}

console.log(dias.Domingo);  // 0
console.log(dias['Domingo']);  // 0
console.log(dias[0]);  // Domingo

const d = new Date();
console.log(d)  // 2024-07-30T18:01:45.750Z
console.log(d.getDate())  // 30 - dia do mês
console.log(d.getDay())  // 2 - dia da semana

console.log(dias[d.getDay()]);  // enum + date = dia da semana por extenso


enum tipoUsuario{
    USER,  // 0
    ADMIN,  // 1
    SUPER  // 2
}

console.log(tipoUsuario.USER);  // 0
console.log(tipoUsuario.ADMIN)  // 1
 
const tipoUser:tipoUsuario =  tipoUsuario.ADMIN
console.log(tipoUser)

const tipoUser2:tipoUsuario =  0
console.log(tipoUser2)