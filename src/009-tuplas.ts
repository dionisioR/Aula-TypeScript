// TUPLA
// Em programação, uma tupla é uma estrutura de dados que armazena uma coleção de elementos. 
// É semelhante a uma lista ou vetor, mas com algumas diferenças importantes:

// Imutabilidade: A principal característica das tuplas é que elas são imutáveis.
// Isso significa que, uma vez criada, você não pode alterar, adicionar ou remover elementos da tupla. (mas pode alterar seu valor em JavaScript)
// Se precisar de uma estrutura mutável, listas ou arrays são mais apropriados.

// Elementos heterogêneos: Tuplas podem conter elementos de tipos diferentes, como números, strings, e outros objetos. 

// Ordem e indexação: Os elementos em uma tupla são ordenados e podem ser acessados por índice, começando do zero.


// Uso comum : Tuplas são frequentemente usadas para agrupar dados que pertencem juntos e são imutáveis. 

// readonly - definindo tupla somente leitura
// let pessoa:readonly[string, number, string, boolean] = ['Alice', 30, 'engenheira', true]; 

let pessoa:[string, number, string, boolean] = ['Alice', 30, 'engenheira', true];
let nome0 = pessoa[0];
let idade0 = pessoa[1];
let profissao = pessoa[2];
let ativo0 = pessoa[3];
console.log(nome0, idade0, profissao, ativo0);

pessoa[0] = 'Alice das Maravilhas';
nome0 = pessoa[0];
console.log(nome0, idade0, profissao, ativo0);
