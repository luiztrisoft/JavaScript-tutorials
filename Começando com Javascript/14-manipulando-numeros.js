//PRECISÃOO ATÉ 15 DIGITOS. APOS ISSO OCORRE UM OVERFLOW

var x = 456e5; //45600000
var y = 123e-6 ; //0.000123
console.log(y.toFixed());
console.log(y.toFixed(2));
console.log(y.toPrecision());

console.log(x.toExponential());
console.log(x.toExponential(4));
console.log(x.toExponential(1));

var limite = 999999999999999;//15

var hexadecimal = 0x100;
console.log(hexadecimal);

var b = 07777;
console.log(b);
console.log(b.toString(16));//hexadecimal
console.log(b.toString(8));//octal
console.log(b.toString(2));//binario