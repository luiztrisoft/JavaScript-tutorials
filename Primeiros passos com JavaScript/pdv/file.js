var total = document.getElementById("total");
var desconto = document.getElementById("desconto");
var totalDesconto = document.getElementById("totalDesconto");
var valorPago = document.getElementById("valorPago");
var troco = document.getElementById("troco");

totalDesconto.value = 0;
troco.value = 0;

function calcularDesconto() {
    if (converter(total) >= 0 && converter(desconto) >= 0) {
        totalDesconto.value = converter(total) - ((converter(total) * converter(desconto)) / 100);
    } else {
        totalDesconto.value = 0;
    }
}

function calcularTroco() {
    if (converter(valorPago) > 0) {
        troco.value = converter(valorPago) - converter(totalDesconto);
    } else {
        troco.value = 0;
    }
}

function converter(valor) {
    return parseFloat(valor.value.replace(",", "."))
}