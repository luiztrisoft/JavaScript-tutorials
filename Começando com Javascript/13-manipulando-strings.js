
var s = "The winter is coming. It's really coming!";

console.log(s.length);
console.log(s.indexOf("coming"));//mostrar a posição que esta essa palavra. apenas a primeira vez
console.log(s.lastIndexOf("coming"));//para saber a ultima vez que a palavra aparece
console.log(s.slice(4, 10)); //posição de inicio e posição de fim a ser cortada da string
console.log(s.substr(4, 6)); //primeira posição + numero de proximos caracteres
console.log(s.replace("winter", "summer"));
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.concat("#", "!", "!", "!", "!", "Quantas concatenações quisermos"));

var familia = 'Helia, Eva, Tiko';
console.log(familia.split(', '))