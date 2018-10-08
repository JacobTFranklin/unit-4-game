// --------------- Logic -----------------//

//Upon loading the game, restart the game function
    //Wins 0
    //Losses 0
    //Clear win/loss display
    //New targetNumber (19-120)
    //Clear score
    //Reset each crystal value (1-12)

//Reset match function
    //New targetNumber (19-120)
    //Clear score
    //Reset each crystal value (1-12)
    //Write wins
    //Write losses
    //Write score
    //Write targetScore

//On click functions for each crystal
    //Increase score based on assigned crystal value

//Score to targetScore functionality
    //If hits target score, win
    //If exceeds target score, loss

//Winning
    //Displays win message
    //Adds 1 win
    //Resets match

//Losing
    //Displays loss message
    //Adds 1 loss
    //Resets match


//------------Variables------------//

var wins = 0;

var losses = 0;

var score = 0;

var targetScore;

var blueCrystal;

var greenCrystal;

var pinkCrystal;

var blackCrystal;

//--------------Functions--------------//

function resetMatch (){      

    score = 0;
    
    blueCrystal = Math.floor((Math.random() * 12) + 1);

    greenCrystal = Math.floor((Math.random() * 12) + 1);

    pinkCrystal = Math.floor((Math.random() * 12) + 1);

    blackCrystal = Math.floor((Math.random() * 12) + 1);

    targetScore = Math.floor((Math.random() * 120) + 19);

    $("#targetScore").html(targetScore);

    $("#wins").html(wins);

    $("#losses").html(losses);

    $("#score").html(score);

    console.log(blueCrystal);

    console.log(greenCrystal);

    console.log(pinkCrystal);

    console.log(blackCrystal);
    
}

function resetGame(){

    wins == 0;

    losses == 0;

    resetMatch();

}

function checkScore(){

    if(score == targetScore){
        wins++;
        resetMatch();
    }

    else if(score > targetScore){
        losses++;
        resetMatch();
    }

}



//----------//

resetGame();



$("#blue").on("click", function(){

    score += blueCrystal;

    $("#score").html(score);

    checkScore();

})

$("#green").on("click", function(){

    score += greenCrystal;

    $("#score").html(score);

    checkScore();

})

$("#pink").on("click", function(){

    score += pinkCrystal;

    $("#score").html(score);

    checkScore();

})

$("#black").on("click", function(){

    score += blackCrystal;

    $("#score").html(score);

    checkScore();

})



