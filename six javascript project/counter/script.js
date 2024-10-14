const show = document.querySelector(".show")
const increase = document.querySelector(".increase")
const descrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
let count = 0;

increase.addEventListener("click",increasevalue)
descrease.addEventListener("click",decreasevalue)
reset.addEventListener("click",resetbtn)






function increasevalue(){
    count++
    show.innerText = count
}
function decreasevalue(){
    count--
    if(count<0){
        count = 0;
    }
    show.innerText = count
}
function resetbtn(){
    count = 0;
    show.innerText = count
}