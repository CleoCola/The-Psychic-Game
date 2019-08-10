//declare variables
let letters = "abcdefghijklmnopqrstuvwxyz"
let wins = 0;
let losses = 0;
let attempts = 10;
let ltrArray = [];
let computerChoice = computerChoice;

//random number generation -- guessTime assigns it a letter
computerChoice = letters[Math.floor(Math.random() * letters.length)];
function guessTime() {
      computerChoice = letters[Math.floor(Math.random() * letters.length)];
      console.log(computerChoice);
}

document.onkeyup = function (event) {
      let playerGuess = event.key;
        if (playerGuess === computerChoice) {
            wins++;
            attempts = 11;
            ltrArray = [];
      }

      guessTime();
      if (playerGuess !== computerChoice) {
            attempts--;
      }

      if (attempts == 0) {
            losses++;
            ltrArray = []
            attempts = 10;
      } else {
            ltrArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = ltrArray;
            console.log(ltrArray);
      }
      //write to the index
      document.getElementById('wins').innerHTML = wins;
      document.getElementById('losses').innerHTML = losses;
      document.getElementById('attempts').innerHTML = attempts;
}