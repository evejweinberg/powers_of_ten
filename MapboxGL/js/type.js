// make sure jquery is loaded
$(document).ready(function() {
  // var header = $('#header');
  var power = document.getElementById('power')
  var intro1 = document.getElementById('intro-1')
  var intro2 = document.getElementById('intro-2')
  var box1 = document.getElementById('box1')

  // tl = new TimelineLite();

  // tl.to(intro1, 2, {x:100, opacity:100, ease:Expo.easeOut, delay:2, onComplete: onComplete})

TweenLite.fromTo(power,2,{opacity:0, y:200, x:-120},{opacity:100, y:-100, x:-120, ease:Expo.easeOut, onComplete:firstZoom})

  // TweenLite.to(intro1, 2, {y:100, opacity:100, ease:Expo.easeOut, delay:2})
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

function firstZoom(){
  console.log('first zoom was called')

  map.flyTo({
    center: [-73.945360, 40.717533],
    zoom: 20,
    speed: .2,
    curve: 1
    // easing: function(t) {
    //   return t;
    // }
  })
}


});
