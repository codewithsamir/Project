console.log("welcome to game")

const gamestartbutton = document.querySelector(".start-game")
const cover_game = document.querySelector(".cover-game")
const container = document.querySelector(".container")
gamestartbutton.addEventListener("click",()=>{
cover_game.classList.add("active")
container.classList.remove("active")
})
const winningbox = document.querySelector(".winning-box")
const winnerbackground = document.querySelector(".winning-box-background")
const winnerbox = document.querySelector(".winning-box")
const winnerplay = document.querySelector(".winner-play")
const restartgame = document.querySelector(".restart")
const winnername = document.querySelector(".winer-name")

// form validate function 
const firstname = document.querySelector(".firstname")
const secondname = document.querySelector(".secondname")
const firstcolor = document.querySelector(".firstcolor")
const secondcolor = document.querySelector(".secondcolor")
const form = document.querySelector(".form")
const gamebody = document.querySelector(".game-body")
const playerchance = document.querySelector(".playerchance")

restartgame.addEventListener("click",()=>{
  location.reload()
})
function comeafter(){
  winnerplay.classList.add("active")
  winnerbox.classList.remove("active")
}

let r = document.querySelector(":root")

function sendcolorincss(){
  r.style.setProperty("--firstcolor",firstcolor.value)
  r.style.setProperty("--secondcolor",secondcolor.value)
}

form.addEventListener("submit",(e)=>{
  e.preventDefault()
    formvalidate()
    sendcolorincss()
})

const errors = (element, message)=>{
    const inputcontrol = element.parentElement;
    inputcontrol.classList.add("error")
    inputcontrol.classList.remove("success")

    const mssbox = inputcontrol.querySelector(".error")
    mssbox.innerText = message
}
const success = (element)=>{
    const inputcontrol = element.parentElement;
    inputcontrol.classList.remove("error")
    inputcontrol.classList.add("success")

    const mssbox = inputcontrol.querySelector(".error")
    mssbox.innerText =""
}




const formvalidate = ()=>{
  let firstplayer = document.querySelector(".firstplayer")
  let secondplayer = document.querySelector('.secondplayer')
  let color1_box = document.querySelector(".color1")
  let color2_box = document.querySelector(".color2")
let player1 = firstname.value
let player2 = secondname.value
let color1 = firstcolor.value
let color2 = secondcolor.value

if(player1 === ""){
  errors(firstname,"player name is required")
}
else{
    success(firstname)
}
if(player2 === ""){
  errors(secondname,"player name is required")
}
else{
    success(secondname)
}
if(color1=== "#000000" || color1 === "#ffffff"){
  errors(firstcolor,"change color")
}
else{
    success(firstcolor)
}
if(color2=== "#000000" || color2 === "#ffffff"){
  errors(secondcolor,"change color")
}
else{
    success(secondcolor)
}
if(color1 === color2){
    errors(secondcolor,"color must be diffrent")
}

if(player1.length>0 && player2.length>0 && color1 != "#000000" && color2 !="#000000" && color1 != color2){
form.classList.add("active")
gamebody.classList.remove("active")
}

firstplayer.innerText = player1
secondplayer.innerText = player2
color1_box.style.background= color1
color2_box.style.background = color2


playerchance.innerText= `${firstname.value}'s turn`


}





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
        {transform: `translateY(${getxy}px)`,offset: 0},
        {transform: `translateY(0px)`,offset: 0.6},
        {transform: `translateY(${getxy / 20}px)`,offset: 0.8},
        {transform: `translateY(0px)`,offset: 0.95},

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
      winnerbackground.classList.remove("active")
       winnerbox.classList.remove("active")
       winnername.innerText = `game is draw`
       
      
    }
    
    if(playwon(playerturn,coins)){
      winnerbackground.classList.remove("active");
      winnerplay.classList.remove("active");
      setTimeout(comeafter,3000);
     
      
      winnername.innerText =  `\n ${ playerturn === player1 ? firstname.value: secondname.value} won`
        // confirm(`${playerturn === player1 ? "firstplayer": "secondplaye"} won`)
        let audio2 = document.createElement("audio")
audio2.src= "/winning.wav"
winnerbackground.append(audio2)
audio2.play()
        
    }
   

    animation= false
    
    if(playerturn === player1){
        playerturn = player2
        playerchance.innerText= `${secondname.value}'s turn`
    }
    else{
        playerturn = player1
        playerchance.innerText= `${firstname.value}'s turn`
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

