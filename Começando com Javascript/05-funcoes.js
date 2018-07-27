//TRES MANEIRAS DE DECLARAR FUNÇÕES

//Tradicional
function dizerOi(nome){
    console.log('oi', nome)
}
dizerOi('Jose');

//Função anonima
var dizerOla = function(nome){
    console.log('Olá', nome)
};

console.log(dizerOla);

//Contrutor
var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");
dizerTchau("Jill")