import {Terrestres, Marinhos} from './012_namespace.js'

let cachorro = new Terrestres.Cachorro('Rex');
cachorro.nascer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();

cachorro.correr();
cachorro.correr();
cachorro.morrer();

console.log('----------------------');
let golfinho = new Marinhos.Golfinho('Flip');

golfinho.nascer();
golfinho.crescer();
golfinho.crescer();
golfinho.crescer();

golfinho.nadar();
golfinho.nadar();
golfinho.nadar();

golfinho.morrer();