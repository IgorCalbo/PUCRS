// Construtor
function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function() {
        return new Date().getUTCFullYear() - this.anoDeNascimento
    };
};

const pessoa1 = new Pessoa("João", 1990, "Estudante");
console.log(pessoa1)

console.log(pessoa1.calculaIdade()) 
pessoa1.anoDeNascimento = 1983;
console.log(pessoa1.calculaIdade()) 


const pessoa2 = new Pessoa("Maria", 2016, "Estudante");
console.log(pessoa2)


const pessoa3 = new Object();

// Dessa maneira o console irá retornar o construtor padrão do Javascript para objetos, que é Object
console.log(pessoa3.constructor)

// Nesse caso está o objeto está com um protótipo nulo, criando um objeto que não herda de Object.prototype
console.log(pessoa3.__proto__)

// Atribuindo manualmente os valores de Pessoa3
pessoa3.nome = "Pedro"
pessoa3.anoDeNascimento = 1965;
pessoa3.profissao = "Advogado";
pessoa3.calculaIdade = pessoa2.calculaIdade;
console.log(pessoa3.calculaIdade())


// Parte 2 da aula
console.log("----------------------")

console.log(pessoa1.constructor.name)
console.log(pessoa3.constructor.name)

function descobreTipo(objeto) {
    if ("Object" == objeto.constructor.name) {
        console.log('é um objeto raiz')
    } else {
        console.log('é um objeto do tipo ' + objeto.constructor.name);
    }
};

descobreTipo(pessoa1)
descobreTipo(pessoa3)

console.log(Object.getPrototypeOf(pessoa1))
console.log(pessoa1.__proto__)

const pessoa4 = Object.create(pessoa3);
console.log(pessoa4.constructor)
const pessoa5 = Object.create(pessoa2);
console.log(pessoa5.constructor)

// Adicionando a funcão saudar a pessoa1 
pessoa1.saudar = function() {
    console.log("Olá");
};

pessoa1.saudar()

// Dessa maneira, todos os objetos pessoas teram o metódo saudar através do prototype
Pessoa.prototype.saudar = function() {
    console.log("Olá")
}

pessoa2.saudar();
pessoa5.saudar();

const pessoa6 = new Pessoa("Antonia", 1930, "Bibliotecária")
pessoa6.saudar();