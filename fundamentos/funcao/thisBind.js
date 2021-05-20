function Pessoa(){
    this.idade = 0

    setInterval(function(){ // setInterval eh um comando q repetindo a minuto/seg que você colocar.
        this.idade++
        console.log(this.idade)
    }.bind(this),1000) // tempo que coloquei para acrescentar o valo +1 na idade com valor inicial de zero.
} // Coloquei o bind no final da funcao para o this atribuir o calor declarado no comeco do programa. 

new Pessoa // ctrl + alt + m , para o codigo.

