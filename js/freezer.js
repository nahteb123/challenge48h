document.addEventListener("DOMContentLoaded", function () {
    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const selectedTimeDisplay = document.getElementById("selected-time");
    const confirmButton = document.getElementById("confirm-button");
    const resetButton = document.getElementById("reset-button");
    const confirmedTimeDisplay = document.getElementById("confirmed-time");
    const keyInput = document.getElementById("key-input"); // Champ de saisie pour la clé
    const checkKeyButton = document.getElementById("check-key-button"); // Bouton pour vérifier la clé
    const errorMessage = document.getElementById("error-message"); // Message d'erreur

    const prevHourButton = document.getElementById("prev-hour");
    const nextHourButton = document.getElementById("next-hour");
    const prevMinuteButton = document.getElementById("prev-minute");
    const nextMinuteButton = document.getElementById("next-minute");

    let selectedHour = 0;
    let selectedMinute = 0;

    function updateTimeDisplay() {
        let hour = selectedHour.toString().padStart(2, "0");
        let minute = selectedMinute.toString().padStart(2, "0");
        selectedTimeDisplay.textContent = `Heure sélectionnée : ${hour}:${minute}`;
    }

    function rotateHand(element, angle, animated = true) {
        if (animated) {
            element.style.transition = "transform 0.5s ease-in-out";
        } else {
            element.style.transition = "none";
        }
        element.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    }

    function changeHour(step) {
        selectedHour = (selectedHour + step + 24) % 24;
        rotateHand(hourHand, selectedHour * 30, true);
        updateTimeDisplay();
    }

    function changeMinute(step) {
        selectedMinute += step;

        if (selectedMinute >= 60) {
            selectedMinute = 0;
            selectedHour = (selectedHour + 1) % 24;
        } else if (selectedMinute < 0) {
            selectedMinute = 55;
            selectedHour = (selectedHour - 1 + 24) % 24;
        }

        rotateHand(minuteHand, selectedMinute * 6, true);
        rotateHand(hourHand, selectedHour * 30, true);
        updateTimeDisplay();
    }

    function generateRandomString(length) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    function checkAndStoreSpecialTime() {
        // Vérifier si la clé existe déjà dans le localStorage
        if (localStorage.getItem("specialKey")) {
            alert("La clé a déjà été générée précédemment. Elle ne sera pas régénérée.");
            return; // Ne rien faire si la clé existe déjà
        }

        // Si l'heure est 15:15, générer et stocker une nouvelle clé
        if (selectedHour === 8 && selectedMinute === 15) {
            let randomString = generateRandomString(10);
            localStorage.setItem("specialKey", randomString);
            alert(`🎉 Clé spéciale générée et stockée :`);
        }
    }

    function verifyKeyAndRedirect() {
        // Récupérer la valeur entrée par l'utilisateur et enlever les espaces
        const enteredKey = keyInput.value.replace(/\s+/g, '').trim(); // Supprimer tous les espaces

        const storedKey = localStorage.getItem("specialKey"); // Récupérer la clé stockée

        if (enteredKey === storedKey) {
            window.location.href = "test.html"; // Rediriger vers test.html
        } else {
            errorMessage.textContent = "❌ Clé incorrecte. Essayez à nouveau.";
            errorMessage.style.color = "red"; // Afficher un message d'erreur
        }
    }

    nextHourButton.addEventListener("click", () => changeHour(1));
    prevHourButton.addEventListener("click", () => changeHour(-1));
    nextMinuteButton.addEventListener("click", () => changeMinute(5));
    prevMinuteButton.addEventListener("click", () => changeMinute(-5));

    confirmButton.addEventListener("click", function () {
        confirmedTimeDisplay.textContent = `✅ Heure confirmée : ${selectedHour.toString().padStart(2, "0")}:${selectedMinute.toString().padStart(2, "0")}`;

        // Vérification et stockage si nécessaire
        checkAndStoreSpecialTime();
    });

    resetButton.addEventListener("click", function () {
        selectedHour = 0;
        selectedMinute = 0;

        rotateHand(hourHand, selectedHour * 30, true);
        rotateHand(minuteHand, selectedMinute * 6, true);

        confirmedTimeDisplay.textContent = "";
        updateTimeDisplay();
    });

    // Vérification de la clé à l'appui du bouton
    checkKeyButton.addEventListener("click", verifyKeyAndRedirect);

    updateTimeDisplay();
});
