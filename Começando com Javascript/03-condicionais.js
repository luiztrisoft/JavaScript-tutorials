var x = 29;
var y;

if (x > 18) {
    y = "maior";
}

else if (x == 18) {
    y = "igual";
}

else {
    y = "menor";
}

// console.log(y);

switch(x) {
    case 18: 
        y = 'dezoito';
        break;
    case 19:
        y = 'dezenove';
        break;    
    default:
        y = 'sem valor definido';
        //Como se trata da ultima definição nao é necessário o break     
}

console.log(y);