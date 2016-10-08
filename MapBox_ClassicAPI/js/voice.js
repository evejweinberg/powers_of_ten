var text1 = ["The Brooklyn web developer is in her office in the middle of a productive day. As we pull out to a scene that is 10 times farther away, our field of view is 10 times wider. This square is 10 meters wide. You can see the places she frequents right on her block. Here is her laundry mat and her coffee shop."]
var text2 = ["Now in another ten seconds, the next scene will be 100 meters wide. The distance from her house to her favorite bar"]
var text3 = ["Now we are pulling out to a view of 1,000 metesr wide"]
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
