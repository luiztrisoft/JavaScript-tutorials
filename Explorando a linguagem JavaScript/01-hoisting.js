//DEVEMOS DECLARAR TODAS AS VARIAVEIS E SEUS VALORES NO INICIO A FIM DE EVITAR BUGS EM TEMPO DE EXECUÇÃO
var percentualImposto = 0.15;
var valor = 100;//AQUI ESTA CERTO
var totalImposto = valor * percentualImposto;

console.log('Total a pagar', totalImposto);

var valor = 100;//AQUI ESTA ERRADO