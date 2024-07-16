const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % items.length;
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 15000);
