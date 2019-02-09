//few global variables
var losses = 0;
var wins = 0;
var computerChoice;
// Math.floor(Math.random()*(102)+19)

//values loaded into crystals 1-4
var crys1 = Math.floor(Math.random() * 12) + 1;
var crys2 = Math.floor(Math.random() * 12) + 1;
var crys3 = Math.floor(Math.random() * 12) + 1;
var crys4 = Math.floor(Math.random() * 12) + 1;

// $("crystal_1").each(function() {
//   var number = Math.floor(Math.random() * 12) + 1;
//   $(this).addClass(number.toString());
// });

//function to show wins
function showWins() {
  document.getElementById("numWins").innerHTML = wins;
}

//function to show losses
function showLosses() {
  document.getElementById("numLosses").innerHTML = losses;
}
