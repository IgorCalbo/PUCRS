// Exemplo A
function testeVar() {
    let let01 = "let 01"
    {
        let let02 = "let 02"
        console.log("01a." + let01)
        console.log("01b." + let02)
    }
    console.log("02a." + let01)
}

testeVar()

// Exemplo B
function testeVar() {
    let let01 = "let 01"
    {
        let let02 = "let 02"
        console.log("01a." + let01)
        console.log("01b." + let02)
    }
    console.log("02a." + let01)
    console.log("02b." + let02)
}

testeVar()

// Exemplo C
function testeVar() {
    let let01 = "let 01"
    {
        console.log("01a." + let01)
        let let01 = "let 02"
        console.log("02a." + let01)
    }
    console.log("03a." + let01)
}

testeVar()