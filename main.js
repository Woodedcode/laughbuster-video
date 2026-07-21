const scaleFactor = 1 / 20;
const movieCarousel = document.querySelector(".popular-hits__cards");
const previousButton = document.querySelector(".carousel__prev");
const nextButton = document.querySelector(".carousel__next");


// CAROUSEL
function getCarouselScrollAmount() {
    const movieCard = movieCarousel.querySelector(".movie-card");
    if (!movieCard) {
        return 300;
    }
    const cardWidth = movieCard.getBoundingClientRect().width;
    const carouselStyles = window.getComputedStyle(movieCarousel);
    const gap = parseFloat(carouselStyles.columnGap) || 18;
    const cardsToScroll = window.innerWidth <= 520 ? 1 : 3;
    return (cardWidth + gap) * cardsToScroll;
}

function updateCarouselButtons() {
    const maximumScroll =
        movieCarousel.scrollWidth - movieCarousel.clientWidth;
    previousButton.disabled = movieCarousel.scrollLeft <= 5;
    nextButton.disabled =
        movieCarousel.scrollLeft >= maximumScroll - 5;
}

previousButton.addEventListener("click", () => {
    movieCarousel.scrollBy({
        left: -getCarouselScrollAmount(),
        behavior: "smooth",
    });
});

nextButton.addEventListener("click", () => {
    movieCarousel.scrollBy({
        left: getCarouselScrollAmount(),
        behavior: "smooth",
    });
});

movieCarousel.addEventListener("scroll", updateCarouselButtons);
window.addEventListener("resize", updateCarouselButtons);
updateCarouselButtons();

document.querySelector(".carousel__next").addEventListener('click', function(){
    const cardsRow = document.querySelector(".popular-hits__cards");
        currentPosition -= 250;
            if (currentPosition < -1700) {
            currentPosition = 0
            }
    cardsRow.style.transform = "translateX(" + currentPosition + "px)";
})

// BACKGROUND MOVEMENT
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`
    }
}
