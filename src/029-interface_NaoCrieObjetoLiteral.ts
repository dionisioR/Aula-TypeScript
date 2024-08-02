// se formos trabalhar com objeto literal de preferência para interface.
interface curso{
    titulo: string;
    descricao: string;
    iniciarCurso?(texto:string):void;
}

//Herança com interface
interface cursoProgramacao extends curso{
    aulas: number;
    maxAlunos?: number;
}

interface cursoArtes extends curso{
    aulas: number;
    maxAlunos?: number;
}

// objeto herdando a estrutura da interface
// Obs.: neste caso devemos seguir a risca a estrutura da interface
// let curso_a:curso
// let curso_b:curso
// let curso_c:curso
let curso_a:cursoProgramacao
let curso_b:cursoProgramacao
let curso_c:cursoArtes

curso_a = {
    titulo: 'Angular',
    descricao: 'Framework JavaScript para criação de interfaces web',
    aulas: 20,
    maxAlunos: 50
}

curso_b = {
    titulo: 'React',
    descricao: 'Framework JavaScript para criação de interfaces web',
    aulas: 15,
    maxAlunos: 60
}

curso_c = {
    titulo: 'Desenho',
    descricao: 'Desenho com lápis de cor',
    aulas: 58,
}

console.log(curso_a);
console.log(curso_b);
console.log(curso_c);