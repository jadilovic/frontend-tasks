// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
	let e = 100;
	// for (let i = 0; i < c.length; i += k) {
	// 	console.log(i);
	// 	if (i + k > c.length) {
	// 		i = c.length - (i + k);
	// 		console.log('test : ', i);
	// 	}
	// 	e -= 1;
	// 	const jump = c[(i + k) % c.length];
	// 	if (jump === 1) {
	// 		e -= 2;
	// 	}
	// 	if (i === 0 && e !== 99) {
	// 		break;
	// 	}
	// }

	let count = 0;
	while (count < c.length) {
		if (count + k > c.length) {
			count = Math.abs(c.length - (count + k));
		} else {
			count += k;
		}
		e -= 1;
		const jump = c[(count + k) % c.length];
		if (jump === 1) {
			e -= 2;
		}
		if (count === 0 && e !== 99) {
			break;
		}
	}
	return e;
}
console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3));
