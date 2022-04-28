var canvas, backgroundImage;

var wallpaper, sound, questions;

var question, contestant, quiz;

function preload(){
  wallpaper = loadImage("./Images/wallpaper.jpg");
  sound = loadSound("Sounds/trilha.mp3");
}

function setup(){
  canvas = createCanvas(1336, 613);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
  sound.setVolume(0.5);
  sound.loop();
}

function draw(){
  background(wallpaper);
}
