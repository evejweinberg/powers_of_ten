var centerLON = 40.717799
var centerLAT = -73.945360
var startingVol = .15
var audioElement = document.getElementById('myTune');
var map, mapStyle;
var mapInitZoom = 4
var currentScene = 1
var scene1duration = 10000




$(document).ready(function() {
// make sure jquery is loaded
// audioElement.addEventListener("load", function() {
document.getElementById('myTune').play()
document.getElementById('myTune').volume = startingVol
// })
document.getElementById("begin-box").addEventListener("click", loadTimeline);
document.getElementById("play-button").addEventListener("click", scene2);


var map, mapStyle;
var power = document.getElementById('power')
var intro1 = document.getElementById('intro-1')
var intro2 = document.getElementById('intro-2')
var box1 = document.getElementById('box1')

///////////////scenes///////////////////////
///////////////scenes///////////////////////
///////////////scenes///////////////////////

function scene1(){
  // speaker.setRate(.1)
  speaker.speak(text1)
  console.log('scene 1 starting')
  $("#studio-video").fadeOut(1000);
  var studioVideo = document.getElementById('studio-video')
  TweenLite.from(studioVideo, 2, {width: 200,height: 100})

//i need to animate this not pop from one to the other
var zoomOutScene1 = setInterval(function(){map.setView([centerLON, centerLAT], map.getZoom() - 1);
},3000)

    setTimeout(function(){
      currentScene = 2
      clearInterval(zoomOutScene1);
      console.log('scene 1 is done')
      },scene1duration)

  //animate the white box of that scene
    var w = $('#tl-module-1').width()
    var module1width = 0
    $('#tl-inner-1').animate({
        width: 100 + '%'
    }, {
        duration: scene1duration,
        easing: 'swing',
        step: function() { // called on every step
        }
    });

}


function scene2(){
  console.log('scene2 begin')
  speaker.speak(text2)
  $("#box-art-0").fadeOut(2000);
  document.getElementById("play-button").removeEventListener("click", scene2);
  document.getElementById("play-button").addEventListener("click", scene3);
  //animate the white box of that scene
  var w = $('#tl-module-2').width()
  var module1width = 0
  $('#tl-inner-2').animate({
      width: 100 + '%'
  }, {
      duration: scene1duration,
      easing: 'swing',
      step: function() { // called on every step
      }
  });


}

function scene3(){
  console.log('scene3 begin')
  speaker.speak(text3)
  document.getElementById("play-button").removeEventListener("click", scene3);
  document.getElementById("play-button").addEventListener("click", scene4);
  var w = $('#tl-module-3').width()
  var module1width = 0
  $('#tl-inner-3').animate({
      width: 100 + '%'
  }, {
      duration: scene1duration,
      easing: 'swing',
      step: function() { // called on every step
      }
  });
}

function scene4(){
  console.log('scene4 begin')
  speaker.speak(text4)
  document.getElementById("play-button").removeEventListener("click", scene4);
  document.getElementById("play-button").addEventListener("click", scene5);
  var w = $('#tl-module-4').width()
  var module1width = 0
  $('#tl-inner-4').animate({
      width: 100 + '%'
  }, {
      duration: scene1duration,
      easing: 'swing',
      step: function() { // called on every step
      }
  });

}



///////////////scenes///end////////////////////
///////////////scenes///end////////////////////
///////////////scenes///end////////////////////




L.mapbox.accessToken = 'pk.eyJ1IjoiZXZlandlaW5iZXJnIiwiYSI6IjRhMjg1Yzk4MjM5ZDJhMjI1NTg4YzVmYWE3ZTc1NDY5In0.rAbzx1cyivJzsHv2pxRh2Q';
map = L.mapbox.map('map', 'mapbox.satellite', { zoomControl: false, zoomAnimation: false })
.setView([centerLON, centerLAT], mapInitZoom);


    //You can find and create appropriate values at
    // http://maps.nypl.org/warper/ or
    // http://www.georeferencer.org/
    var imageOne = 'images/box-1.svg',
        imageBoundsOne = L.latLngBounds([
            [centerLON-.06, centerLAT-.06],
            [centerLON+.06, centerLAT+.06]]);

    var imageTwo = 'images/box-1.svg',
        imageBoundsTwo = L.latLngBounds([
            [centerLON-.20, centerLAT-.20],
            [centerLON+.20, centerLAT+.20]]);

    var imageThree = 'images/box-1.svg',
          imageBoundsThree = L.latLngBounds([
            [centerLON-1, centerLAT-1],
            [centerLON+1, centerLAT+1]]);

    var imageFour = 'images/box-1.svg',
        imageBoundsFour = L.latLngBounds([
          [centerLON-2.5, centerLAT-2.5],
          [centerLON+2.5, centerLAT+2.5]]);



    var overlayOne = L.imageOverlay(imageOne, imageBoundsOne).addTo(map);
    var overlayTwo = L.imageOverlay(imageTwo, imageBoundsTwo).addTo(map);
    var overlayThree = L.imageOverlay(imageThree, imageBoundsThree).addTo(map);
    var overlayFour = L.imageOverlay(imageFour, imageBoundsFour).addTo(map);




  ///INTRO ANIMATION PLAYS AUTOMATICALLY
  TweenLite.fromTo(power, 2, {opacity: 0,y: 200,x: -120}, {opacity: 100,y: -160,x: -120,ease: Expo.easeOut,onStart: firstZoom})
  TweenLite.fromTo(intro1, 4, {x: -220,opacity: 0,y: -60}, {y: -160,opacity: 100,x: -220,ease: Expo.easeOut,delay: 4,onStart: secondZoom})
  TweenLite.fromTo(intro2, 4, {x: -220,opacity: 0,y: -100}, {y: -130,opacity: 100,x: -220,ease: Expo.easeOut,delay: 8,onStart: thirdZoom})


  function firstZoom() {
      console.log('first zoom was called')
      var pos = 0;
      var positions = [
            [centerLON, centerLAT],
            [centerLON, centerLAT],
            [centerLON, centerLAT]
        ];
          map.setView([centerLON, centerLAT], map.getZoom() + 3);

        //   map.setView([positions[0]], 4, {
        //     pan: {
        //         animate: true,
        //         duration: 7
        //     },
        //     zoom: {
        //         animate: true
        //     }
        // });

      }

  function secondZoom() {
        map.setView([centerLON, centerLAT], map.getZoom() + 5);
        console.log('secnd zoom was called')
    }

  function thirdZoom() {
      map.setView([centerLON, centerLAT], map.getZoom() + 9);
        console.log('third was called')

        $('#begin-box').delay(5000).fadeIn(1000)
        $("#studio-video").fadeIn(3000);
        TweenMax.to("#studio-video-inner", 2, {width:"50%", top:"100px", ease:Power2.easeInOut});

        $("#box-art-0").fadeIn(3000);
    }

//////INTRO ANIMATION DONE




////audio

function getSoundAndFadeAudio(audiosnippetId) {

    var sound = document.getElementById(audiosnippetId);

    // Set the point in playback that fadeout begins. This is for a 2 second fade out.
    var fadePoint = sound.duration - 2;

    var fadeAudio = setInterval(function() {

        // Only fade if past the fade out point or not at zero already
        if ((sound.currentTime >= fadePoint) && (sound.volume != 0.0)) {
            sound.volume -= 0.1;
        }
        // When volume at zero stop all the intervalling
        if (sound.volume === 0.0) {
            clearInterval(fadeAudio);
        }
    }, 200);

}




function loadTimeline() {

    var tlMod1 = $('#tl-module-1'),
        tlMod2 = $('#tl-module-2'),
        tlMod3 = $('#tl-module-3'),
        tlMod4 = $('#tl-module-4'),
        tlMod5 = $('#tl-module-5'),
        tlMod6 = $('#tl-module-6'),
        tlMod7 = $('#tl-module-7'),
        tlMod8 = $('#tl-module-8'),
        tlMod9 = $('#tl-module-9'),
        tlMod10 = $('#tl-module-10'),
        tlBlack = $('#bottom-black'),
        playButton = $('#play-button');

    var tl = new TimelineLite();
    var fadeTime = 1.1
    $('#myTune').animate({
        volume: 0
    }, 10000);

    var intro1 = document.getElementById('intro-1')
    var intro2 = document.getElementById('intro-2')


            TweenLite.to(power, 2, {opacity: 0,y: -100})
            TweenLite.to(intro1, 2, {opacity: 0,y: -100})
            TweenLite.to(intro2, 2, {opacity: 0,y: -100})
      tl.to(tlBlack, fadeTime, {y: -176,ease: Power1.easeOut})
        .to(tlMod1, fadeTime,{opacity: 100,y: -200,ease: Power1.easeOut}, '=-.85')
        .to(tlMod2, fadeTime,{opacity: 100,y: -200,ease: Power1.easeOut}, '=-.85')
        .to(tlMod3, fadeTime,{opacity: 100,y: -200,ease: Power1.easeOut}, '=-.85')
        .to(tlMod4, fadeTime,{opacity: 100,y: -200,ease: Power1.easeOut}, '=-.85')
        .to(tlMod5, fadeTime,{opacity: 100,y: -200,ease: Power1.easeOut}, '=-.85')
        .to(tlMod6, fadeTime, {opacity: 100,y: -200,ease: Power1.easeOut}, '=-.85')
        .to(tlMod7, fadeTime, {opacity: 100,y: -200,ease: Power1.easeOut}, '=-.85')
        .to(tlMod8, fadeTime, {opacity: 100,y: -200,ease: Power1.easeOut}, '=-.85')
        .to(tlMod9, fadeTime, {opacity: 100,y: -200,ease: Power1.easeOut}, '=-.85')
        .to(tlMod10, fadeTime, {opacity: 100,y: -200,ease: Power1.easeOut}, '=-.85')
        .to(playButton, fadeTime, {y: -220,ease: Power1.easeOut}, '=-.85')


        $("#begin-box").fadeOut(2000);
        scene1()



}








////add a layers// add to map
// map.addSource('some id', {
//    type: 'image',
//    url: 'https://www.mapbox.com/images/foo.png',
//    coordinates: [
//        [-76.54, 39.18],
//        [-76.52, 39.18],
//        [-76.52, 39.17],
//        [-76.54, 39.17]
//    ]
// });

// map.removeSource('some id');  // remove


}); //onLoad done
