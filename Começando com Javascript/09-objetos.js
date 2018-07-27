//"VARIAVEIS QUE CONTEM VARIAVEIS" - DEFINIÇÃO INTERESSANTE

//OBJETO COM FUNÇÃO ANONIMA E DECLARADA DENTRO DO OBJETO
var obj = {
    nome: 'Hannibal', 
    sobrenome: 'Lecter', 
    idade: 37,
    apresentar: function(){
        console.log("Hello, I'm", this.nome + ' ' + this.sobrenome);
    },
    sobreMim: apresentarProfissao
};

function apresentarProfissao(){
    console.log("I'm a psychiatrist")
}

console.log(obj.nome, obj.sobrenome);
obj.apresentar();
obj.sobreMim();