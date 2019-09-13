// 1. Ниписать игру в кости

var gamePlaying = [ "player1 win!", "player2 win!" ];
function tryThis () { 
var choice = (Math.floor(Math.random () * 6 )+1) ;
if ( choice > 3) { 
choice = 1;
}
else { choice = 0;
}
console.log ( gamePlaying[choice]);
}
tryThis ();
