function howManyFrogJump(x,y,k) {
    var total = x;
    var jumlahTempuh = 0;
    var jumlahLompatan = 0;
    var isLoop = true;

    while(isLoop) {
        total += k
        jumlahLompatan++;
        jumlahTempuh = y % total;

        if(jumlahTempuh === y || jumlahTempuh >= y) {
            isLoop = false;
        }
    }

    return jumlahLompatan
}

console.log(howManyFrogJump(10,85,30));
// Output : 3