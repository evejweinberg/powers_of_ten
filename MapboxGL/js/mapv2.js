
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
    document.getElementById("begin-box").addEventListener("click", loadTimeline);
    document.getElementById("play-button").addEventListener("click", scene2);




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
        zoom: mapInitZoom // starting zoom
    });



    map.on('load', function() {
        TweenLite.fromTo(power, 2, {opacity: 0,y: 200,x: -120}, {opacity: 100,y: -160,x: -120,ease: Expo.easeOut,onStart: firstZoom})
        TweenLite.fromTo(intro1, 4, {x: -220,opacity: 0,y: -60}, {y: -160,opacity: 100,x: -220,ease: Expo.easeOut,delay: 4,onStart: secondZoom})
        TweenLite.fromTo(intro2, 4, {x: -220,opacity: 0,y: -100}, {y: -160,opacity: 100,x: -220,ease: Power4.easeOut,delay: 7,onStart: thirdZoom})

        // geojson.features.forEach(function(marker,i) {
        //   console.log(marker)
        //     // create a DOM element for the marker
        //     var el = document.createElement('div');
        //     el.className = 'marker';
        //     el.style.backgroundImage = 'url(images/marker_' + i+'.png';
        //     el.style.width = marker.properties.iconSize[0] + 'px';
        //     el.style.height = marker.properties.iconSize[1] + 'px';
        //
        //     el.addEventListener('click', function() {
        //         window.alert(marker.properties.message);
        //     });
        //
        //     // add marker to map
        //     new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
        //         .setLngLat(marker.geometry.coordinates)
        //         .addTo(map);
        //     // new mapboxgl.DragRotateHandler(map: map,options:{pitchWithRotate :true}).addTo(map);
        // });


//         var index = supercluster({radius: 40, maxZoom: 16}).load(geojson.features);
//
// // get GeoJSON clusters given a bounding box and zoom
// var clusters = index.getClusters([-180, -85, 180, 85], 2);
//
// // get a JSON vector tile in the same format as GeoJSON-VT
// var tile = index.getTile(7, 523, 125);

// map.addSource("geojson-marker",{
//     "type": "geojson",
//     // "data": "https://www.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
//
//     "data": {
//
//       //this is an inline geojson or it can be a URL
//         "type": "Feature",
//         "geometry": {
//             "type": "Point",
//             "coordinates": [centerLAT, centerLON]
//         },
//         "properties": {
//             "title": "Mapbox DC",
//             "marker-symbol": "monument"
//         }
//
//
//   },
//     "cluster": true,
//     "clusterRadius": 50
//
//
// });
//
// map.addLayer({
//         "id": "unclustered-points",
//         "type": "symbol",
//         "source": "geojson-marker",
//         "filter": ["!has", "point_count"],
//         "layout": {
//             "icon-image": "marker-15"
//         }
//     });
//
//     layers.forEach(function (layer, i) {
//         map.addLayer({
//             "id": "cluster-" + i,
//             "type": "circle",
//             "source": "geojson-marker",
//             "paint": {
//                 "circle-color": layer[1],
//                 "circle-radius": 18
//             },
//             "filter": i === 0 ?
//                 [">=", "point_count", layer[0]] :
//                 ["all",
//                     [">=", "point_count", layer[0]],
//                     ["<", "point_count", layers[i - 1][0]]]
//         });
//     });
//
//     // Add a layer for the clusters' count labels
//     map.addLayer({
//         "id": "cluster-count",
//         "type": "symbol",
//         "source": "geojson-marker",
//         "layout": {
//             "text-field": "{point_count}",
//             "text-font": [
//                 "DIN Offc Pro Medium",
//                 "Arial Unicode MS Bold"
//             ],
//             "text-size": 12
//         }
//     });



    //     map.addSource('overlay', {
    //        type: 'image',
    //        url: 'images/house.png',
    //        coordinates: [
    //            [-74.54, 40.18],
    //            [-73.52, 40.18],
    //            [-73.52, 40.17],
    //            [-74.54, 40.17]
    //        ]
    // });
    //
    //     map.addLayer({
    //     'id': 'overlay',
    //     'source': 'overlay',
    //     'type': 'raster',
    //     'paint': {'raster-opacity': 0.85}
    // });





    });



    ///////////////scenes///////////////////////
  ///////////////scenes///////////////////////
  ///////////////scenes///////////////////////

  function scene1(){
    document.getElementById("text-top-right").innerHTML="10"

    // destinationMeter = 10
    // steps = Math.abs((currentMeter-destinationMeter))/scene1duration
    // Tick()
    speaker.speak(text1)
    //scale video up with tweenLite
    setTimeout(function(){TweenMax.to("#studio-video", 4, {width:"1%", left:"50%",top:"50%",height:"1%", ease:Power2.easeInOut});},1000)
    $("#studio-video").delay(4000).fadeOut(2000);
    $('#house-image').addClass('house-scene1')
    // TweenMax.to("#house-image", 4, {width:"90%",height:"90%", ease:Power2.easeInOut})



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
    document.getElementById("text-top-right").innerHTML="100"
    // $('#house-image').removeClass('house-scene1')
    $('#house-image').addClass('house-scene2')

    // setTimeout(function(){TweenMax.to("#house-image", 4, {width:"1%", left:"50%",top:"50%",height:"1%", ease:Power2.easeInOut});},1000)
    $("#house-image").delay(2000).fadeOut(1000);
    // destinationMeter = 100
    // steps = Math.abs((currentMeter-destinationMeter))/scene1duration
    // Tick()
    // document.getElementById("text-top-right").innerHTML="100"
    // console.log('scene2 begin')
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
        step: function() {
          if (currentMeter<100){
            console.log('yup')

            // document.getElementById("text-top-right").innerHTML=currentMeter
            currentMeter++
          }
        }
    });

    map.flyTo({
        center: [centerLAT, centerLON],
        zoom: 17,
        speed: camSpeed,
        })


  }



  function scene3(){
    // destinationMeter = 1000
    // steps = Math.abs((currentMeter-destinationMeter))/scene1duration
    // Tick()
    document.getElementById("text-top-right").innerHTML="1,000"
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

    map.flyTo({
        center: [centerLAT, centerLON],
        zoom: 15,
        speed: camSpeed,
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

            el.addEventListener('click', function() {
                window.alert(marker.properties.message);
            });

            // add marker to map
            new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
            // new mapboxgl.DragRotateHandler(map: map,options:{pitchWithRotate :true}).addTo(map);
        });
  }

  function scene4(){
    document.getElementById("text-top-right").innerHTML="10,000"
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

    map.flyTo({
        center: [centerLAT, centerLON],
        zoom: 12,
        speed: camSpeed,
        bearing: 30
        })

  }

  function scene5(){
    document.getElementById("text-top-right").innerHTML="100,000"
    console.log('scene5 begin')
    speaker.speak(text5)
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
        zoom: 10,
        speed: camSpeed,
        bearing: 40
        })

  }



  function scene6(){
    document.getElementById("text-top-right").innerHTML="1,000,000"
    console.log('scene6 begin')
    speaker.speak(text6)
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
        zoom: 8,
        speed: camSpeed,
        bearing: 50
        })

  }



  ///////////////scenes///end////////////////////
  ///////////////scenes///end////////////////////
  ///////////////scenes///end////////////////////


  function firstZoom() {
    // currentMeter = 100000
    // destinationMeter = 10000
    // steps = Math.abs((currentMeter-destinationMeter))/10
    // Tick()
    document.getElementById("text-top-right").innerHTML="100,000"

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

      // destinationMeter = 100
      // steps = Math.abs((currentMeter-destinationMeter))/10
      // Tick()
      document.getElementById("text-top-right").innerHTML="10,000"

        console.log('zoom level ' +map.getZoom())

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
      // console.log('current meter is '+ currentMeter)
      // destinationMeter = 10
      // steps = Math.abs((currentMeter-destinationMeter))/10
      // console.log(steps)
      // Tick()
      zoomingIn = false
      document.getElementById("text-top-right").innerHTML="1"
        // console.log('zoom level ' +map.getZoom())
        //scale house up with css
        // $('#house-image').addClass('house-scale-up')
        $('#house-image').addClass('house-scale-up2')

      $("#house-image").delay(1000).fadeIn(200);
      $('#begin-box').delay(4000).fadeIn(1000)
      setTimeout(function(){TweenMax.from("#studio-video", 4.5, {width:"1%", left:"50%",top:"50%",height:"1%", ease:Power2.easeInOut})
},2000)

    $("#studio-video").delay(1000).fadeIn(2000);
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
        volume: 0
    }, 10000);

    var intro1 = document.getElementById('intro-1')
    var intro2 = document.getElementById('intro-2')

console.log('did audio fade')
        TweenLite.to(power, .7, {opacity: 0})
        TweenLite.to(intro1, .7, {opacity: 0})
        TweenLite.to(intro2, .7, {opacity: 0})
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
        console.log('tcalling scene 1')
        scene1()



}



function changeMeters(currentMeter) {
  console.log(currentMeter + ' passed to changeMeter()')
  document.getElementById("text-top-right").innerHTML=currentMeter


}


function Tick(currentMeter, destinationMeter) {
  this.currentMeter = currentMeter
  this.destinationMeter = destinationMeter
  if (this.currentMeter == this.destinationMeter) {
        console.log('reached target')
        clearInterval(tickingUp)
return;
}
    if (zoomingIn){

        this.currentMeter -= 10;
      } else {
        this.currentMeter += 10;
    }
    //change the text
  changeMeters(this.currentMeter)
  //call tick
  var tickingUp = setInterval(Tick, 2000);
  return currentMeter
  console.log(currentMeter)
}




}); //onLoad done
