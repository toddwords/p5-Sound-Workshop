var mic;

function setup() {
  createCanvas(710, 200);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  console.log(vol)
  fill(255,0,0);
  stroke(0);

  // Draw an ellipse with height based on volume
  var h = map(vol, 0, 1, 0, 150);
  ellipse(width/2, height/2, 50 + h, 50 + h);
}
