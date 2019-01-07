


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




