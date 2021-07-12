function factorial(n) {
    var no = 1;
    var number = 1;

	 while(no <= n) {
        number = number * no
		no++;
	}

	return number;
}

console.log(factorial(5))
// Output : 120