// Code for the Add Location page.
//Code for Initialising Map
var map;
function initMap()
{
        map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: -34.397, lng: 150.644}
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('addressInput').addEventListener('blur', function() {
          geocodeAddress(geocoder, map);
        });
}
//The Geocoding Function
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
            //alert(JSON.stringify(results[0].geometry.location));
        });
      }
