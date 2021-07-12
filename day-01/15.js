function segitiga(n, posisi) {
    if(posisi === "bawah") {
        for(let i = 1; i <= n; i++) {
            for(let j = 0; j < n ; j++) {
                if(j < n - i) {
                    process.stdout.write(" ")
                } else {
                    process.stdout.write("*")
                }
                
            }
            process.stdout.write("\n")
        }
    }
    else if(posisi === "atas") {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n - i; j++) {
                process.stdout.write("*")
            }
            process.stdout.write("\n")
        }
    } else {
        console.log("Input posisi salah");
    }
}

segitiga(5, "atas")