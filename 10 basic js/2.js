// find the factorail of a number

function myfunction(){
    let f=1;
    const ans = document.querySelector(".ans")
const uservalue= document.querySelector("#fact").value
    for(let i =1; i<=uservalue; i++){
f *= i;
      
    }
    ans.innerText = f;
}
