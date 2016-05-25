// Code for the main app page (locations list).

// This is sample code to demonstrate navigation.
// You need not use it for final app.

function viewLocation(locationName)
{
    // Save the desired location to local storage
    localStorage.setItem(APP_PREFIX + "-selectedLocation", locationName); 
    // And load the view location page.
    location.href = 'viewlocation.html';
}


for (i=0;i <= LocationWeatherCache.length();i++){
    //i ripped the example icons and I'm adding them to the list but with the values changing based on what entry it's for
    //not really sure how the locationWeatherCache actually works but i think its this
    var locationObject = LocationWeatherCache.locationAtIndex(i)
    var addList = ""
    //it should change the ids of the buttons as well so we can access them later 
    //also the whole entry has an id so it can be removed (not sure how well that will work)
    //might be better to make this a function called update or something that first clears the list
    //but the id is still good in case it needs an update or something (the original didnt include it)
    addList +='<li class="mdl-list__item mdl-list__item--two-line" id="'+i+'" onclick="viewLocation(' + i + ');">\
                <span class="mdl-list__item-primary-content">\
                  <img class="mdl-list__item-icon" id="icon' + i + '" src="images/loading.png" class="list-avatar" />+
                  //not sure how well this will work but ideally it accesses the location object from the cache
                  '<span>'+ locationObject.nickname +'</span>\
                  <span id="weather'+ i + '" class="mdl-list__item-sub-title">Weather summary</span>\
                </span>\
              </li>'
    Document.getElementById('locationList').appendChild(addList)
}