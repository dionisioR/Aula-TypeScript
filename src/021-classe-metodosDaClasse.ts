class Computador_02{
    nome:string
    ram:number
    cpu:number
    ligado:boolean
    
    constructor(nome:string, ram:number, cpu:number){
        this.nome = nome
        this.ram = ram
        this.cpu = cpu
        this.ligado = false
    }

    info():void{
        console.log(`Nome: ${this.nome}, RAM: ${this.ram}GB, CPU: ${this.cpu}GHz, Ligado: ${this.ligado}`)
    }
    ligar():void{
        this.ligado = true
    }
    desligar():void{
        this.ligado = false
    }
}

let computador_1 = new Computador_02("PC_01", 8, 4)

computador_1.info()

// computador_1.ligado = true

computador_1.ligar()

computador_1.info()

computador_1.desligar()

computador_1.info()

