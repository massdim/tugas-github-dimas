function isCharsUnique(chars) {
    var result = true;

    for(let i = 0; i < chars.length; i++) {
        var temp = chars[i];

        for(let j = i + 1; j < chars.length; j++) {
            if(temp === chars[j]) {
                result = false;
                break;
            }
        }
    }

    return console.log(result);
}

isCharsUnique('abcdefg');//return true
isCharsUnique('abcdefga'); //return false