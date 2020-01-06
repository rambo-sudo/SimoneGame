var gamePattern = [];
var userClickedPattern = [];
var start = false;
var levelNumber =0;




$(document).keydown(function() {
  if (!start) {levelNumber =0;
    nextSequence();
    console.log(gamePattern);
start = true;

  }
});


$("div.btn").click(function handler() {
  if (start) {

    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  }

});





function nextSequence() {levelNumber++;
  userClickedPattern = [];
  var buttonColor = ["red", "blue", "green", "yellow"];
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColor[randomNumber];
  console.log(randomChosenColor);
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  $("h1").text("level " + levelNumber);
      if (userClickedPattern.length > gamePattern.length) {

        startOver();
      }

}
// console.log($("div.btn"));




function checkAnswer(levelNum) {

  if (userClickedPattern[levelNum] === gamePattern[levelNum]) {

    if (userClickedPattern.length === gamePattern.length) {
console.log("it's working");
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    var audio1 = new Audio("sounds/wrong.mp3");
    audio1.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    startOver();

  }
}

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  start = false;
  levelNumber = 0;
  console.log(start);
$("h1").text("Game-over, Press Any Key to Restart");

}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
