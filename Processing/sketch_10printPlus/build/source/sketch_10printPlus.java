import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class sketch_10printPlus extends PApplet {

int x, y, yTimes, xTimes, ctr = 0;
int ctrSwitch = -1;
int slashSize = 3;
int turnMark = 1;
int a, b, aTimes, bTimes, ctrB = 0;
int ctrSwitchB = -1;
int turnMarkB = 1;
double redAd, greenAd, blueAd = 1;
int c;

public void setup() {
  
  background(0xff888888);
  frameRate(5000);
  a = width;
  b = height;
}

public void draw() {
  redAd = 3;
  greenAd = 3;
  blueAd = 3;
  c = color((int)(ctr/redAd), (int)(ctr/greenAd), (int)(ctr/blueAd));
  stroke(c);
  strokeWeight(5);
  drawSlashes();
  drawSlashesBackward();
}

public void drawSlashes() {
  //draw slashes
  /*
  if ( random(1) < .5) {
    line(x, y, x + slashSize, y + slashSize);
  } else {
    line(x, y + slashSize, x + slashSize, y);
  }
  */
  line(x, y, x + slashSize, y + slashSize);
  line(x, y + slashSize, x + slashSize, y);

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
  if ( y > width ) {
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

  if ( x >= width/2 && y >= height/2 ) {
    noLoop();
  }
}

public void drawSlashesBackward() {
  //draw slashes
  /*
  if ( random(1) < .5) {
    line(a, b, a - slashSize, b - slashSize);
  } else {
    line(a, b - slashSize, a - slashSize, b);
  }
  */
  line(a, b, a - slashSize, b - slashSize);
  line(a, b - slashSize, a - slashSize, b);

  //horz or vert check
  if ( turnMarkB == 1) {
    a -= slashSize;
  } else {
    b -= slashSize;
  }

  //horizontal if
  if ( a < 0 ) {
    aTimes++;
    a = width - bTimes*slashSize;
    b = height - aTimes*slashSize;
    turnMarkB *= -1;
  }

  //vertical switch
  if ( b < 0 ) {
    bTimes++;
    a = width - bTimes*slashSize;
    b = height - aTimes*slashSize;
    turnMarkB *= -1;
  }

  //rotate colors if reached max/min
  if ( c == color(0, 0, 0) || ctrSwitchB == -1) {
    ctrB++;
    ctrSwitchB = -1;
  }
  if ( c == color(255, 255, 255) || ctrSwitchB == 1 ) {
    ctrB--;
    ctrSwitchB = 1;
  }

  if ( a <= width/2 && b <= height/2 ) {
    noLoop();
    save("10printPlus.jpg");
  }
}
  public void settings() {  size(500, 500); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch_10printPlus" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
