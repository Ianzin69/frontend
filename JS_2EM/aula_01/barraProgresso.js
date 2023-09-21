function animarBarraProgresso() {

    var progresso = 0;
    var barra = $(".progress-bar")
    var barraProgresso = $(".progress")

    var intervalo = setInterval(function () {
        if (progresso > 100) {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = `url("https://images8.alphacoders.com/420/420163.jpg")`
        }
        else {
            progresso += 10;
            barra.css("width", progresso + "%");
        }
    },150);
}