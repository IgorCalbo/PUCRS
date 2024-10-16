var pessoa = { nome: 'Alessandro', idade: 48}
console.log(pessoa.idade)
console.log(pessoa['idade'])

pessoa.nome = "João"

console.log(pessoa.nome)

pessoa['idade'] = 7
console.log(pessoa)

pessoa.saudar = function() {
    console.log("Hello!");
}
pessoa.saudar()

pessoa.saudar = function(nomeDoAmigo){
    console.log("Hello " + nomeDoAmigo + "!");
}
pessoa.saudar("Pedro")