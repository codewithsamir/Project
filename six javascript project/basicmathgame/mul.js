
// random number generate for game 

let firstnum = parseInt(Math.floor(Math.random()*10))
let secnum = parseInt(Math.floor(Math.random()*10))




const checkformult = document.querySelector(".check3")







let first = document.querySelector(".first")
let sec = document.querySelector(".sec")
first.innerText = firstnum
sec.innerText = secnum


// this is for addtion game 
checkformult.addEventListener("click",multiplicationgame)


function multiplicationgame(){
    let total = firstnum * secnum;
    let inputvalue = document.querySelector(".mulinput").value
    let newvalue = Number(inputvalue)


    if(newvalue === total){
        alert("it is correct correct anser")
        window.location.reload()
    }else{
        alert("it is incorrect answer")
    } 
}


