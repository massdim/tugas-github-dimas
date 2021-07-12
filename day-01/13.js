function maxWordLength(string) {
    var arr = [];
    var temp = "";

    for(let i = 0; i < string.length; i++) {
        if(string[i] === " ") {
            arr.push(temp);
            temp = "";
        } else if (i === string.length - 1) {
            temp += string[i];
            arr.push(temp);
            temp = "";
        } else {
            temp += string[i];
        }
    }

    var indexArray =  0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > arr[indexArray].length) {
            indexArray = i
        }
    }
    return arr[indexArray];
}

console.log(maxWordLength("aku suka bootcamp sentul city"));
// Output :
// bootcamp