namespace Veiculos{
    export class Carro{
        nome:string
        motor: Motores.Motor
        constructor(nome:string, motor:Motores.Motor) {
            this.nome = nome
            this.motor = motor
        }
    }
}

namespace Motores{

    class Turbo{
        pot:number
        constructor(pot:number) {
            this.pot = pot
        }
    }

    export class Motor{
        pot:(number|string)
        
        constructor(pot:(number|string) ) {
            this.pot = pot
        }
    }
}

const motor = new Motores.Motor('V8')
const carro = new Veiculos.Carro('Fusca',motor)
console.log(carro.nome)
console.log(carro.motor.pot)