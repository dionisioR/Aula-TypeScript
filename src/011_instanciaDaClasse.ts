import Animal  from "./011_classes.js";

const cachorro = new Animal("Totó");
cachorro.nascer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.morrer();

console.log(cachorro.nome);
 console.log(cachorro.idade);
 console.log(cachorro.estaVivo);
//  cachorro.estaVivo = true >>> Não pode ser acessado
// cachorro._estavivo = true >>> Atributo privado - não pode ser acessado