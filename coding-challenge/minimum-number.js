/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
	// Return the minimum number of characters to make the password strong
	const numbers = '0123456789';
	const lower_case = 'abcdefghijklmnopqrstuvwxyz';
	const upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const special_characters = '!@#$%^&*()-+';

	const checking = (criteria) => {
		for (let i = 0; i < criteria.length; i++) {
			if (password.includes(criteria[i])) {
				return true;
			}
		}
		return false;
	};
	const criteria = [
		checking(numbers),
		checking(lower_case),
		checking(upper_case),
		checking(special_characters),
	].filter((item) => !item);

	let diff = password.length < 6 ? 6 - password.length : 0;
	console.log(criteria.length, diff);
	return criteria.length > diff ? criteria.length : diff;
}

console.log(minimumNumber(3, '470'));
