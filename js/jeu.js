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