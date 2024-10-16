// Fábrica
function criaEmpregado (salarioBase, valorHoraExtra, qtHorasExtras) {
    return {
        salarioBase,
        valorHoraExtra, 
        qtHorasExtras, 
        calculaSalario: function() {
            return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras);
        }
    }
};

const empregado1 = criaEmpregado(5000, 100, 10);
const empregado2 = criaEmpregado(10000, 1000, 2);

console.log(empregado1.calculaSalario());
console.log(empregado2.calculaSalario());