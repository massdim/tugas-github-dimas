function countValley(road) {
    var number = 0;
    var gunung = 0;

    for(let i = 0; i < road.length; i++) {
        if(road[i] === "U") {
            number++;
        } else {
            number--;
        }

        if(number === 1) {
            gunung++;
        }
    }
    console.log(gunung + " gunung");
}

countValley("UDDDUDUU")


