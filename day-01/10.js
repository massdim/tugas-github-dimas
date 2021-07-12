function isPalindrome(s) {
    var result = true;
    var string = s.toLowerCase();
    var no = s.length - 1;

    for(let i = 0; i < string.length; i++) {
        if (string[i] !== string[no]) {
            result = false;
        }
        no--;
    }

    return result;
}

console.log(isPalindrome("Kasur ini ruSak"));
// Output : true