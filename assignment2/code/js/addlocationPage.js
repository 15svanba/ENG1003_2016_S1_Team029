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
        });
      }
function currentLocation(){
    var infoWindow = new google.maps.InfoWindow({map: map});
    if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}