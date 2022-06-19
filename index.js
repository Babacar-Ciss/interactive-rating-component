// SELECTION of Element
let btnSubmit = document.getElementById("btn");
let ratingChoiceContainer = document.getElementById("container__rating-choice");
let submitContainer = document.getElementById("container__rating-submit-choice");
let scoreChoice = document.getElementById("container__rating-submit--score");
let [...scoreBtns] = document.getElementsByClassName("btn");
let currentScore = 0;

scoreBtns.forEach(el => {
    el.addEventListener("click", () => {
        currentScore = el.textContent ;
    })
})

// Adding event to button submit
btnSubmit.addEventListener("click", () => {
    // Checking if score no scores are checked !
    if(currentScore !== 0) {
    // changing the rate in the submit text;
    scoreChoice.innerHTML = "&thinsp;"+currentScore+"&thinsp;";   

    // Toggle between Rating to submit choice 
    ratingChoiceContainer.classList.add("hidden");
    submitContainer.classList.remove("hidden");
    }
    else {
        alert("Veuillez choisir une note svp !")
    }
})