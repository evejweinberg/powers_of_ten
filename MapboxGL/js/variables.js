var centerLON = 40.717799
var centerLAT = -73.945360
var startingVol = .15
var audioElement = document.getElementById('myTune');
var map, mapStyle;
var mapInitZoom = 8
var currentScene = 1
var scene1duration = 10000
var camSpeed = .07
var changeTextscene1;
var currentMeter, destinationMeter, steps;
var zoomingIn = true;
var places, geojson;
