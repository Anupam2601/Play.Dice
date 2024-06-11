function isWinner(){
    var randomNum1= Math.floor(Math.random() * 6) + 1;
    var randomNum2= Math.floor(Math.random() * 6) + 1;
    var dice1= document.querySelector(".dice-1").setAttribute("src", "./images/dice" + randomNum1 + ".png");
    var dice2= document.querySelector(".dice-2").setAttribute("src", "./images/dice" + randomNum2 + ".png");
    if(randomNum1 > randomNum2){
        document.querySelector("h2").textContent= "🚩Player 1 Wins";
    }
    else if(randomNum1 < randomNum2){
        document.querySelector("h2").textContent= "🚩Player 2 Wins";
    }
    else if(randomNum1 === randomNum2){
        document.querySelector("h2").textContent= "Draw";
    }
}


