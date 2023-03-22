/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
	// Write your code here
	// function priceComparison(itemCost1, itemCost2) {
	// 	if (itemCost1 < itemCost2 + z) {
	// 		return itemCost1;
	// 	} else {
	// 		return itemCost2 + z;
	// 	}
	// }

	// const cheapestBlack = priceComparison(bc, wc);
	// const cheapestWhite = priceComparison(wc, bc);
	// return cheapestBlack * b + cheapestWhite * w;

	// if (bc + z < wc && wc + z < wc) {
	// 	return b * (wc + z) + w * (bc + z);
	// } else if (bc + z < wc) {
	// 	return b * bc + w * (bc + z);
	// } else if (wc + z < bc) {
	// 	return b * (wc + z) + w * wc;
	// } else {
	// 	return b * bc + w * wc;
	// }

	if (bc + z < wc) {
		return (bc + z) * w + bc * b;
	} else if (wc + z < bc) {
		return (wc + z) * b + wc * w;
	} else {
		return b * bc + w * wc;
	}
}

console.log(taumBday(3, 6, 9, 1, 1));
