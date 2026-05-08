// let a = +process.argv[2]
// let b = +process.argv[3]
// let c = +process.argv[4]

// let numbers = process.argv
// let [node,filepath,...numbers] = process.argv
let numbers = process.argv.slice(3)

let command = process.argv[2] 
console.log(command)

// let sum = 0;
// for (let index = 0; index < numbers.length; index++) {
//     const number = numbers[index];
//     sum += +number
// }
if (command === 'sum' || command === 'add') {
    let sum = numbers.reduce((a, b) => a + +b, 0)
    console.log(sum)
}
if (command === 'product' || command === 'multiply') {
    let product = numbers.reduce((a, b) => a * +b, 1)
    console.log(product)
}
if (command === 'divide') {
    if(numbers.length !==2){
        throw new Error("only 2 numbers can be divided");
    }
    let ans = numbers[0] / numbers[1]
    console.log(ans)
}
if (command === 'subtract') {
    if(numbers.length !==2){
        throw new Error("only 2 numbers can be subtracted");
    }
    let ans = numbers[0] - numbers[1]
    console.log(ans)
}
