/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
	// Write your code here
	// var str = num.toString();
	var numLen = s.length;
	var firstNum = 0;
	var incre = 0;
	var testStr = '';

	if (numLen <= 1) {
		console.log('NO');
	} else {
		for (var i = 1; i <= numLen / 2; i++) {
			firstNum = parseInt(s.substr(0, i));
			testStr = firstNum.toString();
			incre = firstNum;

			while (testStr.length < numLen && s != testStr) {
				incre++;
				testStr += incre.toString();
			}

			if (testStr == s) {
				break;
			}
		}

		testStr == s ? console.log('YES ' + firstNum) : console.log('NO');
	}
}

console.log(separateNumbers('99100'));
