// Write your code below

const consoleInput = process.argv[2]
const inputNumber = Number(consoleInput)

for (let i = 1; i <= inputNumber; i++) {
    if(Number.isNaN(inputNumber)){
      
    }
    else if (inputNumber < 0 ){
      
    }
    else{
        if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
}

   
   
    


  