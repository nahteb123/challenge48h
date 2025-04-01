const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

fetch("./data/cards.json")
    .then((res) => res.json())
    .then((data) => {
        cards = [...data, ...data];
        shuffleCards();
        generateCards();
    });

function shuffleCards() {
    let currentIndex = cards.length, 
        randomIndex,
        temporaryValue;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }    
}

function generateCards() {
    for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card", "flipped"); // Add "flipped" class initially
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = `
        <div class="front">
            <img class="front-image" src="${card.img}" alt="${card.name}" />
        </div>
        <div class="back"></div>
        `;
        gridContainer.appendChild(cardElement);
        cardElement.addEventListener("click", flipCard);
    }

    // Flip all cards back after a short delay
    setTimeout(() => {
        const allCards = document.querySelectorAll(".card");
        allCards.forEach(card => card.classList.remove("flipped"));
    }, 2000); // Adjust the delay as needed (e.g., 2000ms = 2 seconds)
}

function flipCard() {
    if (lockBoard) return; // Prevent flipping if the board is locked
    if (this === firstCard) return; // Prevent double-clicking the same card

    this.classList.add("flipped"); // Add the flipped class to show the front

    if (!firstCard) {
        firstCard = this; // Set the first card
        return;
    }

    secondCard = this; // Set the second card
    score++;
    document.querySelector(".score").textContent = score; // Update the score
    lockBoard = true; // Lock the board while checking for a match

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
    lockBoard = false; // Unlock the board after disabling cards
    checkForWin(); // Check for win after disabling cards
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
        lockBoard = false; // Unlock the board after unflipping cards
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
}

function restart() {
     resetBoard();
     shuffleCards();
     score = 0;
     document.querySelector(".score").textContent = score;
     gridContainer.innerHTML ="";
     generateCards();
}

function checkAndStoreSpecialTime() {
    // Vérifier si la clé existe déjà dans le localStorage
    if (localStorage.getItem("specialKey")) {
        alert("La clé a déjà été générée précédemment. Elle ne sera pas régénérée.");
        return; // Ne rien faire si la clé existe déjà
    }


    if (selectedHour === 13 && selectedMinute === 15) {
        let randomString = generateRandomString(10);
        localStorage.setItem("specialKey", randomString);
        alert(`🎉 Clé spéciale générée et stockée. Inspecte bien toute la page.`);
    }
}

function checkForWin() {
    const allCards = document.querySelectorAll(".card");
    const allFlipped = Array.from(allCards).every(card => card.classList.contains("flipped"));

    if (allFlipped) {
        setTimeout(() => {
            const storedKey = localStorage.getItem("specialKey");

            localStorage.removeItem("specialKey"); // Supprime la clé après utilisation
            dragon_ball.nombre += 1;
            localStorage.setItem("dragon_ball", JSON.stringify(dragon_ball));
            alert("Felicitations, vous avez réussi la première énigme!");
            window.location.href = '../../index.html';
        }, 2000); 
    }
}
