//Random number from 1- 10
const numbertoguess = Math.floor(Math.random() * 10) + 1 ;
// this is for show answer
const answer = document.querySelector(".result")
// This variable is used to determine if the app should continues prompting the user for input 

let foundcorrectnumber = false

while(!foundcorrectnumber){
  //get user input
  let guess = prompt('guess a number from 1 to 10 : ')

  //convert the string input  to a number 
  guess = Number(guess)
  
  if(guess === numbertoguess){
    answer.innerText = `${guess} is matched ${numbertoguess} Congrats, you got it! Happy new year 2023`
    foundcorrectnumber = true;
  }
  else{
console.log('sorry , guess again!');
  }
}