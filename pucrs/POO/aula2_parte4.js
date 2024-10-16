class Pessoa {
    constructor(nome, anoNascimento, profissao) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    };
    ola() {
        console.log("Olá, eu sou " + this.nome);
    };
    calculaIdade() {
        return new Date().getFullYear() - this.anoNascimento;
    };
}

// atributo privado, getter e setter
class Estudante extends Pessoa {
    #matricula;
    notas = [];
    constructor(nome, anoNascimento, matricula) {
        super(nome, anoNascimento, "Estudante");
        this.#matricula = matricula;
    };
    getMatricula() {
        return this.#matricula;
    };
    setMatricula(valor) {
        this.#matricula = valor;
    };
    ola() {
        super.ola();
        console.log("colegas")
    };
};

const aluno1 = new Estudante("Julio", 1999, 1921891);
// não funciona pois o atributo matricula está privado
// aluno1.#matricula = 10

// apenas com o get
console.log(aluno1.getMatricula());
aluno1.setMatricula(83529385);
console.log(aluno1.getMatricula());

class Nota {
    #grau;
    constructor(disciplina, grau) {
        this.disciplina = disciplina;
        this.grau = grau;
    };
    setGrau(valor) {
        if (valor < 0 || valor > 10) {
            throw new Error();
        }
        this.#grau = valor;
    };
    getGrau() {
        return this.#grau;
    };
};

aluno1.notas = [new Nota("OO", 10), new Nota("Algoritmos", 8), new Nota("Cálculo", 7)];