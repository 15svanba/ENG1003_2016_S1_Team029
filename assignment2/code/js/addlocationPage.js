// Code for the Add Location page.
var map;
function initMap() 
{
    var myLatLng = {lat: -37.9120467, lng: 145.1343136};
    map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 17
    });
};
