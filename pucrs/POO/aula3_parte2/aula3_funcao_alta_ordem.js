// Exemplo A - arraySome
array = [4,5,6,7,8,9,10]

regraImpar = (item) => item % 2 == 0
 
console.log("Há algum número impar? " + array.some(regraImpar))

regraPrimo = (item) => {
    let ndiv = 0;
    for (let divisor=1; divisor<=item; divisor++)
        if((item%divisor) == 0)
            ndiv++

    if (ndiv==2)
        return true
    else
        return false
}

console.log("Há algum número primo " + array.some(regraPrimo))

// Exemplo B - arrayEvery
array = [4,5,6,7,8,8,9,10]

regraImpar = (item) => item % 2 != 0

console.log("Todos os números que são impares? " + array.every(regraImpar))

regraPrimo = (item) => {
    let ndiv = 0;
    for(let divisor = 1; divisor<= item; divisor++)
        if ((item % divisor) == 0)
            ndiv++

    if((ndiv == 2))
        return true
    else 
        return false
}

console.log("Todos os números que são primos ? " + array.every(regraPrimo))

// Exemplo C - arrayFilter
array = [4,5,6,7,8,8,9,10]

regraImpar = (item) => item % 2 != 0

console.log("Fitlrar números impares? " + array.filter(regraImpar))

regraPrimo = (item) => {
    let ndiv = 0;
    for(let divisor = 1; divisor<= item; divisor++)
        if ((item % divisor) == 0)
            ndiv++

    if((ndiv == 2))
        return true
    else 
        return false
}

console.log("Filtrar os números primos ? " + array.filter(regraPrimo))


// Exemplo D - arrayForEach
array = [4,5,6,7,8,8,9,10]

array.forEach(
    (nro) => console.log(
        nro+
        " -> " + (nro%2==0?"par":"impar"))
)

nroDivisores = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++)
        if((item % divisor) == 0)
            ndiv ++
        return ndiv;
}

array.forEach(
    nro => console.log(
        nro+ `-> nDivisores de 1 até ${nro} = ` + nroDivisores(nro))
)

// Exemplo E - arrayReduce
array = [4,5,6,7,8,8,9,10]

let resultado = array.reduce((acc, val) => acc += (val % 2 == 0) ? val : 0, 0)

console.log("A soma dos nros pares é " + resultado)

// Exemplo F - arrayMap
array = [4,5,6,7,8,9,10]

var newArray = array.map((item) => item*2)
console.log(newArray)

newArray = array.map((item) => {return {x:item, y: 2*item}})
console.log(newArray)


// Exemplo G - arrayFilterMapForEach
array = [2,3,4,5,6,7,8,9,10]

nroDivisores = (item) => {
    let ndiv = 0;
    for(let divisor=1; divisor<=item; divisor++) 
        if((item % divisor) == 0)
            ndiv++
    return ndiv;
}

array
    .filter((nro) => nroDivisores(nro) == 2)
    .map((item) => {return {x:item, par:(item%2)==0}})
    .forEach((obj) => console.log(obj.x + " é par? " + obj.par))