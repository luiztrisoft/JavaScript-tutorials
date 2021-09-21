let atual = 500000.00

let valor1 = atual.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
let valor2 = atual.toLocaleString('pt-br', {minimumFractionDigits: 2});

//Saída com R$ R$ 500.000,00
//Saída sem R$500.000,00