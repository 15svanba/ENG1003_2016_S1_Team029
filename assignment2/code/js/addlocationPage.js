// Code for the Add Location page.
var map;
function initMap()
{
        map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {lat: -34.397, lng: 150.644}
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('addressInput').addEventListener('input', function() {
          geocodeAddress(geocoder, map);
        });
}

function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('addressInput').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK)
          {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } 
            else
          {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }