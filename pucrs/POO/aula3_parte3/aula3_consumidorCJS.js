// Primeiro Exemplo
const circulo = require("./aula3_definicaoCJS.js");
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);
// desestruturando o objeto e acessando a função diretamente
const {area} = require("./aula3_definicaoCJS.js");
console.log(`Área do círculo de raio 2 é ${area(2)}`);

// Segundo Exemplo
const Circulo = require("./aula3_definicaoCJS.js");

const c1 = new Circulo(4);
console.log(`Área do círculo de raio 4 é ${c1.area()}`)