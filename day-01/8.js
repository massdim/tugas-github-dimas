function deretNegation(k) {
    var n = -1;
    var temp = ""

    for(let i = 0; i < k; i++) {
        if (i % 2 === 0) {
            temp += n
            if (i !== k - 1) { temp += "," }
            n = n * -1 + 1
        } else {
            n = n - 1
            temp += n
            if (i !== k - 1) { temp += "," }
            n = (n + 1) * -1 
        }
    }

    return temp;
}

console.log(deretNegation(25));
// output : -1,1,-2,2-3,3,-4,4,-5,5,-6,6,-7,7-8,8,-9,9,-10,10-11,11,-12,12,-13