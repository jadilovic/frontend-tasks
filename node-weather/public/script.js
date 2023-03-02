const searchElement = document.querySelector('.city-search');
const searchBox = new google.maps.places.SearchBox(searchElement);

searchBox.addListener('places_changed', () => {
	const place = searchBox.getPlaces()[0];
	if (place?.types.includes('locality')) {
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
					setNotFoundText(data.message);
				} else {
					console.log(data);
					setWeatherData(data);
					setNotFoundText('');
				}
			});
	} else {
		setNotFoundText('No such place exists');
	}
});

const icon = new Skycons({ color: '#222' });
const conditionsElement = document.querySelector('.status');
const locationElement = document.querySelector('.location');
const windElement = document.querySelector('#wind');
const temperatureElement = document.querySelector('#temperature');
const precipitationElement = document.querySelector('#precipitation');
const notFoundElement = document.querySelector('.not-found');
icon.set('icon', 'clear-day');
icon.play();

const setWeatherData = (data) => {
	conditionsElement.textContent = data.currentConditions.conditions;
	locationElement.textContent = data.resolvedAddress;
	windElement.textContent = data.currentConditions.windspeed;
	temperatureElement.textContent = data.currentConditions.temp;
	precipitationElement.textContent = `${data.currentConditions.precip * 100}%`;
	icon.set('icon', data.currentConditions.icon);
	icon.play();
};

const setNotFoundText = (error) => {
	notFoundElement.textContent = error;
	notFoundElement.style.color = 'red';
};

const createSubscribers = async () => {
	console.log('testing ');
	for (let index = 0; index < 10; index++) {
		const subscriber = {
			name: 'name' + index,
			subscribedToChannel: '000' + index,
		};
		const newSubscriber = await fetch('http://localhost:5000/subscribers', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(subscriber),
		});
		console.log(newSubscriber);
	}
};

// createSubscribers();
