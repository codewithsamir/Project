
// random number generate for game 

let firstnum = parseInt(Math.floor(Math.random()*10 + 1))
let secnum = parseInt(Math.floor(Math.random()*10 + 1))



const checkfordiv = document.querySelector(".check4")








// this is for addtion game 
checkfordiv.addEventListener("click",divisiongame)
let first = document.querySelector(".first")
let sec = document.querySelector(".sec")


if(firstnum % 2 === 0){

    first.innerText = firstnum
}
if(firstnum % secnum === 0){

    sec.innerText = secnum
}



function divisiongame(){
    let total = firstnum / secnum;
    let inputvalue = document.querySelector(".divinput").value
    let newvalue = Number(inputvalue)



    if(newvalue === total){
        alert("it is correct correct anser")
        window.location.reload()
    }else{
        alert("it is incorrect answer")
    }

}

