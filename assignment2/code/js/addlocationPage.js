// Code for the Add Location page.
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
            postionDetails=results[0]// sets a global variable that is equal to the first position in the results array
          } 
            else
          {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
function saveLocation()
{
    
    var nicknameInputRef = document.getElementById("nicknameInput");// Gets Value of the Nickname Text Field
    var nickname = ""// nickname variable that will be used in the add location method
    var latitiude = postionDetails.geometry.location.lat();//Latitude of the marker placed
    var longitude = postionDetails.geometry.location.lng();//Longitude of themarker placed
    if (nicknameInputRef.value === "")
        {
            nickname = postionDetails.address_components[0].long_name;// Makes the nickname equal to the formmated address of the input if there is no nickname input
        }
    else
        {
            nickname = nicknameInputRef.value;// Makes nickname equal to the nickname input
        }
    WeatherInstance.addLocation(latitiude,longitude,nickname);// Runs add location method in the Cache class
    console.log(latitiude);
    console.log(longitude);
    console.log(nickname);
    saveLocations();//runs the saveLocations function inside the LocationWeatheCache.js
    location.href="index.html"//returns user to the locations list 


}
