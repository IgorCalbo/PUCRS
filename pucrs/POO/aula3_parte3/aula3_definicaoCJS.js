// Primeiro Exemplo
exports.area = (r) => Math.PI * r**2;
exports.circunferencia = (r) => 2 * Math.PI * r;


// Segundo Exemplo
class Circulo {
    constructor(r) {
        this.raio = r;
    }
    area() {
        return Math.PI * this.raio**2;
    }
    circunferencia() {
        return 2 * Math.PI * this.raio;
    }
}

module.exports = Circulo