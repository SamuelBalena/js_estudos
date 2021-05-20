// Funcao em JS é First Class Object (Citizens)

// Criar de forma literal 

function func1(){ }

// Armazenar em uma variavel

const func2 = function () { }

// Armazenar em um Array

const array = [function(a,b){return a + b}, func1, func2]
console.log(array[0](2,3))

// Armazenando em um Objeto

const obj = {}
obj.falar = function (){return 'Opa'}
console.log(obj.falar())

// Passar funcao com Parametro

function run(fun){
    fun() // Se tirar os parenteses a funcao nao aparece no console
}

run(function () {console.log('Executando.....')})

// Uma funcao pode retornar/conter outra funcao
function soma (a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)