// Write your code below

//    1 
//   21 
//  321 
// 4321 
//54321 


const squareInput = process.argv[2]
const square = Number(squareInput)

if (Number.isNaN(square)) {
    console.log("Invalid input")
} else if (square < 0) {
    console.log("Invalid input: negative number")
} else {
    for (let i = 0; i < square; i++) {
        let sum = "";
        const leftSpace = square - (i + 1);
        sum += " ".repeat(leftSpace);
        for (let j = i + 1; j >= 1; j--) {
            sum += j;
        }
        console.log(sum);
    }
}

