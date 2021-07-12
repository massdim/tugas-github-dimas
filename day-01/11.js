let a = 9
let b = 5;

function swapValue(a,b) {
    a = a + b;
    b = a - b;
    a = a - b;

    console.log("a = " + a);
    console.log("b = " + b);
}

swapValue(a,b)

// Output :
// Before Swap => a=9, b=5
// After Swap => a=5, b=9