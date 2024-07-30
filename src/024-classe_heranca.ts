class Conta_01{
    private numero: number
    public titular: string

    constructor(titular: string){
        this.numero = this.gerarNumeroConta()
        this.titular = titular
    }

    gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1
    }
}

//------------------------------------------
class ContaPF_01 extends Conta_01{
    private cpf : number
    constructor(titular: string, cpf: number){
        super(titular)
        this.cpf = cpf
    }
}

//------------------------------------------

class ContaPJ_01 extends Conta_01{
    private cnpj : number
    constructor(titular: string, cnpj: number){
        super(titular)
        this.cnpj = cnpj
    }
}

//------------------------------------------

let conta_a = new ContaPF_01("João", 12312312311)
console.log(conta_a.titular) // João
console.log(conta_a)
console.log('--------------')
let conta_b = new ContaPJ_01("Empresa XYZ", 195261254100109)
console.log(conta_b.titular) // Empresa XYZ
console.log(conta_b)
