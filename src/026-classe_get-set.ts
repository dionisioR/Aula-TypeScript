class Conta_03{
    protected numero: number
    protected titular: string
    private saldoConta:number

    constructor(titular: string){
        this.numero = this.gerarNumeroConta()
        this.titular = titular
        this.saldoConta = 0
    }

    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1
    }
    protected info():void{
        console.log(`Número da conta: ${this.numero}, Titular: ${this.titular}`)
    }
    get saldo():number{
        return this.saldoConta
    }

    set saldo(saldoConta:number){
        this.saldoConta = saldoConta
    }
    protected deposito(valor:number):void{
        if(valor < 0){
            console.log('Valor inválido')
            return
        }
        this.saldoConta += valor
    }

    protected saque(valor:number):void{
        if(valor < 0){
            console.log('Valor inválido')
            return
        }
        if(this.saldoConta >= valor){
            this.saldoConta -= valor
        } else{
            console.log("Saldo insuficiente.")
        }
    }
    
}

//------------------------------------------
class ContaPF_03 extends Conta_03{
    private cpf : number
    constructor(titular: string, cpf: number){
        super(titular)
        this.cpf = cpf
        console.log(`Conta PF criada - Titular: ${this.titular}.`)
    }

    info():void{
        console.log('-----------------------')
        console.log("CONTA: TIPO PESSOA FÍSICA")
        super.info()
        console.log(`CPF: ${this.cpf}`)
        console.log('-----------------------')
    }

    public deposito(valor: number): void {
        if(valor > 1000){
            console.log("Valor do depósito ultrapassou o limite de 1000.")
            return
        }else{
            super.deposito(valor)
        }
    }

    public saque(valor:number) :void{
        if(valor > 1000){
            console.log("Valor do saque ultrapassou o limite de 1000.")
            return
        }else if(valor > this.saldo){
            console.log("Saldo insuficiente para este saque.")
            return
        }else{
            super.saque(valor)
        }
    }
}

//------------------------------------------

class ContaPJ_03 extends Conta_03{
    private cnpj : number
    constructor(titular: string, cnpj: number){
        super(titular)
        this.cnpj = cnpj
        console.log(`Conta PJ criada - Titular: ${this.titular}.`)
    }

    info(): void {
        console.log('-----------------------')
        console.log("CONTA: TIPO PESSOA JURÍDICA")
        super.info()
        console.log(`CNPJ: ${this.cnpj}`)
        console.log('-----------------------')
    }
    public deposito(valor: number): void {
        if(valor > 10000){
            console.log("Valor do depósito ultrapassou o limite de 1000.")
            return
        }else{
            super.deposito(valor)
        }
    }
    public saque(valor:number) :void{
        if(valor > 10000){
            console.log("Valor do saque ultrapassou o limite de 10000.")
            return
        }else if(valor > this.saldo){
            console.log("Saldo insuficiente para este saque.")
            return
        }else{
            super.saque(valor)
        }
    }
}

//------------------------------------------
console.log("###################################")
let conta_a2 = new ContaPF_03("João", 12312312311)
console.log(conta_a2)
conta_a2.info()
conta_a2.deposito(500)
conta_a2.deposito(900)
conta_a2.deposito(2000)
console.log('Saldo: ' + conta_a2.saldo)
conta_a2.saque(500)
console.log('Saque: ' + conta_a2.saldo)
conta_a2.saque(1000)
console.log('Saque: ' + conta_a2.saldo)

conta_a2.saldo = 2000
console.log('Novo saldo: ' + conta_a2.saldo)

// console.log("###################################")
// let conta_b1 = new ContaPJ_02("Empresa XYZ", 195261254100109)
// console.log(conta_b1)
// conta_b1.info()
