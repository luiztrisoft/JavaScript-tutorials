//CONCEITO PARECIDO COM O DE UMA CLASSE
function Stark(nome, idade, corDoCabelo){
    this.nome = nome;
    this.idade = idade;
    this.corDoCabelo = corDoCabelo;

    this.sobrenome = 'Stark';
    this.apresentar = function(){
        console.log('Olá eu sou ' + this.nome + ' ' + this.sobrenome + '.');
    }
}

Stark.prototype.darTchau = function(){ console.log(this.nome + ' diz: TCHAU');}

var ned = new Stark('Ned', 40, 'Preto');
ned.apresentar(); 

var sansa = new Stark('Sansa', 13, 'Cobre');
sansa.apresentar();
sansa.darTchau();