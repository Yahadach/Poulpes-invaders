/*****************************************************PLAYER********************************************/
var element = document.getElementById('player');

element.style.width = '90px';
element.style.height = '60px';
var playerWidth = parseInt(element.style.width);
var playerHeight = parseInt(element.style.height);

element.style.position = 'relative';
element.style.left = '0px';


/* tirs */


/* Déplacement du joueur */
document.addEventListener("keypress", function (event) {


    var screenWidth = window.innerWidth;
    console.log(screenWidth);
    var leftSpace = element.offsetLeft;
    console.log(leftSpace);
    var key = event.which || event.keyCode || 0;


    if (leftSpace > 0) {

        if (key == 113) {
            element.style.left = parseInt(element.style.left) - 10 + 'px';
        }
    }

    var coco = screenWidth - playerWidth;

    if (leftSpace < (screenWidth - playerWidth)) {

        if (key == 100) {

            element.style.left = parseInt(element.style.left) + 10 + 'px';

        }
    }

    console.log("\n ---> ", parseInt(event.which), " <--- \n");

    if (key == 97) {

        var bullet = document.createElement("div");
        bullet.setClas

    }

});

/*****************************************************VILANS********************************************/
window.onload = requestAnimationFrame(animerVilans);


var game = document.getElementById("game");
var gameOver = document.getElementById("game_over");
var gameOverText = document.getElementById("game_over_text");
var refresh = document.getElementById("refresh");
var vilans = document.getElementById("vilans");
var vitesse = 30; // Valeur du déplacement en pixels

// Conversion en nombre du diamètre du vilans (valeur de la forme "XXpx")
var diametreVilans = parseFloat(getComputedStyle(vilans).width);

var animationId = null; // Identifiant de l'animation

var xMin = 0; // Position gauche minimale (bord gauche)

var direction = 1; // Sens de déplacement : 1 = droit, 2 = gauche


// Déplace le vilans vers la gauche ou la droite
function animerVilans() {
    // Conversion en nombre de la position gauche du vilans (valeur de la forme "XXpx")
    var xVilans = parseFloat(getComputedStyle(vilans).left);
    // Conversion en nombre de la largeur du game (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(game).width);
    var y = parseFloat(getComputedStyle(vilans).top);

    var gameHeight = parseFloat(getComputedStyle(game).height);
    var vilansHeight= parseFloat(getComputedStyle(vilans).height);
    var playerHeight = parseInt(element.style.height);

    var yFull = y + vilansHeight;
    var yBottom = gameHeight - playerHeight;

    var yVilans = parseFloat(getComputedStyle(vilans).top); // pour le faire descendre
    // Si le vilans arrive à un bord du game
    if ((xVilans + diametreVilans > xMax) || (xVilans < xMin)) {
        // Déscend le vilans et inverse le sens de déplacement du vilans
        direction *= -1;
        y = y + 25;
        y = y + "px";
        vilans.style.top = y;
    }
    if (yFull > yBottom) {
        vilans.parentNode.removeChild(vilans);
        gameOver.style.display = "block";
        gameOverText.style.display ="block"
        refresh.style.display = "block";
        return;

    }

    // Déplacement du vilans dans le sens actuel
    vilans.style.left = (xVilans + vitesse * direction) + "px";
    // Demande au navigateur d'appeler animerVilans dès que possible
    animationId = requestAnimationFrame(animerVilans);
}

// refresh game
refresh.addEventListener('click', function () {
    window.location.reload();
});


/*************************************** SHOOT ********************************************************************/

var bloc = document.getElementById("bloc");
var vitesse = 7; // Valeur du déplacement en pixels

// Déplace le bloc sur sa gauche
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).bottom);
    // Déplacement du bloc
    bloc.style.bottom = (xBloc + vitesse) + "px";
    // Demande au navigateur d'appeler deplacerBloc dès que possible
    requestAnimationFrame(deplacerBloc);
}
requestAnimationFrame(deplacerBloc); // Début de l'animation
