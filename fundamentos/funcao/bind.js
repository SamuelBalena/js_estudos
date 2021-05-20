const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// erro de pardigmas conflito com POO e Funcional 

const falarDePessoa = pessoa.falar.bind()
falarDePessoa()