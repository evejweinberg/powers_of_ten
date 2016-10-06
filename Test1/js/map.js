// make sure jquery is loaded

$(document).ready(function() {
  var startingVol = .15
  var vidTR = 40.717799
  // var tlMod1= $('#tl-module-1'),
  // tlMod2= $('#tl-module-2'),tlMod3= $('#tl-module-3'),tlMod4= $('#tl-module-4'),tlMod5= $('#tl-module-5'),tlMod6= $('#tl-module-6'),tlMod7= $('#tl-module-7'),
  // tlMod8= $('#tl-module-8'),tlMod9= $('#tl-module-9'),tlMod10= $('#tl-module-10');

  document.getElementById('myTune').play()
  document.getElementById('myTune').volume = startingVol




  var videoStyle = {
    "version": 8,
    "sources": {
        "satellite": {
            "type": "raster",
            "url": "mapbox://mapbox.satellite",
            "tileSize": 256
        },
        "video": {
            "type": "video",
            "urls": ["images/intro.mp4", "images/intro.mp4"],
            "coordinates": [
                [-73.945350, vidTR],
                [-73.946799, 40.717799],
                [-73.946799, 40.717500],
                [-73.945350, 40.717500]
            ]
        }
    },
    "layers": [{
        "id": "background",
        "type": "background",
        "paint": {
            "background-color": "rgb(4,7,14)"
        }
    }, {
        "id": "satellite",
        "type": "raster",
        "source": "satellite"
    }, {
        "id": "video",
        "type": "raster",
        "source": "video"
    }]
};

console.log(videoStyle)




  // var header = $('#header');
  var power = document.getElementById('power')
  var intro1 = document.getElementById('intro-1')
  var intro2 = document.getElementById('intro-2')
  var box1 = document.getElementById('box1')

  // tl = new TimelineLite();

  // tl.to(intro1, 2, {x:100, opacity:100, ease:Expo.easeOut, delay:2, onComplete: onComplete})

TweenLite.fromTo(power,2,{opacity:0, y:200, x:-120},{opacity:100, y:-160, x:-120, ease:Expo.easeOut, onStart:firstZoom})

  TweenLite.fromTo(intro1, 4, {x:-220, opacity:0, y:-60},{y:-160, opacity:100, x:-220, ease:Expo.easeOut, delay:4,onStart:secondZoom})

  TweenLite.fromTo(intro2, 4, {x:-220, opacity:0, y:-100},{y:-130, opacity:100, x:-220, ease:Expo.easeOut, delay:8,onStart:thirdZoom})
  //
  // TweenLite.fromTo(intro2, 2, {opacity:0}, {opacity:100},{delay:3})
  //
  // TweenLite.fromTo(box1,2,{width:1000,height:1000,top:-200, y:50,ease:Expo.easeOut},{opacity:100, width:500,height:500,top:100})


function onStart(){
  console.log('animation started')
}

function onUpdate(){

  console.log('animation is in prgress')
}

function onComplete(){
  console.log('animation done')
    // TweenLite.fromTo(power,2,{opacity:0, y:50},{opacity:100, y:-100})
}

function secondZoom(){
  console.log('secnd zoom was called')
  map.flyTo({
    center: [-73.945360, 40.717533],
    zoom: mapInitZoom+4,
    speed: .5,
    curve: 1
    // easing: function(t) {
    //   return t;
    // }
  })

}

function thirdZoom(){

  console.log('third was called')
  // var beginButton = document.getElementById('begin-box')
  // beginButton.show()
  // TweenLite.to(beginButton,5,{opacity:100,y:200, delay:2})

   $('#begin-box').delay(5000).fadeIn( 1000 )
  //  $('#house-div').delay(5000).fadeIn( 1000 )
  //  TweenLite.fromTo($('#house-div'),12,{width:"10%",height:"10%",ease:Expo.easeOut},{width:"100%",height:"100%"})

  map.flyTo({
    center: [-73.945360, 40.717533],
    zoom: mapInitZoom+9,
    speed: .4,
    curve: 1
    // easing: function(t) {
    //   return t;
    // }
  })

}

function firstZoom(){
  console.log('first zoom was called')
    //  $('#house-div').fadeIn( 8000 )


  map.flyTo({
    center: [-73.945360, 40.717533],
    zoom: mapInitZoom+2,
    speed: .4,
    curve: 1

  })
}














mapboxgl.accessToken = 'pk.eyJ1IjoiZXZlandlaW5iZXJnIiwiYSI6IjRhMjg1Yzk4MjM5ZDJhMjI1NTg4YzVmYWE3ZTc1NDY5In0.rAbzx1cyivJzsHv2pxRh2Q';
var map, mapStyle;
var mapInitZoom = 8



map = new mapboxgl.Map({
    container: 'map', // container id
style: videoStyle,
    // style: 'mapbox://styles/evejweinberg/citway9ip004a2inz70zbgv1r', //stylesheet location
    center: [-73.945360, 40.717533], // starting position
    zoom: mapInitZoom // starting zoom
});





function scene1(){
  speaker.speak(text1)

}



});




////audio

function getSoundAndFadeAudio (audiosnippetId) {

    var sound = document.getElementById(audiosnippetId);

    // Set the point in playback that fadeout begins. This is for a 2 second fade out.
    var fadePoint = sound.duration - 2;

    var fadeAudio = setInterval(function () {

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

document.getElementById("begin-box").addEventListener("click", startScene1);


function startScene1(){
  var w = $('#tl-module-1').width()
  var module1width = 0
  var tlMod1= $('#tl-module-1'),
  tlMod2= $('#tl-module-2'),tlMod3= $('#tl-module-3'),tlMod4= $('#tl-module-4'),tlMod5= $('#tl-module-5'),tlMod6= $('#tl-module-6'),tlMod7= $('#tl-module-7'),
  tlMod8= $('#tl-module-8'),tlMod9= $('#tl-module-9'),tlMod10= $('#tl-module-10');
    speaker.speak(text1)
  console.log('scene 1 starting')
  var tl = new TimelineLite();
    $('#myTune').animate({volume: 0}, 10000);
    tl
    .to(tlMod1,1,{opacity:100,y:-200,ease:Power1.easeOut})
    .to(tlMod2,1,{opacity:100,y:-200,ease:Power1.easeOut},'=-.85')
    .to(tlMod3,1,{opacity:100,y:-200,ease:Power1.easeOut},'=-.85')
    .to(tlMod4,1,{opacity:100,y:-200,ease:Power1.easeOut},'=-.85')
    .to(tlMod5,1,{opacity:100,y:-200,ease:Power1.easeOut},'=-.85')
    .to(tlMod6,1,{opacity:100,y:-200,ease:Power1.easeOut},'=-.85')
    .to(tlMod7,1,{opacity:100,y:-200,ease:Power1.easeOut},'=-.85')
    .to(tlMod8,1,{opacity:100,y:-200,ease:Power1.easeOut},'=-.85')
    .to(tlMod9,1,{opacity:100,y:-200,ease:Power1.easeOut},'=-.85')
    .to(tlMod10,1,{opacity:100,y:-200,ease:Power1.easeOut},'=-.85')

// console.log(w)
var w=$('#tl-module-1').width()
console.log(w)
    for (var i =0;i<w;i+= .02){


        console.log('making 1 wider')
      $('#tl-inner-1').width(i)

    }
}
