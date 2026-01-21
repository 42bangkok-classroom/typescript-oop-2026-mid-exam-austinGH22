// Write your code below
import { parseEnv } from "util";

const score1 : string = process.argv[2];
const grade = Number(score1);
if(score1 === ""){
    console.log(`Invalid input`)
}
else if(Number.isNaN(grade)){
  console.log("Invalid input");
}
else if (grade < 0 || grade > 100){
  console.log("Invalid input");
}
else
  if (grade >= 80){
  console.log("Grade is A");
}
else if (grade >= 70 ){
  console.log("Grade is B");
}
else if (grade >= 60){
  console.log("Grade is C");
}
else if (grade >= 50){
  console.log("Grade is D");
}
else if (grade >= 0){
  console.log("Grade is F");
}



