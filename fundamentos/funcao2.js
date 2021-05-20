// armazenando uma funcao numa variavel

const ImprimirSoma = function (a, b){
    console.log(a+b)
}

ImprimirSoma(2,3)

// Armazenando uma funcao arrow em uma variavel 
const soma = (a, b) => {
    return a + b 
}

console.log(soma(5,5))
