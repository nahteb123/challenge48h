const messageValidation = document.querySelector('.message-validation');
const reponseInput = document.querySelector('.reponse');

const bonneReponse = 'Bouledecristal';

function verifierReponse() {
  const reponse = reponseInput.value.trim();
  if (reponse.toLowerCase() === bonneReponse.toLowerCase()) {
    messageValidation.textContent = 'Réponse correcte !';
    messageValidation.style.color = 'darkgreen';
    messageValidation.style.opacity = 1;
    setTimeout(() => {
      window.location.href = '../../../index.html';
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
