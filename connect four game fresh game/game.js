const winningbox = document.querySelector(".winning-box")
const winnerbackground = document.querySelector(".winning-box-background")
const winnerbox = document.querySelector(".winning-box")
const winnerplay = document.querySelector(".winner-play")
const restartgame = document.querySelector(".restart")
const winnername = document.querySelector(".winer_name")

let count = 0;
 const gameboard = document.querySelector(".connect-4-game")
 const cells = document.querySelectorAll(".cell")


 cells.forEach(cell=>{

for(let i = 0 ; i<cells.length; i++){

    cell.innerText = count;
}
count++


 })


let player1 = 1;
let player2 = 2;


 const coins = 
 [
    0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,
 ]


 let playerturn = player1
let hovercolum = -1;
let animation = false;


 cells.forEach((cell,index)=>{

cell.onmouseenter = ()=>{
    // console.log(index % 7)
    onmousehoverincell(index % 7)

}

cell.onclick = ()=>{
    // console.log(index % 7)
    if(!animation){

        onmouseclickincell(index % 7)
    }
}


 })



function playwon(playerturn,coins){
    for(let index = 0 ;index< cells.length;index++){
if(index % 7 < 4 &&
    coins[index]=== playerturn
    && coins[index + 1] === playerturn
    && coins[index + 2] === playerturn
    && coins[index + 3] === playerturn){
        return true
    }
if(index  < 21 &&
    coins[index + 7]=== playerturn
    && coins[index + 14] === playerturn
    && coins[index + 21] === playerturn
    && coins[index + 28] === playerturn){
        return true
    }
if( index < 18 &&
    coins[index + 8]=== playerturn
    && coins[index + 16] === playerturn
    && coins[index + 24] === playerturn
    && coins[index + 32] === playerturn){
        return true
    }
if( index < 21 &&
    coins[index + 6]=== playerturn
    && coins[index + 12] === playerturn
    && coins[index + 18] === playerturn
    && coins[index + 24] === playerturn){
        return true
    }


    }
    return false
}




  function onmouseclickincell(column){
    const row  = coins.filter((_,index)=> index % 7 === column).lastIndexOf(0)

    if(row === -1){
        return
    }
    
    coins[(row * 7)  + column] = playerturn
    console.log((row * 7)  + column)

    let cell = gameboard.children[(row * 7)  + column]
    let coin = document.createElement("div")
coin.className= "coin"
coin.dataset.placed=true
coin.dataset.player = playerturn
cell.appendChild(coin)
let audio = document.createElement("audio")
audio.src= "/gamesound.mp3"
cell.appendChild(audio)
audio.play()


let removecoins = document.querySelector("[data-placed='false']")
let formy = removecoins.getBoundingClientRect().y
let formx = coin.getBoundingClientRect().y
let getxy = formy - formx
 animation = true;
 removecoin()
let animating= coin.animate(
    [
        {transform: `translateY(${getxy}px)`,offset : 0},
        {transform: `translateY(0px)`,offset : 0.6},
        {transform: `translateY(${getxy / 20} px)`,offset : 0.8},
        {transform: `translateY(0px)`,offset : 0.95},

    ]
    ,
    {duration:400,
    easing:"Linear",
iterations:1}
)


animating.addEventListener("finish",gameresultwinordraw)


  }
 function gameresultwinordraw(){
    

    if(!coins.includes(0)){
        confirm("game is draw")
        location.reload()
    }
    
    if(playwon(playerturn,coins)){
        confirm(`${playerturn === player1 ? "firstplayer": "secondplaye"} won`)
        let audio = document.createElement("audio")
audio.src= "/winning.wav"
audio.play()
winningbox.appendChild(audio)
        
    }
   

    animation= false
    
    if(playerturn === player1){
        playerturn = player2
    }
    else{
        playerturn = player1
    }


    hoverupdate()


   
 }



  function hoverupdate(){
    removecoin()
    // console.log(column)
    if(coins[hovercolum] === 0){
let cell = gameboard.children[hovercolum]
let coin = document.createElement("div")
coin.className= "coin"
coin.dataset.placed=false
coin.dataset.player = playerturn
cell.appendChild(coin)
    }
  }



 function onmousehoverincell(column){
hovercolum = column
    hoverupdate()
 }

 function removecoin(){
    let removecoins = document.querySelector("[data-placed='false']")

    if(removecoins){
        removecoins.parentElement.removeChild(removecoins)
    }
 }

