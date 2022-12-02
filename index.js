//  Initialisation
var roundScore;
var scores;
var activePlayer;
var gameProgress;

init();

/**************************************button roll *********************************************/

function addCurrentPlayerScore(activePlayer) {
  document.querySelector("#score-current-player-" + activePlayer).textContent =
    roundScore;
}

document.querySelector(".button-Roll").addEventListener("click", function () {
  if (gameProgress) {
    // 1. Random number
    var randomDice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    displayResult = document.getElementById("dede");
    displayResult.style.display = "initial";
    displayResult.src = "./image/dice_" + randomDice + ".png";

    //3. Update the round score IF the rolled number was NOT a 1
    if (randomDice !== 1) {
      //Add score
      roundScore += randomDice;

      //update the score
      addCurrentPlayerScore(activePlayer);
    } else {
      //Next player

      nextPlayer();
    }
  }
});

/******************************************button hold *************************************************/
function addTotalPlayerScore(activePlayer) {
  document.querySelector("#score-player-" + activePlayer).textContent =
    scores[activePlayer];
  console.log(activePlayer);
}

document.querySelector(".button-Hold").addEventListener("click", function () {
  if (gameProgress) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    addTotalPlayerScore(activePlayer);

    // Check if player won the game
    winner(activePlayer);
  } else {
    nextPlayer();
  }
});

/***************check the winner *********************************/

//if >= 100 displays winner instead of the player who won and block game

function winner(activePlayer) {
  if (scores[activePlayer] >= 10) {
    document.querySelector("#textPlayer-" + activePlayer).textContent =
      "Winner!";
    document.querySelector("#dede").style.display = "none";
    gameProgress = false;
  } else {
    nextPlayer();
  }
}

/*********************funtion nextplayer ***********************************/
var activePlayer = Math.floor(Math.random() * 2);

function nextPlayer() {
  roundScore = 0;
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  document.getElementById("score-current-player-0").textContent = "0";
  document.getElementById("score-current-player-1").textContent = "0";

  document.querySelector(".player-0-div").classList.toggle("active");
  document.querySelector(".player-1-div").classList.toggle("active");
}

/*********************************function init *********************************************************/
document.querySelector(".button-New_game").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gameProgress = true;

  var test = document.getElementById("dede");
  test.style.display = "none";

  document.getElementById("score-player-0").textContent = "0";
  document.getElementById("score-player-1").textContent = "0";

  document.getElementById("score-current-player-0").textContent = "0";
  document.getElementById("score-current-player-1").textContent = "0";

  document.getElementById("textPlayer-0").textContent = "Player 1";
  document.getElementById("textPlayer-1").textContent = "Player 2";

  document.querySelector(".player-1-div").classList.remove("active");
  document.querySelector(".player-0-div").classList.remove("active");
  document.querySelector(".player-1-div").classList.add("active");
}
