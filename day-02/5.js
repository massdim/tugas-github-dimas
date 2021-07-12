let numbers = [1, 2, 3, 4, 5];

function showElement(param) {
    for(let i = 0; i < numbers.length; i++) {
        var temp = numbers[i];
    
        for(let j = i + 1; j < numbers.length; j++) {
            if (temp + numbers[j] === param) {
                console.log(temp + " & " + numbers[j]);
            }
        }
    }
}

showElement(9)

