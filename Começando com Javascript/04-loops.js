//for, for in, while, do while

var x = 0;

// while(x <= 10){
//     console.log('WHILE:', x);
//     x++;
// }

// do{
//     console.log('DO WHILE:', x);
//     x++;
// }
// while(x <= 10)

// for(var y = 0; y < 10; y++){
//     console.log('FOR:', y)
// }

var obj = {nome: 'Elliot', sobrenome: 'Alderson'};

for(var propriedade in obj){
    console.log(obj[propriedade]);
}
