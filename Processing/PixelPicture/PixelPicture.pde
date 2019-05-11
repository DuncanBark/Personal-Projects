PImage bg, top;
int randnum, x, y, dim, lastTotalCleared;
int totalCleared = 0;
double currTime;
color c = color(255, 0, 0);
color curr;
int autoClear = 0;
int speedLevelPast = 1;
int speedLevel = 1;
int numCleared = 1;

void setup() {
  size(444, 335);
  x = width;
  y = height;
  dim = x*y;
  bg = loadImage("orbit.png");
  currTime = millis();
  textSize(24);
  background(c);
  frameRate(10000);
}

void draw() {
  loadPixels();
  swapPixels();
  //mouseRemove();
  swapPixels();

  if ( totalCleared >= dim*.95 ) {
    System.out.println(totalCleared + " " + dim*.95);
    noLoop();
  }
}

void mouseMoved() {
  if (mouseX > 0 && mouseY > 1 && mouseY < y-1 && mouseX < x-1) {
    curr = get(mouseX, mouseY);
    pixels[(mouseY) * x + (mouseX)] = bg.pixels[(mouseY) * x + (mouseX)];
    numCleared++;
    lastTotalCleared = totalCleared;
    totalCleared++;
  }
  updatePixels();
  updateCounter(totalCleared, lastTotalCleared);
}

void swapPixels() {
  delayOne();
}

void delayOne() {
  if ( millis() - currTime > 1000.0/(speedLevel*1.3) ) {
    revealFour();
    currTime = millis();
  }
}

void revealFour() {
  randnum = int(random(.99999)*(dim-x));
  if (pixels[randnum] == c) {
    pixels[randnum] = bg.pixels[randnum];
    autoClear++;
  }
  if (pixels[randnum+1] == c) {
    pixels[randnum+1] = bg.pixels[randnum+1];
    autoClear++;
  }
  if (pixels[randnum+x] == c) {
    pixels[randnum+x] = bg.pixels[randnum+x];
    autoClear++;
  }
  if (pixels[randnum+x+1] == c) {
    pixels[randnum+x+1] = bg.pixels[randnum+x+1];
    autoClear++;
  }
  numCleared += autoClear;
  lastTotalCleared = totalCleared;
  totalCleared += autoClear;
  autoClear = 0;
  updatePixels();
  updateCounter(totalCleared, lastTotalCleared);
} //<>//

void updateCounter(int tc, int ltc) {
  fill(pixels[900]);
  text(ltc + " pix", 30, 30);
  text(4 * (speedLevelPast) + " sec", 30, 325);

  fill(0);
  text(tc + " pix", 30, 30);
  text(4 * (speedLevel) + " sec", 30, 325);
}

void mouseReleased() {
  speedLevelPast = speedLevel;
  speedLevel++;
}
