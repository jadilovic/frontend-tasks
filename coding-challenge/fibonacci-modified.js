function fibonacciModified(t1, t2, n) {
	// Write your code here
	var i;
	var fib = [0, 1]; // Initialize array!

	for (i = 2; i <= 10; i++) {
		// Next fibonacci number = previous + one before previous
		// Translated to JavaScript:
		fib[i] = fib[i - 2] + fib[i - 1] + (fib[i - 1] ^ 2);
	}
	return fib;
}

console.log(fibonacciModified(0, 1, 5));
