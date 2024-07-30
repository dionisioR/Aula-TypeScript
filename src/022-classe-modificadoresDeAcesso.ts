class Computador_03{
    // Atributos
    private id:number
    public nome:string
    private ram:number
    private cpu:number
    protected ligado:boolean
    
    constructor(nome:string, ram:number, cpu:number){
        this.nome = nome
        this.ram = ram
        this.cpu = cpu
        this.ligado = false
        this.id = 0
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

let pc = new Computador_03("PC_01", 8, 4)

pc.info()
pc.nome = 'Pc Gamer'
pc.info()
// pc.ram = 128  >>> não é possível acessar elemento privado
