var ranNum1 = Math.random() * 6 ;
var randomNumber1 = (Math.floor(ranNum1)) + 1;

var ranNum2 = Math.random() * 6 ;
var randomNumber2 = (Math.floor(ranNum2)) + 1;

var playerDice1 = document.querySelector("img").setAttribute("src", "./dice" + randomNumber1 + ".png");

var playerDice2 = document.querySelector(".player2-dice").setAttribute("src", "./dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "🚩 player 1 wins!" ; 
}
if(randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = "player 2 wins! 🚩" ;
}
if(randomNumber1 === randomNumber2) {
    document.querySelector("h2").innerHTML = "Draw!" ;
}


