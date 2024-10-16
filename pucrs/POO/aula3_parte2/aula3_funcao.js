// Exemplo A - Função sem Parâmetro
function funcaoSemRetorno() {
    console.log("Alô Mundo!");
}

function funcaoComReturn() {
    return "Alô Mundo!";
}

let msg = funcaoSemRetorno()
console.log(msg)

msg = funcaoComReturn()
console.log(msg)


// Exemplo B - Função Com Parâmetro
function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }
    return resultado;
}

console.log(potencia());
console.log(potencia(4));
console.log(potencia(2,6));
console.log(potencia(2,6,18));


// Exemplo 2A - Função com Parâmetro
function decision(question, doOK, doCancel) {
    if (question == "OK") doOK()
    else doCancel();
}

function showOk() { 
    console.log("You agreed.");
}

function showCancel() {
    console.log("You canceled the execution.");
}

decision("OK", showOK, showCancel);
decision("Cancel", showOK, showCancel);


// Exemplo 2B - Função como Parâmetro
function decision(question, doOK, doCancel) {
    if (question == "OK") doOK()
    else doCancel();
}

decision(
    "OK",
    function () { console.log("You agreed.")},
    function () { console.log("You canceled the execution.")}
);

decision(
    "Cancel",
    function () { console.log("You agreed.")},
    function () { console.log("You canceled the execution.")}
);

// Exemplo 2C - Função como Parâmetro
function decision(question, doOK, doCancel) {
    if (question == "OK") doOK()
    else doCancel();
}

let beOK = function showOk() {console.log("You agreed.");}

let beCancel = function showCancel() {console.log("You canceled the execution.");}

decision("OK", beOK, beCancel);
decision("Cancel", beOK, beCancel);
