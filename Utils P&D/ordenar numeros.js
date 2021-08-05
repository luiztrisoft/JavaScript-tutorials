let numeros = [1, 10, 2, 21]

numeros.sort(function(a, b){
  return a - b
})

//saida: [1 , 2, 10, 21]

/*
Essa função compara "a" e "b" fazendo a lógica para ordenar corretamente, passando o numerto menor
para frente, a função padrão sort() converte para string, porém essa função mostrada converte para 
numeros quando faz a subtração, por isso a ordenação fica correta.
*/


let letras = ['A', 'B', 'A', 'C', 'B']
console.log(letras.sort())
//saida: ["A", "A", "B", "B", "C"] 