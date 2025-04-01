//Fighter model
class Fighter {
  constructor(name, strength, avatar) {
    this.name = name;
    this.strength = strength;
    this.avatar = avatar;
  }
}

//Fighters
let goku = new Fighter(
  "Goku",
  12000,
  "/challenge48h/enigmes/majin-buu/img/gokuPremium.png"
  
);
let gogeta = new Fighter(
  "Gogeta",
  11500,
  "/challenge48h/enigmes/majin-buu/img/gogetaPremium.png"
);
let vegetaBlue = new Fighter(
  "Vegeta Blue",
  10500,
  "/challenge48h/enigmes/majin-buu/img/vegetaBluePremium.png"
);
let roshi = new Fighter(
  "Roshi",
  10000,
  "/challenge48h/enigmes/majin-buu/img/roshiPremium.png"
);
let brolyLegendary = new Fighter(
  "Broly LR",
  10700,
  "/challenge48h/enigmes/majin-buu/img/brolyLegendaryPremium.png"
);
let broly = new Fighter(
  "Broly",
  9300,
  "/challenge48h/enigmes/majin-buu/img/brolyPremium.png"
);
let zamasu = new Fighter(
  "Zamasu",
  9290,
  "/challenge48h/enigmes/majin-buu/img/zamasuPremium.png"
);

//Regrouping all fihters in one array
let characters = [
  goku,
  gogeta,
  vegetaBlue,
  roshi,
  brolyLegendary,
  broly,
  zamasu,
];

const charactersIndice = [
  { name: "Goku" },
  { name: "Vegeta Blue" },
  { name: "Broly" },
  { name: "Broly LR" },
  { name: "Zamasu" },
  { name: "Gogeta" },
  { name: "Roshi" },
];

// Indices des associations de personnages
const hints = {
  "Goku-Broly": "Un Saiyan légendaire contre le héros de l'univers !",
  "Gogeta-Broly": "La fusion ultime contre la rage incontrôlable.",
  "VegetaBlue-Goku":
    "Un affrontement entre le prince Saiyan et l'Ultra Instinct !",
  "Broly-LR-Goku": "Un combat entre la légende et le guerrier ultime.",
  "Roshi-Goku":
    "Le maître qui a enseigné la base du combat au plus grand guerrier.",
  "Zamasu-Goku": "Un être divin obsédé par la destruction des mortels.",
  "Roshi-Broly": "Le maître des arts martiaux contre un monstre de puissance.",
  "Broly-Zamasu": "La puissance incontrôlable face à l'orgueil divin.",
  "VegetaBlue-Gogeta": "La fusion parfaite des Saiyans contre le prince !",
  "Broly-Goku":
    "Le combat légendaire entre l'ancien et le héros de l'univers !",
  "Zamasu-Gogeta": "Le dieu de la destruction contre la fusion des Saiyans.",
  "VegetaBlue-Zamasu": "Le prince Saiyan contre l'incarnation de la divinité !",
  "Broly-Gogeta":
    "La fusion ultime des Saiyans contre la puissance légendaire !",
  "Vegeta-Goku": "Deux rivaux Saiyans, l'affrontement ultime !",
  "Gogeta-Vegeta": "La fusion des Saiyans contre la fierté royale !",
  "Zamasu-GokuBlack": "Le même esprit dans deux corps différents.",
  "Roshi-Gogeta":
    "Le maître des arts martiaux contre la fusion parfaite des Saiyans.",
  "Goku-Bardock": "Un fils qui honore l'héritage de son père.",
  "Frieza-Goku": "L'ennemi juré du guerrier de l'espace.",
  "Cell-Goku":
    "Un combat épique entre la perfection et la volonté de sauver l'univers !",
  "MajinBoo-Goku":
    "Le combat ultime entre la malice et le héros de l'univers !",
  "Frieza-Cell":
    "Un tyran galactique et un monstre parfait prêts à tout détruire !",
  "Broly-GokuBlack": "Le guerrier légendaire contre l'incarnation du mal !",
  "Beerus-Goku":
    "Un dieu de la destruction face à son plus puissant adversaire.",
  "Trunks-Goten": "Les deux fils Saiyans prêts à défendre la Terre ensemble !",
  "MajinBoo-Gotenks":
    "Une bataille explosive entre un monstre et une fusion explosive !",
  "Beerus-Frieza":
    "Le dieu de la destruction contre le tyran galactique, un affrontement au sommet !",
  "Kefla-Goku":
    "La fusion des Saiyans de l'univers 6 contre l'Ultra Instinct !",
  "Goku-Bardock":
    "Un père qui n'a jamais pu voir son fils devenir une légende.",
  "Tenshinhan-Krillin": "Deux humains qui ont repoussé leurs limites !",
  "Jiren-Vegeta": "Deux guerriers au sens de la fierté inébranlable.",
  "Broly-Vegeta": "La colère incontrôlable contre la fierté royale.",
  "Hit-Vegeta": "Un duel entre l'assassin et le guerrier stratégique !",
  "Zamasu-Broly": "La justice divine contre une puissance incontrôlable !",
  "Jiren-Goku": "Un affrontement entre l'Ultra Instinct et la force absolue !",
  "MajinBoo-Vegeta": "Un combat acharné contre une menace imprévisible !",
  "Vegeta-Gohan": "Le prince Saiyan face à la puissance du fils du héros !",
  "Gogeta-Vegeta": "La fusion du prince Saiyan avec son éternel rival !",
  "Broly-Hit": "Le combattant légendaire face à l'assassin implacable !",
  "Cell-Gohan":
    "Un combat entre un tyran galactique et un jeune Saiyan déterminé !",
  "Zamasu-Vegeta": "Le dieu qui méprise l'orgueil Saiyan.",
  "Beerus-Gogeta":
    "Le dieu de la destruction contre la fusion parfaite des Saiyans !",
  "Trunks-Cell": "Un fils Saiyan face à la perfection biologique !",
  "Jiren-Broly":
    "Le guerrier de l'univers 11 face à la rage incontrôlable d’un Saiyan légendaire !",
  "Kefla-Bardock":
    "La fusion de l'univers 6 contre un père prêt à tout sacrifier !",
  "Zamasu-GokuBlack":
    "Le dieu et son double maléfique unis pour semer le chaos !",
  "Frieza-Bardock": "Un guerrier qui s'est rebellé contre son oppresseur.",
  "Broly-Zamasu": "La puissance incontrôlable face à l'orgueil divin !",
  "Jiren-Gogeta":
    "Une fusion redoutable face au guerrier ultime de l'Univers 11 !",
  "Beerus-Vegeta": "Le prince des Saiyans défiant un dieu de la destruction !",
};

let tabChoice = [];
let tabChoiceTwo = [];
let choicePersona = null;

// Fonction de normalisation des noms
function normalizeName(name) {
  return name.replace(/\s+/g, "");
}

//random range
let player1 =
  charactersIndice[Math.floor(Math.random() * charactersIndice.length)];
let player2 =
  charactersIndice[Math.floor(Math.random() * charactersIndice.length)];
console.log(player1);
console.log(player2);



// Génération de l'indice
function generateHint() {
  while (player1.name === player2.name) {
    player2 =
      charactersIndice[Math.floor(Math.random() * charactersIndice.length)];
  }

  // Normalisation des noms pour correspondre aux clés de `hints`
  let hintKey1 = `${normalizeName(player1.name)}-${normalizeName(
    player2.name
  )}`;
  let hintKey2 = `${normalizeName(player2.name)}-${normalizeName(
    player1.name
  )}`;

  console.log("hintKey1:", hintKey1); // Affiche la première clé
  console.log("hintKey2:", hintKey2); // Affiche la deuxième clé
  console.log("hints:", hints); // Affiche l'objet hints pour vérification

  // Recherche de l'indice dans `hints`
  let hintMessage =
    hints[hintKey1] ||
    hints[hintKey2] ||
    "Ces deux guerriers ont déjà croisé le fer !";
  console.log("hintMessage:", hintMessage); // Affiche le message d'indice

  let hintElement = document.getElementById("game-hint");
  if (hintElement) {
    hintElement.innerText = hintMessage;
  } else {
    console.error("L'élément #game-hint est introuvable dans le DOM.");
  }

  let battleButton = document.getElementById("showHint");
  if (battleButton) {
    battleButton.disabled = false;
  } else {
    console.error("L'élément #showHint est introuvable dans le DOM.");
  }
}

// Ajouter l'événement au bouton "Obtenir un indice"
document.getElementById("showHint").addEventListener("click", generateHint);

function checkPlayers() {
  if (
    tabChoice[0] &&
    tabChoiceTwo[0] &&
    tabChoice[0].name === tabChoiceTwo[0].name
  ) {
    alert("Les deux joueurs ne peuvent pas être le même personnage !");
    return false;
  }
  return true;
}

function selectPlayerOne(event) {
  const selectedCard = event.currentTarget;
  const playerName = selectedCard.querySelector("h2").innerText;
  const playerImage = selectedCard.querySelector("img").src;
  const playerStrength = selectedCard.querySelector("p").innerText;

  if (tabChoice.length === 0) {
    tabChoice.push({
      name: playerName,
      avatar: playerImage,
      strength: playerStrength,
    });
  } else {
    tabChoice[0] = {
      name: playerName,
      avatar: playerImage,
      strength: playerStrength,
    };
  }

  document.getElementById("image-player-1").src = playerImage;
  document.getElementById("introduce-player1").innerText = playerName;
  document.getElementById("introduce-player1-stats").innerText = playerStrength;

  console.log("Player 1 sélectionné :", tabChoice);
}

function selectPlayerTwo(event) {
  const selectedCard = event.currentTarget;
  const playerName = selectedCard.querySelector("h2").innerText;
  const playerImage = selectedCard.querySelector("img").src;
  const playerStrength = selectedCard.querySelector("p").innerText;

  if (tabChoiceTwo.length === 0) {
    tabChoiceTwo.push({
      name: playerName,
      avatar: playerImage,
      strength: playerStrength,
    });
  } else {
    tabChoiceTwo[0] = {
      name: playerName,
      avatar: playerImage,
      strength: playerStrength,
    };
  }

  document.getElementById("image-player-2").src = playerImage;
  document.getElementById("introduce-player2").innerText = playerName;
  document.getElementById("introduce-player2-stats").innerText = playerStrength;

  console.log("Player 2 sélectionné :", tabChoiceTwo);
}

document
  .getElementById("image-player-1")
  .addEventListener("click", function () {
    console.log("Sélection du joueur un activée !");
    choicePersona = "player1";

    // Désactiver les événements de sélection du joueur 2
    document.querySelectorAll(".card-character").forEach((card2) => {
      card2.removeEventListener("click", selectPlayerTwo);
    });

    // Activer la sélection pour le joueur 1
    document.querySelectorAll(".selectPlayer").forEach((card) => {
      card.addEventListener("click", selectPlayerOne);
    });

    console.log("Mode de sélection : ", choicePersona);
  });

document
  .getElementById("image-player-2")
  .addEventListener("click", function () {
    console.log("Sélection du joueur deux activée !");
    choicePersona = "player2";

      //selectCardStyle
    // Désactiver les événements de sélection du joueur 1
    document.querySelectorAll(".selectPlayer").forEach((card) => {
      card.removeEventListener("click", selectPlayerOne);
    });

    // Activer la sélection pour le joueur 2
    document.querySelectorAll(".card-character").forEach((card2) => {
      card2.addEventListener("click", selectPlayerTwo);
    });

    console.log("Mode de sélection : ", choicePersona);
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
async function getResult() {
    console.log(tabChoice[0].name)
    console.log(player1.name)
    console.log(tabChoiceTwo[0].name)
    console.log(player2.name)
  if (
    (tabChoice[0].name === player1.name &&
      tabChoiceTwo[0].name === player2.name) ||
    (tabChoice[0].name === player2.name &&
      tabChoiceTwo[0].name === player1.name)
  ) {

    const storedKey = localStorage.getItem("specialKey");

        localStorage.removeItem("specialKey"); // Supprime la clé après utilisation
        dragon_ball.nombre += 1;
        localStorage.setItem("dragon_ball", JSON.stringify(dragon_ball));

    alert("Vous avez trouvé la bonne combinaison !");
    window.location.href = '/challenge48h/index.html';
  } else {
    alert("Perdu !");
  }
}

function launchBattle() {
  if (!tabChoice[0] || !tabChoiceTwo[0]) {
    alert("Veuillez choisir deux personnages");
    return;
  }

  if (!checkPlayers()) return; // Vérification avant de lancer le combat

  document.getElementById("image-player-1").src = tabChoice[0].avatar;
  document.getElementById("introduce-player1").innerHTML = tabChoice[0].name;
  document.getElementById("introduce-player1-stats").innerHTML =
    tabChoice[0].strength;

  document.getElementById("image-player-2").src = tabChoiceTwo[0].avatar;
  document.getElementById("introduce-player2").innerHTML = tabChoiceTwo[0].name;
  document.getElementById("introduce-player2-stats").innerHTML =
    tabChoiceTwo[0].strength;

  setTimeout(() => getResult(), 500);
}
