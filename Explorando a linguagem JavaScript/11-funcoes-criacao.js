//function declaration
function somar(a, b) {
    console.log('Argumentos:', arguments);//imprime os valores de a e b da função
    var resultado = a + b;
    return resultado;//ou return a + b direto e simples
}

//function expression
var subtrair = function (a, b) {
    return a - b;
}

var soma = somar(3, 4);
var subtracao = subtrair(10, 3);

/*
Na function expression o hoisting nao funciona, ou seja, se chamar o subtrair 
antes da function ser declarada ele nao funciona
*/