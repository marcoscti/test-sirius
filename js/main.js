function startTimer(duration, display,display2, display3) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer /60)
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
    var duration = 60 * 3; // Converter para segundos
        display = document.querySelector('#horas'); // selecionando o timer
        display2 = document.querySelector('#minutos');
        display3 = document.querySelector('#segundos');
    startTimer(duration, display, display2, display3); // iniciando o timer
};
// Configurando o Splid Slider
let slide = new Splide('#slide');
slide.mount();

let slide2 = new Splide('#slide2',{
    perPage: 4,
    rewind:true,
});
slide2.mount();

let slide3 = new Splide('#slide3',{
    perPage:4,
    rewind:true,
});
slide3.mount();

let slide4 = new Splide('#slide4',{
    perPage:5,
    rewind:true,
});
slide4.mount();
let slide5 = new Splide('#slide5',{
    perPage:4,
    rewind:true,
});
slide5.mount();

let slide6 = new Splide('#slide6',{
    perPage:7,
    rewind:true,
});
slide6.mount();