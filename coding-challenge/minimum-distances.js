/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
	// Write your code here
	const distances = {};
	for (let i = 0; i < a.length; i++) {
		if (distances[a[i]]) {
			distances[a[i]] = {
				...distances[a[i]],
				end: i,
			};
		} else {
			distances[a[i]] = {
				start: i,
			};
		}
	}
	const distancesArr = Object.values(distances)
		.map((item) => {
			if (Object.keys(item).length > 1) {
				return item.end - item.start;
			}
		})
		.filter((item) => item !== undefined);
	if (distancesArr.length < 1) {
		return -1;
	}
	return Math.min(...distancesArr);
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
