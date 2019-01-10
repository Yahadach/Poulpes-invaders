/*************************************** ACCUEIL ********************************************************************/

function hide() {
    window.onload;
    document.getElementById("game").style.display = "hide";
}

document.body.onkeypress = function (e) {
    
    if (e.keyCode == 32) {
 
        document.getElementById("home").parentNode.removeChild(document.getElementById("home"));
        document.getElementById("game").style.display = "visible";
    }
}

/***************************************************** VARIABLES GENERAL ********************************************/

//section entière gameOver + vilans + ship + bullet
var game = document.getElementById("game");
// Conversion en nombre de la largeur du game (valeur de la forme "XXpx")
var xMax = parseFloat(getComputedStyle(game).width);

//game over img + text hide
var gameOver = document.getElementById("game_over");
var gameOverText = document.getElementById("game_over_text");

//button refresh hide
var refresh = document.getElementById("refresh");

//vilans --> container img  poulpes
var vilans = document.getElementById("vilans");

//je récupère les données du ship
var ship = document.getElementById('player');
ship.style.width = '90px';
ship.style.height = '63px';
ship.style.left = '0px';

//largeur et hauteur du ship en numérique
var playerWidth = parseInt(ship.style.width);
var playerHeight = parseInt(ship.style.height);

//hauteur et largeur de la zone de jeu
var gameHeight = parseFloat(getComputedStyle(game).height);
var gameWidth = parseFloat(getComputedStyle(game).width);


/*****************************************************VILANS********************************************/

//lancement du mouvement des poulpes au chargement de la page
window.onload = requestAnimationFrame(animerVilans);

//Valeur du déplacement en pixels
var vitesse = 2;

//Conversion en nombre du diamètre du vilans (valeur de la forme "XXpx")
var diametreVilans = parseFloat(getComputedStyle(vilans).width);

//Identifiant de l'animation
var animationId = null;

//Position gauche minimale (bord gauche)
var xMin = 0;

//Sens de déplacement : 1 = droit, 2 = gauche
var direction = 1;

// Déplace le vilans vers la gauche ou la droite
function animerVilans() {
    // Conversion en nombre de la position gauche du vilans (valeur de la forme "XXpx")
    var xVilans = parseFloat(getComputedStyle(vilans).left);
    var vilansHeight = parseFloat(getComputedStyle(vilans).height);
    // pour le faire descendre
    var yVilans = parseFloat(getComputedStyle(vilans).top);
    var y = parseFloat(getComputedStyle(vilans).top);
    var yFull = y + vilansHeight;
    var yBottom = gameHeight - playerHeight;

    // Si le vilans arrive à un bord du game
    if ((xVilans + diametreVilans > xMax) || (xVilans < xMin)) {
        // Déscend le vilans et inverse le sens de déplacement du vilans
        direction *= -1;
        y = y + 25;
        y = y + "px";
        vilans.style.top = y;
    }
    //quand vilans atteint le bas de zone de jeu
    if (yFull > yBottom - 120) {
        vilans.parentNode.removeChild(vilans);
        gameOver.style.display = "block";
        gameOverText.style.display = "block"
        refresh.style.display = "block";
        return;

    }

    // Déplacement du vilans dans le sens actuel
    vilans.style.left = (xVilans + vitesse * direction) + "px";
    // Demande au navigateur d'appeler animerVilans dès que possible
    animationId = requestAnimationFrame(animerVilans);
}

/***************************************************** PLAYER + SHOOT ********************************************/

/* Déplacement du joueur */
document.addEventListener("keypress", function (event) {
    console.log(" ---> " + event.keyCode + " <-- ");

    var key = event.keyCode || 0;

    //ship ne sort pas de l'écran
    var screenWidth = window.innerWidth;
    var leftSpace = ship.offsetLeft;

    //aller à gauche
    if (leftSpace > 0) {

        if (key == 113) {
            ship.style.left = parseInt(ship.style.left) - 10 + 'px';

        }
    }
    //aller à droite
    if (leftSpace < (screenWidth - playerWidth)) {
        if (key == 100) {
            ship.style.left = parseInt(ship.style.left) + 10 + 'px';
        }
    }
    //shoot
    if (event.keyCode == 106) {

        //on récupère l'écartement entre ship et écran
        var ecartementGauche = ship.offsetLeft;
        //on récupère les données de la bullet
        var bullet = document.createElement("img");
        //écartement bullet - ecran =  ship - ecran
        bullet.style.left = ecartementGauche + 25 + "px";
        
        bullet.setAttribute("class", "bullet");
        bullet.setAttribute("src", "img/bullet.png");
        bullet.setAttribute("width", "40");
        bullet.setAttribute("height", "40");
        bullet.setAttribute("alt", "bullet");
        document.getElementById("player_container").appendChild(bullet);

        //fonction du mouvement de la bullet
        function bulletMove() {

            // Valeur du déplacement en pixels
            var vitesse2 = 7;
            // Conversion en nombre de la position gauche du bullet (valeur de la forme "XXpx")
            var xBullet = parseFloat(getComputedStyle(bullet).bottom);
            // Déplacement du bloc
            bullet.style.bottom = (xBullet + vitesse2) + "px";
            
            var x=0;
            if (bullet.style.display = "block") {
                x += bullet.offsetTop;
                console.log("valeur de x Missile" + x);
            }

            if (xBullet >= gameHeight) {
                //quand on atteint la hauteur max de la zone du jeu on supprime la bullet
                bullet.parentNode.removeChild(bullet);
                return;
            }

            // Demande au navigateur d'appeler bulletMove dès que possible
            requestAnimationFrame(bulletMove);
        }
        requestAnimationFrame(bulletMove);
    }
});


/*****************************************************SCORE********************************************/

function calculScore() {
    var score = 0;
    var counter = document.getElementById("counter");
    score = score + 10;
    counter.textContent = score;
}

/***************************************************** REFRESH ********************************************/
// refresh game
refresh.addEventListener('click', function () {
    window.location.reload();
});
