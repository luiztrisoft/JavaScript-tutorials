//Total de despesas baixadas com inclusão de imposto

const totalDespesas = [
  {valor: 50, dataPagamento: new Date(), imposto: 0.5},
  {valor: 100, dataPagamento: new Date(), imposto: undefined},
  {valor: 2000, dataPagamento: undefined, imposto: undefined}
]

let valorInicial = 0;

let getDespesasBaixadas = totalDespesas 
  .filter(d => d.dataPagamento && d.valor > 0 )
  .map(d => d.valor + (d.valor * (d.imposto ? d.imposto : 0)))  
  .reduce((acc, el) => acc = acc + el, valorInicial);

console.log(getDespesasBaixadas);
