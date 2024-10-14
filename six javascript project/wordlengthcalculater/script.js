const input = document.querySelector(".box input").value



const btn = document.querySelector(".btn")

btn.addEventListener("click",checklength)

function checklength(){
    const input = document.querySelector(".box input").value
    let inputsize = input.length
    let output = document.querySelector(".show")
    output.innerText =inputsize;
}