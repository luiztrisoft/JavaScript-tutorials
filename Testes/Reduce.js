let array = [100,120, 2, 3, 4, 5, 6]

let result = array
  .filter(a => a > 50 )
  .map(a => a * 1 )
  .reduce((totalAcumulador, elementoAtual) => totalAcumulador + elementoAtual  )  

console.log(result)