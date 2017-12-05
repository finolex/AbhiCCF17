/*     Reference: Arduino Color Sensing Tutorial by Dejan Nedelkovski, www.HowToMechatronics.com
*/

// Declare ports
const int s0 = 4;
const int s1 = 5;
const int s2 = 6;
const int s3 = 7;
const int sensorOut = 8;

int frequency;

void setup() {
  //Setting pinModes for the ports
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(8, INPUT);

  //Turning on port 4, turning off port 5 at setup (start)
  digitalWrite(4, HIGH);
  digitalWrite(5, LOW);

  //Opening serial for serial monitor and serial communication with Processing
  Serial.begin(9600);
}

void loop() {
  //Filter Red
  digitalWrite(5, LOW);
  digitalWrite(5, LOW);
  filterColour(25,72,255, "Red = ");
  
  //Filter Green
  digitalWrite(5, HIGH);
  digitalWrite(5, HIGH);
  filterColour(30,90,255, "Green = ");
  
  //Filter Blue
  digitalWrite(5, LOW);
  digitalWrite(5, HIGH);
  filterColour(25,70,255, "Blue = ");
}

void filterColour(int x ,int y,int z, str a){
  //reads the values detected by the colour sensor
  frequency = pulseIn(8, LOW);
  //x, y, z will be updated according to the calibration of the colors detected by the colour sensor
  //Remaps the pulseIn values onto a scale of 0-255 for RGB reference (ease of reading)
  frequency = map(frequency, x, y, z, 0);
  //a will be the string name of the color being used
  Serial.print(a);
  Serial.print(frequency);
  Serial.println("  ");
  //Short delay to prevent overwhelming of the system
  delay(100);
}


