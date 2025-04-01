// Récupérer l'objet depuis le localStorage
let dragon_ball = JSON.parse(localStorage.getItem("dragon_ball"));

// Vérifier si l'objet existe, sinon initialiser
if (!dragon_ball) {
    dragon_ball = { nombre: 0 };
}

// Sauvegarder la nouvelle valeur dans le localStorage
localStorage.setItem("dragon_ball", JSON.stringify(dragon_ball));

// Afficher la nouvelle valeur
console.log(dragon_ball.nombre);
