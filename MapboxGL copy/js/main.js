(function($){
L.mapbox.accessToken = 'pk.eyJ1IjoiZXZlandlaW5iZXJnIiwiYSI6IjRhMjg1Yzk4MjM5ZDJhMjI1NTg4YzVmYWE3ZTc1NDY5In0.rAbzx1cyivJzsHv2pxRh2Q';
// Here we don't use the second argument to map, since that would automatically
// load in non-clustered markers from the layer. Instead we add just the
// backing tileLayer, and then use the featureLayer only for its data.
var map = L.mapbox.map('map')
    .setView([40.717533, -73.945360], 13)
    .addLayer(L.mapbox.tileLayer('mapbox.streets'));


// Since featureLayer is an asynchronous method, we use the `.on('ready'`
// call to only use its marker data once we know it is actually loaded.
L.mapbox.featureLayer('examples.map-h61e8o8e').on('ready', function(e) {
    // The clusterGroup gets each marker in the group added to it
    // once loaded, and then is added to the map
    var clusterGroup = new L.MarkerClusterGroup({
      // This option sets custom options for the L.Polygon that's drawn when
      // the user hovers over the icon for a marker cluster. The options
      // given here are taken from the L.Path options:
      // http://leafletjs.com/reference.html#path
      polygonOptions: {
        fillColor: '#3887be',
        color: '#3887be',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.5
      }
    });
    e.target.eachLayer(function(layer) {
      clusterGroup.addLayer(layer);
    });
    map.addLayer(clusterGroup);

});

// Use styleLayer to add a Mapbox style created in Mapbox Studio
L.mapbox.styleLayer('mapbox://styles/evejweinberg/citway9ip004a2inz70zbgv1r').addTo(map);
// L.mapbox.zoomControl("false").addTo(map)

})(jQuery);
