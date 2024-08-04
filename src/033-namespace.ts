namespace Veiculos {

    enum Cores { 'Preto', 'Branco', 'Vermelho', 'Amarelo', 'Azul', 'Prata' }

    abstract class Carro {
        nome: string
        motor: Motores.Motor
        cor: string
        constructor(nome: string, motor: Motores.Motor, cor: Cores) {
            this.nome = nome
            this.motor = motor
            this.cor = Cores[cor]
        }
        public ligar() {
            this.motor.liga = true
        }
        public desligar() {
            this.motor.liga = false
        }
        get minhaCor() {
            return this.cor
        }
        get meuMome() {
            return this.nome
        }
        get estouLigado() {
            return (this.motor.liga ? "Sim" : "Não")
        }
        get minhaPotencia() {
            return this.motor.potencia
        }
    }

    export class CarroEsportivo extends Carro{
        constructor(nome: string, cor: Cores) {
            super(nome, new Motores.Motor(6, 300), 2)
        }
    }

    export class CarroPopular extends Carro{
        constructor(nome: string, cor: Cores) {
            super(nome, new Motores.Motor(3, 300), 0)
        }
    }
}

namespace Motores {

    class Turbo {
        private pot: number
        constructor(pot: number) {
            this.pot = pot
        }
        get potencia(): (number) {
            return this.pot
        }
    }

    export class Motor {
        private ligado: boolean
        private cilindros: number
        private pot: (number | string)

        constructor(cilindros: number, pot: (number | string), turbo?: Turbo) {
            this.pot = `${pot}  ${(turbo ? turbo.potencia : 0)}`
            this.ligado = false
            this.cilindros = cilindros
        }
        set liga(ligado: boolean) {
            this.ligado = ligado
        }
        get liga(): boolean {
            return this.ligado
        }
        get potencia() {
            return this.pot
        }
    }
}

const carro1 = new Veiculos.CarroEsportivo('Raid', 2)
const carro2 = new Veiculos.CarroPopular('Fusca', 0)

carro1.ligar()
carro2.ligar()

console.log(`Nome: ${carro1.meuMome}`)
console.log(`Cor: ${carro1.minhaCor}`)
console.log(`Potência: ${carro1.minhaPotencia}`)
console.log(`Ligado: ${carro1.estouLigado}`)
console.log('---------------------------------------')
console.log(`Nome: ${carro2.meuMome}`)
console.log(`Cor: ${carro2.minhaCor}`)
console.log(`Potência: ${carro2.minhaPotencia}`)
console.log(`Ligado: ${carro2.estouLigado}`)
