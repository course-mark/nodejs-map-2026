let a = 20
let b = 4

function divide(x, y) {
    if (y === 0) {
        throw new Error("Denominator cannot be zero")
    }
    return x / y
}

let ans;

b = 0

try {
    ans = divide(a, b)
} catch (error) {
    console.log(`Something Went Wrong while dividing ${a} and ${b}`)
}
console.log("The answer is ",ans)