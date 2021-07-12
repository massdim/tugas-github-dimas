function sum(n) {
    var bilangan = n;
    var total = 0;

    for(let i = 0; i < n.toString().length; i++) {
        total += bilangan % 10;
        bilangan = Math.floor(bilangan / 10);
    }

    return total
}

console.log(sum(3456));