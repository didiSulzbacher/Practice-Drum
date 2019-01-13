var buttonColors= ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;

function nextSequence(){
  console.log("n");
  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour  = buttonColors[randomNumber];

  gamePattern.push(randomChosenColour);

  playSound(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  $("#level-title").text("Level "+ ++level);

  level = 1;
}

function playSound(color){

  var soundUrl = "sounds/"+color+".mp3";
  var audio = new Audio(soundUrl);
  audio.play();
}

$(".btn").click(function(){
  console.log("c");
if (level === 0)
  return;

  var userChosenColour  = this.id;
  userClickedPattern.push(userChosenColour);

  animatedPress(userChosenColour);
  playSound(userChosenColour);

  checkAnswer(level)

});

function animatedPress(currentColour){
  $("#"+currentColour).toggleClass("pressed");

  setTimeout(function () {
    $("#"+currentColour).toggleClass("pressed");
  }, 100);
}

$(document).on('keypress', function(e){
  if(level === 0){
    nextSequence();
  }
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel-1] === userClickedPattern[currentLevel-1]) {
      console.log("success");
      level++;
      if (gamePattern.length === userClickedPattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
  }
  else{
    gameOver();
  }
}

function gameOver(){
  level = 0;
  $("h1").text("Game Over, Press Any Key to Restart");
  playSound("wrong");
  $("body").toggleClass("game-over");
  setTimeout(function () {
    $("body").toggleClass("game-over");
  }, 200);
  userClickedPattern = gamePattern=[];
}
