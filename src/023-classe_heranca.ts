class Conta{
    public numero: number
    public titular: string

    constructor(numero: number,titular: string){
        this.numero = numero
        this.titular = titular
    }
}

//------------------------------------------
class ContaPF extends Conta{}

//------------------------------------------

class ContaPJ extends Conta{}

//------------------------------------------

let conta1 = new ContaPF(123456, "João")
console.log(conta1.titular) // João
console.log(conta1) 

let conta2 = new ContaPJ(7891011, "Empresa XYZ")
console.log(conta2.titular) // Empresa XYZ
console.log(conta2) 
