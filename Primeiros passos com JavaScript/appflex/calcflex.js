var etanol, gasolina;

function calcular(){
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));

    
    if(etanol < 0.7 * gasolina){
        document.getElementById("imagem").src="assets/etanol.png";
    }else{
        document.getElementById("imagem").src="assets/gasolina.png";
    }
}

function resetar(){
    document.getElementById("imagem").src="assets/neutro.png";
}