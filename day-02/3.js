const fs = require('fs')
const data = fs.readFileSync('./data.csv', 'utf8');

let products = data.replace(/[\r\n]/g, " ").split(" ");

for(let i = 0; i < products.length; i++) {
    if(products[i] === "") {
        products.splice(i,1);
    }
}

function filterProduct (param1, param2) {
    return param2.filter((x) => x[0] === param1)
}

console.log(filterProduct("S", products));