// Estrategia de gerar parametro padrao 
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(),soma1(2,3,4))

function soma2(a, b, c){
    a = a !== undefined ? a : 1 
}