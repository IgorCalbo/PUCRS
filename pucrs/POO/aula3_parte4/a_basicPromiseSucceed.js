const myFristPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Sucesso!");
    }, 2000);
});

let ifSucceed = (successMessage) => {
    console.log(`Finalizado! ${successMessage}`);
}

myFristPromise.then(ifSucceed);

console.log("Fim do programa")