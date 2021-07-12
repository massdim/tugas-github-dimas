function segitiga(n, posisi) {
    if(posisi === "bawah") {
        for(let i = 0; i < n; i++) {
            // var result = "";
            for(let j = 0; j < i + 1; j++) {
                process.stdout.write("*")
                // result += "*";
            }
            process.stdout.write("\n")
            // console.log(result);
        }
    } else if(posisi === "atas") {
        for(let i = 0; i < n; i++) {
            // var result = "";
            for(let j = 0; j < n; j++) {
                if(j < i) {
                    process.stdout.write(" ")
                    // result += " "
                } else {
                    process.stdout.write("*")
                    // result += "*";
                }
            }
            process.stdout.write("\n")
            // console.log(result);
        }
    } else {
        console.log("Input posisi salah");
    }
}

segitiga(5, "atas")
