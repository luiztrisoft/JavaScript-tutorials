var nipes = ['♥', '♦', '♣', '♠'];
var faces = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var nipe = nipes[Math.floor(Math.random() * 4)];
var face = faces[Math.floor(Math.random() * faces.length)];

document.write("<h1>" + face + nipe + "</h1>");

var notas =  [[3,4,7,8],[9,2,5,7]];
console.log(notas[0][3]);