function on() {
    document.getElementById("lampada").src = "assets/on.jpg"
}

function off() {
    document.getElementById("lampada").src = "assets/off.jpg"
}

function blink() {
    var intervalo = 0;
    var contador = 0;
    while (contador < 10) {
        intervalo += 300;
        setTimeout("document.getElementById('lampada').src='assets/on.jpg'", intervalo);
        intervalo += 300;
        setTimeout("document.getElementById('lampada').src='assets/off.jpg'", intervalo);
        contador++;
    }
}