var text1 = ["The Brooklyn web developer is in her office in the middle of a productive day. As we pull out to a scene that is 10 times farther away, this square is 10 meters wide. Explore her block"]
var text2 = ["Now in another ten seconds, the next scene will be 100 meters wide. Based on this zipcode's population density, aproximately 2,781 people liveinside this square."]
var text3 = ["Now in the next 10 seconds we are pulling out to a view of 1,000 meters wide. You can explore her neighborhood. Williamsburg, Brooklyn, New York City."]
var text4 = ["Now we are pulling out to a view of 10,000 meters wide. Based on this zipcode's population density, aproximately 384,000 liveinside this square."]
var text5 = ["Now we are pulling out to a view of 100,000 meters wide."]
var text6 = ["Now we are pulling out to a view of 1,000,000 meters wide"]
var speaker;
var scene1 = true


function setup() {
  // createCanvas(windowWidth, windowHeight);
  // speaker = new p5.Speech("Agnes");
  speaker = new p5.Speech("Karen");
    // speaker = new p5.Speech("Moira");
  // speaker = new p5.Speech("Vicki");
  // speaker = new p5.Speech("Samantha");
  speaker.onLoad = speakingBegin;

}


function speakingBegin(){
}
