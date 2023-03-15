function dayOfProgrammer(year) {
	// Write your code here
	let day = 0;
	if (year === 1918) {
		return '26.09.1918';
	}
	if (year < 1918) {
		day = year % 4 === 0 ? 12 : 13;
	} else {
		day = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ? 12 : 13;
	}
	return `${day}.09.${year}`;
}

console.log(dayOfProgrammer(2017));
