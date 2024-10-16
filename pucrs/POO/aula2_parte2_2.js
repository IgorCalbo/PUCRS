class Pessoa {
    constructor(nome, anoNascimento, profissao) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    };
    // Função Olá estará disponível para todas as pessoas através do construtor
    ola() {
        console.log("Olá, eu sou " + this.nome);
    };
    calculaIdade() {
        return new Date().getFullYear() - this.anoNascimento;
    };
}

const pessoa1 = new Pessoa("João", 1990, "Estudante");
pessoa1.ola();
console.log(pessoa1.calculaIdade());

// Herança
class Estudante extends Pessoa {
    constructor(nome, anoNascimento, matricula) {
        super(nome, anoNascimento, "Estudante");
        this.matricula = matricula;
    };
};

const aluno1 = new Estudante("Julio", 1999, 32412141)
console.log(aluno1);
aluno1.ola();
console.log(aluno1.matricula);
aluno1.calculaIdade();

class Professor extends Pessoa {
    constructor(nome, anoNascimento, titulacao) {
        super(nome, anoNascimento, "Professor");
        this.titulacao = titulacao;
    };
};

const prof1 = new Professor("Marta", 1970, "Mestre");

