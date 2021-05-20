// Funcao sem retorno
function ImpimirSemValor (a, b){
    console.log(a + b)
}

ImpimirSemValor (2,3)
ImpimirSemValor (5,5)
ImpimirSemValor (9,9)

//Funcao com Valor
function soma (a, b = 0) {
    return a + b
}

console.log(soma(2, 3))