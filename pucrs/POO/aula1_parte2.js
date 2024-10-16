var pessoa = { nome: 'Alessandro', idade: 48}
console.log(pessoa)

var pessoa = { nome: 'Alessandro', idade: 48, saudar: function() {
    console.log("Olá");
}}

pessoa.saudar()

// Criando nova pessoa
var pessoa1 = {nome: "Maria", idade: 8, saudar: function() { console.log("Olá!!!"); }}
console.log(pessoa1)
pessoa1.saudar()