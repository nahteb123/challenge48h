const questions = [
    {
      text: "Quelle est ta plus grande qualité ?",
      choices: ["J'ai une Porsche Taycan", "J'écoute vraiment les gens", "Je suis un mec mystérieux", "Je suis un bon cuisinier"],
      correct: 1
    },
    {
      text: "A quoi je ressemble ?",
      choices: ["Une pizza épinard", "Un super guerrier", "Peu importe je t'aime", "La fouine"],
      correct: 1
    },
    {
      text: "Ton animal préféré ?",
      choices: ["Le requin", "Le chat", "Le moustique", "Le singe"],
      correct: 1
    },
    {
      text: "Pose-moi une question :",
      choices: ["Bodycount ?", "Quel est ton plus grand souhait ?", "Tu veux un café ?", "Pour quelle raison te lèves-tu le matin ?"],
      correct: 1
    },
    {
      text: "Pulvériser la terre. Dis moi, tu penses que je suis :",
      choices: ["Un mystère intrigant", "Dangereux", "A éviter dans la vie", "Un bon ami"],
      correct: 2
    },
    {
      text: "Et si je te disais que j'ai un secret ?",
      choices: ["ARRETEEEEE", "Dis moi tout", "Tu bluffes", "Je suis pas intéressé"],
      correct: 1
    }
  ];

  let currentQuestion = 0;
  let vies = 3;

  // Charger les indices depuis localStorage
function loadCellHints() {
  const hints = JSON.parse(localStorage.getItem("cellHints") || "[]");
  const list = document.getElementById("cellHintsList");
  list.innerHTML = ""; // vider d'abord

  hints.forEach(hint => {
    const li = document.createElement("li");
    li.textContent = hint;
    list.appendChild(li);
  });
}

loadCellHints();



  function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question-text").textContent = q.text;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    q.choices.forEach((choice, index) => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.textContent = choice;
      btn.onclick = () => chooseAnswer(index);
      choicesDiv.appendChild(btn);
    });

    document.getElementById("response").textContent = "";
  }

  function chooseAnswer(index) {
    const q = questions[currentQuestion];
    

    if (index === q.correct) {
        document.getElementById("response").textContent = "✅ Bonne réponse. Elle est contente.";
        currentQuestion++;
        document.getElementsByClassName("coeurImage")[0].style.visibility = "visible";
setTimeout(() => {
  document.getElementsByClassName("coeurImage")[0].style.visibility = "hidden";
}, 900); // disparaît après 2 secondes


        if (currentQuestion < questions.length) {
            setTimeout(showQuestion, 1000);
        } else {
        document.getElementById("reward").style.display = "block";
        document.getElementById("puzzle").style.display = "block";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("question-text").textContent = "Elle te regarde dans les yeux...";
      }
    } else {
        vies--;
        document.getElementById("vies").textContent = "Vies restantes : " + vies;
        document.getElementById("response").textContent = "❌ Il a pas l'air de trop aimer ta réponse.";
        document.getElementsByClassName("madImage")[0].style.visibility = "visible";
        setTimeout(() => {
          document.getElementsByClassName("madImage")[0].style.visibility = "hidden";
        }, 900);




    }

    if (vies <= 0) {
        document.getElementById("vies").textContent = "Vies restantes : " + vies;
        document.getElementById("response").textContent = "Tu as perdu toutes tes vies. Réessaie.";
        document.getElementsByClassName("madImage")[0].style.visibility = "visible";
        setTimeout(() => {
          document.getElementsByClassName("madImage")[0].style.visibility = "hidden";
        }, 900);


 
        document.getElementById("choices").innerHTML = "";
        document.getElementById("question-text").textContent = "Elle te regarde dans les yeux...";
    }
  }

  function checkCode() {
    const code = document.getElementById('codeInput').value;
    const success = document.getElementById('success');

    if (code === "4829") {
      success.textContent = "Bien joué ! Tu as débloqué l'étape suivante.";
    } else {
      success.textContent = "Nope. Mauvais code.";
    }
  }

  showQuestion();

