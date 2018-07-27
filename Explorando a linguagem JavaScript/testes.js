
sequencia(0);

function sequencia(n1){
    
    var  n2 = 1;
    const quantidade = 6;
    var parametro = 0;

    this.quantidade = quantidade - 2;

    while(this.quantidade > 0){
        console.log( n1 + n2)
        var n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        this.quantidade--;
    }

};