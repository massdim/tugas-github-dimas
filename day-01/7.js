function deretSatu(k) {
    var temp = ""
    
    for(let i = 0; i < k; i++) {
        for(let j = 0; j < i + 1; j++) {
            temp += 1
        }
        if (i < k - 1) { temp += "," }
    }

    return temp;
}

console.log(deretSatu(5));