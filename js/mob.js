var cadre = document.getElementById("cadre");
var bloc = document.getElementById("bloc");
var vitesse = 7; // Valeur du déplacement en pixels
// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var diametrebloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null; // Identifiant de l'animation
var xMin = 0; // Position gauche minimale (bord gauche)
var direction = 1; // Sens de déplacement : 1 = droit, 2 = gauche

// Déplace le bloc vers la gauche ou la droite
function animerbloc() {
    console.log(bloc);
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xbloc = parseFloat(getComputedStyle(bloc).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadre).width);
    var y = parseFloat(getComputedStyle(bloc).top);

    var ybloc = parseFloat(getComputedStyle(bloc).top); // pour le faire descendre
    // Si le bloc arrive à un bord du cadre
    if ((xbloc + diametrebloc > xMax) || (xbloc < xMin)) {
        // Déscend le bloc et inverse le sens de déplacement du bloc
        direction *= -1;
        y = y + 50;
        y = y + "px";
        bloc.style.top = y;
    }
    if (y >= 300) {
        bloc.parentNode.removeChild(bloc);
        return;

    }

    // Déplacement du bloc dans le sens actuel
    bloc.style.left = (xbloc + vitesse * direction) + "px";
    // Demande au navigateur d'appeler animerbloc dès que possible
    animationId = requestAnimationFrame(animerbloc);
}



var demarrerBtn = document.getElementById("demarrer");
var arreterBtn = document.getElementById("arreter");

demarrerBtn.addEventListener("click", function () {
    // Change l'état des boutons
    demarrerBtn.disabled = true;
    arreterBtn.disabled = false;
    // Démarre l'animation
    requestAnimationFrame(animerbloc);
});

arreterBtn.addEventListener("click", function () {
    // Change l'état des boutons
    demarrerBtn.disabled = false;
    arreterBtn.disabled = true;
    // Arrête l'animation
    cancelAnimationFrame(animationId);
});
