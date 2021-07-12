function cariKata(param1, param2) {
    var status = false;

    for(let i = 0; i <= param1.length; i++) {
        if (param1[i] === param2) { 
            status = true; 
            break; 
        }
    }

    return status;
}

console.log(cariKata("aku suka javascript", "k")); // true
console.log(cariKata("aku suka javascript", "z")); // false