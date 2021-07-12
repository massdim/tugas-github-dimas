let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];

let newFruits = [...fruits];
// a).
newFruits.push("Anggur", "Banana", "Sirsak");
console.log("Jawaban A");
console.log(newFruits);

// b).
newFruits.pop();
console.log("Jawaban B");
console.log(newFruits);

// c).
newFruits.splice(2, 1);
console.log("Jawaban C");
console.log(newFruits);

// d).
newFruits.splice(2, 3);
console.log("Jawaban D");
console.log(newFruits);

// e).
newFruits.splice(2, 0, "Rambutan", "Bengkuang");
console.log("Jawaban E");
console.log(newFruits);

// f).
newFruits.splice(4, 1, "Nangka");
console.log("Jawaban F");
console.log(newFruits);

// g).
console.log("Jawaban G");
console.log(fruits.concat(sayur));

// h).
console.log("Jawaban H");
console.log(fruits.concat(sayur).reverse());

// i).
let arr = fruits.concat(sayur);
console.log("Jawaban I");
// console.log(arr);


function switchValue(param1, param2, param3) {
    var index = 0;

    for(let i = 0 ; i < arr.length; i++) {
        if (param3 === arr[i]) {
            arr.splice(i, 1, param2);
            index = i;
        }
    
        if (index !== i) {
            if (param2 === arr[i]) {
                arr.splice(i, 1, " ");
            }
        }
    }
}

switchValue("vege", "Tomat", "Jeruk")
console.log(arr);