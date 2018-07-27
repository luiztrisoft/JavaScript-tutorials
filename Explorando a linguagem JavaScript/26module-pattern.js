var contador = (function () {
    var valor = 0; // privado

    var incrementar = function () {
        valor++;
    };

    var reset = function () {
        console.log('Valor do contador:', valor);
        valor = 0;
    };

    return {
        incrementar: incrementar,
        reset: reset
    }
}());

contador.incrementar();
contador.incrementar();
contador.reset();

//Ja executa a função contado de cara (function(){ })(). Assim contador possui as propriedades incrementar e reset
