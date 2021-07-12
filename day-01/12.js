function showGenap(string) {
    var arr = string.split("")
    var temp = ""

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            temp += arr[i];
            if(i + 1 !== arr.length - 1) {
                temp += ","
            }
        }
    }
    return temp;
}

console.log(showGenap("234567"));
// Output :
// 2,4,6