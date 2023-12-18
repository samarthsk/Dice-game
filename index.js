function randomNumber() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

var randomNumber1 = randomNumber();
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

var randomNumber2 = randomNumber();
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
}
