function konversiData(namaFile) {
    const fs = require('fs')
    const data = fs.readFileSync(namaFile, 'utf8');

    let products = data.replace(/[\r\n]/g, " ").split(" ");

    for(let i = 0; i < products.length; i++) {
        if(products[i] === "") {
            products.splice(i,1);
        }
    }

    console.log(products);
}

konversiData('./data.csv');