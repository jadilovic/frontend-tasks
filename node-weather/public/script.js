const searchElement = document.querySelector('.city-search');
const searchBox = new google.maps.places.SearchBox(searchElement);

searchBox.addListener('places_changed', () => {
	const place = searchBox.getPlaces()[0];
	if (place?.types.includes('locality')) {
		console.log('PLACE : ', place);
		fetch('/weather', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				name: place.name,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.message) {
					console.log(data.message);
				} else {
					console.log(data);
					setWeatherData(data);
				}
				searchElement.reset();
			});
	} else {
		console.log('No such place exists');
	}
});

const conditionsElement = document.querySelector('.status');
const locationElement = document.querySelector('.location');
const windElement = document.querySelector('#wind');
const temperatureElement = document.querySelector('#temperature');
const precipitationElement = document.querySelector('#precipitation');

const setWeatherData = (data) => {
	conditionsElement.textContent = data.currentConditions.conditions;
	locationElement.textContent = data.resolvedAddress;
	windElement.textContent = data.currentConditions.windspeed;
	temperatureElement.textContent = data.currentConditions.temp;
	precipitationElement.textContent = data.currentConditions.precip;
};
