const messageValidation = document.querySelector('.message-validation');
const reponseInput = document.querySelector('.reponse');

const bonneReponse = 'Bouledecristal';

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

function verifierReponse() {
  const reponse = reponseInput.value.trim();
  if (reponse.toLowerCase() === bonneReponse.toLowerCase()) {
    messageValidation.textContent = 'Réponse correcte !';
    messageValidation.style.color = 'darkgreen';
    messageValidation.style.opacity = 1;
    setTimeout(() => {
      const storedKey = localStorage.getItem("specialKey");

      localStorage.removeItem("specialKey"); // Supprime la clé après utilisation
      dragon_ball.nombre += 1;
      localStorage.setItem("dragon_ball", JSON.stringify(dragon_ball));

      window.location.href = "../../../index.html";
    }, 2000);
  } else {
    messageValidation.textContent = 'Réponse incorrecte ! Essayez encore !';
    messageValidation.style.color = 'darkred';
    messageValidation.style.opacity = 1;
    reponseInput.value = '';
  }
}

reponseInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    verifierReponse();
  }
});
// ekngezjbd
