var letters = ["a", "b", "c"];
var guessedletters = [];
var letterToGuess = null;
var guessesLeft = 9;
var wins = 0;
var losses = 0;
var updateGuessesLeft = function () {
  document.querySelector("guesses-left").innerHTML = guessesLeft;
};
var updateLetterToGuess = function () {
  lettersToGuess = letters[Math.floor(Math.random() * letters.length)];
};
var updateGuessesSoFar = function () {
  document.querySelector("#gusses-so-far").innerHTML = guessedLetters.join(
    ", "
  );
};

var reset = function () {
  guessesLeft = 9;
  guessedletters = [];
  updateGuessesLeft();
  updateGuessesSoFar();
  updateLetterToGuess();
};

updateLetterToGuess();
updateGuessesSoFar();

document.onkeydown = function (event) {
  guessesLeft--;
};

var letter = event.key.toLowerCase();

guessedLetters.push(letter);

updateGuessesLeft();
updateGuessesSoFar();

if (letter === letterToGuess) {
  wins++;
  document.querySelector("#wins").innerHTML = wins;

  reset();
}
