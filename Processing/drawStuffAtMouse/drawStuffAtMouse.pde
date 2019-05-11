int x, y, yTimes, xTimes, ctr = 0;
int ctrSwitch = -1;
int slashSize = 20;
int turnMark = 1;
double redAd, greenAd, blueAd = 1;
color c;

void setup() {
  size(1500, 999);
  background(#888888);
}

void draw() {
  redAd = 3;
  greenAd = 1;
  blueAd = 1;
  c = color((int)(ctr/redAd), (int)(ctr/greenAd), (int)(ctr/blueAd));
  stroke(c);
  strokeWeight(4);
  drawWordAtMouse("Hi");
}

void drawWordAtMouse(String s) {
  //draw word
  if ( mouseButton == LEFT ) {
    textSize(30);
    textAlign(CENTER);
    fill(c);
    text(s, mouseX, mouseY);
    //rotate colors if reached max/min
    if ( c == color(0, 0, 0) || ctrSwitch == -1) {
      ctr++;
      ctrSwitch = -1;
    }
    if ( c == color(255, 255, 255) || ctrSwitch == 1 ) {
      ctr--;
      ctrSwitch = 1;
    }
  } else if ( mouseButton == RIGHT) {
    //save("picture.jpg");
  }
}

void drawSlashesAtMouse() {
  //draw slashes
  if ( random(1) < .5 ) {
    line(mouseX, mouseY, mouseX + slashSize, mouseY + slashSize);
  } else {
    line(mouseX, mouseY + slashSize, mouseX + slashSize, mouseY);
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
  if ( mousePressed ) {
    ctr = 0;
  }
}
