/*************************************** ACCUEIL ********************************************************************/
//
document.body.onkeypress = function (e) {
    if (e.keyCode == 32) {
        document.getElementById("home").parentNode.removeChild(document.getElementById("home"));
        window.onload = requestAnimationFrame(vilansMove);
    }
}

/***************************************************** VARIABLES GENERAL ********************************************/

//section du jeu
var game = document.getElementById("game");
var xGame = parseFloat(getComputedStyle(game).width);
var gameHeight = parseFloat(getComputedStyle(game).height);
var gameWidth = parseFloat(getComputedStyle(game).width);

//game over && winner && resfresh
var gameOver = document.getElementById("game_over");
var gameOverText = document.getElementById("game_over_text");
var winner = document.getElementById("winner");
var refresh = document.getElementById("refresh");

//vilans
var vilans = document.getElementById("vilans");

//ship
var ship = document.getElementById('player');
ship.style.width = '90px';
ship.style.height = '63px';
ship.style.left = '0px';
var playerWidth = parseInt(ship.style.width);
var playerHeight = parseInt(ship.style.height);

var score = 0;

/***************************************************** VILANS ********************************************/

var speedVilans = 2;
var diametreVilans = parseFloat(getComputedStyle(vilans).width);
var animVilans = null;
var leftScreen = 0;
var directionVilans = 1; //Sens de déplacement : 1 = droit, 2 = gauche

function vilansMove() {
    var xVilans = parseFloat(getComputedStyle(vilans).left);
    var vilansHeight = parseFloat(getComputedStyle(vilans).height);
    var yVilans = parseFloat(getComputedStyle(vilans).top);
    var yBottomVilans = yVilans + vilansHeight;
    var limitPlayer = gameHeight - playerHeight;

    // Si le vilans arrive à un bord du game
    if ((xVilans + diametreVilans > xGame) || (xVilans < leftScreen)) {
        directionVilans *= -1;
        yVilans = yVilans + 25;
        yVilans = yVilans + "px";
        vilans.style.top = yVilans;
    }
    //quand vilans atteint le bas de zone de jeu
    if (yBottomVilans > limitPlayer - 120) {
        vilans.parentNode.removeChild(vilans);
        gameOver.style.display = "block";
        gameOverText.style.display = "block"
        refresh.style.display = "block";
        ship.style.display = "none"
        return;
    }
    vilans.style.left = (xVilans + speedVilans * directionVilans) + "px";
    animVilans = requestAnimationFrame(vilansMove);
}

/***************************************************** PLAYER + SHOOT ********************************************/

/* Déplacement du joueur */
document.addEventListener("keypress", function (event) {
    var keyVilans = event.keyCode || 0;
    var screenWidth = window.innerWidth;
    var leftIntervalShip = ship.offsetLeft;

    //aller à gauche
    if (leftIntervalShip > 0) {
        if (keyVilans == 113) {
            ship.style.left = parseInt(ship.style.left) - 10 + 'px';
        }
    }
    //aller à droite
    if (leftIntervalShip < (screenWidth - playerWidth)) {
        if (keyVilans == 100) {
            ship.style.left = parseInt(ship.style.left) + 10 + 'px';
        }
    }
    //shoot
    if (event.keyCode == 106) {
        var bullet = document.createElement("img");
        bullet.style.left = leftIntervalShip + 25 + "px";
        bullet.setAttribute("class", "bullet");
        bullet.setAttribute("src", "img/bullet.png");
        bullet.setAttribute("width", "40");
        bullet.setAttribute("height", "40");
        bullet.setAttribute("alt", "bullet");
        document.getElementById("player_container").appendChild(bullet);

        function bulletMove() {
            var coordBullet = bullet.getBoundingClientRect();
            var speedBullet = 7;
            var xBullet = parseFloat(getComputedStyle(bullet).bottom);
            var yBullet = 0; // Valeur en pixels du top de la balle
            var poulpes = document.getElementsByClassName("octopus");

            // Récuperation de la valeur top de la balle
            if (bullet.style.displayVilans = "block") {
                yBullet += bullet.offsetTop;
            }
            // Déplacement du bloc
            bullet.style.bottom = (xBullet + speedBullet) + "px";
            if (xBullet >= gameHeight) {
                bullet.parentNode.removeChild(bullet);
                return;
            }
            //on parcours le tableau de poulpes
            for (i = 0; i < poulpes.length; i++) {
                var coordPoulpe = poulpes[i].getBoundingClientRect();
                //condition de collision
                if (coordBullet.left < coordPoulpe.left + coordPoulpe.width && coordBullet.left + coordBullet.width > coordPoulpe.left && coordBullet.top < coordPoulpe.top + coordPoulpe.height && coordBullet.top + coordBullet.height > coordPoulpe.top) {
                    poulpes[i].parentNode.removeChild(poulpes[i]);
                    delete poulpes[i];
                    bullet.parentNode.removeChild(bullet);
                    score = calculScore(score);
                    if (poulpes.length == 0) {
                        winner.style.display = "block";
                        vilans.parentNode.removeChild(vilans);
                        refresh.style.display = "block";
                        return;
                    }
                    return;
                }
            }
            requestAnimationFrame(bulletMove);
        }
        requestAnimationFrame(bulletMove);
    }
});

/***************************************************** SCORE ********************************************/

function calculScore(score) {
    var counter = document.getElementById("counter");
    score += 10;
    counter.textContent = score;
    return score;
}

/***************************************************** REFRESH ********************************************/

// refresh game
refresh.addEventListener('click', function () {
    window.location.reload();
});
