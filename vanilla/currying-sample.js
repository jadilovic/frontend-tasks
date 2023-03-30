const sum = (a) => {
	return (b) => {
		return (c) => {
			return a + b + c;
		};
	};
};

console.log(sum(3)(4)(5));

const evaluate = (operation) => {
	return (num1) => {
		return (num2) => {
			switch (operation) {
				case 'sum':
					return num1 + num2;
				case 'multiply':
					return num1 * num2;
				case 'subtract':
					return num1 - num2;
				case 'divide':
					return num1 / num2;
				default:
					return 0;
			}
		};
	};
};

console.log(evaluate('multiply')(5)(4));
console.log(evaluate('subtract')(5)(4));
console.log(evaluate('divide')(5)(4));
console.log(evaluate('sum')(5)(4));

console.log('-------------------------------------------------');

const add = (a) => {
	return (b) => (b ? add(a + b) : a);
};

console.log(add(3)(4)(5)(9)());

const partial = (a) => {
	return (b, c) => {
		return a + b + c;
	};
};

console.log(partial(1)(2, 3));
