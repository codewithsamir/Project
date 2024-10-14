const randomnum = Math.floor(Math.random()* 10 + 1);
console.log(randomnum)

let game = true;

while(game){
    let userinput = prompt("enter guess number");
    let user = Number(userinput)
if(user === randomnum){
    console.log("you are win");
    game = false
}

}