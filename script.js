document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let index = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateSlider();
    });

    prevButton.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    });

    setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlider();
    }, 3000);
});
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    scrollbar: {
        el: '.swiper-scrollbar',
        },
});
document.querySelectorAll('.thumb').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('mainImage').src = this.src;
    });
});