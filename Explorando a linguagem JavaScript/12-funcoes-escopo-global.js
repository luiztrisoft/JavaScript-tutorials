var nome = "Luiz";

var nomear = function(){
    var nome = "Local".toLocaleUpperCase();
}

nomear();
console.log(nome);

var nomear2 = function(){
    nome = "Global".toLocaleUpperCase();
}

nomear2();
console.log(nome);

//ESCOPO GLOBAL NAO É LEGAL!!! TENTE EVITAR O MAXIMO POSSIVEL
