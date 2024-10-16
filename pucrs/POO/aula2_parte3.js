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

class Estudante extends Pessoa {
    constructor(nome, anoNascimento, matricula) {
        super(nome, anoNascimento, "Estudante");
        this.matricula = matricula;
    };
    ola() {
        super.ola();
        console.log("colegas")
    };
};

const aluno1 = new Estudante("Julio", 1999, 3423488);
aluno1.ola();


// Referênciando Objeto

class Professor extends Pessoa {
    constructor(nome, anoNascimento, titulacao) {
        super(nome, anoNascimento, "Professor");
        this.titulacao = titulacao;
    };
};

prof1 = new Professor("Marta", 1970, "Mestre")
console.log(prof1)

const prof2 = prof1;
prof2.anoNascimento = 1980;
prof2.titulacao = "Doutor"
console.log(prof2)

prof1.formacao = "Ciência da Computação"
console.log(prof1)
// prof2 também tem formação agora, pois está referênciando o msm objeto na memória
console.log(prof2)

const prof3 = new Professor("Adriano", 1985, "Especialista")
console.log(prof3)

prof3.formacao = "Jornalismo"
console.log(prof3)

delete prof3.formacao
console.log(prof3)

// static
class ValidadorCPF {
    static TAMANHO_CPF = 11;
    static validar(tamanho) {
        if (tamanho == this.TAMANHO_CPF) {
            return true;
        }
        return false;
    }
}

console.log(ValidadorCPF.validar("12345678910".length));