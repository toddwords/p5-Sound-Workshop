var osc, fft;
var oscType = 'sine'
function setup() {
  createCanvas(720, 256);

  osc = new p5.Oscillator(); // set frequency and type
  osc.setType(oscType)
  osc.amp(.5);

  fft = new p5.FFT();
  osc.start();
}

function draw() {
  background(255);
  noFill()

  //this is what draws the waveform
  var waveform = fft.waveform();  // analyze the waveform
  beginShape();
  strokeWeight(5);
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();

  // change oscillator frequency based on mouseX
  var freq = map(mouseX, 0, width, 40, 880);
  osc.freq(freq);

  var amp = map(mouseY, 0, height, 1, .01);
  osc.amp(amp);
}

function mousePressed() {
  if(oscType == 'sine'){
    oscType = 'triangle'
  }
  else if(oscType == 'triangle'){
    oscType = 'square'
  }
  else if(oscType == 'square'){
    oscType = 'sawtooth'
  }
  else if(oscType == 'sawtooth'){
    oscType = 'sine'
  }
  osc.setType(oscType)
}