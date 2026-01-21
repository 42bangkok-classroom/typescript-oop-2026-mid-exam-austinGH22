// Write your code below

//    1 
//   21 
//  321 
// 4321 
//54321 


const squareInput = process.argv[2]
const square = Number(squareInput)


if(Number.isNaN(square)){
}
else if (square < 0 ){
}
else{
    for (let i=0 ; i<square ; i++) {
        let sum = "" ;
        const leftspcae = (square-1) 
        sum += " ".repeat(leftspcae)

        // const rightSpace = i+1
        // for (let j=0 ; j<rightSpace)
        // console.log(sum)
}}

