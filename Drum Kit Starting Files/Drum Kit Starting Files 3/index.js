
var buttons = document.querySelectorAll(".drum");
buttons.forEach(function (b){addClickListner(b);});

function addClickListner(b){
  b.addEventListener("click",function(){
   playSound(this.innerHTML);
  });
}

document.addEventListener("keypress",function(event){

  playSound(event.key);
});

function playSound(presedKey){
  buttonAnimation(presedKey);
  var soundUrl ="";
  switch (presedKey) {
    case "w":
      soundUrl = "sounds/crash.mp3";
      break;
    case "a":
      soundUrl = "sounds/kick-bass.mp3";
      break;
    case "s":
      soundUrl = "sounds/snare.mp3";
      break;
    case "d":
      soundUrl = "sounds/tom-1.mp3";
      break;
    case "j":
      soundUrl = "sounds/tom-2.mp3";
      break;
    case "k":
      soundUrl = "sounds/tom-3.mp3";
      break;
    case "l":
      soundUrl = "sounds/tom-4.mp3";
      break;

    default:
      console.log(presedKey);

}
var audio = new Audio(soundUrl);
audio.play();
}

function buttonAnimation(key){
  var activeButton = document.querySelector("."+key);
  activeButton.classList.toggle("pressed");
  setTimeout(function(){
    activeButton.classList.toggle("pressed");
  },100)
}
