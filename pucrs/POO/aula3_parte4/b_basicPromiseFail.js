const myFristPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Rejeitado"), 2000);
});

let ifFail = (err) => {
    console.log(`Uma excessão foi lançada!`);
}

myFristPromise
    .then(
        (msg) => console.log("All rigth!!"),
        (msg) => {throw "Não fui atendido!!!"})
    .catch( ifFail)

console.log("Fim do programa")

    