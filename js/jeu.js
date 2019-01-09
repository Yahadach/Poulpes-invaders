var element = document.getElementById('player');

element.style.width = '90px';
element.style.height = '60px';
var playerWidth = parseInt(element.style.width);
console.log(playerWidth);
console.log(element.style.width)

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
    console.log(coco);
    

    if (leftSpace < (screenWidth - playerWidth)) {

        if (key  == 100) {

            element.style.left = parseInt(element.style.left) + 10 + 'px';

        }
    }

    console.log("\n ---> ",parseInt(event.which)," <--- \n");

    if (key == 97) {

        element.style.backgroundColor = '#00139F';
        var bullet = document.createElement("div");
        bullet.setClas

    }

});


function myMove() {
    var elem = document.getElementById("myAnimation");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
            document.getElementById('myAnimation').style.display='none';
        } else {
            pos++; 
            //elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}



/*****************************************************PLAYER********************************************/






//      S H  OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO T

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
/*****************************************************VILANS********************************************/
window.onload = requestAnimationFrame(animerVilans);


var game = document.getElementById("game");
console.log(game);
var vilans = document.getElementById("vilans");
console.log(vilans);
var vitesse = 10; // Valeur du déplacement en pixels
console.log(vitesse);
// Conversion en nombre du diamètre du vilans (valeur de la forme "XXpx")
var diametreVilans = parseFloat(getComputedStyle(vilans).width);
console.log(diametreVilans);
var animationId = null; // Identifiant de l'animation
console.log(animationId);
var xMin = 0; // Position gauche minimale (bord gauche)
console.log(xMin);
var direction = 1; // Sens de déplacement : 1 = droit, 2 = gauche
console.log(direction);

// Déplace le vilans vers la gauche ou la droite
function animerVilans() {
    console.log(vilans);
    // Conversion en nombre de la position gauche du vilans (valeur de la forme "XXpx")
    var xVilans = parseFloat(getComputedStyle(vilans).left);
    // Conversion en nombre de la largeur du game (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(game).width);
    var y = parseFloat(getComputedStyle(vilans).top);

    var yVilans = parseFloat(getComputedStyle(vilans).top); // pour le faire descendre
    // Si le vilans arrive à un bord du game
    if ((xVilans + diametreVilans > xMax) || (xVilans < xMin)) {
        // Déscend le vilans et inverse le sens de déplacement du vilans
        direction *= -1;
        y = y + 25;
        y = y + "px";
        vilans.style.top = y;
    }
    if (y >= 500) {
        vilans.parentNode.removeChild(vilans);
        return;

    }

    // Déplacement du vilans dans le sens actuel
    vilans.style.left = (xVilans + vitesse * direction) + "px";
    // Demande au navigateur d'appeler animerVilans dès que possible
    animationId = requestAnimationFrame(animerVilans);
}


/**********************************************************************/


/*
var player = document.getElementById("player");
var y;


function gauche(){

    y=player.style.width;
    y=parseInt(y);
    y+=100;
    y=y+'px';

}
function droite{}

document.onkeypress = function(event){

    if(key == 37){
        gauche();
    }

    if(key == 39){
        droite();
    }
}


*/