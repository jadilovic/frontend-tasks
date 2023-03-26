// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
	// const newArr = c.sort((a, b) => a - b);
	// let cCount = 0;
	// let distance = 0;
	// let maxDistance = 0;
	// for (let i = 0; i < n; i++) {
	// 	distance++;
	// 	if (i === newArr[cCount]) {
	// 		console.log(distance);
	// 		distance = Math.floor(distance / 2);
	// 		if (distance > maxDistance) {
	// 			maxDistance = distance;
	// 		}
	// 		distance = 0;
	// 		cCount++;
	// 	}
	// }
	// return maxDistance > distance ? maxDistance : distance;
	var max = 0;
	for (var i = 0; i < n; i++) {
		var value = Math.min(...c.map((v) => Math.abs(i - v)));
		if (value > max) max = value;
	}
	return max;
}

console.log(
	flatlandSpaceStations(
		95,
		[68, 81, 46, 54, 30, 11, 19, 23, 22, 12, 38, 91, 48, 75, 26, 86, 29, 83, 62]
	)
);
