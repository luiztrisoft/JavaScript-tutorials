//1 - EVITAR VARIAVEIS GLOBAIS
var variavelGlobal = "";


(function(){
    var escopoLocal;
})();


//2 - DEIXE AS DECLARAÇÕES DE VARIAVEL NO TOPO

(function(){
    escopoLocal = "Valor";
    console.log(escopoLocal);

    var escopoLocal; //FICA ILEGIVEL!!!
})();

//3 - SEPARE AS VARIAVEIS POR VIRGULA INVÉS DE DECLARA O var MUITAS VEZES

var x, y, z;

//4 - USE STRINGS COM ASPAS DUPLAS INVÉS DE ASPAS SIMPLES. ALGUNS COMPILADORES NAO ENTENDERAO UM ARQUIVO JSON POR EXEMPLO

var x = "Aspas duplas";

//5 - MANTENHA ARRAYS COM POUCAS PROPRIEDADES EM UMA UNICA LINHA

var obj = {nome : "Luiz"};

//6 - TRATANDO A MESMA VARIAVEL OU ASSUNTO MANTENHA-AS PROXIMAS. SE FOR TRATAR OUTRO ASSUNTO DE UM ENTER PARA SEPARAR

escopo = "valor";
console.log(escopo);

var obj = "Novo assunto"

//ESTUDAR NODE.JS, JQUERY, ANGULAR, REACT

