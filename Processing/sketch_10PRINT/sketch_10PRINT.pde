int x, y, yTimes, xTimes, ctr = 0;
int ctrSwitch = -1;
int slashSize = 20;
int turnMark = 1;
double redAd, greenAd, blueAd = 1;
color c;

void setup() {
  size(999, 999);
  background(#888888);
  frameRate(500);
}

void draw() {
  redAd = 1;
  greenAd = 2;
  blueAd = 3;
  c = color((int)(ctr/redAd), (int)(ctr/greenAd), (int)(ctr/blueAd));
  stroke(c);
  strokeWeight(4);
  drawSlashes();
} 

void drawSlashes() {

  //draw slashes
  if ( random(1) < .5) {
    line(x, y, x + slashSize, y + slashSize);
  } else {
    line(x, y + slashSize, x + slashSize, y);
  }

  //horz or vert check
  if ( turnMark == 1) {
    x += slashSize;
  } else {
    y += slashSize;
  }

  //horizontal if
  if ( x > width ) {
    xTimes++;
    x = yTimes*slashSize;
    y = xTimes*slashSize;
    turnMark *= -1;
  }

  //vertical switch
  if ( y > height ) {
    yTimes++;
    x = yTimes*slashSize;
    y = xTimes*slashSize;
    turnMark *= -1;
  }

  //rotate colors if reached max/min
  if ( c == color(0, 0, 0) || ctrSwitch == -1) {
    ctr++;
    ctrSwitch = -1;
  }
  if ( c == color(255, 255, 255) || ctrSwitch == 1 ) {
    ctr--;
    ctrSwitch = 1;
  }
}
