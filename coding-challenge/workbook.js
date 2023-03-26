/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */

function workbook(n, k, arr) {
	// Write your code here
	const bookArr = [];
	for (let i = 0; i < arr.length; i++) {
		let page = [];
		const recursion = (value) => {
			page.push(value);
			if (page.length === k) {
				bookArr.push(page);
				page = [];
			}
			if (value < arr[i]) {
				recursion(++value);
			}
		};
		recursion(1);
		if (page.length > 0) {
			bookArr.push(page);
			page = [];
		}
	}
	const special = bookArr.filter((item, index) => item.includes(index + 1));
	return special.length;
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));
