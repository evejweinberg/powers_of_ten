
$(document).ready(function() {

    // var startingVol = .15
    // var centerLON = 40.717799
    // var centerLAT = -73.945360
    var power = document.getElementById('power')
    var intro1 = document.getElementById('intro-1')
    var intro2 = document.getElementById('intro-2')
    var box1 = document.getElementById('box1')
// audioElement.addEventListener("load", function() {
    console.log('audio loaded')
    document.getElementById('myTune').play()
    document.getElementById('myTune').volume = startingVol
  // })
    document.getElementById("begin-boxB").addEventListener("click", loadTimeline);
    document.getElementById("play-button").addEventListener("click", scene2);
    document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {


          if  (this.classList == "active"){
            TweenLite.to(document.getElementById('about-side-info'),3,{right:-400,ease:Expo.easeOut})

            console.log('go in')
          } else {
            TweenLite.to(document.getElementById('about-side-info'),3,{right:-10,ease:Expo.easeOut})

          }
            this.classList.toggle( "active" );
      });


    // $("#defaultCanvas0").remove();





    // mapboxgl.accessToken = 'pk.eyJ1IjoiZXZlandlaW5iZXJnIiwiYSI6IjRhMjg1Yzk4MjM5ZDJhMjI1NTg4YzVmYWE3ZTc1NDY5In0.rAbzx1cyivJzsHv2pxRh2Q';
    var map, mapStyle;
    var mapInitZoom = 8
    var power = document.getElementById('power')
    var intro1 = document.getElementById('intro-1')
    var intro2 = document.getElementById('intro-2')
    var box1 = document.getElementById('box1')


    mapboxgl.accessToken = 'pk.eyJ1IjoiZXZlandlaW5iZXJnIiwiYSI6IjRhMjg1Yzk4MjM5ZDJhMjI1NTg4YzVmYWE3ZTc1NDY5In0.rAbzx1cyivJzsHv2pxRh2Q';
    getMarkersfromMarkersPage()
    map = new mapboxgl.Map({
        container: 'map', // container id
        // style: videoStyle,
        // style: 'mapbox://styles/mapbox/streets-v9',
        style: 'mapbox://styles/evejweinberg/citway9ip004a2inz70zbgv1r', //stylesheet location
        center: [centerLAT, centerLON], // starting position
        bearing: 90,
        interactive: true,
        zoom: mapInitZoom // starting zoom
    });



    map.on('load', function() {
        TweenLite.fromTo(power, 2, {opacity: 0,y: 200,x: -120}, {opacity: 100,y: -160,x: -120,ease: Expo.easeOut,onStart: firstZoom})
        TweenLite.fromTo(intro1, 4, {x: -220,opacity: 0,y: -60}, {y: -160,opacity: 100,x: -220,ease: Expo.easeOut,delay: 4,onStart: secondZoom})
        TweenLite.fromTo(intro2, 4, {x: -220,opacity: 0,y: -100}, {y: -160,opacity: 100,x: -220,ease: Power4.easeOut,delay: 7,onStart: thirdZoom})





    });



    ///////////////scenes///////////////////////
  ///////////////scenes///////////////////////
  ///////////////scenes///////////////////////

  function scene1(){
    Tick(1, 10)
    document.getElementById("powers-sup").innerHTML="1"
    // if (p5voice){

      speaker.speak(text1)
    // } else {
      // responsiveVoice.speak(text1.toString(),"US English Female");

    // }


    //scale video up with tweenLite
    setTimeout(function(){TweenMax.to("#studio-video", 4, {width:"1%", left:"50%",top:"55%",height:"1%", ease:Power2.easeInOut});},1000)
    $("#studio-video").delay(4000).fadeOut(2000);
    $('#house-image').addClass('house-scene1')

    //animate the white timeline box of that scene
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
      map.flyTo({
          center: [centerLAT, centerLON],
          zoom: 18,
          bearing:-8,
          speed: camSpeed,
          })

  }


  function scene2(){
    Tick(10, 100)
    scaleBoxDown('#box2',100,100,.4)
    scaleBoxDown('#box3', 500, 500, 1)
    // document.getElementById("text-top-right").innerHTML="100"
    document.getElementById("powers-sup").innerHTML="2"
    // $('#house-image').removeClass('house-scene1')
    $('#house-image').addClass('house-scene2')
    $("#house-image").delay(4200).fadeOut(1000);

    if (p5voice){

      speaker.speak(text2)
    } else {
      responsiveVoice.speak(text2.toString(),"US English Female");

    }

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
        step: function() {
          if (currentMeter<100){
            // console.log('yup')

            // document.getElementById("text-top-right").innerHTML=currentMeter
            currentMeter++
          }
        }
    });

    map.flyTo({
        center: [centerLAT, centerLON],
        zoom: 17,
        speed: .05,
        })


  }



  function scene3(){
    scaleBoxDown('#box2', 0, 0, 0)
    scaleBoxDown('#box3', 100, 100, .4)
    scaleBoxDown('#box4', 500, 500, 1)

    Tick(100, 1000)
    document.getElementById("powers-sup").innerHTML="3"
    console.log('scene3 begin')
    if (p5voice){

      speaker.speak(text3)
    } else {
      responsiveVoice.speak(text3.toString(),"US English Female");

    }

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

    map.flyTo({
        center: [centerLAT, centerLON],
        zoom: 15,
        speed: camSpeed,
        pan: [centerLAT, centerLON],
        bearing: 10
        })

        geojson.features.forEach(function(marker,i) {
          // console.log(marker)
            // create a DOM element for the marker
            var el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url(images/marker_' + i+'.png';
            el.style.width = marker.properties.iconSize[0] + 'px';
            el.style.height = marker.properties.iconSize[1] + 'px';

            // el.addEventListener('click', function() {
            //   var popup = new mapboxgl.Popup()
            //   .setLngLat(centerLON,centerLAT)
            //   .setHTML(marker.properties.message)
            //   .addTo(map)
            //   // window.alert(marker.properties.message);
            // });

            scene3Markers.push(el)

            // create the popup
            var popup = new mapboxgl.Popup({offset:[0, -30]})
                .setText('Construction on the Washington Monument began in 1848.');

            // add marker to map
            new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
                .setLngLat(marker.geometry.coordinates)
                .setPopup(popup) // sets a popup on this marker
                .addTo(map);
        });
  }

  function scene4(){
    Tick(1000, 10000)
    scaleBoxDown('#box3', 0, 0, 0)
    scaleBoxDown('#box4', 100, 100, .4)
    scaleBoxDown('#box5', 500, 500, 1)

    for (i in scene3Markers){
      scene3Markers[i].style.display = 'none'
    }
    document.getElementById("text-top-right").innerHTML="10,000"
    document.getElementById("powers-sup").innerHTML="4"
    console.log('scene4 begin')

    if (p5voice){

      speaker.speak(text4)
    } else {
      responsiveVoice.speak(text4.toString(),"US English Female");

    }


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

    map.flyTo({
        center: [centerLAT, centerLON],
        zoom: 12,
        speed: camSpeed,
        bearing: 30
        })

  }

  function scene5(){
    Tick(10000, 100000)
    scaleBoxDown('#box4', 0, 0, 0)
    scaleBoxDown('#box5', 0,0,0)
    scaleBoxDown('#box6', 500, 500, 1)
    document.getElementById("powers-sup").innerHTML="5"
    console.log('scene5 begin')

    if (p5voice){

      speaker.speak(text5)
    } else {
      responsiveVoice.speak(text5.toString(),"US English Female");

    }


    document.getElementById("play-button").removeEventListener("click", scene5);
    document.getElementById("play-button").addEventListener("click", scene6);
    var w = $('#tl-module-5').width()
    var module1width = 0
    $('#tl-inner-5').animate({
        width: 100 + '%'
    }, {
        duration: scene1duration,
        easing: 'swing',
        step: function() { // called on every step
        }
    });

    map.flyTo({
        center: [centerLAT, centerLON],
        zoom: 8,
        speed: camSpeed,
        bearing: 0
        })

  }



  function scene6(){
    Tick(100000, 1000000)
    scaleBoxDown('#box5', 0, 0, 0)
    scaleBoxDown('#box6', 0,0,0)
    scaleBoxDown('#box7', 500, 500, 1)
    document.getElementById("powers-sup").innerHTML="6"
    console.log('scene6 begin')

    if (p5voice){

      speaker.speak(text6)
    } else {
      responsiveVoice.speak(text6.toString(),"US English Female");

    }

    document.getElementById("play-button").removeEventListener("click", scene6);
    document.getElementById("play-button").addEventListener("click", scene7);
    var w = $('#tl-module-6').width()
    var module1width = 0
    $('#tl-inner-6').animate({
        width: 100 + '%'
    }, {
        duration: scene1duration,
        easing: 'swing',
        step: function() { // called on every step
        }
    });

    map.flyTo({
        center: [centerLAT, centerLON],
        zoom: 4,
        speed: camSpeed,
        bearing: 0
        })

  }

  function scene7(){
    Tick(1000000, 10000000)
    scaleBoxDown('#box6', 0, 0, 0)
    scaleBoxDown('#box7', 100, 100, .4)
    scaleBoxDown('#box8', 500, 500, 1)
    console.log('scene 7, nothing here yet')
    document.getElementById("powers-sup").innerHTML="7"
  }



  ///////////////scenes///end////////////////////
  ///////////////scenes///end////////////////////
  ///////////////scenes///end////////////////////


  function firstZoom() {
          console.log('zoom level ' +map.getZoom())
            map.flyTo({
                center: [centerLAT, centerLON],
                zoom: mapInitZoom + 2,
                speed: .4,
                bearing: 70,
                curve: 1
                })

      }


    function secondZoom() {
        map.flyTo({
            center: [centerLAT, centerLON],
            zoom: mapInitZoom + 4,
            speed: .5,
            curve: 1,
            bearing: 50,
            step: function(){
              console.log('zoom level ' +map.getZoom())
            }
          })

    }

    function thirdZoom() {
      document.getElementById("text-top-right").innerHTML="1"
      $('#house-image').addClass('house-scale-up2')
      $("#house-image").delay(1000).fadeIn(200);
      $('#begin-boxB').delay(4000).fadeIn(1000)
     $('#text-tr-box').delay(4000).fadeIn(1000)
     $("#numbers-pow").delay(4000).fadeIn(1000)

      setTimeout(function(){TweenMax.from("#studio-video", 2.6, {width:"1%", left:"50%",top:"50%",height:"1%", ease:Power2.easeInOut})
},4500)

    $("#studio-video").delay(4500).fadeIn(400);
        // TweenMax.from("#house-image", 8, {width:"1%", left:"50%",top:"50%",height:"1%", ease:Power2.easeInOut});


        map.flyTo({
            center: [-73.945360, 40.717533],
            zoom: mapInitZoom + 9,
            speed: .4,
            curve: 1,
            bearing: 0,

        })

    }








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
  console.log('timeline started')

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
        volume: .10
    }, 10000);

    var intro1 = document.getElementById('intro-1')
    var intro2 = document.getElementById('intro-2')

console.log('did audio fade')
        TweenLite.to(power, .7, {opacity: 0})
        TweenLite.to(intro1, .7, {opacity: 0})
        TweenLite.to(intro2, .7, {opacity: 0})
      tl.to(tlBlack, fadeTime, {y: -176,ease: Power1.easeOut})
        .to(playButton, fadeTime, {y: -220,ease: Power1.easeOut}, '=-.85')
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



        $("#begin-boxB").fadeOut(2000);
        console.log('tcalling scene 1')
        scene1()



}





function Tick(startVal, endVal) {
      // console.log('called Tick ' + startVal + ' to '+endVal)
  var tempStartVal = startVal;
      // console.log(tempStartVal)
  //rate per second
  // var interval = Math.abs((endVal-startVal))/9
  var interval = 9/Math.abs((endVal-startVal))




  var tickingUp = setInterval(function(){
    // console.log('tempstart is ' + tempStartVal)
    //var tempStartVal = parseInt(document.getElementById("text-top-right").innerHTML)
    if (tempStartVal < endVal){

      tempStartVal += 1
      document.getElementById("text-top-right").innerHTML=tempStartVal

    }else{
      document.getElementById("text-top-right").innerHTML=endVal
      clearInterval(tickingUp)
    }

  }, interval*1000);


  setTimeout(function(){
  //
      console.log('manually overriding value')
  //
      if (tempStartVal != endVal){
        document.getElementById("text-top-right").innerHTML=endVal
        clearInterval(tickingUp)
  //
      }
    },10000)
}




}); //onLoad done
