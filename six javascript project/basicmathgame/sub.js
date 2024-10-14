// random number generate for game 

let firstnum2 = parseInt(Math.floor(Math.random()*10))
let secnum2 = parseInt(Math.floor(Math.random()*10))



const checkforsub = document.querySelector(".check2")
// this is for substraction game 
checkforsub.addEventListener("click",subtractiongame)
let first2 = document.querySelector(".first2")
let sec2 = document.querySelector(".sec2")
if(firstnum2 < secnum2){
    first2.innerText = secnum2
sec2.innerText = firstnum2
}
else if(firstnum2 > secnum2){
    first2.innerText = firstnum2
sec2.innerText = secnum2
}

function subtractiongame(){

    let total = firstnum2 - secnum2;
    let inputvalue = document.querySelector(".subinput").value
    let newvalue = Number(inputvalue)


    if(newvalue === total){
        alert("it is correct correct anser")
        window.location.reload()
    }else{
        alert("it is incorrect answer")
    }
}
