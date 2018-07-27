var tick = (function(){
    
    var contador = 0;
    console.log('First:', contador);

    return function(){
        contador++;
        console.log(contador);
    }
})();

tick(); 
tick(); 
tick();

