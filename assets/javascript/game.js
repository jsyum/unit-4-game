//few global variables
var losses = 0;
var wins = 0;
var currentScore = 0;
//value assigned to computer choice
var randChoice = Math.floor(Math.random() * 102 + 19);
console.log(randChoice);

//Values randomly generated for the crystals between 1-12
var crys1 = Math.floor(Math.random() * 12) + 1;
console.log(crys1);
var crys2 = Math.floor(Math.random() * 12) + 1;
console.log(crys2);
var crys3 = Math.floor(Math.random() * 12) + 1;
console.log(crys3);
var crys4 = Math.floor(Math.random() * 12) + 1;
console.log(crys4);

// Function for win conditions
function win() {
  if (currentScore === randChoice) {
    wins++;
    showWins();
  }
}

function lose() {
  if (currentScore > randChoice) {
    losses++;
    showLosses();
  }
}

//assigning JS variables to HTML IDs on "click"

$("#crys_1").click(function() {
  currentScore += crys1;
  $("#currentScore").html(currentScore);
  console.log(currentScore);
  win();
  lose();
});
$("#crys_2").click(function() {
  currentScore += crys2;
  $("#currentScore").html(currentScore);
  console.log(currentScore);
  win();
  lose();
});
$("#crys_3").click(function() {
  currentScore += crys3;
  $("#currentScore").html(currentScore);
  console.log(currentScore);
  win();
  lose();
});
$("#crys_4").click(function() {
  currentScore += crys4;
  $("#currentScore").html(currentScore);
  console.log(currentScore);
  win();
  lose();
});

// function to show computer choice
$("#computerChoice").text(randChoice);

//function to show wins
function showWins() {
  document.getElementById("numWins").innerHTML = wins;
}

//function to show losses
function showLosses() {
  document.getElementById("numLosses").innerHTML = losses;
}
