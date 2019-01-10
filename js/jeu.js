/*************************************** ACCUEIL ********************************************************************/
/*
window.onload = hide();

function hide() {
    document.getElementById("game").style.display = "none";
    document.getElementById("points").style.display = "none";
}

document.body.onkeypress = function (e) {
    console.log(" ---> ",e.keyCode," <-- ");
    
    if (e.keyCode == 32) {
        console.log(" ---> ",e.keyCode," <-- ");
 
        document.getElementById("home").parentNode.removeChild(document.getElementById("home"));
        document.getElementById("points").style.display = "block";
        document.getElementById("game").style.display = "block";
    }
}
*/
var ship = document.getElementById('player');

ship.style.width = '90px';
ship.style.height = '63px';
var playerWidth = parseInt(ship.style.width);
var playerHeight = parseInt(ship.style.height);


ship.style.left = '0px';


/********************************* GET POSITION ******************************* */

function getPositionX(x) {
    var l = x.offsetLeft;
    return l;
}

function getPositionY(x) {

    var t = x.offsetTop;
    return t;
}


/*************************************** SHOOT ********************************************************************/


// Début de l'animation a la touche J

document.onkeypress = function (event) {

    var gameHeight = parseFloat(getComputedStyle(game).height);
    var gameWidth = parseFloat(getComputedStyle(game).width);



    if (event.keyCode == 106) {

        var bullet = document.createElement("img");
        bullet.setAttribute("class", "bullet");
        bullet.setAttribute("src", "img/bullet.png");
        bullet.setAttribute("width", "40");
        bullet.setAttribute("height", "40");
        bullet.setAttribute("alt", "bullet");
        document.getElementById("player_container").appendChild(bullet);

        console.log(" ship -----> ", ship.style.left);

        function bulletMove() {

            bullet.style.left = ship.style.left
            console.log(" bullet -----> ", bullet.style.left);


            var vitesse2 = 7; // Valeur du déplacement en pixels
            // Conversion en nombre de la position gauche du bullet (valeur de la forme "XXpx")
            var xBullet = parseFloat(getComputedStyle(bullet).bottom);

            // Déplacement du bloc
            bullet.style.bottom = (xBullet + vitesse2) + "px";

            if (xBullet >= gameHeight) {
                bullet.parentNode.removeChild(bullet);
            }

            // Demande au navigateur d'appeler bulletMove dès que possible
            requestAnimationFrame(bulletMove);

        }
        requestAnimationFrame(bulletMove);
    }
}

/*****************************************************PLAYER********************************************/

var ship = document.getElementById('player');

ship.style.width = '90px';
ship.style.height = '63px';
var playerWidth = parseInt(ship.style.width);
var playerHeight = parseInt(ship.style.height);

ship.style.position = 'relative';
ship.style.left = '0px';


/* Déplacement du joueur */
document.addEventListener("keypress", function (event) {


    var screenWidth = window.innerWidth;

    var leftSpace = ship.offsetLeft;

    var key = event.which || event.keyCode || 0;


    if (leftSpace > 0) {

        if (key == 113) {
            ship.style.left = parseInt(ship.style.left) - 10 + 'px';

        }
    }

    if (leftSpace < (screenWidth - playerWidth)) {

        if (key == 100) {
            ship.style.left = parseInt(ship.style.left) + 10 + 'px';
        }
    }
});

/*****************************************************VILANS********************************************/

//window.onload = requestAnimationFrame(animerVilans);


var game = document.getElementById("game");
var gameOver = document.getElementById("game_over");
var gameOverText = document.getElementById("game_over_text");
var refresh = document.getElementById("refresh");
var vilans = document.getElementById("vilans");
var vitesse = 2; // Valeur du déplacement en pixels
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
    var vilansHeight = parseFloat(getComputedStyle(vilans).height);
    var playerHeight = parseInt(ship.style.height);

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

// refresh game
refresh.addEventListener('click', function () {
    window.location.reload();
});

/*****************************************************SCORE********************************************/

function calculScore() {
    var score = 0;
    var counter = document.getElementById("counter");
    score = score + 10;
    counter.textContent = score;
}
