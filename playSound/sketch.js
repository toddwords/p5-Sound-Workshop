var beat;
var airhorn;

function preload(){
  beat = loadSound('../assets/be.mp3');
  airhorn = loadSound('../assets/airhorn.mp3')
}

function setup() {
  createCanvas(720, 200);
  background(255,0,0);
}

function mousePressed() {
  if ( beat.isPlaying() ) { // .isPlaying() returns a boolean
    beat.stop();
    background(255,0,0);
  } else {
    beat.play();
    background(0,255,0);
  }
}

function keyTyped(){
  if(key == ' '){
    airhorn.stop()
    airhorn.play()
  }
}