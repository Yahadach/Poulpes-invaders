var element = document.getElementById('player');

element.style.width = '50px';
element.style.height = '50px';
var playerWidth = parseInt(element.style.width);

element.style.position = 'relative';
element.style.left = '0px';


/* tirs */


/* Déplacement du joueur */
document.addEventListener("keypress", function (event) {


    var screenWidth = window.innerWidth;
    var leftSpace = element.offsetLeft;
    var key = event.which || event.keyCode || 0;  

    if (leftSpace > 0) {

        if (key == 37) {

            element.style.backgroundColor = '#faf39F';

            element.style.left = parseInt(element.style.left) - 10 + 'px';
        }
    }

    var coco = screenWidth - playerWidth;

    if (leftSpace < (screenWidth - playerWidth)) {

        if (key == 39) {

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

    if(event.keyCode == 37){
        gauche();
    }

    if(event.keyCode == 39){
        droite();
    }
}


*/