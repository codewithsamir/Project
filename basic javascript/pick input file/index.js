document.getElementById("takefile").addEventListener("click",takefile)

let fileinput = document.querySelector("input");

// fileinput.click();
fileinput.addEventListener("change",showanother)

function showanother(e){
let newfile = e.target;
 
let fileinfo = newfile.files;
console.log(fileinfo)
}
function takefile(e){
    e.preventDefault();
    let fileinput = document.querySelector("input");

    fileinput.click();
    

}