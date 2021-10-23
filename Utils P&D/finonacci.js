let n1 = 0,  n2 = 1, sequencia = 0, i;
let fibonacci = [];
for(i = 0; i < 10; i++ ){  
  sequencia = n1 + n2;  
  n2 = n1;
  n1 = sequencia;
  fibonacci.push(sequencia);
}
console.log(fibonacci);

//SAIDA  [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]