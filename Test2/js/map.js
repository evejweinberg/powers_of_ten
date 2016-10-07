var centerLON = 40.717799
var centerLAT = -73.945360
var startingVol = .15
var audioElement = document.getElementById('myTune');
var map, mapStyle;
var mapInitZoom = 4
var currentScene = 1

$(document).ready(function() {
// make sure jquery is loaded
console.log('doc is ready')

audioElement.addEventListener("load", function() {

  document.getElementById('myTune').play()
  document.getElementById('myTune').volume = startingVol
})


document.getElementById("begin-box").addEventListener("click", startScene1);

document.getElementById("play-button").addEventListener("click", scene2);
document.getElementById("play-button").addEventListener("click", scene3);








function scene2(){
  console.log('scene2')


}

function scene3(){
  console.log('scene3')
}



var map, mapStyle;

    var power = document.getElementById('power')
    var intro1 = document.getElementById('intro-1')
    var intro2 = document.getElementById('intro-2')
    var box1 = document.getElementById('box1')






    // mapboxgl.accessToken = 'pk.eyJ1IjoiZXZlandlaW5iZXJnIiwiYSI6IjRhMjg1Yzk4MjM5ZDJhMjI1NTg4YzVmYWE3ZTc1NDY5In0.rAbzx1cyivJzsHv2pxRh2Q';



    L.mapbox.accessToken = 'pk.eyJ1IjoiZXZlandlaW5iZXJnIiwiYSI6IjRhMjg1Yzk4MjM5ZDJhMjI1NTg4YzVmYWE3ZTc1NDY5In0.rAbzx1cyivJzsHv2pxRh2Q';
    map = L.mapbox.map('map', 'mapbox.satellite', { zoomControl: false, zoomAnimation: false })
    .setView([centerLON, centerLAT], mapInitZoom);


    //You can find and create appropriate values at
    // http://maps.nypl.org/warper/ or
    // http://www.georeferencer.org/
    var imageOne = 'images/box-1.svg',
        imageBoundsOne = L.latLngBounds([
            [centerLON-.1, centerLAT-.1],
            [centerLON+.1, centerLAT+.1]]);

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
      [centerLON-1.5, centerLAT-1.5],
      [centerLON+1.5, centerLAT+1.5]]);



    var overlayOne = L.imageOverlay(imageOne, imageBoundsOne)
        .addTo(map);
    var overlayTwo = L.imageOverlay(imageTwo, imageBoundsTwo)
            .addTo(map);
    var overlayThree = L.imageOverlay(imageThree, imageBoundsThree)
            .addTo(map);
var overlayFour = L.imageOverlay(imageFour, imageBoundsFour)
                    .addTo(map);












    TweenLite.fromTo(power, 2, {opacity: 0,y: 200,x: -120}, {opacity: 100,y: -160,x: -120,ease: Expo.easeOut,onStart: firstZoom})
    TweenLite.fromTo(intro1, 4, {x: -220,opacity: 0,y: -60}, {y: -160,opacity: 100,
        x: -220,
        ease: Expo.easeOut,
        delay: 4,
        onStart: secondZoom
    })
    TweenLite.fromTo(intro2, 4, {x: -220,opacity: 0,y: -100}, {y: -130,opacity: 100,x: -220,
            ease: Expo.easeOut,
            delay: 8,
            onStart: thirdZoom})





    function secondZoom() {
        map.setView([centerLON, centerLAT], map.getZoom() + 5);

        console.log('secnd zoom was called')


    }

    function thirdZoom() {
      map.setView([centerLON, centerLAT], map.getZoom() + 9);

      // map.setLayoutProperty('image', 'visibility', 'visible');

        console.log('third was called')
            // var beginButton = document.getElementById('begin-box')
            // beginButton.show()
            // TweenLite.to(beginButton,5,{opacity:100,y:200, delay:2})

        $('#begin-box').delay(5000).fadeIn(1000)
            //  $('#house-div').delay(5000).fadeIn( 1000 )
            //  TweenLite.fromTo($('#house-div'),12,{width:"10%",height:"10%",ease:Expo.easeOut},{width:"100%",height:"100%"})
          $("#studio-video").fadeIn(3000);


    }

    function firstZoom() {
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

        console.log('first zoom was called')
        // map.setView([centerLON, centerLAT], map.getZoom() + 5);
        // map.setView([33.98, -118.42], 5);
    //       map.setView([centerLON, centerLAT], 2,{
    //     pan: {
    //         animate: true,
    //         duration: 1200
    //     },
    //   zoom:{
    //         animate: true
    //     }
    // });
  }


            //  $('#house-div').fadeIn( 8000 )








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




function startScene1() {
    $("#studio-video").fadeOut(1000);
  var scene1duration = 9000

//i need to animate this not pop from one to the other
  var zoomOutScene1 = setInterval(function(){map.setView([centerLON, centerLAT], map.getZoom() - 1);
  },2000)



  setTimeout(function(){
    currentScene = 2
    clearInterval(zoomOutScene1);
    console.log('scene 1 is done')
    // document.getElementById("play-button").src = "images/pause1.svg";
    // alert('scene is done')
    },scene1duration)

    var w = $('#tl-module-1').width()
    var module1width = 0

    $('#tl-inner-1').animate({
        width: 100 + '%'
    }, {
        duration: scene1duration,
        easing: 'swing',
        step: function() { // called on every step
            // $('#tl-inner-1').width()/$('#tl-inner-1').parent().width()*100));
        }
    });


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
    speaker.setRate(.1)
    speaker.speak(text1)
    console.log('scene 1 starting')
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

        console.log('done chaining')

        $("#begin-box").fadeOut(2000);



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
