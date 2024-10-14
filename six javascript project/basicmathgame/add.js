
// random number generate for game 

let firstnum = parseInt(Math.floor(Math.random()*10))
let secnum = parseInt(Math.floor(Math.random()*10))


const checkforadd = document.querySelector(".check")










// this is for addtion game 
checkforadd.addEventListener("click",addtiongame)
let first = document.querySelector(".first")
let sec = document.querySelector(".sec")
first.innerText = firstnum
sec.innerText = secnum
function addtiongame(){
    
    let total = firstnum + secnum;
    let inputvalue = document.querySelector(".addinput").value
    let newvalue = Number(inputvalue)


    if(newvalue === total){
        alert("it is correct correct anser")
        window.location.reload()
    }else{
        alert("it is incorrect answer")
    }

}


