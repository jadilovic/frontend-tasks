function timeConversion(s) {
	const timeArr = s.split(':');
	let hours = parseInt(timeArr[0]);
	const minutes = timeArr[1];
	const seconds = timeArr[2].substr(0, 2);
	const timeOfDay = timeArr[2].substr(2, 2);
	if (timeOfDay === 'PM') {
		hours = hours === 12 ? hours : hours + 12;
	} else {
		hours = hours === 12 ? 0 : hours;
		hours = hours < 10 ? `0${hours}` : hours;
	}
	return `${hours}:${minutes}:${seconds}`;
}

console.log(timeConversion('01:23:33PM'));
