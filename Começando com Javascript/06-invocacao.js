function dizerOi(nome){
    console.log('HELLO', nome);
    console.log(this);
}

// dizerOi('Jose');

// dizerOi.call({}, 'Luiz');
dizerOi.apply({}, ["Joao"]);