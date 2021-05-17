
function isBigEnough(currentValue, index, arr) {
  return currentValue >= 10;
}
/*
  Verifica se cada elemento passa no teste
*/
console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false (Um ou mais elementos não passam de 10)
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true (Todos os elementos passam de 10)

/*
Verifica se ao menos um elemento passa no teste
*/
console.log([1, 5, 8, 130, 4].some(isBigEnough));   // true (Ao menos um elemento passa de 10)