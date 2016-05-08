// Code for the Add Location page.
var map;
function initMap() 
{
    var myLatLng = {lat: 49.837982, lng: -18.808594};
    map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 17
    });
};
