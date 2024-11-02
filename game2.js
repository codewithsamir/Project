const randomnum = Math.floor(Math.random()* 10 + 1);
console.log(randomnum)
const startgame = document.querySelector(".startgame")
const bacgroundgame = document.querySelector(".bacground-game")
const userbtn = document.querySelector(".btn")
const replay = document.querySelector(".replay")
const tryangain = document.querySelector(".try")
const point = document.querySelector('.point')
const userinputbox = document.querySelector(".userinput")
const successbox = document.querySelector(".success")
const failedbox = document.querySelector(".failed")
const failedmessage = document.querySelector(".errormss")
startgame.addEventListener("click",()=>{
bacgroundgame.classList.add("active")
})




userbtn.addEventListener("click",userinputgame)

successbox.addEventListener("click",()=>{
    window.location.reload()
})
failedbox.addEventListener("click",()=>{
    userinputbox.classList.remove("active");
    failedbox.classList.remove("active")
})



function userinputgame(){
    const userinputvalue = document.querySelector(".inputbox").value
    let usernumber = Number(userinputvalue)


    if(usernumber ===  randomnum){
        successbox.classList.add("active")
        userinputbox.classList.add("active")
        userinputvalue = " "

        }
        else{
            userinputbox.classList.add("active");
            failedbox.classList.add("active")
            if(usernumber > randomnum){
             failedmessage.innerText = " your guess number is greater then the random number"
            }
            if(usernumber < randomnum){
             failedmessage.innerText = " your guess number is smaller then the random number"
            }

    }
}
