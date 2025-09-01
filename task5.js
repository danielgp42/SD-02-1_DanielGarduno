// Refer to Task 5 in your Instructions to complete this task
import promptSync from 'prompt-sync';
const prompt = promptSync();
export function fizzbuzz(){
  const lineas = prompt("Ingresa el numero de lineas a desarrollar:");
  for (let i = 0; i <=lineas; i++) {
    if (i % 3 ===0 && i % 5 === 0 ){
      console.log("FizzBuzz");  
    }
    else if (i %3 === 0){
      console.log("Fizz");
    }
    else if (i %5 === 0){
      console.log("Buzz");
    }
    else if(i %7 ===0){
      console.log("Woof");   
    }
    else{
      console.log(i);
    }
  }
};

fizzbuzz();