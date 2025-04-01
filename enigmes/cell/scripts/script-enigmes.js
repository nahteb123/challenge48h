const riddles = [
    {
      question: "Plus tu en prends, plus tu en laisses. Que suis-je ?",
      answer: "des pas",
      infos: ["N'aime pas parler de son intimité", "Aime la musique classique"]
    },
    {
      question: "Je peux remplir une pièce sans prendre de place. Que suis-je ?",
      answer: "la lumière",
      infos: ["N'aime pas la Terre", "Déteste les riches"]
    },
    {
      question: "Je suis toujours devant toi, mais tu ne peux jamais m’atteindre. Que suis-je ?",
      answer: "le futur",
      infos: ["Aime ce qui fait peur", "A une aversion pour l’humanité"]
    }
  ];
  
  let solved = [];
  
  function askRiddle(index) {
    if (solved.includes(index)) {
      alert("Tu as déjà parlé à ce personnage !");
      return;
    }
  
    const riddle = riddles[index];
    const box = document.getElementById("question-box");
    box.innerHTML = `
      <p>${riddle.question}</p>
      <input type="text" id="riddleInput" placeholder="Ta réponse...">
      <button onclick="checkRiddle(${index})">Valider</button>
      <div id="riddle-result"></div>
    `;
  }
  
  function checkRiddle(index) {
    const input = document.getElementById("riddleInput").value.toLowerCase().trim();
    const result = document.getElementById("riddle-result");
    const riddle = riddles[index];
  
    if (input === riddle.answer) {
      result.textContent = "✅ Bonne réponse ! Tu obtiens des infos sur Cell.";
      solved.push(index);
      saveCellHints(riddle.infos);
    } else {
      result.textContent = "❌ Mauvaise réponse.";
    }
  }
  
  function saveCellHints(infos) {
    const existing = JSON.parse(localStorage.getItem("cellHints") || "[]");
    const updated = [...existing, ...infos];
    localStorage.setItem("cellHints", JSON.stringify(updated));
  }
  