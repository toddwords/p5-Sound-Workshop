var osc, osc2, envelope, envelope2, fft;

var scaleArray = [60, 62, 64, 65, 67, 69, 71, 72];
var note = 0;

function setup() {
  createCanvas(710, 200);
  osc = new p5.SinOsc();
  osc2 = new p5.SinOsc();

  // Instantiate the envelope
  envelope = new p5.Env();
  envelope2 = new p5.Env();

  // set attackTime, decayTime, sustainRatio, releaseTime
  envelope.setADSR(0.001, 0.01, 0.9, 0.03);
  envelope2.setADSR(0.1, 0.2, 0.1, 0.5);

  // set attackLevel, releaseLevel
  envelope.setRange(1, 0);

  osc.start();
  osc2.start();
  osc.amp(0)
  osc2.amp(0)

  fft = new p5.FFT();
  noStroke();
}

function draw() {
  background(20);
  // plot FFT.analyze() frequency analysis on the canvas
  var spectrum = fft.analyze();
  for (var i = 0; i < spectrum.length/20; i++) {
    fill(spectrum[i], spectrum[i]/10, 0);
    var x = map(i, 0, spectrum.length/20, 0, width);
    var h = map(spectrum[i], 0, 255, 0, height);
    rect(x, height, spectrum.length/20, -h);
  }
}


function keyTyped() {
  if(key == 'a'){
    playNotes(69)
  }
  if(key == 's'){
    playNotes(71)
  }
  if(key == 'd'){
    playNotes(72)
  }
  if(key == 'f'){
    playNotes(74)
  }
  if(key == 'g'){
    playNotes(76)
  }
  if(key == 'h'){
    playNotes(77)
  }
  if(key == 'j'){
    playNotes(79)
  }
  if(key == 'k'){
    playNotes(81)
  }
  if(key == 'l'){
    playNotes(83)
  }
}

function playNotes(midiNum){
  osc.freq(midiToFreq(midiNum))
  osc2.freq(midiToFreq(midiNum+4))
  envelope.play(osc)
  envelope2.play(osc2)
}