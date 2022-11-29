var scores, roundScore, activePlayer, gamePlaying;

init();

var activePlayer = Math.floor(Math.random() * 2) + 1;

document.querySelector(".button-Roll").addEventListener("click", function () {
  if (gamePlaying) {
    // 1. Random number
    let randomDice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    let displayResult = document.getElementById("dede");
    displayResult.style.display = "initial";
    displayResult.src = "./image/dice_" + randomDice + ".png";

    //3. Update the round score IF the rolled number was NOT a 1
    if (randomDice !== 1) {
      //Add score
      roundScore += randomDice;
      addCurrentPlayerScore(activePlayer);
    } else {
      //Next player
      roundScore = 0;
      addCurrentPlayerScore(activePlayer);
      activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);
    }
  }
});

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  var test = document.getElementById("dede");
  test.style.display = "none";

  document.getElementById("score-player1").textContent = "0";
  document.getElementById("score-player2").textContent = "0";
  document.getElementById("score-current-player-1").textContent = "0";
  document.getElementById("score-current-player-2").textContent = "0";
}

function addCurrentPlayerScore(activePlayer) {
  document.querySelector("#score-current-player-" + activePlayer).textContent =
    roundScore;
}
