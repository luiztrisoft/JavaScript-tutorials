var array = "Ned Jon Robb Bran Rickon".split(' ');

console.log(array);
console.log(array.toString());
console.log(array.join(' | '));

array.push('FIM');
array.unshift('INICIO');
console.log('ARRAY COM NOVOS ELEMENTOS NO INICIO E FIM',array);


var elementoFinal = array.pop(); // remove do final
console.log(elementoFinal);

var elementoInicio = array.shift();//remove do inicio
console.log(elementoInicio);

var slice = array.slice(3, 4)//posicao onde começa a retirar. O segundo argumento é a posição final mas nao inclusa da extração que queremos fazer
console.log(slice)

var splice = array.splice(1,1, 'Arya', 'Sansa')//remover e adicionar elementos
console.log(splice)
console.log('ARRAY COM NOVOS ELEMENTOS',array)

array = array.concat(splice);
console.log('CONCATENAÇÃO',array);