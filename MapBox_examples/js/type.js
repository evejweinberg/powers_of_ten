// make sure jquery is loaded
(function($){
  // var header = $('#header');
  var power = document.getElementById('power')
  var intro1 = document.getElementById('intro-1')
  var intro2 = document.getElementById('intro-2')
  var box1 = document.getElementById('box1')

  // tl = new TimelineLite();

  // tl.to(intro1, 2, {x:100, opacity:100, ease:Expo.easeOut, delay:2, onComplete: onComplete})



  TweenLite.to(intro1, 2, {x:100, opacity:100, ease:Expo.easeOut, delay:2, onComplete: onComplete})

  TweenLite.fromTo(intro2, 2, {opacity:0}, {opacity:100},{delay:3})

  TweenLite.fromTo(box1,2,{width:1000,height:1000,top:-200, y:50,ease:Expo.easeOut},{opacity:100, width:500,height:500,top:100})


function onStart(){
  console.log('animation started')
}

function onUpdate(){

  console.log('animation is in prgress')
}

function onComplete(){
  console.log('animation done')
    TweenLite.fromTo(power,2,{opacity:0, y:50},{opacity:100, y:-100})
}


})(jQuery);
