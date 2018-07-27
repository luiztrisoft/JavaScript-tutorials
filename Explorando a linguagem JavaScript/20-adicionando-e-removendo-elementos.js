//push

var emails = [];

emails.push("luiz@email.com");
emails.push("maria@email.com");//ADICIONA NO FINAL

emails.unshift("email_na_frente@email.com");

emails.pop(); //REMOVE O ULTIMO ELEMENTO E NOS RETORNA. PODEMOS ARMAZENA-LO EM UMA VARIAVEL

emails.shift(); //REMOVE O PRIMEIRO ELEMENTO E NOS RETORNA. PODEMOS ARMAZENA-LO EM UMA VARIAVEL

console.log(emails);