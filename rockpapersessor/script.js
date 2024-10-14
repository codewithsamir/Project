const computerselection =Math.random();
console.log(computerselection)
const userselection = prompt("choose Rock paper or sessor ");

const computerwin = ()=>{
    if(computerselection < .33){
        console.log("Rock")
    }
   else if(computerselection <= .66){
        console.log("rock")
    }
}