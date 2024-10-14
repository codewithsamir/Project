const btn = document.getElementById("btn")
const result = document.querySelector(".result")


btn.addEventListener("click",fibonacci)

function fibonacci(){
    var numvalue = document.getElementById("input").value
let a=0,a2=1,tsum;
let numarr = [];

for(let i=2 ; i<numvalue; i++){
    tsum= a + a2;
    a=a2;
    a2=tsum;
    
    numarr.push(tsum )
    result.innerText ="0,1, " + numarr  ;
    
}



}