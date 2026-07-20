let currentPosition = 0




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
