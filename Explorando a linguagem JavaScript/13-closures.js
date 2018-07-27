var incrementar = (function () {
    var valor = 0; //VARIAVEL LOCAL FICA PROTEGIDA DENTRO DA FUNCTION USANDO CLOSURE

    return function () {
        return ++valor;
    };
})();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());