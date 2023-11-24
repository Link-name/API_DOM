document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function showSlide(index) {
        slider.style.transform = `translateX(${-index * 100}%)`;
        updateDots(index);
    }

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % dots.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
        showSlide(currentIndex);
    }

    function onDotClick(dotIndex) {
        currentIndex = dotIndex;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
    dots.forEach((dot, i) => dot.addEventListener("click", () => onDotClick(i)));

    // Initial slide
    showSlide(currentIndex);

    // Auto play (optional)
    setInterval(nextSlide, 3000);
});
