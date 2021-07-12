function sum(n){
    var bilangan = n.toString();
    var result = "";

    for(let i = n.toString().length - 1; i >= 0; i--) {
        result += bilangan[i];
    }
    
    return result
}

console.log(sum(1234));