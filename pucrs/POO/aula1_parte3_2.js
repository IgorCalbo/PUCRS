// Exemplo de objeto calculadora
const calculadora = {
    numero1: 10,
    numero2: 20,
    soma: function() {
        return this.numero1 + this.numero2;
    }
};

console.log(calculadora.soma())

// Exemplo de objeto empregado
const empregado = {
    salarioFixo: 5000,
    valorHoraExtra: 100,
    horasExtras: 20,
    calculaSalario: function() {
        return this.salarioFixo + (this.valorHoraExtra * this.horasExtras);
    }
};

console.log(empregado.calculaSalario());