text1 = ["The Brooklyn web developer is in her office in the middle of a productive day. We started on a scene that was 1 meter wide, and every ten seconds, we will pull out to a scene that is 10 times farther away."]
var text2 = ["Now in another ten seconds, the next scene will be 100 meters wide. Based on this zipcode's population density, aproximately 2,781 people liveinside this square."]
var text3 = ["In the next 10 seconds we will pull out to a view of 1,000 meters wide. You can explore her neighborhood. Williamsburg, Brooklyn, New York City."]
var text4 = ["Now we are pulling out to a view of 10,000 meters wide. Based on this zipcode's population density, aproximately 384,000 liveinside this square. You can see the subway lines that allow for 1.1 million people to get to work each day."]
var text5 = ["As we pull out for another 10 seconds, we are seeing a view of 10 to the fifth meters. The distance an orbiting satellite can see in 10 seconds. We begin to see Long Island jutting out into the Atlantic Ocean"]
var text6 = ["Now we are pulling out to a view of 1,000,000 meters wide. Ten to the sixth. Soon the earth will show as a solid sphere."]



function setup() {
  createCanvas(100,100);
  // speaker = new p5.Speech("Agnes");
  speaker = new p5.Speech("Karen");
    // speaker = new p5.Speech("Moira");
  // speaker = new p5.Speech("Vicki");
  // speaker = new p5.Speech("Samantha");
  speaker.onLoad = speakingBegin;

}


function speakingBegin(){
  // speaker.setVoice("Agnes")
}
