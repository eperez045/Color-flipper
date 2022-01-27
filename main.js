function generarLetra() {
    var letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var numero = (Math.random() * 15).toFixed(0);
    return letras[numero];
}

function colorHEX() {
    var coolor = "";
    for (var i = 0; i < 6; i++) {
        coolor = coolor + generarLetra();
    }
    return "#" + coolor;
}

function cambiarColor() {
    var newColor = colorHEX();
    document.getElementById('caja').style.backgroundColor = newColor;
    document.getElementById('nombre').innerHTML = newColor
}

function copiarColor() {
    var copyText = document.getElementById('nombre').innerText;
    navigator.clipboard.writeText(copyText);

}