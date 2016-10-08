places = [
{
"name": "Blue Stove",
"zoom": 2,
"coordinates": [ -73.945032,40.917437]
},

{
"name": "McCarren Park Track",
"zoom": 2,
"coordinates": [ -73.951142,40.719822]
},
{
"name": "Night of Joy",
"zoom": 2,
"coordinates": [ -73.949972,40.717000]
},


]

function getMarkersfromMarkersPage(){
        var centerLON = 40.717799
        var centerLAT = -73.945360

        geojson = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "message": "Foo",
                        "iconSize": [50, 50]
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates":
                            [centerLAT,centerLON]

                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "message": "Bar",
                        "iconSize": [50, 50]
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates":
                            places[1].coordinates

                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "message": "Baz",
                        "iconSize": [50, 50]
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates":
                            places[2].coordinates

                    }
                }
            ]
        };



}



function loadMarkerImages(){



        geojson.features.forEach(function(marker) {
            // create a DOM element for the marker
            var el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
            el.style.width = marker.properties.iconSize[0] + 'px';
            el.style.height = marker.properties.iconSize[1] + 'px';

            el.addEventListener('click', function() {
                window.alert(marker.properties.message);
            });

            // add marker to map
            new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });
        }