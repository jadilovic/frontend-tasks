"use strict";

var searchElement = document.querySelector('.city-search');
var searchBox = new google.maps.places.SearchBox(searchElement);
searchBox.addListener('places_changed', function () {
  var place = searchBox.getPlaces()[0];

  if (!place) {
    return;
  }

  fetch('/weather', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name: place.name
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.message) {
      console.log(data.message);
    } else {
      console.log(data);
      setWeatherData(data);
    }

    searchElement.textContent = '';
  });
});
var conditionsElement = document.querySelector('.status');
var locationElement = document.querySelector('.location');
var windElement = document.querySelector('#wind');
var temperatureElement = document.querySelector('#temperature');
var precipitationElement = document.querySelector('#precipitation');

var setWeatherData = function setWeatherData(data) {
  conditionsElement.textContent = data.currentConditions.conditions;
  locationElement.textContent = data.resolvedAddress;
  windElement.textContent = data.currentConditions.windspeed;
  temperatureElement.textContent = data.currentConditions.temp;
  precipitationElement.textContent = data.currentConditions.precip;
};