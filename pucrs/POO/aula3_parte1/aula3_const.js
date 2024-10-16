// Exemplo A
function testConst() {
    const const01 = "const 01"
    {
        const const02 = "const 02"
        console.log("01a." + const01)
        console.log("01b." + const02)
    }
    const01 = "novo valor"
    console.log("02a." + const01)
    console.log("02b." + const02)
}

testConst()

// Exemplo B
function testConst() {
    const const01 = {propriedade: "valor"}
    console.log("01a." + const01.propriedade)

    const01.propriedade = "novo valor"
    console.log("02a." + const01.propriedade)

}

testConst()

// Exemplo C
function testConst() {
    const const01 = {propriedade: "valor"}
    console.log("01a." + const01.propriedade)

    const01 = {propriedade: "novo valor"}
    console.log("02a." + const01.propriedade)
}

testConst()