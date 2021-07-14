function stringToArray(str) {
  const arr = [];
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      arr.push(temp);
      temp = "";
    } else if (i < str.length - 1) {
      temp += str[i];
    } else {
      temp += str[i];
      arr.push(temp);
      temp = "";
    }
  }

  return arr;
}

function uniqueDuplicateFinder(str) {
  const arr = stringToArray(str);
  let duplicateWord = [];
  const newArr = [];
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let isDuplicate = false;

    newArr.forEach((x) => {
      if (word.toLowerCase() === x.toLowerCase()) {
        isDuplicate = true;
        duplicateWord.push(x.toLowerCase());
      }
    });

    if (!isDuplicate) newArr.push(word);
  }

  newArr.forEach((x) => {
    duplicateWord.forEach((z) => {
      if (z.toLowerCase() !== x.toLowerCase()) {
        unique.push(x.toLowerCase());
      }
    });
  });

  return {
    unique,
    duplicate: duplicateWord,
  };
}

console.log(uniqueDuplicateFinder("saya dan SAYA suka makan nasi"));
