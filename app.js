let position = 0;
const slides = document.getElementsByClassName('carousel_slide');
const totalSlides = slides.length;

document.getElementById('carousel_next').addEventListener("click", function() {
    toNextSlide();
});

document.getElementById('carousel_prev').addEventListener("click", function() {
    toPrevSlide();
});

function updatePosition() {
    for (let slide of slides) {
        slide.classList.remove('visible');
        slide.classList.add('hidden');
    }

    slides[position].classList.add('visible');
}

function toNextSlide() {
    if (position === totalSlides - 1) {
        position = 0;
    } else {
        position++;
    }

    updatePosition();
}

function toPrevSlide() {
    if (position === 0) {
        position = totalSlides - 1;
    } else {
        position--;
    }

    updatePosition();
}