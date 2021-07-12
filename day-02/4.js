const fs = require('fs')
const data = fs.readFileSync('./data.csv', 'utf8');

let products = data.replace(/[\r\n]/g, " ").split(" ");

for(let i = 0; i < products.length; i++) {
    if(products[i] === "") {
        products.splice(i,1);
    }
}

function filterProduct (arr) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i < chars.length; i++) {
        console.log("=== " + chars[i] + " ===");

        let filteredProducts = arr.filter((x) => x[0] === chars[i]);
        for(let j = 0; j < filteredProducts.length; j++) {
            console.log(filteredProducts[j]);
        }

        console.log("");
        console.log("");
    }
}

filterProduct(products)

