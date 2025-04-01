let jauge = document.getElementById("jauge");
let powerDisplay = document.getElementById("power-display");
let resultText = document.getElementById("result");
let calibrateBtn = document.getElementById("calibrate-btn");
let finalEnigma = document.getElementById("final-enigma");
let finalResult = document.getElementById("final-result");

let targetPower = 1800; // Puissance correcte
let currentPower = 0;
let moving = false;
let timeLeft = 10;
let timer;

// 🟢 Démarre la jauge
function startMoving() {
    if (moving) return;
    moving = true;
    let position = 0;
    let direction = 1;
    let speed = 2;

    let interval = setInterval(() => {
        if (!moving) {
            clearInterval(interval);
            return;
        }

        if (Math.random() < 0.2) {
            powerDisplay.textContent = "???";
        } else {
            powerDisplay.textContent = currentPower;
        }

        if (Math.random() < 0.1) {
            speed = Math.random() * 5 + 2;
        }

        position += direction * speed;
        if (position >= 90 || position <= 0) {
            direction *= -1;
        }

        jauge.style.left = position + "%";
        currentPower = Math.round(1000 + (position / 100) * 2000);
    }, 100);
}

// ⏳ Démarre un timer
function startTimer() {
    timeLeft = 10;
    resultText.textContent = `⏳ Temps restant : ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        resultText.textContent = `⏳ Temps restant : ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            moving = false;
            resultText.textContent = "💀 Temps écoulé ! Raditz se moque de toi... Réessaie !";
            resultText.style.color = "red";
            setTimeout(() => {
                resultText.textContent = "";
                startMoving();
                startTimer();
            }, 2000);
        }
    }, 1000);
}

// 🎮 Calibration
calibrateBtn.addEventListener("click", function() {
    moving = false;
    clearInterval(timer);

    if (Math.abs(currentPower - targetPower) <= 30) {
        resultText.textContent = "✅ Calibration réussie ! Puissance exacte : " + currentPower;
        resultText.style.color = "lime";

        setTimeout(() => {
            finalEnigma.classList.remove("hidden"); // 🔥 Affiche l'énigme finale
        }, 1500);
    } else {
        resultText.textContent = "❌ Calibration ratée ! Réessaie...";
        resultText.style.color = "red";
        setTimeout(startMoving, 1000);
        setTimeout(startTimer, 1000);
    }
});

// 🧩 Énigme finale
document.querySelectorAll(".answer-btn").forEach(button => {
    button.addEventListener("click", function() {
        let answer = this.getAttribute("data-answer");

        if (answer === "D") { // 🔥 Yamoshi, premier Super Saiyan légendaire
            finalResult.textContent = "✅ Félicitations ! Tu as passé le test Saiyan !";
            finalResult.style.color = "lime";
        } else {
            finalResult.textContent = "❌ Mauvaise réponse ! Le Scouter explose et la jauge se dérègle...";
            finalResult.style.color = "red";

            setTimeout(() => {
                finalResult.textContent = "";
                finalEnigma.classList.add("hidden"); // Cache l’énigme
                startMoving(); // Recommence la jauge
                startTimer();
            }, 2000);
        }
    });
});

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

document.getElementById("menu-btn").addEventListener("click", function() {
    const storedKey = localStorage.getItem("specialKey");

    localStorage.removeItem("specialKey"); // Supprime la clé après utilisation
    dragon_ball.nombre += 1;
    localStorage.setItem("dragon_ball", JSON.stringify(dragon_ball));
    window.location.href = "../../index.html";
});


// 🎬 Lancer le jeu au démarrage
startMoving();
startTimer();
