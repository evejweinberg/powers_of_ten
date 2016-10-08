var map;
var access_token = 'sk.eyJ1IjoiZXZlandlaW5iZXJnIiwiYSI6ImNpdHJoaGtkZTAzYWkyeW1zY2I0eTIzNW4ifQ.1OWNhtS3ThvxwDnHohiqCQ'
var public_access_token = 'pk.eyJ1IjoiZXZlandlaW5iZXJnIiwiYSI6IjRhMjg1Yzk4MjM5ZDJhMjI1NTg4YzVmYWE3ZTc1NDY5In0.rAbzx1cyivJzsHv2pxRh2Q'
var url = 'https://api.mapbox.com/{endpoint}?access_token='+ access_token

// Create a new blank array for all the listing markers.
var markers = [];
var mapZoom = 4;



// mapboxgl.accessToken = public_access_token;

var mapB = L.map('map', {
	center: [51.505, -0.09],
	zoom: 13,
  container: 'map'
});

L.mapbox.accessToken = public_access_token;
L.mapbox.map('map-two', 'mapbox.dc-markers', {
  // the options here prevent mouse wheel or trackpad scrolling
  // and restrict the zooms to zoom levels 14 through 18
  scrollWheelZoom: false,
  maxZoom: 14,
  minZoom: 10
}).setView([38.8906, -77.01313], 12);


// This adds the map to your page
// var map = new mapboxgl.Map({
//   // container id specified in the HTML
//   container: 'map',
//   // style URL
//   style: 'mapbox://styles/mapbox/light-v9',
//   // initial position in [long, lat] format
//   center: [40.717533, -73.945360],
//   // initial zoom
//   zoom: 14
// });
//
//
//   var locations = [
//     {title: 'HOME', location: {lat: 40.717533, lng: -73.945360}},
//     {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
//     {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
//     {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
//     {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
//     {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
//   ];
//
//   var stores = {
//     /* data from sweetgreen.geojson, downloaded above */
//   };
//   map.on('load', function(e) {
//   // Add the stores data as a source
//   map.addSource('places', {
//     type: 'geojson',
//     data: stores
//   });
//
//   // Add a layer to the map with styling rules to render the source
//   map.addLayer({
//     id: 'locations',
//     type: 'symbol',
//     source: 'places',
//     layout: {
//       'icon-image': 'restaurant-15',
//       'icon-allow-overlap': true
//     }
//   });
// });
