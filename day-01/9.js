function randomPosition(k) {
    var temp = "";

    for(let i = 0; i < k; i++) {
        var min = 100;
        var max = 900;

        var rand = Math.floor(Math.random() * (max - min + 1) + min)
        rand = rand.toString();
        
        temp += rand;

        if(i < k - 1) temp += ","
    }

    return temp;
}
console.log(randomPosition(7));
// output : 117,172,721,777...