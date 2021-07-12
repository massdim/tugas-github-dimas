function deretRam(k) {
    var ram = 1; 
    var temp = ""

    for(let i = 0; i < k; i++) {
        temp += ram; 
        if (i < k - 1) { temp += "," } 
        ram = ram * 2; 
    }

    return temp;
}

console.log(deretRam(7));