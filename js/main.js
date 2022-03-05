function startTimer(duration, display,display2, display3) {
    var timer = duration, hours,minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer /60,10)
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours;
        display2.textContent = minutes;
        display3.textContent = seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var duration = 60 * 5; // Converter para segundos
        display = document.querySelector('#horas'); // selecionando o timer
        display2 = document.querySelector('#minutos');
        display3 = document.querySelector('#segundos');
    startTimer(duration, display, display2, display3); // iniciando o timer
};
