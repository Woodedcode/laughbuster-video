let currentPosition = 0
const scaleFactor = 1 / 20;




// CAROUSEL
document.querySelector(".carousel__prev").addEventListener('click', function(){
const cardsRow = document.querySelector(".popular-hits__cards");
currentPosition += 250;
cardsRow.style.transform = "translateX(" + currentPosition + "px)";
})

document.querySelector(".carousel__next").addEventListener('click', function(){
const cardsRow = document.querySelector(".popular-hits__cards");
currentPosition -= 250;
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
