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

public class drawStuffAtMouse extends PApplet {

int x, y, yTimes, xTimes, ctr = 0;
int ctrSwitch = -1;
int slashSize = 20;
int turnMark = 1;
double redAd, greenAd, blueAd = 1;
int c;

public void setup() {
  
  background(0xff888888);
}

public void draw() {
  redAd = 3;
  greenAd = 1;
  blueAd = 1;
  c = color((int)(ctr/redAd), (int)(ctr/greenAd), (int)(ctr/blueAd));
  stroke(c);
  strokeWeight(4);
  drawWordAtMouse("Hi");
}

public void drawWordAtMouse(String s) {
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

public void drawSlashesAtMouse() {
  //draw slashes
  if ( random(1) < .5f ) {
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
  public void settings() {  size(1500, 999); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "drawStuffAtMouse" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
