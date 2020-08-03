/*
const chorus = "Let's dance!";
let repeat = 5;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
*/

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  } else if(repeat === 8) {
      console.log("*use Autotune*")
  }
  
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
