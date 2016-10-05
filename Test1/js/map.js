// make sure jquery is loaded
$(document).ready(function() {
  // var header = $('#header');
  var power = document.getElementById('power')
  var intro1 = document.getElementById('intro-1')
  var intro2 = document.getElementById('intro-2')
  var box1 = document.getElementById('box1')

  // tl = new TimelineLite();

  // tl.to(intro1, 2, {x:100, opacity:100, ease:Expo.easeOut, delay:2, onComplete: onComplete})

TweenLite.fromTo(power,2,{opacity:0, y:200, x:-120},{opacity:100, y:-160, x:-120, ease:Expo.easeOut, onStart:firstZoom})

  TweenLite.fromTo(intro1, 4, {x:-220, opacity:0, y:-60},{y:-160, opacity:100, x:-220, ease:Expo.easeOut, delay:4,onStart:secondZoom})

  TweenLite.fromTo(intro2, 4, {x:-220, opacity:0, y:-100},{y:-130, opacity:100, x:-220, ease:Expo.easeOut, delay:10,onStart:thirdZoom})
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
   $('#house-div').delay(5000).fadeIn( 1000 )
   TweenLite.fromTo($('#house-div'),12,{width:"10%",height:"10%",ease:Expo.easeOut},{width:"100%",height:"100%"})

  map.flyTo({
    center: [-73.945360, 40.717533],
    zoom: mapInitZoom+8,
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
    // easing: function(t) {
    //   return t;
    // }
  })
}














mapboxgl.accessToken = 'pk.eyJ1IjoiZXZlandlaW5iZXJnIiwiYSI6IjRhMjg1Yzk4MjM5ZDJhMjI1NTg4YzVmYWE3ZTc1NDY5In0.rAbzx1cyivJzsHv2pxRh2Q';
var map, mapStyle;
var mapInitZoom = 8

mapStyle = {
    "sources": {


        "overlay": {
            "type": "image",
            "url": "images/house.png",
            "coordinates": [
                [-73, 42],
                [-72, 42],
                [-72, 39],
                [-73, 39]
            ]

        }
    },
    "layers":[

      {
            "id": "overlay",
            "source": "overlay",
            "type": "raster",
            "paint": {"raster-opacity": 0.85}
        }
    ]


}

map = new mapboxgl.Map({
    container: 'map', // container id

    style: 'mapbox://styles/evejweinberg/citway9ip004a2inz70zbgv1r', //stylesheet location
    center: [-73.945360, 40.717533], // starting position
    zoom: mapInitZoom // starting zoom
});








function scene1(){
  speaker.speak(text1)

}



});
