function howManyWord(s){
    var space = 0;
    var word = 0;

    for(let i = 0; i <= s.length; i++) {
        if (s[i] === " ") {  
            if(s[i-1] !== " ") { 
                space++; 
            }
        }
    }

    if (space > 0) { 
        word = space + 1;
    }

    console.log(word);
}

howManyWord("aku suka javascript fullstack")