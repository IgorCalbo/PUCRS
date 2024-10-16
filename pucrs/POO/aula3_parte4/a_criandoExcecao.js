class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function VaiDarErro() {
    throw new ValidationError("Dados inválidos!");
}

try {
    VaiDarErro()
}
catch (e) {
    console.log(`${e.name}: ${e.message}`);
}